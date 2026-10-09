#!/usr/bin/env node
/* ============================================================================
   TELE·TRACK data pipeline — runs SERVER-SIDE (GitHub Actions / any runner).

   Why server-side: a static page can only call APIs that send
   `Access-Control-Allow-Origin`. Verified 2026-10-09 from a clean network:
     · federalregister.gov .......... CORS *        -> usable in the browser
     · api.crossref.org ............. CORS *        -> usable in the browser
     · api.gdeltproject.org ......... NO CORS + 1 req / 5 s -> unusable
     · Google News RSS .............. no CORS       -> server-side only
     · DHS / BIS / CBP own sites .... HTML only, no API, no CORS
     · public CORS proxies .......... dead / rate-limited / now key-gated
   So commercial media cannot be fetched from the page at all. This script
   fetches everything where CORS does not apply, normalises it into
   data/news.json + data/papers.json, and the page reads those same-origin:
   no proxy, no API key, no CORS.

   No single source may fail the run — each is probed independently, reported in
   data/status.json, and a circuit breaker stops hammering a host that is
   unreachable so a broken source costs seconds, not minutes.
   ============================================================================ */
'use strict';
const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'data');
const UA = 'tele-track-data/1.0 (+https://github.com/gxr-163/tele-track)';
const REQ_TIMEOUT = 20000;
const TODAY = new Date();

const report = [];
function note(src, ok, detail) {
  report.push({ src, ok, detail });
  console.log((ok ? '  OK   ' : '  FAIL ') + String(src).padEnd(36) + detail);
}

const sleep = ms => new Promise(r => setTimeout(r, ms));
const clean = s => String(s == null ? '' : s).replace(/<[^>]*>/g, ' ').replace(/&[a-z]+;/gi, ' ').replace(/\s+/g, ' ').trim();

/* Circuit breaker: after 3 consecutive connection failures to the same host,
   stop trying it for the rest of the run. A blocked/offline host then costs a
   few seconds instead of one timeout per URL. */
const hostFails = {};
function hostBlocked(url) {
  try { return (hostFails[new URL(url).hostname] || 0) >= 3; } catch (e) { return false; }
}
function hostResult(url, ok) {
  try {
    const h = new URL(url).hostname;
    if (ok) { hostFails[h] = 0; } else { hostFails[h] = (hostFails[h] || 0) + 1; }
  } catch (e) { }
}

async function fetchOnce(url, accept) {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), REQ_TIMEOUT);
  try {
    const r = await fetch(url, { signal: ctl.signal, headers: { 'User-Agent': UA, Accept: accept || '*/*' } });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return await r.text();
  } catch (e) {
    throw new Error(e.name === 'AbortError' ? 'timeout' : e.message);
  } finally { clearTimeout(timer); }
}
async function fetchRaw(url, accept) {
  if (hostBlocked(url)) throw new Error('host blocked (circuit breaker)');
  let last;
  for (let i = 0; i < 2; i++) {                  /* one retry — CDN/edge hiccups are common */
    try {
      const body = await fetchOnce(url, accept);
      hostResult(url, true);
      return body;
    } catch (e) { last = e; if (i === 0) await sleep(1200); }
  }
  hostResult(url, false);
  throw last;
}
const getJSON = async url => JSON.parse(await fetchRaw(url, 'application/json'));
const getText = url => fetchRaw(url, 'text/xml,application/rss+xml,text/html');

/* ================================================================ 1. US GOV
   Every gov-watch source publishes through the Federal Register, so one API
   covers the whole block with authoritative documents and true publication
   dates. Retrieval is topic-driven per agency: an agency-only query mostly
   returns administrative noise ("Agency Information Collection Activities"),
   which is why the earlier agency-only pass surfaced things like student-visa
   fee notices on a supply-chain feed. */
const AGENCIES = [
  { src: 'DHS', slug: 'homeland-security-department', terms: ['forced labor', 'supply chain', 'entity list', 'critical infrastructure', 'unmanned aircraft'] },
  { src: 'BIS', slug: 'industry-and-security-bureau', terms: ['entity list', 'export controls', 'semiconductors', 'advanced computing', 'license exception'] },
  { src: 'CBP', slug: 'u-s-customs-and-border-protection', terms: ['forced labor', 'de minimis', 'import', 'trade', 'drawback'] },
  { src: 'OFAC', slug: 'foreign-assets-control-office', terms: ['sanctions', 'designation', 'blocked property', 'general license'] },
  { src: 'FCC', slug: 'federal-communications-commission', terms: ['equipment authorization', 'covered list', 'spectrum', 'undersea cable', 'wireless'] },
  { src: 'DOE', slug: 'energy-department', terms: ['battery', 'energy storage', 'grid', 'data center', 'transformer'] },
  { src: 'USTR', slug: 'trade-representative-office-of-united-states', terms: ['tariff', 'section 301', 'trade agreement', 'duty'] },
  { src: 'Commerce', slug: 'commerce-department', terms: ['semiconductor', 'antidumping', 'countervailing duty', 'export', 'chips'] },
];
const SRC_BY_SLUG = {
  'homeland-security-department': 'DHS', 'industry-and-security-bureau': 'BIS',
  'u-s-customs-and-border-protection': 'CBP', 'foreign-assets-control-office': 'OFAC',
  'federal-communications-commission': 'FCC', 'energy-department': 'DOE',
  'trade-representative-office-of-united-states': 'USTR', 'commerce-department': 'Commerce',
};
/* Administrative/ceremonial notices carry no policy signal for this dashboard.
   "Combined Notice Of Filings" and the like are genuine documents but pure
   docket housekeeping, so they are treated as noise too. */
const NOISE = /agency information collection|information collection (activities|being|request)|advisory committee|paperwork reduction|privacy act|meeting of|notice of meeting|public meeting|charter|senior executive service|practical training|airworthiness|drawbridge|safety zone|special local regulation|fisheries|state implementation plan|air plan approval|personnel|vacanc|nomination|combined notice of filings|notice of filings?;|^\s*notice of filing\b/i;

const FR_FIELDS = ['title', 'abstract', 'html_url', 'publication_date', 'signing_date', 'document_number', 'executive_order_number', 'type', 'agencies']
  .map(f => 'fields%5B%5D=' + f).join('&');

function sectorOf(text) {
  const s = text.toLowerCase();
  if (/lithium|battery|batteries|cathode|anode|electrolyte|energy storage|sodium-ion/.test(s)) return 'lithium';
  if (/data cent|data-cent|datacenter|compute|semiconductor|advanced computing|hbm|ai chip|artificial intelligence/.test(s)) return 'aidc';
  if (/telecom|spectrum|wireless|broadband|optical|undersea cable|radio frequenc/.test(s)) return 'telecom';
  if (/grid|electric|energy|power|transformer|renewable|solar|wind|nuclear/.test(s)) return 'energy';
  return 'pfe';
}

function mapDoc(d, src, t) {
  const type = (d.type || '').trim();
  const no = d.document_number || '';
  const abstract = clean(d.abstract);
  const agencies = (d.agencies || []).map(a => a.raw_name || a.name).filter(Boolean).slice(0, 2).join(' / ');
  return {
    cn: 'USA', src, t,
    url: d.html_url || '', date: (d.publication_date || '') + 'T00:00:00',
    title: { zh: src + ' · ' + clean(d.title), en: src + ' · ' + clean(d.title) },
    sum: {
      zh: abstract || ((type || '公告') + ' · 文号 ' + no + (agencies ? ' · ' + agencies : '') + ' · 联邦公报公示'),
      en: abstract || ((type || 'Notice') + ' · No. ' + no + (agencies ? ' · ' + agencies : '') + ' · Federal Register'),
    },
    tags: [type.slice(0, 22), no ? ('FR ' + no) : ''].filter(Boolean),
    origin: 'fr',
  };
}

async function fetchGov() {
  const byUrl = new Map();
  const add = it => { if (it.url && !byUrl.has(it.url)) byUrl.set(it.url, it); };

  /* 1a. presidential documents */
  for (const [pt, zh, en] of [['executive_order', '行政命令', 'Executive Order'], ['proclamation', '总统公告', 'Proclamation'],
  ['memorandum', '总统备忘录', 'Presidential Memorandum'], ['determination', '总统裁定', 'Presidential Determination']]) {
    const url = 'https://www.federalregister.gov/api/v1/documents.json?conditions%5Bpresidential_document_type%5D%5B%5D='
      + pt + '&per_page=8&order=newest&' + FR_FIELDS;
    try {
      const j = await getJSON(url);
      let n = 0;
      (j.results || []).forEach(d => {
        const num = d.executive_order_number || '';
        add({
          cn: 'USA', src: 'Presidential Docs', t: 'pfe',
          url: d.html_url || '', date: (d.publication_date || '') + 'T00:00:00',
          title: {
            zh: (pt === 'executive_order' ? ('行政命令 EO ' + num + '：') : zh + '：') + clean(d.title),
            en: (pt === 'executive_order' ? ('Executive Order ' + num + ': ') : en + ': ') + clean(d.title),
          },
          sum: {
            zh: clean(d.abstract) || ('联邦公报总统文件 · 文号 ' + (d.document_number || '-')),
            en: clean(d.abstract) || ('Federal Register presidential document · No. ' + (d.document_number || '-')),
          },
          tags: [d.document_number ? ('FR ' + d.document_number) : '', pt === 'executive_order' ? ('EO ' + num) : en].filter(Boolean),
          origin: 'fr',
        });
        n++;
      });
      note('FR presidential/' + pt, n > 0, n + ' docs');
    } catch (e) { note('FR presidential/' + pt, false, e.message); }
    await sleep(220);
  }

  /* 1b. per-agency topic retrieval (agency filter + full-text term) */
  for (const ag of AGENCIES) {
    let hits = 0, calls = 0;
    for (const term of ag.terms) {
      const url = 'https://www.federalregister.gov/api/v1/documents.json?conditions%5Bagencies%5D%5B%5D=' + ag.slug
        + '&conditions%5Bterm%5D=' + encodeURIComponent(term) + '&per_page=6&order=newest&' + FR_FIELDS;
      try {
        const j = await getJSON(url);
        calls++;
        (j.results || []).forEach(d => {
          const text = clean(d.title) + ' ' + clean(d.abstract);
          if (NOISE.test(text)) return;
          if (byUrl.has(d.html_url)) return;
          add(mapDoc(d, ag.src, sectorOf(text)));
          hits++;
        });
      } catch (e) { /* a single term failing must not kill the agency */ }
      await sleep(220);
    }
    note('FR ' + ag.src, hits > 0, hits + ' relevant docs from ' + calls + '/' + ag.terms.length + ' term queries');
  }

  /* 1c. cross-agency topic sweep — catches rules filed by an agency we do not
         track directly, and attributes them to whoever actually published. */
  for (const [term, _label] of [['lithium battery', 'lithium'], ['data center energy efficiency', 'aidc'],
  ['semiconductor export controls', 'aidc'], ['telecommunications equipment', 'telecom'], ['energy storage', 'energy']]) {
    const url = 'https://www.federalregister.gov/api/v1/documents.json?conditions%5Bterm%5D=' + encodeURIComponent(term)
      + '&per_page=8&order=newest&' + FR_FIELDS;
    try {
      const j = await getJSON(url);
      let n = 0;
      (j.results || []).forEach(d => {
        const text = clean(d.title) + ' ' + clean(d.abstract);
        if (NOISE.test(text)) return;
        const slug = ((d.agencies || [])[0] || {}).slug || '';
        const src = SRC_BY_SLUG[slug] || 'Federal Register';
        if (byUrl.has(d.html_url)) return;
        add(mapDoc(d, src, sectorOf(text)));
        n++;
      });
      note('FR topic/' + term, n > 0, n + ' docs');
    } catch (e) { note('FR topic/' + term, false, e.message); }
    await sleep(220);
  }

  return [...byUrl.values()];
}

/* ================================================================ 2. MEDIA
   No CORS-open news API exists, so media is fetched here where CORS does not
   apply. Google News RSS is the only source with real coverage in every target
   language, so it carries the per-country/sector load; a set of sector feeds is
   added for depth and acts as the fallback if Google News is unreachable. */
const LOCALE = {
  'China': ['zh-CN', 'CN', 'CN:zh-Hans'], 'USA': ['en-US', 'US', 'US:en'], 'Germany': ['de', 'DE', 'DE:de'],
  'Japan': ['ja', 'JP', 'JP:ja'], 'South Korea': ['ko', 'KR', 'KR:ko'], 'Australia': ['en-AU', 'AU', 'AU:en'],
  'UK': ['en-GB', 'GB', 'GB:en'], 'France': ['fr', 'FR', 'FR:fr'], 'Netherlands': ['nl', 'NL', 'NL:nl'],
  'Sweden': ['sv', 'SE', 'SE:sv'], 'Switzerland': ['de', 'CH', 'CH:de'],
};
const QUERY = {
  lithium: { 'China': '锂电池 储能', 'USA': 'lithium battery energy storage', 'Germany': 'Lithiumbatterie Energiespeicher', 'Japan': 'リチウム電池 蓄電池', 'South Korea': '리튬 배터리', 'Australia': 'lithium battery mining', 'UK': 'lithium battery storage', 'France': 'batterie lithium stockage', 'Netherlands': 'lithium batterij', 'Sweden': 'litiumbatteri', 'Switzerland': 'Batterie Energiespeicher' },
  aidc: { 'China': '数据中心 算力', 'USA': 'data center AI compute', 'Germany': 'Rechenzentrum Rechenleistung', 'Japan': 'データセンター 半導体', 'South Korea': '데이터센터 반도체', 'Australia': 'data centre', 'UK': 'data centre AI', 'France': 'centre de données', 'Netherlands': 'datacenter', 'Sweden': 'datacenter', 'Switzerland': 'Rechenzentrum' },
  telecom: { 'China': '5G 光模块 通信设备', 'USA': '5G telecom optical module', 'Germany': 'Telekommunikation 5G', 'Japan': '5G 通信 光', 'South Korea': '5G 통신', 'Australia': '5G telecommunications', 'UK': '5G telecoms', 'France': 'télécoms 5G', 'Netherlands': 'telecom 5G', 'Sweden': 'telekom 5G', 'Switzerland': 'Telekommunikation 5G' },
  energy: { 'China': '储能 电网 新能源', 'USA': 'energy storage power grid', 'Germany': 'Energiespeicher Stromnetz', 'Japan': '蓄電池 電力網', 'South Korea': '에너지저장 전력망', 'Australia': 'energy storage grid', 'UK': 'energy storage grid', 'France': 'stockage énergie réseau', 'Netherlands': 'energieopslag net', 'Sweden': 'energilagring elnät', 'Switzerland': 'Energiespeicher Netz' },
  trade: { 'China': '出口管制 关税', 'USA': 'export control tariff', 'Germany': 'Exportkontrolle Zoll', 'Japan': '輸出管理 関税', 'South Korea': '수출통제 관세', 'Australia': 'export trade tariff', 'UK': 'export control trade', 'France': 'contrôle exportations douanes', 'Netherlands': 'exportcontrole', 'Sweden': 'exportkontroll', 'Switzerland': 'Exportkontrolle Handel' },
};

function parseRss(xml, cn, sector) {
  const out = [];
  for (const b of xml.split(/<item[\s>]/).slice(1)) {
    const pick = re => { const m = b.match(re); return m ? clean(m[1].replace(/<!\[CDATA\[|\]\]>/g, '')) : ''; };
    let title = pick(/<title>([\s\S]*?)<\/title>/);
    const link = pick(/<link>([\s\S]*?)<\/link>/) || (b.match(/<link[^>]*href="([^"]+)"/) || [])[1] || '';
    const date = pick(/<pubDate>([\s\S]*?)<\/pubDate>/) || pick(/<published>([\s\S]*?)<\/published>/) || pick(/<updated>([\s\S]*?)<\/updated>/);
    const desc = pick(/<description>([\s\S]*?)<\/description>/) || pick(/<summary>([\s\S]*?)<\/summary>/);
    const outlet = pick(/<source[^>]*>([\s\S]*?)<\/source>/);
    if (!title || !link) continue;
    if (outlet && title.endsWith(' - ' + outlet)) title = title.slice(0, -(outlet.length + 3));
    const d = date ? new Date(date) : null;
    if (!d || isNaN(d.getTime())) continue;
    let host = '';
    try { host = new URL(link).hostname.replace(/^www\./, ''); } catch (e) { }
    const src = outlet || host || 'media';
    out.push({
      cn, src, t: sector, url: link, date: d.toISOString(),
      title: { zh: title, en: title },
      sum: {
        zh: clean(desc).slice(0, 240) || (src + ' · 实时抓取，点击阅读原文'),
        en: clean(desc).slice(0, 240) || (src + ' · live fetch, open the original'),
      },
      tags: [src, 'LIVE'].filter(Boolean).slice(0, 3),
      origin: 'rss',
    });
  }
  return out;
}

async function fetchMedia() {
  const byUrl = new Map();
  const addAll = arr => arr.forEach(x => { if (x.url && !byUrl.has(x.url)) byUrl.set(x.url, x); });
  let gnewsOk = 0, gnewsTried = 0;

  for (const cn of Object.keys(LOCALE)) {
    const [hl, gl, ceid] = LOCALE[cn];
    for (const sector of Object.keys(QUERY)) {
      const q = QUERY[sector][cn];
      if (!q) continue;
      if (hostBlocked('https://news.google.com/rss/search')) continue;   /* breaker open — stop trying */
      gnewsTried++;
      const url = 'https://news.google.com/rss/search?q=' + encodeURIComponent(q) + '&hl=' + hl + '&gl=' + gl + '&ceid=' + ceid;
      try {
        const got = parseRss(await getText(url), cn, sector).sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
        if (got.length) { addAll(got); gnewsOk++; }
      } catch (e) {
        if (gnewsTried <= 2) note('gnews/' + cn + '/' + sector, false, e.message);
      }
      await sleep(180);
    }
  }
  note('gnews overall', gnewsOk > 0, gnewsOk + '/' + gnewsTried + ' queries returned items');

  /* Sector feeds — every one of these was probed and returns real items.
     Each feed is attributed to the publishing outlet's home country, so an item
     always carries a true country flag (a German publisher's global title files
     under Germany, a US title under USA, and so on). These feeds are the
     backbone: they carry all 10 countries even when Google News is unreachable. */
  const DIRECT = [
    /* China */
    ['China', 'aidc', 'https://www.infoq.cn/feed'],
    ['China', 'telecom', 'https://www.ithome.com/rss/'],
    ['China', 'aidc', 'https://www.tmtpost.com/rss.xml'],
    ['China', 'aidc', 'https://www.leiphone.com/feed'],
    /* Japan */
    ['Japan', 'telecom', 'https://rss.itmedia.co.jp/rss/2.0/news_bursts.xml'],
    ['Japan', 'aidc', 'https://rss.itmedia.co.jp/rss/2.0/business.xml'],
    ['Japan', 'energy', 'https://rss.itmedia.co.jp/rss/2.0/smartjapan.xml'],
    /* South Korea */
    ['South Korea', 'aidc', 'https://www.thelec.kr/rss/allArticle.xml'],
    ['South Korea', 'energy', 'https://www.yna.co.kr/rss/news.xml'],
    /* Germany */
    ['Germany', 'aidc', 'https://rss.golem.de/rss.php?feed=RSS2.0'],
    ['Germany', 'lithium', 'https://www.pv-magazine.de/feed/'],
    ['Germany', 'energy', 'https://www.cleanenergywire.org/rss.xml'],
    ['Germany', 'lithium', 'https://www.pv-magazine.com/feed/'],
    /* France */
    ['France', 'energy', 'https://www.actu-environnement.com/rss/'],
    ['France', 'aidc', 'https://www.journaldunet.com/rss/'],
    ['France', 'trade', 'https://www.usinenouvelle.com/rss/'],
    ['France', 'energy', 'https://www.connaissancedesenergies.org/rss.xml'],
    /* Netherlands */
    ['Netherlands', 'aidc', 'https://tweakers.net/feeds/nieuws.xml'],
    ['Netherlands', 'aidc', 'https://nltimes.nl/rss.xml'],
    ['Netherlands', 'trade', 'https://www.emerce.nl/rss'],
    /* Sweden */
    ['Sweden', 'energy', 'https://www.svt.se/nyheter/rss.xml'],
    ['Sweden', 'aidc', 'https://computersweden.se/rss'],
    /* Switzerland */
    ['Switzerland', 'trade', 'https://www.moneycab.com/feed/'],
    /* UK */
    ['UK', 'aidc', 'https://businesscloud.co.uk/feed/'],
    ['UK', 'trade', 'https://feeds.skynews.com/feeds/rss/business.xml'],
    ['UK', 'energy', 'https://www.energylivenews.com/feed/'],
    /* Australia */
    ['Australia', 'lithium', 'https://thedriven.io/feed/'],
    ['Australia', 'energy', 'https://reneweconomy.com.au/feed/'],
    ['Australia', 'lithium', 'https://www.pv-magazine-australia.com/feed/'],
    /* USA */
    ['USA', 'lithium', 'https://electrek.co/feed/'],
    ['USA', 'energy', 'https://www.utilitydive.com/feeds/news/'],
    ['USA', 'telecom', 'https://spectrum.ieee.org/feeds/feed.rss'],
    ['USA', 'telecom', 'https://www.rcrwireless.com/feed'],
    ['USA', 'aidc', 'https://feeds.arstechnica.com/arstechnica/technology-lab'],
  ];
  for (const [cn, sector, url] of DIRECT) {
    try {
      const got = parseRss(await getText(url), cn, sector).sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4);
      if (got.length) addAll(got);
      note('feed/' + new URL(url).hostname, got.length > 0, got.length + ' items');
    } catch (e) { note('feed/' + new URL(url).hostname, false, e.message); }
    await sleep(180);
  }
  return [...byUrl.values()];
}

/* =============================================================== 3. PAPERS
   Crossref gives real journal, authors, publication date, citation count and
   DOI. Restricted to an ISSN whitelist of top venues so the section cannot fill
   with low-quality journals. */
const JOURNALS = [
  { j: 'nature', jname: 'Nature Energy', issn: '2058-7546' },
  { j: 'nature', jname: 'Nature Sustainability', issn: '2398-9629' },
  { j: 'science', jname: 'Science', issn: '0036-8075' },
  { j: 'natcom', jname: 'Nature Communications', issn: '2041-1723' },
  { j: 'joule', jname: 'Joule', issn: '2542-4351' },
  { j: 'ees', jname: 'Energy Storage Materials', issn: '2405-8297' },
  { j: 'ees', jname: 'Cell Reports Physical Science', issn: '2666-3864' },
  { j: 'advmat', jname: 'Advanced Materials', issn: '0935-9648' },
  { j: 'advmat', jname: 'Advanced Energy Materials', issn: '1614-6832' },
  { j: 'applied', jname: 'Applied Energy', issn: '0306-2619' },
  { j: 'applied', jname: 'Nano Energy', issn: '2211-2855' },
  { j: 'ieee', jname: 'IEEE Trans. Power Systems', issn: '0885-8950' },
  { j: 'ieee', jname: 'IEEE Trans. Smart Grid', issn: '1949-3053' },
  { j: 'ieee', jname: 'IEEE Trans. Industrial Informatics', issn: '1551-3203' },
];
/* Domain-specific terms only. Loose words (carbon, network, cluster, computing,
   storage, "energy" alone) pulled a marine-carbon-sink paper into "energy" and a
   catalysis paper into "aidc" via "cluster". Multidisciplinary journals publish
   everything, so the bar has to be a term that really implies the topic. */
const TOPIC_RE = [
  ['lithium', /\blithium\b|li-ion|li ion|\bbatter(y|ies)\b|cathode|anode|electrolyte|solid[- ]state batter|sodium[- ]ion|intercalation|state of charge|dendrite/i],
  ['aidc', /data cent|data-cent|datacenter|data centre|data-center|thermal manage|liquid cool|immersion cool\w*|server rack|\bHBM\b|\bGPU\b|accelerator\b|machine[- ]learning|deep[- ]learning|large language model|inference (engine|serv|latency|throughput)|neuromorphic|\bPUE\b|rack[- ]scale/i],
  ['telecom', /telecom|wireless|mobile network|\b5G\b|\b6G\b|radio access|baseband|\bspectrum\b|optical (module|transceiv|fiber|fibre|network|interconnect)|photonic (interconnect|integrat|chip)|\bantenna|MIMO|wavelength[- ]division|fiber[- ]optic|fibre[- ]optic/i],
  ['energy', /power grid|electrical grid|smart grid|renewable (energy|generation)|photovoltaic|solar (cell|power|pv)|wind (power|turbine|farm)|hydrogen (storage|production|electroly)|energy storage|grid[- ]scale|power system|electricity market|transformer\b|electrification|demand response/i],
];
/* Return null when the title is on none of this dashboard's topics.
   Nature Communications and Science publish everything, so a journal-only filter
   let a tuberculosis-structure paper onto a lithium/AIDC/telecom dashboard.
   A null here means "drop it" — only on-topic work is kept. */
const topicOf = t => { const m = TOPIC_RE.find(x => x[1].test(t)); return m ? m[0] : null; };
const posix = ms => new Date(ms).toISOString().slice(0, 10);

async function fetchPapers() {
  const papers = [];
  const seen = new Set();
  const from = posix(TODAY.getTime() - 150 * 864e5);
  for (const jn of JOURNALS) {
    try {
      /* rows=40, not 8: some Elsevier titles index their *forthcoming* issue first,
         so sorting desc and taking the top 8 can yield only future-dated records
         (Applied Energy's newest rows were 2027-01), which the future guard then
         drops and leaves the journal empty. `until-pub-date` excludes
         forthcoming issues server-side, so desc really means newest-published. */
      const url = 'https://api.crossref.org/works?filter=issn:' + jn.issn + ',from-pub-date:' + from
        + ',until-pub-date:' + posix(TODAY.getTime()) + ',type:journal-article'
        + '&rows=100&sort=published&order=desc&select=DOI,title,container-title,author,published,is-referenced-by-count,URL';
      const j = await getJSON(url);
      let kept = 0, scanned = 0;
      for (const w of (j.message && j.message.items) || []) {
        const doi = w.DOI, title = clean((w.title || [])[0]);
        if (!doi || !title || seen.has(doi)) continue;
        const t = topicOf(title);
        if (!t) continue;                              /* not one of our four topics */
        const parts = ((w.published || {})['date-parts'] || [[]])[0];
        if (!parts.length) continue;
        const date = parts.map((x, i) => i === 0 ? String(x) : String(x).padStart(2, '0')).join('-');
        if (new Date(date + 'T00:00:00') > TODAY) continue;  /* never future-dated */
        seen.add(doi);
        const authors = (w.author || []).map(a => [a.given, a.family].filter(Boolean).join(' ')).filter(Boolean);
        papers.push({
          j: jn.j, jname: jn.jname, t,
          title: { zh: title, en: title },   /* the published title — shown as-is, not paraphrased */
          auth: authors.length > 3 ? (authors.slice(0, 3).join(', ') + ' et al.') : (authors.join(', ') || '—'),
          org: clean((w['container-title'] || [])[0]) || jn.jname,
          cites: w['is-referenced-by-count'] || 0,
          doi, url: 'https://doi.org/' + doi, date,
        });
        kept++; scanned++;
        if (kept >= 6) break;                          /* enough from this venue */
      }
      note('crossref/' + jn.jname, kept > 0, kept + ' on-topic papers');
    } catch (e) { note('crossref/' + jn.jname, false, e.message); }
    await sleep(350);
  }
  papers.sort((a, b) => new Date(b.date) - new Date(a.date));
  const perJournal = {}, capped = [];
  for (const p of papers) {                    /* cap per venue so one journal cannot dominate */
    perJournal[p.jname] = (perJournal[p.jname] || 0) + 1;
    if (perJournal[p.jname] <= 5) capped.push(p);
  }
  return capped.slice(0, 40);
}

/* =================================================================== main */
/* Keep the committed feed navigable: a raw run returns 200+ items because each
   gov agency and every feed reports its own backlog. Cap per source and per
   country, newest first, so the file stays a curated feed rather than a dump. */
function capFeed(items, perSource, perCountry) {
  const byDate = (a, b) => new Date(b.date) - new Date(a.date);
  const srcCount = new Map(), cnCount = new Map(), keep = [];
  for (const it of items.slice().sort(byDate)) {
    const sk = it.cn + '|' + it.src, ck = it.cn;
    const s = srcCount.get(sk) || 0, c = cnCount.get(ck) || 0;
    if (s >= perSource || c >= perCountry) continue;
    srcCount.set(sk, s + 1); cnCount.set(ck, c + 1);
    keep.push(it);
  }
  return keep;
}

(async () => {
  const only = (process.argv.find(a => a.startsWith('--only=')) || '').slice(7).split(',').filter(Boolean);
  const want = k => !only.length || only.indexOf(k) >= 0;
  console.log('TELE·TRACK refresh — ' + new Date().toISOString() + (only.length ? '  [only: ' + only.join(',') + ']' : ''));
  fs.mkdirSync(OUT_DIR, { recursive: true });

  let gov = [], media = [], papers = [];
  if (want('gov')) { console.log('\n[1/3] US government documents (Federal Register API)'); try { gov = await fetchGov(); } catch (e) { note('gov block', false, e.message); } }
  if (want('media')) { console.log('\n[2/3] Industry media (RSS, server-side)'); try { media = await fetchMedia(); } catch (e) { note('media block', false, e.message); } }
  if (want('papers')) { console.log('\n[3/3] Academic papers (Crossref)'); try { papers = await fetchPapers(); } catch (e) { note('papers block', false, e.message); } }

  /* never emit a future timestamp: the page's range filter removes anything
     dated after "now" from every window, so such an item would be invisible */
  const now = Date.now();
  const noFuture = a => a.filter(x => { const t = new Date(x.date).getTime(); return !isNaN(t) && t <= now; });
  const govRaw = noFuture(gov).length, mediaRaw = noFuture(media).length;
  gov = capFeed(noFuture(gov), 6, 60);
  media = capFeed(noFuture(media), 3, 14);

  /* reuse the previous file for blocks skipped by --only so a partial local run
     never wipes good data */
  const prev = f => { try { return JSON.parse(fs.readFileSync(path.join(OUT_DIR, f), 'utf8')); } catch (e) { return null; } };
  if (only.length) {
    const pn = prev('news.json');
    if (pn && pn.items) {
      if (!want('gov')) gov = pn.items.filter(i => i.origin === 'fr');
      if (!want('media')) media = pn.items.filter(i => i.origin === 'rss');
    }
    const pp = prev('papers.json');
    if (!want('papers') && pp && pp.papers) papers = pp.papers;
  }

  const items = gov.concat(media);
  const generated = new Date().toISOString();
  const meta = {
    generated,
    counts: {
      gov: gov.length, media: media.length, papers: papers.length, total: items.length,
      govRaw, mediaRaw,
    },
    sources: [...new Set(items.map(i => i.cn + '/' + i.src))].sort(),
    countries: [...new Set(items.map(i => i.cn))].sort(),
  };
  fs.writeFileSync(path.join(OUT_DIR, 'news.json'), JSON.stringify({ generated, items }, null, 0));
  fs.writeFileSync(path.join(OUT_DIR, 'papers.json'), JSON.stringify({ generated, papers }, null, 0));
  fs.writeFileSync(path.join(OUT_DIR, 'status.json'), JSON.stringify({ meta, report }, null, 2));

  console.log('\n--- summary ---');
  console.log('  gov    : ' + gov.length + ' (from ' + govRaw + ' raw)');
  console.log('  media  : ' + media.length + ' (from ' + mediaRaw + ' raw)');
  console.log('  papers : ' + papers.length);
  console.log('  countries covered: ' + meta.countries.length + ' -> ' + meta.countries.join(', '));
  const bad = report.filter(r => !r.ok);
  console.log('  failing: ' + bad.length + (bad.length ? ' -> ' + bad.map(b => b.src).join(', ') : ' (none)'));
  if (!items.length && !papers.length) { console.error('nothing fetched'); process.exit(1); }
})().catch(e => { console.error('FATAL ' + (e && e.stack || e)); process.exit(1); });
