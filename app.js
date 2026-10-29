
/* ============ I18N ============ */
const I18N = {
  zh:{
    app_title:'TELE·TRACK — 行业情报',search_ph:'搜索新闻、论文、公司…  ( / )',
    lbl_monitor:'监控',lbl_sectors:'行业',lbl_trade:'贸易',lbl_research:'研究',lbl_system:'系统',
    nav_overview:'总览',nav_tender:'公开招标',nav_lithium:'锂电池',nav_aidc:'AIDC',nav_telecom:'电信',nav_energy:'能源',nav_trade:'贸易与关税',nav_papers:'学术论文',nav_settings:'设置',
    side_src:'数据源: 47 路 · 延迟 < 3min',
    ov_title:'行业动态总览',ov_sub_a:'Telecom & Energy 实时监测 · 聚焦',ov_sub_b:'数据更新于',
    tab_all:'全部',tab_battery:'电池',tab_aidc:'AIDC',tab_pfe:'PFE 限制',btn_export:'导出报告',
    pfe_title:'PFE 限制监测',pfe_industry:'行业新闻',pfe_gov:'政府政策 · 官方直连',gov_f_all:'全部来源',gov_f_hint:'点击筛选该来源在所选时间范围内的动态（数字=条数，0 表示该范围无内容；↗ 直达官网）',gov_open_site:'打开官网',
    tn_title:'公开招标监测',tn_sub:'各国官方采购平台招标信息 · 一键直达官网',tn_portals:'官方招标平台直连',tn_portals_sub:'政府采购官方平台 · 点击直达',tn_list:'招标项目列表',tn_stat_open:'进行中招标',tn_stat_exp:'7天内截止',tn_stat_mkt:'覆盖市场',tn_stat_new:'本周新增',tn_due7_sub:'临近截止',tn_mkt_sub:'覆盖国家/地区',tn_new_sub:'近7日发布',tn_f_all:'全部',tn_open:'进行中',tn_closed:'已截止',tn_days:'{n} 天后截止',tn_today:'今天截止',tn_view:'去官网查看',tn_ph:'搜索招标项目 / 机构 / 平台…',tn_empty:'暂无匹配的招标信息',tn_empty_hint:'可切换国家、行业或清除搜索关键词',tn_live:'● 实时',tn_soon:'⏳ 抓紧',tn_mkt_d:'🌐 全球',tn_new_d:'🆕 新增',
    kpi_li_idx:'锂电池指数',kpi_aidc_cap:'AIDC 装机',kpi_news_today:'今日新闻',kpi_papers_week:'本周论文',kpi_1d:'日变化',kpi_qoq:'环比上季',kpi_24h:'24小时量',
    pt_title:'核心商品价格 · 现货',pn_news:'行业新闻流',pn_papers:'最新学术论文',view_all:'查看全部 →',
    dc_today:'今日',dc_yest:'昨日',dc_7d:'7天',dc_30d:'30天',dc_custom:'自定义',
    load_more_news:'加载更多新闻 ↓',load_more_papers:'加载更多论文 ↓',
    news_range_empty:'所选时段（{range}）内暂无新闻',news_range_avail:'其他时段可用：',news_shown_of:'已显示最新 {shown} / {total} 条，点击下方加载更多',
    pfe_fr_live:'总统文件 · 实时同步自 federalregister.gov API',pfe_fr_cached:'总统文件 · 来自 federalregister.gov 缓存',pfe_fr_off:'总统文件 · 演示数据（实时源未连接）',
    feed_live:'真实数据源 · 定时任务同步（{n}/{all} 个来源 · {m} 条真实数据 · 共 {rows} 条）',feed_off:'数据源未连接 · 暂无数据 · 等待下次定时同步',feed_demo:'示例',feed_hint:'「示例」标记的条目为演示数据，非真实抓取',
    feed_updated:'更新于',feed_show_demo:'显示示例数据（{n}）',feed_hide_demo:'仅看真实数据（隐藏 {n} 条示例）',
    news_only_demo:'示例数据已按「仅看真实数据」隐藏',
    feed_pending:'待取到',feed_pending_hint:'该来源已配置抓取，本次快照未取到数据——是这一次没接通，不代表该媒体没有数据源',feed_nostream_hint:'该来源没有公开数据接口；本条仅为来源列表占位，不代表该媒体的真实报道',feed_no_link:'占位条目 · 无原文链接',
    feed_split_pending:'{n} 个来源已配置抓取、本次未取到',feed_split_nostream:'{n} 个来源暂无公开接口',
    pa_live_note:'真实论文数据 · 来自 Crossref（{n} 篇 · 真实期刊 / 作者 / 发表日 / 被引数 / DOI 原文链接）',pa_demo_note:'演示论文数据 · 真实源未连接',
    trend_title:'新闻热度趋势',leg_lithium:'锂电池',leg_aidc:'AIDC',leg_telecom:'电信',leg_energy:'能源',
    li_title:'锂电池产业监测',li_sub:'产业链 · 价格 · 产能 · 政策 · 实时新闻',li_kpi1:'碳酸锂现货',li_kpi2:'动力电池装机',li_kpi3:'储能电池出货',li_kpi4:'产能利用率',li_mom:'月环比',li_yoy:'月同比',li_head:'头部厂商',li_chart1:'碳酸锂价格走势',li_chain:'产业链热度',li_news2:'锂电池相关新闻',
    ai_title:'AIDC 算力基础设施监测',ai_sub:'AI Data Center · 装机 · PUE · 资本开支',ai_kpi1:'智能算力规模',ai_kpi2:'平均 PUE',ai_kpi3:'数据中心资本开支',ai_kpi4:'在用机柜',ai_yoy:'同比',ai_new:'新建项目',ai_mom:'环比',ai_chart1:'算力装机趋势 (EFLOPS)',ai_region:'区域布局',ai_news:'AIDC 相关新闻',
    tc_title:'电信行业监测',tc_sub:'5G · 网络资本开支 · 运营商数据',tc_kpi1:'5G 基站',tc_kpi2:'5G 用户',tc_kpi3:'电信资本开支',tc_kpi4:'算力网络投入',tc_cum:'累计',tc_pen:'渗透率 62%',tc_share:'占比提升',tc_chart1:'5G 基站累计建设',tc_ops:'运营商动态',tc_news:'电信新闻流',
    eg_title:'能源行业监测',eg_sub:'电力需求 · 储能 · 新能源装机 · 电价',eg_kpi1:'全社会用电量',eg_kpi2:'新型储能新增',eg_kpi3:'风光装机占比',eg_kpi4:'绿电交易量',eg_cum:'1-7月累计',eg_yoy:'同比',eg_gen:'发电装机',eg_yoy2:'同比',eg_chart1:'电力需求结构',eg_chart2:'新型储能装机趋势',eg_news:'能源新闻流',
    tr_title:'贸易与关税监测',tr_sub:'各国原材料价格 · 关税政策 · 贸易壁垒实时追踪',tr_kpi1:'中国锂电出口额',tr_kpi2:'对华综合关税均值',tr_kpi3:'欧盟 CBAM 覆盖率',tr_kpi4:'贸易政策事件',tr_yoy1:'1-7月同比',tr_yoy2:'同比上升',tr_cbam:'碳关税过渡期结束',tr_7d:'近7日新增',tr_tariff_tbl:'主要产品关税对比',tr_vs_cn:'对华进口',tr_mat_tbl:'各国原材料实时价格',tr_timeline:'关税政策动态',tr_src_hint:'来源标注于各行 · 点击来源名跳转官方页面',
    pa_title:'学术论文库',pa_sub:'顶刊自动追踪 · Nature Energy / Science / Joule / EES / Adv. Mater. / IEEE / arXiv',pa_search_ph:'搜索标题 / 作者 / 关键词',pa_cites:'被引',pa_hot:'🔥 热门',pa_f_all:'全部',
    se_title:'系统设置',se_sub:'数据源、推送、订阅与 API 配置',se_edit:'编辑',se_ds:'数据源与抓取',se_notif:'通知',se_sub2:'订阅与区域',se_api:'API 与集成',se_upgrade:'升级',
    dm_title:'自定义日期时间范围',dm_sub:'选择新闻抓取的起止日期与时间',dm_cancel:'取消',dm_apply:'应用',rp_24h:'近24小时',rp_7d:'近7天',rp_30d:'近30天',rp_90d:'近90天',rp_1y:'近1年',rp_custom:'自定义',rp_from:'开始',rp_to:'结束',rp_apply:'应用',rp_title:'日期与时间范围',
    tag_lithium:'锂电池',tag_aidc:'AIDC',tag_telecom:'电信',tag_energy:'能源',tag_trade:'贸易',tag_pfe:'PFE 政策',
    th_commodity:'品种',th_spot:'现货',th_24h:'24h',th_7d:'7d',th_30d:'30d',
    th_product:'产品',th_market:'市场',th_rate:'税率',th_note:'说明',th_effective:'生效',
    th_country:'国家',th_li:'碳酸锂',th_lfp:'LFP正极',th_gr:'石墨负极',th_hy:'氢氧化锂',
    grp_lithium:'锂电池原材料',grp_aidc:'AIDC 核心 (公司重点)',
    region_e:'华东',region_n:'华北',region_s:'华南',region_w:'西部枢纽',th_region:'区域',th_cap:'算力',th_yoy:'同比',th_pue:'PUE',
    chain_upstream:'上游锂矿',chain_cathode:'正极材料',chain_anode:'负极材料',chain_electrolyte:'电解液',chain_sep:'隔膜',chain_cell:'电芯',chain_recycle:'回收',
    /* Was hard-coded in index.html and therefore never translated. Kept as keys
       so the language switch has exactly one place to look. */
    li_kpi1_sub:'SMM 均价',d_flat:'— 持平',tr_kpi3_sub:'— 2026全面',se_ver:'当前版本 v2.5.0 · 订阅至 2027-03-01',
    pt_stamp:'示例数据 · 非实时',
    pt_note:'表中价格与涨跌幅为静态示例数据，用于版面示意，不代表任何交易所或报价机构的实时行情。新闻与政策条目为真实抓取。',
    tr_price_note:'表中数字为静态示例数据，用于版面示意；来源列仅指示该品种的公开行情参考机构，不代表当前从其获取了报价。',
    deploy_online:'已部署 · 公网访问:',btn_copy:'复制'
  },
  en:{
    app_title:'TELE·TRACK — Industry Intelligence',search_ph:'Search news, papers, companies…  ( / )',
    lbl_monitor:'Monitor',lbl_sectors:'Sectors',lbl_trade:'Trade',lbl_research:'Research',lbl_system:'System',
    nav_overview:'Overview',nav_tender:'Tenders',nav_lithium:'Lithium Battery',nav_aidc:'AIDC',nav_telecom:'Telecom',nav_energy:'Energy',nav_trade:'Trade & Tariffs',nav_papers:'Academic Papers',nav_settings:'Settings',
    side_src:'Sources: 47 feeds · latency < 3min',
    ov_title:'Industry Overview',ov_sub_a:'Telecom & Energy real-time monitor · focus on',ov_sub_b:'updated at',
    tab_all:'All',tab_battery:'Battery',tab_aidc:'AIDC',tab_pfe:'PFE Ban',btn_export:'Export Report',
    pfe_title:'PFE Restrictions',pfe_industry:'Industry News',pfe_gov:'Government Policy · Official',gov_f_all:'All sources',gov_f_hint:'Click to filter this source inside the selected range (number = items, 0 = none in range; ↗ opens the official site)',gov_open_site:'Open official site',
    tn_title:'Public Tender Monitor',tn_sub:'Public procurement tenders from official platforms · one-click to source',tn_portals:'Official Tender Portals',tn_portals_sub:'Government platforms · click to open',tn_list:'Tender List',tn_stat_open:'Open Tenders',tn_stat_exp:'Due in 7 Days',tn_stat_mkt:'Markets',tn_stat_new:'New This Week',tn_due7_sub:'deadline approaching',tn_mkt_sub:'countries covered',tn_new_sub:'published in 7d',tn_f_all:'All',tn_open:'Open',tn_closed:'Closed',tn_days:'{n} days left',tn_today:'Due today',tn_view:'View portal',tn_ph:'Search tenders / agency / platform…',tn_empty:'No matching tenders',tn_empty_hint:'Try a different country, sector or clear the search',tn_live:'● LIVE',tn_soon:'⏳ Urgent',tn_mkt_d:'🌐 Global',tn_new_d:'🆕 New',
    kpi_li_idx:'Lithium Battery Index',kpi_aidc_cap:'AIDC Capacity',kpi_news_today:'News Today',kpi_papers_week:'Papers This Week',kpi_1d:'1D change',kpi_qoq:'vs prev quarter',kpi_24h:'24h volume',
    pt_title:'Core Commodity Prices · Spot',pn_news:'Industry News Feed',pn_papers:'Latest Academic Papers',view_all:'View all →',
    dc_today:'Today',dc_yest:'Yesterday',dc_7d:'7 days',dc_30d:'30 days',dc_custom:'Custom',
    load_more_news:'Load more news ↓',load_more_papers:'Load more papers ↓',
    news_range_empty:'No news in the selected range ({range})',news_range_avail:'Available in other ranges: ',news_shown_of:'Showing latest {shown} of {total} — click below to load more',
    pfe_fr_live:'Presidential documents · live from the federalregister.gov API',pfe_fr_cached:'Presidential documents · cached from the federalregister.gov API',pfe_fr_off:'Presidential documents · demo data (live feed unavailable)',
    feed_live:'Live sources · synced by the scheduled job ({n}/{all} sources · {m} real items · {rows} total)',feed_off:'Feed unavailable · no data · waiting for next scheduled sync',feed_demo:'SAMPLE',feed_hint:'Items marked SAMPLE are demo data, not fetched from a real source',
    feed_updated:'updated',feed_show_demo:'Show sample data ({n})',feed_hide_demo:'Real data only (hide {n} sample)',
    news_only_demo:'Sample rows are held back by "real data only"',
    feed_pending:'PENDING',feed_pending_hint:'A feed is configured for this source but this snapshot did not get it — the fetch did not connect, it does not mean the outlet has no data',feed_nostream_hint:'No public data feed exists for this source; this row only holds its place in the source list and is not a report by that outlet',feed_no_link:'Placeholder · no source link',
    feed_split_pending:'{n} sources have a feed configured but were not reached',feed_split_nostream:'{n} sources have no public feed',
    pa_live_note:'Real papers · fetched from Crossref ({n} papers · real journal, authors, publication date, citations, DOI link)',pa_demo_note:'Demo papers · live source unavailable',
    trend_title:'News Volume Trend',leg_lithium:'Lithium',leg_aidc:'AIDC',leg_telecom:'Telecom',leg_energy:'Energy',
    li_title:'Lithium Battery Monitor',li_sub:'Supply chain · Prices · Capacity · Policy · Live news',li_kpi1:'Li Carbonate Spot',li_kpi2:'EV Battery Installed',li_kpi3:'ESS Shipment',li_kpi4:'Utilization Rate',li_mom:'MoM',li_yoy:'YoY',li_head:'Top makers',li_chart1:'Li Carbonate Price Trend',li_chain:'Supply Chain Heat',li_news2:'Lithium-related News',
    ai_title:'AIDC Compute Infrastructure Monitor',ai_sub:'AI Data Center · Capacity · PUE · Capex',ai_kpi1:'Smart Compute Scale',ai_kpi2:'Avg PUE',ai_kpi3:'Data Center Capex',ai_kpi4:'Active Racks',ai_yoy:'YoY',ai_new:'New projects',ai_mom:'QoQ',ai_chart1:'Compute Capacity Trend (EFLOPS)',ai_region:'Regional Layout',ai_news:'AIDC-related News',
    tc_title:'Telecom Industry Monitor',tc_sub:'5G · Network Capex · Operator Data',tc_kpi1:'5G Base Stations',tc_kpi2:'5G Users',tc_kpi3:'Telecom Capex',tc_kpi4:'Compute Network Invest',tc_cum:'Cumulative',tc_pen:'Penetration 62%',tc_share:'Share rising',tc_chart1:'5G Base Station Cumulative',tc_ops:'Operator Updates',tc_news:'Telecom News Feed',
    eg_title:'Energy Industry Monitor',eg_sub:'Power Demand · Storage · RE Capacity · Tariffs',eg_kpi1:'Total Power Consumption',eg_kpi2:'New Storage Added',eg_kpi3:'RE Share of Capacity',eg_kpi4:'Green Power Trade',eg_cum:'Jan-Jul cumulative',eg_yoy:'YoY',eg_gen:'Generation capacity',eg_yoy2:'YoY',eg_chart1:'Power Demand Mix',eg_chart2:'New Storage Trend',eg_news:'Energy News Feed',
    tr_title:'Trade & Tariffs Monitor',tr_sub:'Raw material prices · Tariff policy · Trade barriers real-time tracking',tr_kpi1:'China Li-battery Exports',tr_kpi2:'Avg Tariff on China',tr_kpi3:'EU CBAM Coverage',tr_kpi4:'Trade Policy Events',tr_yoy1:'Jan-Jul YoY',tr_yoy2:'YoY increase',tr_cbam:'Carbon tariff transition ends',tr_7d:'Last 7 days new',tr_tariff_tbl:'Major Product Tariffs',tr_vs_cn:'on China imports',tr_mat_tbl:'Raw Material Prices by Country',tr_timeline:'Tariff Policy Updates',tr_src_hint:'Source labeled per row · click a source to open its official page',
    pa_title:'Academic Paper Library',pa_sub:'Top-journal auto-tracking · Nature Energy / Science / Joule / EES / Adv. Mater. / IEEE / arXiv',pa_search_ph:'Search title / author / keyword',pa_cites:'citations',pa_hot:'🔥 HOT',pa_f_all:'All',
    se_title:'System Settings',se_sub:'Data sources, alerts, subscriptions & API config',se_edit:'Edit',se_ds:'Data Sources',se_notif:'Notifications',se_sub2:'Subscriptions & Region',se_api:'API & Integration',se_upgrade:'Upgrade',
    dm_title:'Custom Date & Time Range',dm_sub:'Select news capture start and end date & time',dm_cancel:'Cancel',dm_apply:'Apply',rp_24h:'Last 24h',rp_7d:'Last 7d',rp_30d:'Last 30d',rp_90d:'Last 90d',rp_1y:'Last 1Y',rp_custom:'Custom',rp_from:'From',rp_to:'To',rp_apply:'Apply',rp_title:'Date & Time Range',
    tag_lithium:'Lithium',tag_aidc:'AIDC',tag_telecom:'Telecom',tag_energy:'Energy',tag_trade:'Trade',tag_pfe:'PFE Policy',
    th_commodity:'Commodity',th_spot:'Spot',th_24h:'24h',th_7d:'7d',th_30d:'30d',
    th_product:'Product',th_market:'Market',th_rate:'Rate',th_note:'Note',th_effective:'Effective',
    th_country:'Country',th_li:'Li Carbonate',th_lfp:'LFP Cathode',th_gr:'Graphite Anode',th_hy:'Li Hydroxide',
    grp_lithium:'Lithium Materials',grp_aidc:'AIDC Core (Company Priority)',
    region_e:'East China',region_n:'North China',region_s:'South China',region_w:'West Hub',th_region:'Region',th_cap:'Capacity',th_yoy:'YoY',th_pue:'PUE',
    chain_upstream:'Li Ore',chain_cathode:'Cathode',chain_anode:'Anode',chain_electrolyte:'Electrolyte',chain_sep:'Separator',chain_cell:'Cell',chain_recycle:'Recycling',
    li_kpi1_sub:'SMM avg',d_flat:'— flat',tr_kpi3_sub:'— full year 2026',se_ver:'Current version v2.5.0 · subscribed until 2027-03-01',
    pt_stamp:'Indicative · not live',
    pt_note:'Prices and changes in this table are static sample figures for layout purposes only — they do not represent live quotes from any exchange or pricing agency. News and policy items are really fetched.',
    tr_price_note:'Figures are static samples for layout purposes; the source column indicates the public reference agency for each commodity, not that a live quote was obtained.',
    deploy_online:'Deployed · public URL:',btn_copy:'Copy'
  }
};
/* Chinese proper nouns that appear in the fixture data: news keywords, Chinese
   procurement agencies and the official tender platforms. They were printed
   verbatim, so an English reader met 「关税」 next to "Tariff" in the same row and
   「工信部」 in the middle of an English tender list. Anything not listed passes
   through untouched — inventing a translation would be worse than leaving the
   token as the source published it. */
const TERM_EN = {
  /* news keywords */
  '关税':'Tariff','反制':'Countermeasures','组件穿透':'Component pass-through',
  '锂价':'Li price','锂矿':'Lithium ore','关键矿产':'Critical minerals',
  '固态电池':'Solid-state','储能':'Storage','光伏':'Solar PV','绿电':'Green power',
  '回收':'Recycling','市场':'Market','用电量':'Power demand','智算':'Smart compute',
  '光模块':'Optical Module',
  /* procurement agencies */
  '中国移动':'China Mobile','国家电网':'State Grid','工信部':'MIIT','中国铁塔':'China Tower',
  /* official tender platforms (rendered as both the portal label and the row source) */
  '中国政府采购网':'China Gov. Procurement',
  '招标投标公共服务平台':'China Tendering & Bidding Service',
  '政府調達 (PPI)':'Japan Government Procurement (PPI)',
  '나라장터':'Korea G2B (Narajangteo)',
  'Upphandling':'Upphandling (Sweden)',
  'simap.ch':'SIMAP (Switzerland)'
};
function termLabel(x){return state.lang==='en'?(TERM_EN[x]||x):x;}
/* Fixture budgets carry Chinese scale words (¥386亿). Re-expressing them as
   38.6 B keeps the figure honest; stripping the 亿 would turn ¥386亿 into ¥386,
   which is a different number by a factor of 10^8. */
function budgetLabel(b){
  if(state.lang!=='en')return b;
  const m=/^(.*?)(\d+(?:\.\d+)?)亿$/.exec(b);
  return m?(m[1]+Number((Number(m[2])/10).toFixed(2))+'B'):b;
}
/* Demo paper affiliations are authored as the institution plus its Chinese name
   ("Tsinghua University · 清华大学"). The pair is right in Chinese; in English the
   Chinese half is noise, so it is dropped — the Latin half is untouched. */
function orgLabel(o){
  if(state.lang!=='en')return o;
  const m=/^(.*?)\s*·\s*([\u3400-\u9fff].*)$/.exec(o);
  return m?m[1]:o;
}

/* ============ COUNTRIES ============ */
const FLAGS = {China:'🇨🇳',USA:'🇺🇸',Germany:'🇩🇪',Japan:'🇯🇵','South Korea':'🇰🇷',Australia:'🇦🇺','UK':'🇬🇧',France:'🇫🇷',Netherlands:'🇳🇱',Sweden:'🇸🇪',Switzerland:'🇨🇭'};
/* US market is the #1 priority → USA first in selector, default region */
const COUNTRIES = ['USA','China','Germany','Japan','South Korea','Australia','UK','France','Netherlands','Sweden','Switzerland'];

/* ============ PRICE DATA (per country) ============ */
/* Reference agencies behind each price group's figures. These are the public
   desks a reader can check the commodity class against — the figures themselves
   are static samples (see the price-note), and the link says "compare here",
   never "quote from here". */
const GROUP_SRC = {
  lithium:{name:{zh:'SMM 上海有色网',en:'SMM (Shanghai Metals Market)'},url:'https://www.smm.cn/en/'},
  aidc:{name:{zh:'TrendForce 集邦咨询',en:'TrendForce'},url:'https://www.trendforce.com/'},
};
/* Journal homepages — the demo paper cards carry no DOI, so the journal name is
   the one honest outbound link a reader can check the venue against. */
const JOURNAL_HOME = {
  nature:'https://www.nature.com/',
  science:'https://www.science.org/',
  natcom:'https://www.nature.com/ncomms/',
  joule:'https://www.cell.com/joule/home',
  ees:'https://www.sciencedirect.com/journal/energy-storage-materials',
  advmat:'https://onlinelibrary.wiley.com/journal/16146832',
  applied:'https://www.sciencedirect.com/journal/applied-energy',
  ieee:'https://ieeexplore.ieee.org/',
  arxiv:'https://arxiv.org/',
};

const PRICE_GROUPS = [
  {id:'lithium',cls:'lithium-group',i18n:'grp_lithium',rows:[
    {hot:true,i18n_label:{zh:'磷酸铁锂正极 LFP ★',en:'LFP Cathode ★'},unit:{zh:'¥/t',en:'¥/t'},v:{China:'¥48,600',USA:'$6,850',Germany:'€6,300',Japan:'¥1.02M','South Korea':'₩1.35M',Australia:'A$10.4K',UK:'£5,200',France:'€6,100',Netherlands:'€6,150',Sweden:'kr72K',Switzerland:'CHF6,050'},c24:'up',c24v:'+0.8%',c7:'up',c7v:'+2.1%',c30:'up',c30v:'+4.5%'},
    {hot:true,i18n_label:{zh:'LFP 电芯 (动力) ★',en:'LFP Cell (EV) ★'},unit:{zh:'¥/Wh',en:'¥/Wh'},v:{China:'¥0.41',USA:'$0.058',Germany:'€0.054',Japan:'¥9.2',Australia:'A$0.088'},c24:'up',c24v:'+0.5%',c7:'down',c7v:'-1.2%',c30:'down',c30v:'-3.8%'},
    {i18n_label:{zh:'电池级碳酸锂',en:'Li Carbonate (battery)'},unit:{zh:'¥/t',en:'¥/t'},v:{China:'¥76,500',USA:'$10,700',Germany:'€9,800',Japan:'¥1.62M',Australia:'A$16.2K',UK:'£8,100',France:'€9,500',Switzerland:'CHF9,400'},c24:'up',c24v:'+1.2%',c7:'up',c7v:'+4.8%',c30:'down',c30v:'-6.1%'},
    {i18n_label:{zh:'氢氧化锂',en:'Li Hydroxide'},unit:{zh:'¥/t',en:'¥/t'},v:{China:'¥82,300',USA:'$11,500',Germany:'€10,500',Japan:'¥1.74M'},c24:'up',c24v:'+0.9%',c7:'up',c7v:'+3.2%',c30:'down',c30v:'-4.4%'},
    {i18n_label:{zh:'NCM811 前驱体',en:'NCM811 Precursor'},unit:{zh:'¥/t',en:'¥/t'},v:{China:'¥105,200',USA:'$14,700',Germany:'€13,500'},c24:'down',c24v:'-0.4%',c7:'up',c7v:'+1.1%',c30:'up',c30v:'+2.3%'},
    {i18n_label:{zh:'天然石墨负极',en:'Natural Graphite Anode'},unit:{zh:'¥/t',en:'¥/t'},v:{China:'¥28,600',USA:'$4,000',Germany:'€3,700'},c24:'up',c24v:'+0.2%',c7:'up',c7v:'+0.8%',c30:'up',c30v:'+1.5%'},
    {i18n_label:{zh:'六氟磷酸锂 LiPF₆',en:'LiPF₆'},unit:{zh:'¥/t',en:'¥/t'},v:{China:'¥59,800',USA:'$8,350',Germany:'€7,700'},c24:'up',c24v:'+0.6%',c7:'up',c7v:'+2.4%',c30:'up',c30v:'+5.0%'}
  ]},
  {id:'aidc',cls:'aidc-group',i18n:'grp_aidc',rows:[
    {hot:true,i18n_label:{zh:'AI 服务器 (8卡 HGX) ★',en:'AI Server (8x HGX) ★'},unit:{zh:'¥/台',en:'¥/unit'},v:{China:'¥1,890,000',USA:'$260,000',Germany:'€240,000',Japan:'¥1.89M','South Korea':'₩3.5亿'},c24:'flat',c24v:'—',c7:'up',c7v:'+1.5%',c30:'down',c30v:'-2.0%'},
    {hot:true,i18n_label:{zh:'液冷 CDU 冷板 ★',en:'Liquid Cooling CDU ★'},unit:{zh:'¥/套',en:'¥/set'},v:{China:'¥45,000',USA:'$6,200',Germany:'€5,700'},c24:'up',c24v:'+0.3%',c7:'up',c7v:'+3.8%',c30:'up',c30v:'+8.2%'},
    {hot:true,i18n_label:{zh:'800G 光模块 ★',en:'800G Optical Module ★'},unit:{zh:'¥/只',en:'¥/pc'},v:{China:'¥11,200',USA:'$1,550',Germany:'€1,420'},c24:'down',c24v:'-0.8%',c7:'down',c7v:'-2.1%',c30:'down',c30v:'-12.0%'},
    {i18n_label:{zh:'绿电 PPA (数据中心)',en:'Green PPA (Data Center)'},unit:{zh:'¥/kWh',en:'¥/kWh'},v:{China:'¥0.42',USA:'$0.065',Germany:'€0.088',Sweden:'kr0.85'},c24:'flat',c24v:'—',c7:'up',c7v:'+0.5%',c30:'up',c30v:'+1.2%'},
    {i18n_label:{zh:'工业电价 (西部枢纽)',en:'Industrial Power (West Hub)'},unit:{zh:'¥/kWh',en:'¥/kWh'},v:{China:'¥0.33',USA:'$0.072',Germany:'€0.18',France:'€0.12'},c24:'flat',c24v:'—',c7:'flat',c7v:'—',c30:'up',c30v:'+0.8%'}
  ]}
];

/* ============ TARIFF DATA ============ */
const TARIFFS = [
  {p:{zh:'动力电池 / EV Battery',en:'EV Battery'},markets:[
    {m:'USA',r:'25%+25%',n:{zh:'301条款 + 2026新增',en:'Sec.301 + 2026 add'},s:'up',e:'2026-01'},
    {m:'EU',r:'20.5%~35.3%',n:{zh:'反补贴终裁 + 10%基础',en:'Anti-subsidy final'},s:'up',e:'2025-07'},
    {m:'India',r:'25%',n:{zh:'PLI 配套关税',en:'PLI-linked'},s:'flat',e:'2024-04'},
    {m:'Brazil',r:'18%',n:{zh:'南共市对外关税',en:'Mercosur'},s:'flat',e:{zh:'长期',en:'Long-term'}}
  ]},
  {p:{zh:'储能电池 / ESS Battery',en:'ESS Battery'},markets:[
    {m:'USA',r:'25%',n:{zh:'2026 非车用',en:'2026 non-EV'},s:'up',e:'2026-07'},
    {m:'EU',r:'0%~10%',n:{zh:'基础关税',en:'MFN base'},s:'flat',e:{zh:'长期',en:'Long-term'}},
    {m:'Australia',r:'5%',n:{zh:'基础关税',en:'MFN base'},s:'flat',e:{zh:'长期',en:'Long-term'}}
  ]},
  {p:{zh:'LFP 正极材料',en:'LFP Cathode'},markets:[
    {m:'USA',r:'25%',n:{zh:'301条款',en:'Sec.301'},s:'up',e:'2026-01'},
    {m:'EU',r:{zh:'调查中',en:'Under review'},n:{zh:'反倾销立案',en:'AD investigation'},s:'new',e:'2026-06'}
  ]},
  {p:{zh:'天然石墨负极',en:'Graphite Anode'},markets:[
    {m:'USA',r:'25%',n:{zh:'2026 生效',en:'2026 effect'},s:'up',e:'2026-01'},
    {m:'EU',r:'10%~20%',n:{zh:'反倾销复审',en:'AD review'},s:'flat',e:'2025-12'}
  ]},
  {p:{zh:'AI 服务器 / GPU',en:'AI Server / GPU'},markets:[
    {m:'USA',r:'25%',n:{zh:'301条款',en:'Sec.301'},s:'flat',e:{zh:'长期',en:'Long-term'}},
    {m:'EU',r:'0%',n:{zh:'MFN 免税',en:'MFN duty-free'},s:'flat',e:{zh:'长期',en:'Long-term'}},
    {m:'Netherlands',r:{zh:'管制',en:'Export control'},n:{zh:'出口管制 (EUV/先进制程)',en:'Export control'},s:'new',e:{zh:'持续',en:'Ongoing'}}
  ]},
  {p:{zh:'800G 光模块',en:'800G Optical Module'},markets:[
    {m:'USA',r:'25%',n:{zh:'301条款',en:'Sec.301'},s:'flat',e:{zh:'长期',en:'Long-term'}},
    {m:'EU',r:'0%~5%',n:{zh:'基础关税',en:'MFN base'},s:'flat',e:{zh:'长期',en:'Long-term'}}
  ]}
];

const MAT_PRICES = [
  {c:'USA',cur:'USD',li:'$10,700',lfp:'$6,850',gr:'$4,000',hy:'$11,500'},
  {c:'China',cur:'CNY',li:'¥76,500',lfp:'¥48,600',gr:'¥28,600',hy:'¥82,300'},
  {c:'Germany',cur:'EUR',li:'€9,800',lfp:'€6,300',gr:'€3,700',hy:'€10,500'},
  {c:'Japan',cur:'JPY',li:'¥1.62M',lfp:'¥1.02M',gr:'¥0.41M',hy:'¥1.74M'},
  {c:'UK',cur:'GBP',li:'£8,100',lfp:'£5,200',gr:'£2,950',hy:'£8,900'},
  {c:'France',cur:'EUR',li:'€9,500',lfp:'€6,100',gr:'€3,550',hy:'€10,200'},
  {c:'Sweden',cur:'SEK',li:'kr115K',lfp:'kr72K',gr:'kr42K',hy:'kr124K'},
  {c:'Switzerland',cur:'CHF',li:'CHF9,400',lfp:'CHF6,050',gr:'CHF3,500',hy:'CHF10,100'}
];

/* ============ TRADE TABLE SOURCES ============
   Official body behind each tariff / material-price figure.
   Used to label the source of every row and to provide the original-link access. */
const TARIFF_SRC = {
  USA:{name:{zh:'美国贸易代表处',en:'USTR'},url:'https://ustr.gov/issue-areas/enforcement/trade-remedies/301-investigations'},
  EU:{name:{zh:'欧盟委员会 TARIC',en:'EU TARIC'},url:'https://ec.europa.eu/taxation_customs/taric'},
  India:{name:{zh:'印度商工部 DGTR',en:'India DGTR'},url:'https://www.dgtr.gov.in'},
  Brazil:{name:{zh:'巴西外贸委员会',en:'MDIC Brazil'},url:'https://www.gov.br/mdic'},
  Australia:{name:{zh:'澳大利亚海关 ABF',en:'ABF Australia'},url:'https://www.abf.gov.au'},
  Netherlands:{name:{zh:'荷兰出口管制政策',en:'NL Export Controls'},url:'https://www.government.nl/topics/export-controls-of-strategic-goods'}
};
const MAT_SRC = {
  USA:{name:{zh:'Fastmarkets',en:'Fastmarkets'},url:'https://www.fastmarkets.com'},
  China:{name:{zh:'SMM 上海有色',en:'SMM'},url:'https://www.smm.cn'},
  Germany:{name:{zh:'Fastmarkets',en:'Fastmarkets'},url:'https://www.fastmarkets.com'},
  Japan:{name:{zh:'Fastmarkets',en:'Fastmarkets'},url:'https://www.fastmarkets.com'},
  UK:{name:{zh:'LME 伦敦金属交易所',en:'LME'},url:'https://www.lme.com'},
  France:{name:{zh:'Fastmarkets',en:'Fastmarkets'},url:'https://www.fastmarkets.com'},
  Sweden:{name:{zh:'标普全球普氏',en:'S&P Global Platts'},url:'https://www.spglobal.com/commodityinsights/en'},
  Switzerland:{name:{zh:'标普全球普氏',en:'S&P Global Platts'},url:'https://www.spglobal.com/commodityinsights/en'}
};

/* ============ NEWS MEDIA (local outlets per country) ============ */
const NEWS_MEDIA = {
  China:[
    {name:'SMM 上海有色',url:'https://www.smm.cn'},
    {name:'财新 Caixin',url:'https://www.caixin.com'},
    {name:'高工锂电 GGII',url:'https://www.gg-lb.com'},
    {name:'C114 通信网',url:'https://www.c114.com.cn'},
    {name:'北极星储能网',url:'https://news.bjx.com.cn'},
    {name:'国家能源局',url:'https://www.nea.gov.cn'},
    {name:'工信部 MIIT',url:'https://www.miit.gov.cn'},
    {name:'中国商务部',url:'http://www.mofcom.gov.cn'},
    {name:'第一财经 Yicai',url:'https://www.yicai.com'},
    {name:'36氪 36Kr',url:'https://36kr.com'},
    {name:'InfoQ',url:'https://www.infoq.cn'}
  ],
  USA:[
    {name:'Reuters',url:'https://www.reuters.com'},
    {name:'Bloomberg',url:'https://www.bloomberg.com'},
    {name:'The Verge',url:'https://www.theverge.com'},
    {name:'Light Reading',url:'https://www.lightreading.com'},
    {name:"Dell'Oro Group",url:'https://www.delloro.com'},
    {name:'Wood Mackenzie',url:'https://www.woodmac.com'},
    {name:'IDC',url:'https://www.idc.com'},
    {name:'CNBC',url:'https://www.cnbc.com'},
    /* ---- US government watch (PFE / supply-chain & trade enforcement) ----
       Every one of these publishes its rules and notices through the Federal
       Register, so all of them are fed by real documents (see tools/refresh.js +
       the client-side federalregister.gov fetch). `gov:true` puts them in the
       government section and gives them a filter chip. */
    {name:'DHS',url:'https://www.dhs.gov/uflpa-entity-list',gov:true},
    {name:'BIS',url:'https://www.bis.doc.gov',gov:true},
    {name:'Federal Register',url:'https://www.federalregister.gov',gov:true},
    {name:'Presidential Docs',url:'https://www.federalregister.gov/presidential-documents',gov:true},
    {name:'CBP',url:'https://www.cbp.gov',gov:true},
    {name:'OFAC',url:'https://ofac.treasury.gov',gov:true},
    {name:'FCC',url:'https://www.fcc.gov',gov:true},
    {name:'DOE',url:'https://www.energy.gov',gov:true},
    {name:'USTR',url:'https://ustr.gov',gov:true},
    {name:'Commerce',url:'https://www.commerce.gov',gov:true}
  ],
  Germany:[
    {name:'Handelsblatt',url:'https://www.handelsblatt.com'},
    {name:'EV-volumes',url:'https://www.ev-volumes.com'},
    {name:'The Register EU',url:'https://www.theregister.com'},
    {name:'CleanEnergyWire',url:'https://www.cleanenergywire.org'},
    {name:'Frankfurter Allgemeine',url:'https://www.faz.net'}
  ],
  Japan:[
    {name:'Nikkei Asia',url:'https://asia.nikkei.com'},
    {name:'The Japan Times',url:'https://www.japantimes.co.jp'},
    {name:'JEITA',url:'https://www.jeita.or.jp'}
  ],
  'South Korea':[
    {name:'Korea Herald',url:'https://www.koreaherald.com'},
    {name:'Pulse News',url:'https://pulsenews.co.kr'},
    {name:'ET News',url:'https://www.etnews.com'}
  ],
  Australia:[
    {name:'Fastmarkets',url:'https://www.fastmarkets.com'},
    {name:'Australian Mining',url:'https://www.australianmining.com.au'},
    {name:'Renew Economy',url:'https://reneweconomy.com.au'}
  ],
  'UK':[
    {name:'Benchmark Mineral Intelligence',url:'https://www.benchmarkminerals.com'},
    {name:'Financial Times',url:'https://www.ft.com'},
    {name:'BusinessCloud',url:'https://www.businesscloud.co.uk'}
  ],
  France:[
    {name:'Les Echos',url:'https://www.lesechos.fr'},
    {name:'Usine Nouvelle',url:'https://www.usinenouvelle.com'},
    {name:'FranceInfo',url:'https://www.francetvinfo.fr'}
  ],
  Netherlands:[
    {name:'NL Times',url:'https://nltimes.nl'},
    {name:'Dutch News',url:'https://www.dutchnews.nl'},
    {name:'ASML Newsroom',url:'https://www.asml.com/en/news'}
  ],
  Sweden:[
    {name:'SVT Nyheter',url:'https://www.svt.se/nyheter'},
    {name:'Reuters Sweden',url:'https://www.reuters.com'},
    {name:'EnergiFöretagen',url:'https://www.energiforetagen.se'}
  ],
  Switzerland:[
    {name:'Swissinfo',url:'https://www.swissinfo.ch'},
    {name:'NZZ Neue Zürcher Zeitung',url:'https://www.nzz.ch'},
    {name:'Le Temps',url:'https://www.letemps.ch'}
  ]
};

/* ============ NEWS (bilingual + article URLs) ============ */
/* ============ NEWS ============
   The 73 hand-authored sample rows that used to live here are gone: the
   scheduled pipeline now reliably fills this array (220 real items across
   51 sources), so a fallback of fake headlines bought layout insurance the
   page no longer needs and cost credibility it could not afford. NEWS starts
   empty; applyRealFeed() fills it from data/news.json. If the feed is
   unavailable the panels show an honest empty state, not invented rows. */
const NEWS = [];
/* Stamp a demo item as "today (or N days back) at its authored clock" — and never in the future.
   An item placed on TODAY at a clock later than the current time lands in the future, and
   rangeFilter (d >= start && d <= end) then hides it from EVERY window at once. The feed would
   silently look thinner before that clock time — an 18:20 item is invisible to a 09:00 visitor,
   and the whole 7d count shifts as the day advances. Such an item reads as "yesterday at that
   clock" instead: still recent, still in order, always in the past. */
function demoStamp(time,offsetDays,now){
  const hh=parseInt(time.slice(0,2))||0,mm=parseInt(time.slice(3,5))||0;
  const d=new Date(now.getFullYear(),now.getMonth(),now.getDate()-offsetDays,hh,mm);
  return d>now?new Date(d.getTime()-864e5):d;
}
/* Normalise d to a Date. A few hand-authored rows carry raw epoch milliseconds (d: Date.now()-N*864e5).
   The renderer happens to tolerate that — range comparisons coerce the Date operand to its ms value — so
   it never showed as a bug, but a mixed Date/number field is a trap for anything that calls .getTime()
   or checks instanceof. One shape everywhere. */
NEWS.forEach(n=>{if(n.d&&!(n.d instanceof Date))n.d=new Date(n.d);});
/* assign a full timestamp to each news item — dates are relative to today so they always appear recent;
   spread within ~6 days (capped) so every item lands inside the default 7-day window even after time-of-day;
   items that already carry an explicit d (hand-authored fresh timestamps) are left untouched */
NEWS.forEach((n,i)=>{if(n.d)return;n.d=demoStamp(n.time,Math.min(6,Math.round(i/8)),new Date());});
/* Freshen pass: the "近24小时" preset must return real results, so each country's two newest items
   AND each country×sector's newest item are pulled into the last 24h — staggered, never in the future,
   and the displayed clock (n.time) is kept in sync with the timestamp. Every other item keeps its day
   offset, so a 24h view is genuinely narrower than the 7d view instead of being auto-widened. */
(function(){
  const now=Date.now(),pad=n=>String(n).padStart(2,'0');
  /* "already fresh" needs a 1h margin: hand-authored items sit exactly N*24h back, and comparing
     at the exact 24h boundary is a coin flip (both Date.now() calls can land in the same ms) */
  const FRESH=23*36e5;
  const isFresh=n=>now-n.d<=FRESH;
  const byCn={},byPair={};
  NEWS.forEach(n=>{
    (byCn[n.cn]=byCn[n.cn]||[]).push(n);
    const pk=n.cn+'|'+n.t+(isGovNews(n)?'|gov':'|ind'); /* gov / industry groups are freshened separately */
    (byPair[pk]=byPair[pk]||[]).push(n);
  });
  const targets=[];
  Object.keys(byPair).forEach(k=>{ /* newest item of every country×sector(×gov group) */
    const list=byPair[k].sort((a,b)=>b.d-a.d);
    if(!isFresh(list[0]))targets.push(list[0]);
  });
  Object.keys(byCn).forEach(cn=>{ /* make sure every country has at least two fresh items */
    const list=byCn[cn].sort((a,b)=>b.d-a.d);
    let need=2-list.filter(n=>isFresh(n)||targets.indexOf(n)>=0).length;
    for(const n of list){
      if(need<=0)break;
      if(isFresh(n)||targets.indexOf(n)>=0)continue;
      targets.push(n);need--;
    }
  });
  /* spread the freshened items evenly over the past 1–22h so they always sit inside a 24h window */
  const span=targets.length>1?21/(targets.length-1):0;
  targets.forEach((n,i)=>{
    const d=new Date(now-(1+i*span)*36e5);
    n.d=d;n.time=pad(d.getHours())+':'+pad(d.getMinutes());
  });
  /* sync every card clock to its real timestamp: hand-authored items with explicit d (Date.now()-N days)
     keep a stale clock like "11:15" that can land in the future relative to the actual load time */
  NEWS.forEach(n=>{if(n.real)return;const d=new Date(n.d);n.time=pad(d.getHours())+':'+pad(d.getMinutes());});
})();

/* ============ REAL PRESIDENTIAL DOCUMENTS — live from the federalregister.gov API ============
   The simulated EO/proclamation items above are placeholders. On boot we fetch the real feed
   (public CORS-enabled API) and swap them in with their TRUE publication dates. If the network
   or the API is unavailable we keep the simulated items and label the source as demo. Real items
   carry real:true and are never touched by the demo freshen/time-sync patches above. */
const FR_TYPES=[['executive_order','Executive Order','行政命令'],['proclamation','Proclamation','总统公告'],['memorandum','Presidential Memorandum','总统备忘录'],['determination','Presidential Determination','总统裁定']];
let frState='off',frLastSync=null,frIdSeq=900;
function frMapDoc(doc,ptype){
  const conf=FR_TYPES.find(x=>x[0]===ptype)||['','Presidential Document','总统文件'];
  const num=doc.executive_order_number||'';
  const headZh=ptype==='executive_order'?('行政命令 EO '+num+'：'):conf[2]+'：';
  const headEn=ptype==='executive_order'?('Executive Order '+num+': '):conf[1]+': ';
  const sum=doc.abstract||'';
  const fbZh='联邦公报总统文件 · 文号 '+(doc.document_number||'-')+(doc.signing_date?(' · 签署于 '+doc.signing_date):'');
  const fbEn='Federal Register presidential document · No. '+(doc.document_number||'-')+(doc.signing_date?(' · signed '+doc.signing_date):'');
  return {id:frIdSeq++,t:'pfe',src:'Presidential Docs',cn:'USA',real:true,
    url:doc.html_url||'#',
    d:frPubDate(doc.publication_date),
    time:doc.publication_date||'',
    title:{zh:headZh+(doc.title||''),en:headEn+(doc.title||'')},
    sum:{zh:sum||fbZh,en:sum||fbEn},
    tags:[doc.document_number?('FR '+doc.document_number):'','LIVE'].filter(Boolean)};
}
/* publication_date is date-granular, so anchor it to LOCAL MIDNIGHT of that day.
   Anchoring at noon would push a document published today into the future whenever the visitor
   loads the page before 12:00 — and rangeFilter (d >= start && d <= end) would then hide it from
   EVERY window, including 近7天/近30天, making a brand-new EO look like it never arrived. */
function frPubDate(s){
  if(!s)return new Date();
  const d=new Date(s+'T00:00:00');
  if(isNaN(d.getTime()))return new Date();
  const now=new Date();
  return d>now?now:d; /* absolute guard: never a future timestamp */
}
function frFetchType(ptype){
  const url='https://www.federalregister.gov/api/v1/documents.json?conditions%5Bpresidential_document_type%5D%5B%5D='+ptype+'&per_page=6&order=newest&'+['title','abstract','html_url','publication_date','signing_date','document_number','executive_order_number'].map(f=>'fields%5B%5D='+f).join('&');
  if(typeof fetch!=='function')return Promise.reject(new Error('fetch unavailable'));
  return fetch(url).then(r=>{if(!r.ok)throw new Error('HTTP '+r.status);return r.json();})
    .then(j=>(j.results||[]).map(d=>frMapDoc(d,ptype)));
}
function frFetchAll(){
  return Promise.all(FR_TYPES.map(x=>frFetchType(x[0]).catch(()=>[])))
    .then(arrs=>{
      const docs=arrs.flat().sort((a,b)=>b.d-a.d).slice(0,18);
      if(!docs.length){frState='off';return 0;}
      applyRealDocs(docs,false);
      frState='live';frLastSync=new Date();
      return docs.length;
    })
    .catch(()=>{frState='off';return 0;});
}
/* Insert a batch of real presidential documents, replacing anything an earlier pass put in.
   This runs TWICE per load — once with the localStorage cache for an instant paint, then again with
   the live API response. The original version only stripped the demo placeholders, so the second pass
   left the cached copy AND the fresh copy of every shared document in the feed: a returning visitor
   saw each presidential document twice (18 cached + 18 live = 36 rows, 18 of them duplicates).
   Removal is keyed on url, which is stable across the cache round-trip while ids are not. */
function applyRealDocs(docs,fromCache){
  if(!docs||!docs.length)return false;
  const incoming=new Set(docs.map(d=>d.url).filter(Boolean));
  for(let i=NEWS.length-1;i>=0;i--){
    const n=NEWS[i];
    if(n.src!=='Presidential Docs')continue;
    if(!n.real){NEWS.splice(i,1);continue;}          /* demo placeholder — always drop */
    if(!n.url||incoming.has(n.url))NEWS.splice(i,1); /* superseded / unusable — the fresh copy replaces it */
  }
  /* defensive sweep: collapse any real duplicates that survived (a corrupted cache could hold repeats) */
  const seen=new Set();
  for(let i=NEWS.length-1;i>=0;i--){
    const n=NEWS[i];
    if(!n.real||!n.url)continue;
    if(seen.has(n.url)){NEWS.splice(i,1);continue;}
    seen.add(n.url);
  }
  docs.forEach(d=>{if(d.url&&seen.has(d.url))return;if(d.url)seen.add(d.url);NEWS.push(d);});
  if(!fromCache)lsSet('fr_docs',JSON.stringify({t:Date.now(),docs:docs}));
  return true;
}
(function(){ /* boot: instant paint from cache, then refresh from the live API */
  try{
    const cached=JSON.parse(lsGet('fr_docs')||'null');
    if(cached&&cached.docs&&cached.docs.length){
      cached.docs.forEach(d=>{d.d=new Date(d.d);});
      if(applyRealDocs(cached.docs,true)){frState='cached';frLastSync=new Date(cached.t);}
    }
  }catch(e){}
  frFetchAll().then(n=>{
    if(n&&document.getElementById('newsList'))renderNews(); /* repaint if the feed is visible */
  });
})();

/* ============ REAL FEED — data/news.json + data/papers.json ============
   GitHub Pages cannot be crawled by the browser for most sources: commercial
   media feeds send no Access-Control-Allow-Origin, GDELT has none either and is
   rate-limited to one request per five seconds, and the public CORS proxies are
   dead or key-gated. So a scheduled job (see .github/workflows/refresh.yml) does
   the fetching on a runner, where CORS does not exist, and commits the result.
   The page then reads it same-origin — no proxy, no key, no CORS.

   Replacement is per SOURCE, not whole-feed: a source that the job fetched
   successfully shows real items; a source it could not fetch keeps its demo
   entries, each carrying a visible 「示例」 badge. That way the page is never
   silently part-demo: every row states which it is. */
let feedState='off',feedMeta=null,feedAt=null;
/* Every `cn/outlet` the pipeline is configured to fetch — from the snapshot,
   not from a list hand-maintained here (a second copy of that knowledge is
   exactly what produced the duplicate-outlet bug). Empty when it is unknown. */
let feedTargets=new Set();
/* Feed rows carry no clock time, and newsHTML prints n.time verbatim — so all
   199 rows once rendered the literal string "undefined" in their meta line. The
   stamp is derived here, at the single ingestion point, rather than in whichever
   caller happened to build the row: a same-day row shows its clock time, an older
   row shows its date, which is what a reader needs from a row that may be a week
   old. The pipeline cannot make this call because it does not know the reader's
   "today". */
function stampFor(d){
  if(!(d instanceof Date)||isNaN(d.getTime()))return '';
  const now=new Date();
  const same=d.getFullYear()===now.getFullYear()&&d.getMonth()===now.getMonth()&&d.getDate()===now.getDate();
  return same?(p2(d.getHours())+':'+p2(d.getMinutes())):(p2(d.getMonth()+1)+'-'+p2(d.getDate()));
}
function applyRealFeed(items){
  if(!items||!items.length)return false;
  const keys=new Set(items.map(i=>i.cn+'|'+i.src));   /* sources this feed actually covers */
  for(let i=NEWS.length-1;i>=0;i--){
    const n=NEWS[i];
    if(!keys.has(n.cn+'|'+n.src))continue;             /* untouched source — its demo rows stay */
    /* Remove demo rows of a covered source, and rows this feed itself put there
       last run (the feed is a full snapshot, so a url that dropped out has aged
       out). A row fetched live in this browser is KEPT — it is fresher than the
       snapshot, and the insert pass below skips any feed copy sharing its url. */
    if(!n.real||n.fed)NEWS.splice(i,1);
  }
  /* insert, deduped by url against every real row already present (the live
     presidential-document fetch may have landed first) */
  const seen=new Set();
  for(let i=NEWS.length-1;i>=0;i--){
    const n=NEWS[i];
    if(!n.real||!n.url)continue;
    if(seen.has(n.url)){NEWS.splice(i,1);continue;}
    seen.add(n.url);
  }
  items.forEach(d=>{
    if(d.url&&seen.has(d.url))return;
    if(d.url)seen.add(d.url);
    if(!d.time)d.time=stampFor(d.d instanceof Date?d.d:new Date(d.date));
    NEWS.push(d);
  });
  return true;
}
const DEMO_IDS=NEWS.map(n=>n.id); /* ids present at load — every one of them is a demo row */
let feedIdSeq=20000;
function loadRealFeed(){
  if(typeof fetch!=='function')return Promise.resolve(false);
  return fetch('data/news.json?t='+Date.now(),{cache:'no-store'})
    .then(r=>{if(!r.ok)throw new Error('HTTP '+r.status);return r.json();})
    .then(j=>{
      if(!j||!j.items||!j.items.length)throw new Error('empty feed');
      /* The on-card stamp is derived by applyRealFeed (single ingestion point) —
         see stampFor. Here we only normalise the date into a real Date. */
      const items=j.items.map(x=>Object.assign({},x,{real:true,fed:true,d:new Date(x.date),id:feedIdSeq++}));
      feedAt=j.generated?new Date(j.generated):null;
      feedMeta={n:new Set(items.map(i=>i.cn+'|'+i.src)).size,m:items.length};
      feedTargets=new Set(j.targets||[]);
      if(!applyRealFeed(items))throw new Error('apply failed');
      feedState='live';
      return true;
    })
    .catch(()=>{feedState='off';return false;});
}
/* How many distinct sources are real vs still demo — drives the honest status line. */
function feedCoverage(){
  const real=new Set(),demo=new Set(),pend=new Set(),nostream=new Set();
  NEWS.forEach(n=>{
    const k=n.cn+'|'+n.src;
    if(n.real){real.add(k);return;}
    demo.add(k);
    const r=demoReason(n);
    if(r==='pending')pend.add(k); else if(r==='nostream')nostream.add(k);
  });
  return {real:real.size,demo:demo.size,live:[...real].filter(k=>!demo.has(k)).length,
    pending:pend.size,nostream:nostream.size};
}
/* WHY a row is not real. One badge covered two very different situations, so it
   told the reader nothing actionable:
     pending  — we have a feed configured for this outlet, we just did not get it
                this run. Transient; the scheduled job retries and it goes live.
     nostream — no feed for this outlet exists in our config at all. Permanent,
                and worth saying out loud so nobody waits for rows that will never
                arrive.
     unknown  — the snapshot predates the target list. Say nothing rather than
                guess, which leaves exactly the old generic badge. */
function demoReason(n){
  if(n.real)return 'live';
  if(!feedTargets.size)return 'unknown';
  return feedTargets.has(n.cn+'/'+n.src)?'pending':'nostream';
}
/* A hand-authored row is an illustration, not a report, and it has no article
   behind it. Its authored `url` is a plausible path on the real publisher's
   domain — reuters.com/technology/fcc-drafts-curbs-chinese-optical-modules-… —
   which 404s. Rendering that as a link (and the whole card was clickable, so it
   was reachable by a stray click anywhere on the row) asserts an article that
   does not exist on a real news site. Demo rows therefore get NO article link at
   all; the outlet NAME still links to the outlet's real homepage, which is true. */
function articleHref(n){ return n.real?(n.url||'#'):'#'; }
/* The status line states, in full and in words, how much of what you are looking
   at is actually fetched: covered sources over total sources, real rows over rows
   shown, and when the snapshot was taken. It used to end with a bare "41/87" and
   the literal string "feed_updated" (an i18n key that was never defined), so the
   one line whose entire job is to be honest about provenance was the one line a
   reader could not parse. `pool` is the panel's unfiltered item set — it feeds the
   toggle's count, so the number on the button is the number of rows the button
   will actually change here. */
function feedStatusHTML(pool){
  const cov=feedCoverage();
  const demoAll=NEWS.filter(n=>!n.real).length;
  const demoHere=pool?pool.filter(n=>!n.real).length:demoAll;
  if(feedState!=='live'&&frState!=='live'&&frState!=='cached')
    return '<div class="fr-live-note feed-src-note"><span class="fr-dot"></span>'+t('feed_off')+'</div>';
  const stamp=feedAt?(' · '+t('feed_updated')+' '+feedAt.getFullYear()+'-'+p2(feedAt.getMonth()+1)+'-'+p2(feedAt.getDate())+' '+p2(feedAt.getHours())+':'+p2(feedAt.getMinutes())):'';
  /* A source is either covered by the snapshot (all of its rows are real) or it
     is not (all of its rows are demo) — per-source replacement guarantees the two
     sets never overlap, so distinct sources = fully-real + still-demo. */
  const toggle=(demoAll>0&&demoHere>0)
    ?('<button type="button" class="feed-toggle'+(state.hideDemo?' on':'')+'" data-feed-toggle="1" aria-pressed="'+(state.hideDemo?'true':'false')+'">'
      +(state.hideDemo?t('feed_show_demo').replace('{n}',demoHere):t('feed_hide_demo').replace('{n}',demoHere))+'</button>')
    :'';
  /* The uncovered half is not one thing, so it is not reported as one thing: how
     many of those outlets we have a feed for (the scheduled job will retry them)
     versus how many have no feed at all. Without this the line answered "how much
     is real" but not "will the rest ever be", which is the actual question a
     reader asks about a row that says SAMPLE. */
  const split=[];
  if(cov.pending)split.push(t('feed_split_pending').replace('{n}',cov.pending));
  if(cov.nostream)split.push(t('feed_split_nostream').replace('{n}',cov.nostream));
  return '<div class="fr-live-note feed-src-note is-live"><span class="fr-dot live"></span>'
    +'<span class="feed-note-text">'
    +t('feed_live').replace('{n}',cov.live).replace('{all}',cov.live+cov.demo)
      .replace('{m}',NEWS.filter(n=>n.real).length).replace('{rows}',NEWS.length)
    +stamp+'</span>'+toggle+'</div>'
    +(split.length?'<div class="feed-split-hint">'+split.join(' · ')+'</div>':'');
}
loadRealFeed().then(ok=>{
  /* repaint whatever is on screen once the feed lands */
  const list=document.getElementById('newsList');
  if(list&&ok){if(state.tab==='pfe')renderPFE();else renderNews();}
});

const PAPERS = [
  {id:1,j:'nature',jname:'Nature Energy',t:'lithium',title:{zh:'硫化物固态电解质动力学瓶颈的界面工程解决策略',en:'Resolving the kinetic bottleneck of sulfide solid-state electrolytes via interface engineering'},auth:'Y. Zhang, L. Wang, K. Xu, et al.',org:'Tsinghua University · 清华大学',cites:38,hot:1},
  {id:2,j:'joule',jname:'Joule',t:'aidc',title:{zh:'超大规模数据中心的碳感知工作负载调度与可再生能源协同',en:'Carbon-aware workload scheduling for hyperscale data centers with renewable co-location'},auth:'M. Chen, R. Patel, S. Kim',org:'Stanford University / Microsoft Research',cites:52,hot:1},
  {id:3,j:'applied',jname:'Applied Energy',t:'lithium',title:{zh:'面向电网储能市场的退役电池梯次利用评估框架',en:'Degradation-aware second-life battery valuation framework for grid storage markets'},auth:'H. Liu, J. Park, A. Müller',org:'Zhejiang University · 浙江大学',cites:21,hot:0},
  {id:4,j:'ieee',jname:'IEEE Trans. Power Systems',t:'energy',title:{zh:'高比例可再生能源电力系统中储能频率约束优化规划',en:'Frequency-constrained optimal planning of BESS in high-renewable power systems'},auth:'Q. Zhao, E. Brown, L. Nguyen',org:'EPRI / Xi\'an Jiaotong University',cites:17,hot:0},
  {id:5,j:'arxiv',jname:'arXiv',t:'aidc',title:{zh:'机架级冷却优化：基于 Transformer 的液冷 AI 集群数字孪生',en:'Rack-aware cooling optimization: a transformer-based digital twin for liquid-cooled AI clusters'},auth:'T. Ito, D. Silva, Y. Chen',org:'University of Tokyo / NVIDIA',cites:9,hot:1},
  {id:6,j:'nature',jname:'Nature Energy',t:'energy',title:{zh:'纯电动 vs 绿氢长途重卡：系统级全生命周期评估',en:'Battery-electric versus green-hydrogen long-haul trucking: a system-level lifecycle assessment'},auth:'S. Weber, F. Rossi, K. Tanaka',org:'Fraunhofer ISI',cites:44,hot:0},
  {id:7,j:'applied',jname:'Applied Energy',t:'aidc',title:{zh:'数据中心废热驱动吸收式制冷能量回收：试点结果',en:'Waste-heat-driven absorption cooling for data center energy recovery: pilot results'},auth:'G. Sun, P. Mehta, R. Costa',org:'Hunan University · 湖南大学',cites:13,hot:0},
  {id:8,j:'ieee',jname:'IEEE Comm. Magazine',t:'telecom',title:{zh:'6G 非地面网络融合：架构与频谱共享',en:'Non-terrestrial network integration in 6G: architecture and spectrum sharing'},auth:'A. Kowalski, J. Lee, M. Hassan',org:'Samsung R&D / TU Dresden',cites:28,hot:0},
  {id:9,j:'arxiv',jname:'arXiv',t:'lithium',title:{zh:'基于物理信息自编码器的锂离子电池制造异常检测',en:'Unsupervised anomaly detection for lithium-ion cell manufacturing with physics-informed autoencoders'},auth:'W. Huang, C. Fischer, N. Gupta',org:'CATL / KIT',cites:6,hot:0},
  {id:10,j:'joule',jname:'Joule',t:'telecom',title:{zh:'节能大规模 MIMO：5G-A 联合波束成形与功率分配',en:'Energy-efficient massive MIMO: joint beamforming and power allocation for 5G-Advanced'},auth:'L. Andersson, H. Park, X. Wu',org:'Ericsson / Chalmers',cites:15,hot:0},
  {id:11,j:'nature',jname:'Nature Energy',t:'aidc',title:{zh:'离网 AI 算力集群的绿氢微电网供电',en:'Green hydrogen-powered microgrids for off-grid AI compute clusters'},auth:'R. Mensah, S. Zhou, V. Kumar',org:'MIT / NREL',cites:31,hot:1},
  {id:12,j:'applied',jname:'Applied Energy',t:'energy',title:{zh:'碳市场不确定性下的光伏-风电-储能组合协同优化',en:'Co-optimization of solar-wind-storage portfolios under carbon market uncertainty'},auth:'F. Bianchi, Y. Nakamura, T. Gomez',org:'Politecnico di Milano',cites:19,hot:0},
  {id:13,j:'science',jname:'Science',t:'lithium',title:{zh:'高镍无钴正极的原子级稳定性调控机制',en:'Atomic-scale stabilization of cobalt-free high-nickel cathodes'},auth:'J. Lee, M. Robinson, A. Weber',org:'Harvard University / Toyota Research Institute',cites:61,hot:1},
  {id:14,j:'science',jname:'Science',t:'aidc',title:{zh:'光子计算芯片在 AI 推理中的能效突破',en:'Energy-efficiency breakthrough of photonic computing chips for AI inference'},auth:'D. Zhao, K. Müller, S. Okafor',org:'University of Cambridge / Google DeepMind',cites:47,hot:1},
  {id:15,j:'natcom',jname:'Nature Communications',t:'energy',title:{zh:'长时储能技术的并网价值评估：跨区域多市场分析',en:'Grid value of long-duration energy storage: a multi-market cross-regional analysis'},auth:'P. Harris, L. Moreau, T. Suzuki',org:'University of Oxford / RTE',cites:24,hot:0},
  {id:16,j:'natcom',jname:'Nature Communications',t:'lithium',title:{zh:'钠离子电池与磷酸铁锂的全生命周期碳排放对比',en:'Life-cycle carbon comparison of sodium-ion and LFP batteries'},auth:'S. Tan, R. Johansson, W. Chen',org:'NUS / SINTEF',cites:18,hot:0},
  {id:17,j:'ees',jname:'Energy & Environmental Science',t:'lithium',title:{zh:'硅碳负极产业化路线图：从实验室到千兆瓦时产线',en:'Industrial roadmap of silicon-carbon anodes: from lab to GWh-scale production'},auth:'E. Novak, H. Kim, J. Rivera',org:'UC Berkeley / PNNL',cites:33,hot:1},
  {id:18,j:'ees',jname:'Energy & Environmental Science',t:'energy',title:{zh:'钙钛矿/晶硅叠层电池在农业光伏中的双面收益评估',en:'Bifacial revenue assessment of perovskite/silicon tandems for agrivoltaics'},auth:'M. Fischer, C. Weber, A. Singh',org:'EPFL / Helmholtz-Zentrum Berlin',cites:15,hot:0},
  {id:19,j:'advmat',jname:'Advanced Materials',t:'lithium',title:{zh:'面向高能量密度电池的超薄阻燃隔膜设计',en:'Ultra-thin flame-retardant separator design for high-energy-density batteries'},auth:'H. Park, S. Nakamura, L. Garcia',org:'Seoul National University / LG Energy Solution',cites:29,hot:0},
  {id:20,j:'advmat',jname:'Advanced Materials',t:'telecom',title:{zh:'面向 5G 毫米波基站的高导热相变热界面材料',en:'High-thermal-conductivity phase-change thermal interface materials for 5G mmWave base stations'},auth:'K. Choi, M. Bianchi, Y. Wang',org:'KAIST / SK Telecom',cites:11,hot:0},
  {id:21,j:'nature',jname:'Nature Energy',t:'aidc',title:{zh:'数据中心绿电采购的碳核算边界问题',en:'Carbon accounting boundaries for green power procurement in data centers'},auth:'A. Johnson, F. Laurent, Z. Li',org:'Princeton / Meta',cites:26,hot:0},
  {id:22,j:'nature',jname:'Nature Energy',t:'energy',title:{zh:'全球抽水蓄能潜力图谱与选址优化',en:'Global atlas of pumped-hydro storage potential and siting optimization'},auth:'G. Clarke, N. Petrova, K. Sato',org:'Australian National University / IEA',cites:39,hot:1},
  {id:23,j:'joule',jname:'Joule',t:'energy',title:{zh:'车网互动的真实经济性：基于 2000 辆电动汽车的实证',en:'Real-world economics of vehicle-to-grid: evidence from 2,000 EVs'},auth:'O. Schmidt, E. Dupont, J. Kim',org:'Imperial College London / Octopus Energy',cites:22,hot:0},
  {id:24,j:'applied',jname:'Applied Energy',t:'aidc',title:{zh:'数据中心自然冷却与相变蓄冷的联合运行优化',en:'Joint operation optimization of free cooling and phase-change thermal storage in data centers'},auth:'R. Verma, D. Cheng, M. Novak',org:'TU Delft / Vertiv',cites:14,hot:0},
  {id:25,j:'ieee',jname:'IEEE Trans. Smart Grid',t:'telecom',title:{zh:'5G 切片电力业务承载的能效感知路由策略',en:'Energy-aware routing for 5G network slicing carrying power grid services'},auth:'T. Berger, L. Silva, H. Zhao',org:'TU Munich / Deutsche Telekom',cites:12,hot:0},
  {id:26,j:'arxiv',jname:'arXiv',t:'lithium',title:{zh:'电池数字孪生基础模型：多尺度状态估计',en:'Battery digital-twin foundation models for multi-scale state estimation'},auth:'V. Petrov, A. Rossi, S. Chen',org:'Carnegie Mellon / Redwood Materials',cites:7,hot:1}
];
/* assign relative dates so papers are always fresh — spread across 1–25 days ago so
   most are visible inside the default 7-day window, all within 30 days */
PAPERS.forEach((p,i)=>{const off=[1,2,3,5,6,7,4,8,10,12,18,25,9,11,14,16,20,22,13,17,21,24,27,29,15,19][i]||(i+1);const d=new Date(Date.now()-off*864e5);p.date=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');});

const TREND7 = [
  {d:'08-15',v:{lithium:32,aidc:41,telecom:18,energy:24}},
  {d:'08-16',v:{lithium:38,aidc:36,telecom:21,energy:19}},
  {d:'08-17',v:{lithium:27,aidc:52,telecom:16,energy:28}},
  {d:'08-18',v:{lithium:45,aidc:38,telecom:14,energy:22}},
  {d:'08-19',v:{lithium:51,aidc:44,telecom:20,energy:26}},
  {d:'08-20',v:{lithium:42,aidc:58,telecom:17,energy:31}},
  {d:'08-21',v:{lithium:36,aidc:47,telecom:19,energy:25}}
];
const JOURNAL_COLORS = {nature:'#185FA5',science:'#6C3483',natcom:'#B03A2E',joule:'#B7791F',ees:'#D35400',advmat:'#1A5276',applied:'#0E7C86',ieee:'#15976B',arxiv:'#4A5A6A'};

/* ============ TENDERS (public procurement monitor) ============ */
/* Official government procurement platforms — one-click to source. gov:true = official site */
const TENDER_PORTALS=[
  {cn:'USA',name:'SAM.gov',url:'https://sam.gov',gov:true},
  {cn:'USA',name:'Federal Register',url:'https://www.federalregister.gov',gov:true},
  {cn:'China',name:'中国政府采购网',url:'https://www.ccgp.gov.cn',gov:true},
  {cn:'China',name:'招标投标公共服务平台',url:'http://www.cebpubservice.com',gov:true},
  {cn:'Germany',name:'TED (EU)',url:'https://ted.europa.eu',gov:true},
  {cn:'UK',name:'Contracts Finder',url:'https://www.gov.uk/contracts-finder',gov:true},
  {cn:'Japan',name:'政府調達 (PPI)',url:'https://www.ppi.go.jp',gov:true},
  {cn:'South Korea',name:'나라장터',url:'https://www.g2b.go.kr',gov:true},
  {cn:'France',name:'BOAMP',url:'https://www.boamp.fr',gov:true},
  {cn:'Netherlands',name:'TenderNed',url:'https://www.tenderned.nl',gov:true},
  {cn:'Australia',name:'AusTender',url:'https://www.tenders.gov.au',gov:true},
  {cn:'Sweden',name:'Upphandling',url:'https://www.upphandlingsmyndigheten.se',gov:true}
];
const _T=Date.now(),_DH=864e5;
/* d = publish ts, ddl = deadline ts (open = ddl >= now) */
const TENDERS=[
  {id:1,t:'energy',cn:'USA',agency:'U.S. DOE',title:{zh:'DOE 电网侧储能系统集采 · 2 GWh',en:'DOE grid-scale BESS procurement · 2 GWh'},budget:'$210M',d:_T-1*_DH,ddl:_T+12*_DH,url:'https://sam.gov',src:'SAM.gov'},
  {id:2,t:'aidc',cn:'USA',agency:'DHS / CBP',title:{zh:'CBP 边境智能查验设备采购（AI 光学检测）',en:'CBP border inspection systems procurement (AI optical)'},budget:'$85M',d:_T-2*_DH,ddl:_T+6*_DH,url:'https://sam.gov',src:'SAM.gov'},
  {id:3,t:'telecom',cn:'USA',agency:'NTIA',title:{zh:'NTIA 5G-A Open RAN 测试与测量设备',en:'NTIA 5G-A Open RAN test & measurement equipment'},budget:'$40M',d:_T-3*_DH,ddl:_T+5*_DH,url:'https://sam.gov',src:'SAM.gov'},
  {id:4,t:'lithium',cn:'USA',agency:'U.S. DOE',title:{zh:'DOE 国内锂精炼产能扩建招标',en:'DOE domestic lithium refining capacity build-out'},budget:'$150M',d:_T-4*_DH,ddl:_T+20*_DH,url:'https://sam.gov',src:'SAM.gov'},
  {id:5,t:'aidc',cn:'USA',agency:'GSA',title:{zh:'GSA 联邦数据中心容量采购（上轮已截止）',en:'GSA federal data center capacity (previous round closed)'},budget:'$150M',d:_T-9*_DH,ddl:_T-3*_DH,url:'https://sam.gov',src:'SAM.gov'},
  {id:6,t:'telecom',cn:'China',agency:'中国移动',title:{zh:'中国移动 2026 年 5G 基站主设备集采',en:'China Mobile 2026 5G base station equipment tender'},budget:'¥386亿',d:_T-1*_DH,ddl:_T+15*_DH,url:'https://www.ccgp.gov.cn',src:'中国政府采购网'},
  {id:7,t:'energy',cn:'China',agency:'国家电网',title:{zh:'国家电网新型储能电站设备框架采购',en:'SGCC new-type ESS equipment framework tender'},budget:'¥520亿',d:_T-2*_DH,ddl:_T+21*_DH,url:'http://www.cebpubservice.com',src:'招标投标公共服务平台'},
  {id:8,t:'aidc',cn:'China',agency:'工信部',title:{zh:'全国算力枢纽节点国产服务器采购',en:'National compute hub domestic server procurement'},budget:'¥120亿',d:_T-3*_DH,ddl:_T+8*_DH,url:'https://www.ccgp.gov.cn',src:'中国政府采购网'},
  {id:9,t:'lithium',cn:'China',agency:'中国铁塔',title:{zh:'中国铁塔备电电池集采（上轮已截止）',en:'China Tower backup battery tender (previous round closed)'},budget:'¥48亿',d:_T-8*_DH,ddl:_T-2*_DH,url:'http://www.cebpubservice.com',src:'招标投标公共服务平台'},
  {id:10,t:'energy',cn:'Germany',agency:'Deutsche Bahn',title:{zh:'德铁铁路侧储能系统 (ESS) 采购',en:'Deutsche Bahn trackside energy storage (ESS) tender'},budget:'€28M',d:_T-2*_DH,ddl:_T+7*_DH,url:'https://ted.europa.eu',src:'TED'},
  {id:11,t:'telecom',cn:'Germany',agency:'BNetzA',title:{zh:'BNetzA 5G 频谱测量与监测设备',en:'BNetzA 5G spectrum measurement & monitoring equipment'},budget:'€6.5M',d:_T-4*_DH,ddl:_T+18*_DH,url:'https://ted.europa.eu',src:'TED'},
  {id:12,t:'energy',cn:'UK',agency:'Ofgem',title:{zh:'Ofgem 储能灵活性采购',en:'Ofgem battery storage flexibility tender'},budget:'£45M',d:_T-3*_DH,ddl:_T+6*_DH,url:'https://www.gov.uk/contracts-finder',src:'Contracts Finder'},
  {id:13,t:'energy',cn:'Japan',agency:'NEDO',title:{zh:'NEDO 储能系统导入补贴项目征集',en:'NEDO ESS deployment subsidy program call'},budget:'¥1800亿',d:_T-5*_DH,ddl:_T+30*_DH,url:'https://www.ppi.go.jp',src:'政府調達 (PPI)'},
  {id:14,t:'energy',cn:'South Korea',agency:'KEPCO',title:{zh:'韩国电力 KEPCO 电网储能 (BESS) 采购',en:'KEPCO grid battery energy storage (BESS) procurement'},budget:'₩1200亿',d:_T-2*_DH,ddl:_T+11*_DH,url:'https://www.g2b.go.kr',src:'나라장터'},
  {id:15,t:'energy',cn:'France',agency:'EDF',title:{zh:'EDF 核电机组换料大修工程服务',en:'EDF nuclear refueling & overhaul services'},budget:'€120M',d:_T-1*_DH,ddl:_T+9*_DH,url:'https://www.boamp.fr',src:'BOAMP'},
  {id:16,t:'energy',cn:'Netherlands',agency:'TenneT',title:{zh:'TenneT 北海海上风电并网换流站工程',en:'TenneT North Sea offshore grid converter station'},budget:'€85M',d:_T-2*_DH,ddl:_T+14*_DH,url:'https://www.tenderned.nl',src:'TenderNed'},
  {id:17,t:'energy',cn:'Australia',agency:'ARENA',title:{zh:'ARENA 绿氢规模化示范项目资助',en:'ARENA green hydrogen scale-up demonstration funding'},budget:'AUD 300M',d:_T-3*_DH,ddl:_T+22*_DH,url:'https://www.tenders.gov.au',src:'AusTender'},
  {id:18,t:'energy',cn:'Sweden',agency:'Svenska kraftnät',title:{zh:'瑞典国家电网 220kV 输电线路升级改造',en:'Svenska kraftnät 220kV transmission line upgrade'},budget:'SEK 750M',d:_T-1*_DH,ddl:_T+5*_DH,url:'https://www.upphandlingsmyndigheten.se',src:'Upphandling'},
  {id:19,t:'telecom',cn:'Switzerland',agency:'SBB',title:{zh:'瑞士联邦铁路 SBB 信号系统现代化改造',en:'SBB railway signaling system modernization'},budget:'CHF 210M',d:_T-2*_DH,ddl:_T+28*_DH,url:'https://www.simap.ch',src:'simap.ch'}
];

/* ============ STATE ============ */
function lsGet(k){try{return localStorage.getItem(k);}catch(e){return null;}}
function lsSet(k,v){try{localStorage.setItem(k,v);}catch(e){}}
/* hideDemo defaults to ON. The page must not present hand-authored rows as a
   feed unless the reader asks for them; `tl_showdemo` records an explicit opt-in
   (and the toggle below is how it is set), so the default is "real data only". */
const state = {country:'USA',tab:'all',newsShown:7,papersShown:6,paperJournal:'all',paperQuery:'',live:true,lang:lsGet('tl_lang')||'zh',tenderSector:'all',tenderStatus:'all',tenderQ:'',govSrc:'all',hideDemo:lsGet('tl_showdemo')!=='1'};

/* ============ HELPERS ============ */
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
/* Render-time sanitiser for feed-supplied text. The pipeline cleans summaries,
   but data already in the wild (news.json written by an older runner) can still
   carry double-escaped markup like 'a href="https://…"' — strip it here too so
   a stale file can never print code into the feed or blow out the layout. */
const plainText = s => String(s == null ? '' : s)
  .replace(/&lt;/gi,'<').replace(/&gt;/gi,'>').replace(/&quot;/gi,'"')
  .replace(/&#0*39;|&apos;/gi,"'").replace(/&nbsp;/gi,' ')
  .replace(/<[^>]*>/g,' ')
  .replace(/&amp;/gi,'&')
  .replace(/&[a-z]+;/gi,' ')
  .replace(/\s+/g,' ').trim();
const t = k => (I18N[state.lang]||I18N.zh)[k] || k;
function toast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(el._h);el._h=setTimeout(()=>el.classList.remove('show'),2200);}
function go(page){$$('.nav-item').forEach(n=>n.classList.toggle('active',n.dataset.page===page));$$('.page').forEach(p=>p.classList.toggle('active',p.id==='page-'+page));$('#main').scrollTop=0;renderAll();}

/* ============ LANG ============ */
/* Unit-bearing KPI figures. The Chinese figures are expressed in 万 / 亿 / 万亿,
   which an English reader cannot parse, and the numeral has to move with the unit
   (425.6 万 = 4.26 M) — so this cannot be a plain string swap. The values are
   scaled, not rounded away: 4,256,000 base stations is 4.26 M. */
const KPI_UNITS={
  ai4:{zh:['86.4','万'],      en:['864','K']},       /* 864,000 racks          */
  tc1:{zh:['425.6','万'],     en:['4.26','M']},      /* 4,256,000 base station */
  tc2:{zh:['10.9','亿'],      en:['1.09','B']},      /* 1,090,000,000 users    */
  eg1:{zh:['9.36','万亿kWh'], en:['9.36','T kWh']}   /* 9.36 TWh               */
};
/* A field that is either a plain string (a date, a percentage) or a {zh,en} pair. */
function istr(v,lang){return typeof v==='string'?v:(v?(v[lang]||v.zh||''):'');}
function applyLang(){
  document.documentElement.lang = state.lang==='zh'?'zh-CN':'en';
  document.title = t('app_title');
  /* textContent is correct here only because these elements hold text and nothing
     else: an element with children would have those children deleted. That is
     exactly how the six page subtitles used to lose their country locator, so
     index.html now keeps the locator as a sibling and the smoke test asserts no
     data-i18n element has element children. */
  $$('[data-i18n]').forEach(el=>{el.textContent=t(el.dataset.i18n);});
  $$('[data-i18n-ph]').forEach(el=>{el.placeholder=t(el.dataset.i18nPh);});
  $$('[data-kpi]').forEach(el=>{
    const u=KPI_UNITS[el.dataset.kpi];if(!u)return;
    const pair=u[state.lang]||u.zh;
    el.innerHTML=pair[0]+'<span class="unit">'+pair[1]+'</span>';
  });
  $('#langLabel').textContent = state.lang==='zh'?'EN':'中文';
  /* #dateRangeLabel is otherwise only written by setDateRange, so it kept the
     language it was initialised in while the rest of the page switched. */
  $('#dateRangeLabel').textContent = rngLabel('ovNews');
  renderAll();
}
function setLang(l){state.lang=l;lsSet('tl_lang',l);applyLang();toast(l==='zh'?'已切换为中文':'Switched to English');}

/* ============ COUNTRY ============ */
function buildCountryDrop(){
  $('#countryDrop').innerHTML = COUNTRIES.map(cn=>`<div class="country-opt" data-cn="${cn}"><span style="font-size:15px">${FLAGS[cn]}</span> ${cn} <span class="check" style="visibility:hidden">✓</span></div>`).join('');
  $$('#countryDrop .country-opt').forEach(o=>o.addEventListener('click',()=>setCountry(o.dataset.cn)));
}
function setCountry(cn){
  state.country=cn;
  $('#countryLabel').textContent=cn;
  $('#flagImg').textContent=FLAGS[cn];
  $('#priceCountryChip').textContent=FLAGS[cn]+' '+cn;
  $$('#countryDrop .country-opt').forEach(o=>{const on=o.dataset.cn===cn;o.classList.toggle('active',on);o.querySelector('.check').style.visibility=on?'visible':'hidden';});
  $$('.page-title .loc').forEach(el=>el.textContent=cn);
  renderAll();
  toast((state.lang==='zh'?'已切换监测区域 → ':'Switched region → ')+cn);
}
$('#countryBtn').addEventListener('click',e=>{e.stopPropagation();$('#countryDrop').classList.toggle('open');});
document.addEventListener('click',e=>{if(!e.target.closest('.country-wrap'))$('#countryDrop').classList.remove('open');});

/* ============ DATE & TIME RANGE (unified, per-module) ============ */
const RANGE_PRESETS=[
  {k:'24h',days:1,label:()=>t('rp_24h')},
  {k:'7d',days:7,label:()=>t('rp_7d')},
  {k:'30d',days:30,label:()=>t('rp_30d')},
  {k:'90d',days:90,label:()=>t('rp_90d')},
  {k:'1y',days:365,label:()=>t('rp_1y')}
];
function presetDays(k){const p=RANGE_PRESETS.find(x=>x.k===k);return p?p.days:7;}
function p2(n){return String(n).padStart(2,'0');}
function fmtDT(d){return (d.getMonth()+1)+'-'+p2(d.getDate())+' '+p2(d.getHours())+':'+p2(d.getMinutes());}
function fmtDate(d){return d.getFullYear()+'-'+p2(d.getMonth()+1)+'-'+p2(d.getDate());}
function fmtTime(d){return p2(d.getHours())+':'+p2(d.getMinutes());}
function seeded(x){const s=Math.sin(x*12.9898)*43758.5453;return s-Math.floor(s);}
state.ranges=state.ranges||{};
function rngNow(key){
  const r=state.ranges[key]||{preset:'7d'};
  const end=new Date();
  if(r.preset==='custom'&&r.start&&r.end)return {start:r.start,end:r.end,preset:'custom'};
  const start=new Date(end.getTime()-presetDays(r.preset)*864e5);
  return {start,end,preset:r.preset};
}
function rngLabel(key){
  const {start,end,preset}=rngNow(key);
  if(preset==='custom')return fmtDT(start)+' ~ '+fmtDT(end);
  const p=RANGE_PRESETS.find(x=>x.k===preset);return p?p.label():preset;
}
function mountRangePicker(mountId,key,onChange){
  const m=$('#'+mountId);if(!m)return null;
  m.className='rp';
  const zh=state.lang==='zh';
  m.innerHTML='<button class="rp-btn" type="button" title="'+t('rp_title')+'"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg><span class="rp-label"></span><span class="rp-caret"></span></button><div class="rp-pop"><div class="rp-presets"></div><div class="rp-custom"><div class="rp-row"><span class="rp-lbl">'+t('rp_from')+'</span><input type="date" class="rp-in rp-d1"><input type="time" class="rp-in rp-t1"></div><div class="rp-row"><span class="rp-lbl">'+t('rp_to')+'</span><input type="date" class="rp-in rp-d2"><input type="time" class="rp-in rp-t2"></div><div class="rp-foot"><button class="btn primary rp-apply" type="button">'+t('rp_apply')+'</button></div></div></div>';
  const btn=m.querySelector('.rp-btn'),pop=m.querySelector('.rp-pop'),pre=m.querySelector('.rp-presets'),cust=m.querySelector('.rp-custom');
  RANGE_PRESETS.forEach(p=>{const b=document.createElement('button');b.type='button';b.className='rp-chip';b.dataset.k=p.k;b.textContent=p.label();pre.appendChild(b);});
  const cb=document.createElement('button');cb.type='button';cb.className='rp-chip rp-cust';cb.dataset.k='custom';cb.textContent=t('rp_custom');pre.appendChild(cb);
  const refresh=()=>{const cur=(state.ranges[key]||{preset:'7d'}).preset;pre.querySelectorAll('.rp-chip').forEach(c=>c.classList.toggle('active',c.dataset.k===cur));btn.querySelector('.rp-label').textContent=rngLabel(key);};
  btn.addEventListener('click',e=>{e.stopPropagation();pop.classList.toggle('open');refresh();const r=state.ranges[key]||{preset:'7d'};cust.classList.toggle('show',r.preset==='custom');if(r.preset==='custom'){m.querySelector('.rp-d1').value=fmtDate(r.start);m.querySelector('.rp-t1').value=fmtTime(r.start);m.querySelector('.rp-d2').value=fmtDate(r.end);m.querySelector('.rp-t2').value=fmtTime(r.end);}});
  pre.querySelectorAll('.rp-chip').forEach(c=>c.addEventListener('click',e=>{
    e.stopPropagation();
    if(c.dataset.k==='custom'){pop.classList.add('open');cust.classList.add('show');return;}
    state.ranges[key]={preset:c.dataset.k};pop.classList.remove('open');cust.classList.remove('show');refresh();if(onChange)onChange(key);
  }));
  m.querySelector('.rp-apply').addEventListener('click',e=>{e.stopPropagation();const d1=m.querySelector('.rp-d1').value,t1=m.querySelector('.rp-t1').value||'00:00',d2=m.querySelector('.rp-d2').value,t2=m.querySelector('.rp-t2').value||'23:59';if(!d1||!d2){toast(zh?'请选择起止日期':'Select start & end dates');return;}const s=new Date(d1+'T'+t1),en=new Date(d2+'T'+t2);if(s>en){toast(zh?'开始时间不能晚于结束时间':'Start must be before end');return;}state.ranges[key]={preset:'custom',start:s,end:en};pop.classList.remove('open');refresh();if(onChange)onChange(key);toast(zh?'已应用自定义范围':'Custom range applied');});
  document.addEventListener('click',e=>{if(!m.contains(e.target))pop.classList.remove('open');});
  m._refresh=refresh;refresh();
  return m;
}
function refreshPickers(){document.querySelectorAll('.rp').forEach(r=>r._refresh&&r._refresh());}

/* ============ GLOBAL NEWS RANGE (topbar) ============ */
function setDateRange(d){
  const now=new Date();
  if(d==='today'){state.ranges.ovNews={preset:'24h'};}
  else if(d==='yesterday'){const st=new Date(now);st.setDate(st.getDate()-1);state.ranges.ovNews={preset:'custom',start:new Date(st.getFullYear(),st.getMonth(),st.getDate(),0,0),end:new Date(st.getFullYear(),st.getMonth(),st.getDate(),23,59)};}
  else if(d==='7d'){state.ranges.ovNews={preset:'7d'};}
  else if(d==='30d'){state.ranges.ovNews={preset:'30d'};}
  else if(d==='custom'){$('#dateModal').classList.add('open');return;}
  $('#dateRangeLabel').textContent=rngLabel('ovNews');
  refreshPickers();
  renderNews();
}
$('#dateBtn').addEventListener('click',()=>setDateRange('custom'));
$('#dCancel').addEventListener('click',()=>{setDateRange('today');$('#dateModal').classList.remove('open');});
$('#dApply').addEventListener('click',()=>{const s=$('#dStart').value,t1=$('#dStartT').value||'00:00',e=$('#dEnd').value,t2=$('#dEndT').value||'23:59';if(!s||!e)return;state.ranges.ovNews={preset:'custom',start:new Date(s+'T'+t1),end:new Date(e+'T'+t2)};$('#dateRangeLabel').textContent=rngLabel('ovNews');$('#dateModal').classList.remove('open');refreshPickers();renderNews();toast(state.lang==='zh'?'已应用自定义日期时间范围':'Custom date & time range applied');});
$('#dateModal').addEventListener('click',ev=>{if(ev.target===$('#dateModal'))$('#dateModal').classList.remove('open');});

/* ============ NEWS ============ */
function tagInfo(type){const m={lithium:['tag_lithium','t-lithium'],aidc:['tag_aidc','t-aidc'],telecom:['tag_telecom','t-telecom'],energy:['tag_energy','t-energy'],trade:['tag_trade','t-trade'],pfe:['tag_pfe','t-pfe']};return m[type]||['tag_trade','t-trade'];}
function newsHTML(n){
  const ti=tagInfo(n.t);
  const lang=state.lang;
  const title=plainText(lang==='zh'?(n.title.zh||n.title):(n.title.en||n.title.zh||n.title));
  const sum=plainText(lang==='zh'?(n.sum.zh||n.sum):(n.sum.en||n.sum.zh||n.sum));
  const href=articleHref(n);
  const hasArticle=href!=='#';
  const srcLink=NEWS_MEDIA[n.cn]&&NEWS_MEDIA[n.cn].find(m=>m.name===n.src);
  /* a real feed brings real outlets (theelec.kr, golem.de, …) that were never in
     the curated outlet list — point the source link at the article instead of "#" */
  const srcUrl=srcLink?srcLink.url:(n.real?(n.url||'#'):'#');
  const isGov=srcLink&&srcLink.gov;
  /* Every row states whether it is real or demo. Without this the page showed a
     silent mix — real presidential documents dated 2026-10-07 beside demo items
     stamped "today 09:50" — with no way to tell which was which. */
  /* the stamp is optional — a missing one must vanish, never print "undefined" */
  const when=n.time?('<span class="sep"></span>'+esc(String(n.time))):'';
  const reason=demoReason(n);
  /* Three states, not two: LIVE, "we have a feed for this but did not get it"
     (transient), and "there is no feed for this" (permanent). The old single
     SAMPLE badge left the reader unable to tell a retry from a dead end. */
  const demoBadge=n.real
    ?'<span class="tag t-live">LIVE</span>'
    :(reason==='pending'
      ?'<span class="tag t-demo t-pending" title="'+esc(t('feed_pending_hint'))+'">'+t('feed_pending')+'</span>'
      :'<span class="tag t-demo" title="'+esc(reason==='nostream'?t('feed_nostream_hint'):t('feed_hint'))+'">'+t('feed_demo')+'</span>');
  /* A row with no article must not pretend to have one — see articleHref. */
  const titleHTML=hasArticle
    ?'<a href="'+esc(href)+'" target="_blank" rel="noopener" onclick="event.stopPropagation()">'+esc(title)+'</a>'
    :'<span>'+esc(title)+'</span>';
  const readExt=hasArticle
    ?'<span class="sep"></span><a class="read-ext" href="'+esc(href)+'" target="_blank" rel="noopener" onclick="event.stopPropagation()">'+(lang==='zh'?'阅读原文':'Read article')+' ↗</a>'
    :'<span class="sep"></span><span class="no-src">'+esc(t('feed_no_link'))+'</span>';
  return `<div class="news-item${n.real?'':' is-demo'}${hasArticle?'':' no-link'}"${hasArticle?` data-href="${esc(href)}"`:''}><div class="news-rail"><span class="news-dot ${ti[1]}"></span><span class="line"></span></div><div class="news-body"><div class="news-meta"><a class="src" href="${esc(srcUrl)}" target="_blank" rel="noopener" onclick="event.stopPropagation()">${esc(n.src)}</a>${isGov?'<span class="tag t-gov">GOV</span>':''}${demoBadge}${when}<span class="sep"></span>${FLAGS[n.cn]||''} ${n.cn}${readExt}</div><div class="news-title">${titleHTML}</div><div class="news-summary">${esc(sum)}</div><div class="news-tags"><span class="tag ${ti[1]}">${t(ti[0])}</span>${n.tags.map(x=>`<span class="tag t-country">${esc(termLabel(x))}</span>`).join('')}</div></div></div>`;
}
/* Strict range filtering — the window the user picked is honoured. We never silently render items
   that fall outside it (that made "近24小时" look identical to "近7天"). An empty window gets an
   explicit "no news in this range" state plus one-click widening buttons instead. */
function rangeFilter(list,start,end){return list.filter(n=>n.d>=start&&n.d<=end);}
/* Feed ordering. Federal Register documents are date-granular (they sit at local
   midnight) while demo rows carry an authored clock, so a plain d-desc sort put
   every demo row stamped "today 09:50" above a real document published today —
   the visible top of the feed was demo data while real data sat below it. Compare
   by DAY first, and on the same day put real rows first. No timestamp is invented
   to achieve this. */
function dayKey(d){return d.getFullYear()*10000+(d.getMonth()+1)*100+d.getDate();}
function newsCmp(a,b){
  const ka=dayKey(a.d),kb=dayKey(b.d);
  if(ka!==kb)return kb-ka;
  if(!!a.real!==!!b.real)return a.real?-1:1;
  return b.d-a.d;
}
function rangeEmptyHTML(pool,key){
  const zh=state.lang==='zh',now=Date.now();
  const alts=[['7d',7],['30d',30],['90d',90]]
    .map(o=>({k:o[0],c:pool.filter(n=>now-n.d<=o[1]*864e5).length}))
    .filter(a=>a.c>0);
  const detail=alts.map(a=>{const p=RANGE_PRESETS.find(x=>x.k===a.k);return (p?p.label():a.k)+' '+a.c+(zh?' 条':' items');}).join(' · ');
  return '<div class="empty news-range-empty">'+t('news_range_empty').replace('{range}',rngLabel(key))
    +(detail?'<div class="nre-avail">'+t('news_range_avail')+detail+'</div>':'')
    +(alts.length?'<div class="nre-actions">'+alts.map(a=>'<button class="btn ghost nre-btn" type="button" data-widen="'+a.k+'">'+t('rp_'+a.k)+'</button>').join('')+'</div>':'')
    +'</div>';
}
/* An empty panel has two causes and must not report one as the other: sample rows
   being held back by the filter (say that, and offer the reveal) versus genuinely
   nothing in the range (offer the widen buttons). When both are true the reader
   gets both — the widen hints are computed from the real pool, so they never
   advertise a sample row. */
function demoHiddenHTML(n){
  return '<div class="empty news-range-empty demo-hidden-note">'+t('news_only_demo')
    +'<div class="nre-actions"><button class="btn ghost" type="button" data-show-demo="1">'
    +t('feed_show_demo').replace('{n}',n)+'</button></div></div>';
}
function listOrEmpty(list,winDemo,poolDemo,pool,key){
  if(list.length)return list.map(newsHTML).join('');
  if(state.hideDemo&&winDemo)return demoHiddenHTML(winDemo);
  return rangeEmptyHTML(pool,key)+((state.hideDemo&&poolDemo)?demoHiddenHTML(poolDemo):'');
}
function countDemo(list){return list.filter(n=>!n.real).length;}
/* Widen buttons: switch this panel's preset and re-render it (picker label follows along) */
function bindWiden(rootSel,key,rerender){
  $$(rootSel+' .nre-btn').forEach(b=>b.addEventListener('click',e=>{
    e.stopPropagation();
    state.ranges[key]={preset:b.dataset.widen};
    refreshPickers();rerender();
  }));
}
function renderNews(){
  if(state.tab==='pfe'){renderPFE();return;}
  const {start,end}=rngNow('ovNews');
  let list=NEWS.filter(n=>n.cn===state.country); /* strictly the selected country's own news */
  if(state.tab!=='all')list=list.filter(n=>n.t===state.tab);
  const poolAll=list; /* country (+ sector), unfiltered and pre-window */
  /* Everything the reader is told about the demo rows is counted from ONE set —
     what the selected window holds before the demo filter. Count the button from
     the pre-window pool instead and it advertises "hide 8 sample rows" while only
     3 of them are in the window, so clicking appears to do nothing. */
  const winAll=rangeFilter(poolAll,start,end);
  /* counted before the demo filter — this is what the reveal button would bring back */
  if(state.hideDemo)list=list.filter(n=>n.real);
  const pool=list; /* country (+ sector) pool, used for the "available in other ranges" hints */
  const inWindow=rangeFilter(list,start,end).sort(newsCmp);
  const total=inWindow.length; /* items inside the selected range — shown in the badge so the range choice is visible even when the feed caps at newsShown */
  list=inWindow.slice(0,state.newsShown);
  let html=feedStatusHTML(winAll);
  html+=listOrEmpty(list,countDemo(winAll),countDemo(poolAll),pool,'ovNews');
  if(total>list.length)html+='<div class="feed-shown-hint">'+t('news_shown_of').replace('{shown}',list.length).replace('{total}',total)+'</div>';
  $('#newsList').innerHTML=html;
  $('#newsCount').textContent=total;
  if($('#ovNewsTitle'))$('#ovNewsTitle').textContent=t('pn_news');
  $('#loadMoreNews').style.display=list.length<total?'':'none'; /* hide once every in-window item is displayed */
  bindWiden('#newsList','ovNews',renderNews);
  // Attach click-to-open on news items
  $$('#newsList .news-item').forEach(item=>{
    item.addEventListener('click',()=>{
      const href=item.dataset.href;
      if(href&&href!=='#')window.open(href,'_blank','noopener');
    });
  });
}
/* Is this news item sourced from an official government site (gov:true)? */
function isGovNews(n){
  const s=NEWS_MEDIA[n.cn]&&NEWS_MEDIA[n.cn].find(m=>m.name===n.src);
  return !!(s&&s.gov);
}
/* PFE view — kept deliberately simple: only two sections.
   1) Industry News  (non-gov PFE items)
   2) Government Policy (gov-sourced items + official site quick links) */
function renderPFE(){
  const {start,end}=rngNow('ovNews');
  const pfeAll=NEWS.filter(n=>n.t==='pfe'); /* unfiltered, pre-window */
  const winAll=rangeFilter(pfeAll,start,end); /* one source of truth for the demo counts */
  /* The demo counts are taken from the UNFILTERED pools, so the "reveal" wording
     on the industry / government empty states names what is really hidden there. */
  const indPool=NEWS.filter(n=>n.t==='pfe'&&!isGovNews(n)).sort(newsCmp);
  const govPool=NEWS.filter(n=>n.t==='pfe'&&isGovNews(n)).sort(newsCmp);
  const govPoolS=state.govSrc==='all'?govPool:govPool.filter(n=>n.src===state.govSrc);
  /* The chip counts below are derived from govAll, so the demo filter has to be
     applied here — otherwise a chip could advertise 3 items and yield 0 rows. */
  const keep=state.hideDemo?(n=>!!n.real):(n=>true);
  const govAll=govPool.filter(keep);
  const ind=indPool.filter(keep);
  const gov=govPoolS.filter(keep); /* source-filtered gov list, most recent first */
  const indIn=rangeFilter(ind,start,end);
  const govIn=rangeFilter(gov,start,end);
  let html='';
  /* Section 1 — industry news */
  html+='<div class="news-sec-title"><span class="bar"></span>'+t('pfe_industry')+'<span class="cnt">'+indIn.length+'</span></div>';
  html+=listOrEmpty(indIn,countDemo(rangeFilter(indPool,start,end)),countDemo(indPool),ind,'ovNews');
  /* Section 2 — government policy + source filter chips
     Chip body = filter the gov list in-place; the ↗ sub-button = direct link to the official site */
  html+='<div class="news-sec-title gov"><span class="bar"></span>'+t('pfe_gov')+'<span class="cnt">'+govIn.length+'</span></div>';
  const govSrc=(NEWS_MEDIA.USA||[]).filter(m=>m.gov);
  if(govSrc.length){
    /* Chip counts are IN-WINDOW, not all-time. An all-time count disagreed with the section count
       above it and, worse, advertised items ("Presidential Docs 18") that clicking could never show
       because they sit outside the selected range. Now the number is exactly what a click yields,
       so a 0 is a useful signal instead of a dead end. */
    const govInWin=govAll.filter(n=>n.d>=start&&n.d<=end);
    let chips='<span class="gov-chip"><button type="button" class="gcf'+(state.govSrc==='all'?' active':'')+'" data-src="all" title="'+esc(t('gov_f_hint'))+'" >'+esc(t('gov_f_all'))+'<span class="gc-cnt">'+govInWin.length+'</span></button></span>';
    chips+=govSrc.map(m=>{
      const cnt=govInWin.filter(n=>n.src===m.name).length;
      const cls='gcf'+(state.govSrc===m.name?' active':'')+(cnt?'':' gc-zero');
      return '<span class="gov-chip">'
        +'<button type="button" class="'+cls+'" data-src="'+esc(m.name)+'" title="'+esc(m.name)+' · '+esc(t('gov_f_hint'))+'"'+(cnt?'':' disabled')+'>'+esc(m.name)+'<span class="gc-cnt">'+cnt+'</span></button>'
        +'<a class="gce" href="'+esc(m.url)+'" target="_blank" rel="noopener" title="'+esc(m.name)+' · '+t('gov_open_site')+'">↗</a>'
        +'</span>';
    }).join('');
    html+='<div class="gov-src-row">'+chips+'</div>';
  }
  /* live-source status: the scheduled job covers the whole feed; the older
     presidential-document notes only apply when nothing else came through. */
  const frNote=feedState==='live'?null:(frState==='live'?'pfe_fr_live':(frState==='cached'?'pfe_fr_cached':'pfe_fr_off'));
  html+=frNote
    ?('<div class="fr-live-note feed-src-note"><span class="fr-dot"></span>'+t(frNote)+(frLastSync?' · '+frLastSync.getFullYear()+'-'+String(frLastSync.getMonth()+1).padStart(2,'0')+'-'+String(frLastSync.getDate()).padStart(2,'0'):'')+'</div>')
    :feedStatusHTML(winAll);
  /* Each section reports its own "all sample / nothing here" state — the section
     count above it is per-section, so one shared empty state would contradict one
     of the two. */
  html+=listOrEmpty(govIn,countDemo(rangeFilter(govPoolS,start,end)),countDemo(govPoolS),gov,'ovNews');
  $('#newsList').innerHTML=html;
  $('#newsCount').textContent=indIn.length+govIn.length;
  if($('#ovNewsTitle'))$('#ovNewsTitle').textContent=t('pfe_title');
  $('#loadMoreNews').style.display='none';
  bindWiden('#newsList','ovNews',renderNews);
  // Attach click-to-open on news items
  $$('#newsList .news-item').forEach(item=>{
    item.addEventListener('click',()=>{
      const href=item.dataset.href;
      if(href&&href!=='#')window.open(href,'_blank','noopener');
    });
  });
  // Attach source-filter behaviour on gov chips (↗ sub-button keeps its direct official-site link)
  $$('#newsList .gov-src-row .gcf').forEach(btn=>{
    btn.addEventListener('click',()=>{
      state.govSrc=btn.dataset.src;
      renderPFE();
    });
  });
}
$('#loadMoreNews').addEventListener('click',()=>{state.newsShown+=5;renderNews();});
/* Real-data-only is the default, not an opt-in. Switching it re-renders every
   news surface in one place, so the overview feed, the PFE view and all six
   sector panels agree; nothing is deleted, the sample rows are one click away. */
function setHideDemo(v){
  state.hideDemo=!!v;
  lsSet('tl_showdemo',state.hideDemo?'0':'1');
  if(state.tab==='pfe')renderPFE();else renderNews();
  renderSectorNews('#liNewsList','lithium','liNews',5);
  renderSectorNews('#aiNewsList','aidc','aiNews',5);
  renderSectorNews('#tcNewsList','telecom','tcNews',5);
  renderSectorNews('#egNewsList','energy','egNews',5);
  renderSectorNews('#tradeNewsList','trade','tradeNews',6);
  renderSectorNews('#tcNewsMini','telecom','tcMini',4);
}
document.addEventListener('click',ev=>{
  const tgt=ev.target&&ev.target.closest?ev.target.closest('[data-feed-toggle],[data-show-demo]'):null;
  if(!tgt)return;
  ev.preventDefault();
  ev.stopPropagation();
  setHideDemo(tgt.hasAttribute('data-show-demo')?false:!state.hideDemo);
});
$$('#ovTabs .tab').forEach(tab=>tab.addEventListener('click',()=>{$$('#ovTabs .tab').forEach(x=>x.classList.toggle('active',x===tab));state.tab=tab.dataset.f;renderNews();}));
function renderSectorNews(id,type,key,count){
  const k=key||'7d';
  const {start,end}=rngNow(k);
  const own=NEWS.filter(n=>n.t===type&&n.cn===state.country); /* own-country news first */
  const poolAll=own.length?own:NEWS.filter(n=>n.t===type);   /* global fallback only when the country has none */
  const pool=state.hideDemo?poolAll.filter(n=>n.real):poolAll;
  const inWindow=rangeFilter(pool,start,end).sort(newsCmp);
  const list=inWindow.slice(0,count||5);
  let html=listOrEmpty(list,countDemo(rangeFilter(poolAll,start,end)),countDemo(poolAll),pool,k);
  if(inWindow.length>list.length)html+='<div class="feed-shown-hint">'+t('news_shown_of').replace('{shown}',list.length).replace('{total}',inWindow.length)+'</div>';
  $(id).innerHTML=html;
  bindWiden(id,k,()=>renderSectorNews(id,type,key,count));
  // Attach click-to-open
  $$(id+' .news-item').forEach(item=>{
    item.addEventListener('click',()=>{
      const href=item.dataset.href;
      if(href&&href!=='#')window.open(href,'_blank','noopener');
    });
  });
}

/* ============ TENDER MONITOR ============ */
/* Official platform quick links — highlighted for the currently selected country */
function renderTenderPortals(){
  const el=$('#tenderPortals');if(!el)return;
  const rank=cn=>{const i=COUNTRIES.indexOf(cn);return i<0?99:i;};
  const ordered=[...TENDER_PORTALS].sort((a,b)=>rank(a.cn)-rank(b.cn));
  el.innerHTML=ordered.map(p=>`<a href="${esc(p.url)}" target="_blank" rel="noopener" class="${p.cn===state.country?'cur':''}"><span class="pf">${FLAGS[p.cn]||''}</span>${esc(termLabel(p.name))} ↗</a>`).join('');
}
function tenderHTML(x){
  const ti=tagInfo(x.t),zh=state.lang==='zh',now=Date.now();
  const title=zh?(x.title.zh||x.title):(x.title.en||x.title.zh||x.title);
  const open=x.ddl>=now,days=Math.ceil((x.ddl-now)/864e5);
  const ddlTxt=open?(days<=0?t('tn_today'):t('tn_days').replace('{n}',days)):t('tn_closed');
  const ddlCls=open?(days<=7?'due':'open'):'closed';
  return `<div class="tender-item" data-href="${esc(x.url)}"><div class="tender-left"><div class="tender-top"><span class="tag ${ti[1]}">${t(ti[0])}</span><span class="tag t-status t-${ddlCls}">${open?t('tn_open'):t('tn_closed')}</span></div><div class="tender-title"><a href="${esc(x.url)}" target="_blank" rel="noopener" onclick="event.stopPropagation()">${esc(title)}</a></div><div class="tender-meta"><span class="tend-agency">${esc(termLabel(x.agency))}</span><span class="sep"></span><span>${FLAGS[x.cn]||''} ${x.cn}</span><span class="sep"></span><span>📅 ${fmtDate(new Date(x.d))}</span><span class="sep"></span><a class="tend-src" href="${esc(x.url)}" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="${esc(t('tn_view'))}">${esc(termLabel(x.src))} ↗</a></div></div><div class="tender-right"><div class="tender-budget">${esc(budgetLabel(x.budget))}</div><div class="tender-ddl ${ddlCls}">${ddlTxt}</div><a class="btn ghost tender-go" href="${esc(x.url)}" target="_blank" rel="noopener" onclick="event.stopPropagation()">${t('tn_view')} ↗</a></div></div>`;
}
function renderTenders(){
  const now=Date.now(),zh=state.lang==='zh';
  let list=TENDERS.filter(x=>state.tenderSector==='all'||x.t===state.tenderSector)
    .filter(x=>state.tenderStatus==='all'||(state.tenderStatus==='open'?x.ddl>=now:x.ddl<now))
    .filter(x=>x.cn===state.country); /* linked to the global region selector */
  const q=(state.tenderQ||'').trim().toLowerCase();
  if(q)list=list.filter(x=>(zh?(x.title.zh||''):(x.title.en||x.title.zh||'')).toLowerCase().indexOf(q)>=0||x.agency.toLowerCase().indexOf(q)>=0||x.src.toLowerCase().indexOf(q)>=0||x.cn.toLowerCase().indexOf(q)>=0);
  const open=list.filter(x=>x.ddl>=now).length;
  const due=list.filter(x=>x.ddl>=now&&x.ddl-now<=7*864e5).length;
  const setTxt=(id,v)=>{const el=$(id);if(el)el.textContent=v;};
  setTxt('#tnStatOpen',open);setTxt('#tnStatExp',due);
  setTxt('#tnStatMkt',new Set(TENDERS.map(x=>x.cn)).size); /* global coverage: all monitored markets */
  setTxt('#tnStatNew',list.filter(x=>now-x.d<=7*864e5).length);
  setTxt('#tnCount',list.length);
  const nb=$('#tnBadge');if(nb)nb.textContent=TENDERS.filter(x=>x.ddl>=now).length;
  /* open tenders first, soonest deadline on top; closed at the bottom */
  list.sort((a,b)=>(a.ddl>=now?0:1)-(b.ddl>=now?0:1)||a.ddl-b.ddl);
  $('#tenderList').innerHTML=list.length?list.map(tenderHTML).join(''):'<div class="empty">'+t('tn_empty')+'<br><span style="font-size:10.5px">'+t('tn_empty_hint')+'</span></div>';
  $$('#tenderList .tender-item').forEach(it=>{it.addEventListener('click',()=>{const h=it.dataset.href;if(h&&h!=='#')window.open(h,'_blank','noopener');});});
}

/* ============ PRICE TABLE ============ */
function renderPrices(){
  const cn=state.country,zh=state.lang==='zh',gs=GROUP_SRC;
  let html='<thead><tr><th>'+t('th_commodity')+'</th><th>'+t('th_spot')+'</th><th>'+t('th_24h')+'</th><th>'+t('th_7d')+'</th><th>'+t('th_30d')+'</th></tr></thead><tbody>';
  PRICE_GROUPS.forEach(g=>{
    const src=gs[g.id];
    const srcCell=src?'<a class="t-src" href="'+esc(src.url)+'" target="_blank" rel="noopener" title="'+esc(zh?'参考行情机构，点击访问':'reference pricing desk — click to open')+'">'+esc(zh?src.name.zh:src.name.en)+' ↗</a>':'';
    html+=`<tr class="price-group ${g.cls}"><th colspan="5"><span class="grp-head">${g.rows.some(r=>r.hot)?'<span class="star">★</span>':''}${t(g.i18n)}</span>${srcCell}</th></tr>`;
    g.rows.forEach(r=>{
      const price=(r.v[cn]||r.v['China'])+(r.unit?('<span style="color:var(--ink-3);font-size:10px"> '+(r.unit[state.lang]||r.unit.zh)+'</span>'):'');
      const c24cls=r.c24==='up'?'chg-up':(r.c24==='down'?'chg-down':'');
      const c7cls=r.c7==='up'?'chg-up':(r.c7==='down'?'chg-down':'');
      const c30cls=r.c30==='up'?'chg-up':(r.c30==='down'?'chg-down':'');
      html+=`<tr><td class="name">${r.i18n_label[state.lang]}</td><td>${price}</td><td class="${c24cls}">${r.c24v}</td><td class="${c7cls}">${r.c7v}</td><td class="${c30cls}">${r.c30v}</td></tr>`;
    });
  });
  html+='</tbody>';
  $('#priceTable').innerHTML=html;
}

/* ============ TARIFF TABLE ============ */
/* Row-level source chip: labels which official body / data provider stands behind the figure,
   and opens that original source in a new tab (source attribution + original-link access). */
function tblSrcCell(s,lang){
  const nm=lang==='zh'?(s.name.zh||s.name.en):(s.name.en||s.name.zh);
  const tip=(lang==='zh'?'官方来源，点击跳转原页面':'official source — click to open');
  return '<span class="t-src"><a href="'+esc(s.url)+'" target="_blank" rel="noopener" title="'+esc(nm)+' · '+tip+'">'+esc(nm)+' ↗</a></span>';
}
function renderTariffs(){
  const lang=state.lang;
  let html='<thead><tr><th>'+t('th_product')+'</th><th>'+t('th_market')+'</th><th>'+t('th_rate')+'</th><th>'+t('th_note')+'</th><th>'+t('th_effective')+'</th></tr></thead><tbody>';
  TARIFFS.forEach(row=>{
    row.markets.forEach((m,i)=>{
      const src=TARIFF_SRC[m.m];
      html+=`<tr${i===0?'':' style="border-top:1px solid var(--line-2)"'}>`;
      if(i===0)html+=`<td class="name" rowspan="${row.markets.length}"><b>${row.p[lang]}</b></td>`;
      html+=`<td class="name">${FLAGS[m.m]||''} ${m.m}${src?tblSrcCell(src,lang):''}</td><td><span class="tariff-badge ${m.s}">${esc(istr(m.r,lang))}</span></td><td style="font-family:var(--sans)">${m.n[lang]}</td><td style="font-size:10.5px;color:var(--ink-3)">${esc(istr(m.e,lang))}</td></tr>`;
    });
  });
  html+='</tbody>';
  $('#tariffTable').innerHTML=html;

  html='<thead><tr><th>'+t('th_country')+'</th><th>'+t('th_li')+'</th><th>'+t('th_lfp')+'</th><th>'+t('th_gr')+'</th><th>'+t('th_hy')+'</th></tr></thead><tbody>';
  MAT_PRICES.forEach(m=>{
    const src=MAT_SRC[m.c];
    html+=`<tr><td class="name">${FLAGS[m.c]||''} ${m.c} <span style="font-size:9px;color:var(--ink-3)">(${m.cur})</span>${src?tblSrcCell(src,lang):''}</td><td>${m.li}</td><td>${m.lfp}</td><td>${m.gr}</td><td>${m.hy}</td></tr>`;
  });
  html+='</tbody>';
  $('#matPriceTable').innerHTML=html;
}

/* ============ PAPERS ============ */
function paperHTML(p){
  const tagMap={lithium:['tag_lithium','t-lithium'],aidc:['tag_aidc','t-aidc'],telecom:['tag_telecom','t-telecom'],energy:['tag_energy','t-energy']};
  const tm=tagMap[p.t]||['tag_trade','t-trade'];
  const zh=state.lang==='zh';
  const title=zh?(p.title.zh||p.title.en||p.title):(p.title.en||p.title.zh||p.title);
  /* real papers carry a DOI — make it open the paper. The curated demo entries
     have no DOI, so the journal NAME becomes the outbound link (its homepage,
     a true statement) and the DOI slot keeps the decorative label instead of a
     dead link. Every paper card therefore has at least one clickable source. */
  const doiLink=p.url
    ?('<a class="p-doi" href="'+esc(p.url)+'" target="_blank" rel="noopener" title="'+esc(p.doi||'DOI')+'">'+(p.doi?esc(p.doi):'DOI')+' ↗</a>')
    :('<span>DOI</span>');
  const jhome=JOURNAL_HOME[p.j];
  const jnameHTML=jhome
    ?('<a class="p-journal-link" href="'+esc(jhome)+'" target="_blank" rel="noopener" title="'+esc(p.jname)+' · '+(zh?'期刊官网':'journal home')+'">'+esc(p.jname)+' ↗</a>')
    :esc(p.jname);
  return `<div class="paper"><div class="p-journal"><span class="j-ico" style="background:${JOURNAL_COLORS[p.j]||'#4A5A6A'}">${p.jname[0]}</span>${jnameHTML}<span class="sep" style="width:3px;height:3px;border-radius:50%;background:var(--line);display:inline-block;margin:0 2px"></span>${p.date}${p.hot?'<span style="color:var(--up)">'+t('pa_hot')+'</span>':''}</div><div class="p-title">${esc(title)}</div><div class="p-authors">${esc(p.auth)} · ${esc(orgLabel(p.org))}</div><div class="p-foot"><span class="cites">${t('pa_cites')} <b>${p.cites}</b></span><span class="p-doistyle"><span>${t(tm[0])}</span>${doiLink}</span></div></div>`;
}
function renderPapers(){
  const {start,end}=rngNow('papers');
  let list=PAPERS.filter(p=>{const d=new Date(p.date);return d>=start&&d<=end;});
  if(state.paperJournal!=='all')list=list.filter(p=>p.j===state.paperJournal);
  if(state.paperQuery){const q=state.paperQuery.toLowerCase();list=list.filter(p=>{const title=p.title;const tt=typeof title==='string'?title:((title.zh||'')+' '+(title.en||''));return (tt+' '+p.auth+' '+p.org).toLowerCase().includes(q);});}
  list=list.slice(0,state.papersShown);
  const note=paperStatusHTML();
  $('#paperGrid').innerHTML=note+(list.length?list.map(paperHTML).join(''):'<div class="empty" style="grid-column:1/-1">'+(state.lang==='zh'?'未找到匹配论文':'No matching papers')+'</div>');
}
/* Real papers come from Crossref (real journal, authors, publication date,
   citation count and DOI). Until that feed lands the curated list is shown, so
   say which one is on screen rather than leaving the reader to guess. */
let papersState='demo',papersAt=null;
function paperStatusHTML(){
  const live=papersState==='live';
  const stamp=papersAt?(' · '+t('feed_updated')+' '+papersAt.getFullYear()+'-'+p2(papersAt.getMonth()+1)+'-'+p2(papersAt.getDate())):'';
  return '<div class="feed-src-note'+(live?' is-live':'')+'" style="grid-column:1/-1"><span class="'+(live?'fr-dot live':'fr-dot')+'"></span>'
    +(live?t('pa_live_note').replace('{n}',PAPERS.length):t('pa_demo_note'))+stamp+'</div>';
}
function loadRealPapers(){
  if(typeof fetch!=='function')return Promise.resolve(false);
  return fetch('data/papers.json?t='+Date.now(),{cache:'no-store'})
    .then(r=>{if(!r.ok)throw new Error('HTTP '+r.status);return r.json();})
    .then(j=>{
      if(!j||!j.papers||!j.papers.length)throw new Error('empty');
      PAPERS.length=0;
      j.papers.forEach((p,i)=>PAPERS.push(Object.assign({},p,{id:30000+i,hot:(p.cites>=25?1:0)})));
      papersAt=j.generated?new Date(j.generated):null;
      papersState='live';
      return true;
    })
    .catch(()=>{papersState='demo';return false;});
}
loadRealPapers().then(ok=>{
  if(!ok)return;
  if(document.getElementById('paperGrid'))renderPapers();
  if(document.getElementById('paperList'))renderHomePapers();
});
$('#loadMorePapers').addEventListener('click',()=>{state.papersShown+=6;renderPapers();});
$$('#paperJournals .chip').forEach(c=>c.addEventListener('click',()=>{$$('#paperJournals .chip').forEach(x=>x.classList.toggle('active',x===c));state.paperJournal=c.dataset.j;renderPapers();}));
$('#paperSearch').addEventListener('input',e=>{state.paperQuery=e.target.value;renderPapers();});
function renderHomePapers(){/* 7 cards ≈ the 7-item news column's height (measured
  133px/card): 4 cards left ~40% of the right panel blank once the demo rows
  (which used to pad it) were removed; 8 overshot to 1126 vs 1020 */
  $('#paperList').innerHTML=PAPERS.slice(0,7).map(paperHTML).join('');}

/* ============ CHARTS ============ */
function renderTrend(){
  const {start,end}=rngNow('trend');
  const spanMs=end.getTime()-start.getTime(),spanDays=spanMs/864e5;
  const n=spanDays<=1.2?12:Math.min(30,Math.max(7,Math.round(spanDays)));
  const step=spanMs/n;
  const cats=['lithium','aidc','telecom','energy'];
  const cols=['b-lithium','b-aidc','b-telecom','b-energy'];
  let bars='',max=0;
  const valsA=[];
  for(let i=0;i<n;i++){
    const d=new Date(start.getTime()+step*i);
    const vals=cats.map((c,ci)=>Math.round(14+seeded(i*7.3+ci*13.7)*44));
    const tot=vals.reduce((a,b)=>a+b,0);
    valsA.push({d,vals,tot});
    if(tot>max)max=tot;
  }
  valsA.forEach(({d,vals,tot})=>{
    const lbl=spanDays<=1.2?p2(d.getHours())+':00':((d.getMonth()+1)+'-'+p2(d.getDate()));
    bars+=`<div class="bar-col"><div class="bar-val">${tot}</div><div class="bar-stack" style="height:${Math.max(4,tot/max*100)}%">${vals.map((v,ci)=>`<div class="${cols[ci]}" style="height:${v/tot*100}%"></div>`).join('')}</div><div class="bar-x">${lbl}</div></div>`;
  });
  $('#trendBars').innerHTML=bars;
}
const CHART_CFG={
  liChart:{color:'#B7791F',from:82300,to:76500,vol:900,seed:11,dec:0},
  aidcChart:{color:'#185FA5',from:1.1,to:2.4,vol:0.15,seed:5,dec:2},
  tcChart:{color:'#0E7C86',from:382,to:425.6,vol:7,seed:23,dec:1},
  egChart:{color:'#15976B',from:22,to:38.4,vol:2.2,seed:31,dec:1}
};
function lineSeries(key,cfg){
  const {start,end}=rngNow(key);
  const spanMs=end.getTime()-start.getTime(),spanDays=spanMs/864e5;
  let n,lab;
  if(spanDays<=1.2){n=12;lab=d=>p2(d.getHours())+':00';}
  else if(spanDays<=8){n=8;lab=d=>(d.getMonth()+1)+'-'+p2(d.getDate());}
  else if(spanDays<=35){n=15;lab=d=>(d.getMonth()+1)+'-'+p2(d.getDate());}
  else if(spanDays<=100){n=13;lab=d=>(d.getMonth()+1)+'-'+p2(d.getDate());}
  else{n=12;lab=d=>d.getFullYear()+'-'+p2(d.getMonth()+1);}
  const step=spanMs/(n-1),data=[],labels=[];
  for(let i=0;i<n;i++){
    const d=new Date(start.getTime()+step*i);
    const f=i/(n-1);
    let v=cfg.from+(cfg.to-cfg.from)*f+(seeded(i*3.7+cfg.seed)-0.5)*cfg.vol;
    data.push(Number(v.toFixed(cfg.dec??1)));
    labels.push(lab(d));
  }
  data[n-1]=cfg.to;
  labels[n-1]=state.lang==='zh'?'今':'now';
  return {data,labels};
}
function renderCharts(){
  Object.keys(CHART_CFG).forEach(key=>{
    const sel=key==='liChart'?'#liPriceChart':key==='aidcChart'?'#aidcChart':key==='tcChart'?'#tcChart':'#egChart';
    const cfg=CHART_CFG[key];
    const {data,labels}=lineSeries(key,cfg);
    lineChart(sel,data,cfg.color,{labels,min:Math.min(...data)*(cfg.dec?0.9:0.98),max:Math.max(...data)*1.01});
  });
}
function lineChart(svgId,data,color,opts={}){
  const svg=$(svgId),W=520,H=200,pad={l:42,r:12,t:16,b:26};
  const iw=W-pad.l-pad.r,ih=H-pad.t-pad.b;
  const min=opts.min??Math.min(...data),max=opts.max??Math.max(...data);
  const x=i=>pad.l+i/(data.length-1)*iw;
  const y=v=>pad.t+(1-(v-min)/(max-min))*ih;
  let pts=data.map((v,i)=>`${x(i).toFixed(1)},${y(v).toFixed(1)}`);
  let g=`<line x1="${pad.l}" y1="${pad.t}" x2="${pad.l}" y2="${pad.t+ih}" class="grid-line"/><line x1="${pad.l}" y1="${pad.t+ih}" x2="${pad.l+iw}" y2="${pad.t+ih}" stroke="var(--line)"/>`;
  [0,.25,.5,.75,1].forEach(f=>{const yy=pad.t+f*ih;g+=`<line x1="${pad.l}" y1="${yy}" x2="${pad.l+iw}" y2="${yy}" class="grid-line"/><text x="${pad.l-6}" y="${yy+3}" text-anchor="end" font-size="9" fill="#7C8B9C" font-family="var(--mono)">${Math.round(min+(1-f)*(max-min))}</text>`;});
  g+=`<polygon points="${pts[0]} ${pad.l},${pad.t+ih} ${pad.l+iw},${pad.t+ih} ${pts[pts.length-1]}" fill="${color}" class="area"/><polyline points="${pts.join(' ')}" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="${pts[pts.length-1].split(',')[0]}" cy="${pts[pts.length-1].split(',')[1]}" r="3.2" fill="${color}"/>`;
  data.forEach((v,i)=>{g+=`<text x="${x(i)}" y="${pad.t+ih+14}" text-anchor="middle" font-size="9" fill="#7C8B9C" font-family="var(--mono)">${opts.labels?opts.labels[i]:i+1}</text>`;});
  svg.innerHTML=g;
}

function renderHeat(){
  const r=rngNow('liHeat');
  const mult={'24h':0.35,'7d':0.62,'30d':0.85,'90d':1}[r.preset]||1;
  const seed=r.start.getTime()%10000;
  const base=[64,58,41,37,29,73,46];
  const items=[['chain_upstream',0],['chain_cathode',1],['chain_anode',2],['chain_electrolyte',3],['chain_sep',4],['chain_cell',5],['chain_recycle',6]];
  const colors=['var(--amber)','var(--amber)','var(--accent)','var(--accent)','var(--teal)','var(--amber)','var(--teal)'];
  $('#liHeat').innerHTML=items.map(([k,i])=>{let v=Math.round(base[i]*mult+seeded(seed+i)*12);v=Math.min(98,Math.max(8,v));return `<div class="heat"><div class="h-day">${t(k)}</div><div class="h-num">${v}</div><div class="h-bar"><i style="width:${v/98*100}%;background:${colors[i]}"></i></div></div>`;}).join('');
}
function renderAiRegion(){
  const r=rngNow('aiRegion');
  const seed=r.start.getTime()%1000;
  const mult={'24h':0.05,'7d':0.11,'30d':0.24,'90d':0.52,'1y':1}[r.preset]||0.24;
  const base=[0.86,0.71,0.52,0.31],names=['region_e','region_n','region_s','region_w'];
  const rows=names.map((k,i)=>{
    const v=(base[i]*mult+seeded(seed+i*9)*0.05).toFixed(2);
    const yoy=Math.round((10+seeded(seed+i*17)*26)*10)/10;
    const pue=(1.18+seeded(seed+i*3)*0.16).toFixed(2);
    return [k,v+' EF','+'+yoy+'%',pue];
  });
  $('#aiRegion').innerHTML='<thead><tr><th>'+t('th_region')+'</th><th>'+t('th_cap')+'</th><th>'+t('th_yoy')+'</th><th>'+t('th_pue')+'</th></tr></thead><tbody>'+rows.map(r2=>`<tr><td class="name">${t(r2[0])}</td><td>${r2[1]}</td><td class="chg-up">${r2[2]}</td><td>${r2[3]}</td></tr>`).join('')+'</tbody>';
}
function renderEgDonut(){
  const r=rngNow('egDonut');
  const seed=r.start.getTime()%9973;
  let raw=[41,31,20,8].map((v,i)=>Math.max(4,v+(seeded(seed+i*7)-0.5)*6));
  const s=raw.reduce((a,b)=>a+b,0);
  const pct=raw.map(v=>Math.round(v/s*100));
  const colors=['var(--down)','var(--accent)','var(--amber)','var(--teal)'];
  const names=state.lang==='zh'?['二产','三产','居民','一产']:['Secondary','Service','Resid.','Primary'];
  let off=25,segs='';
  pct.forEach((p,i)=>{segs+=`<circle cx="150" cy="90" r="62" fill="none" stroke="${colors[i]}" stroke-width="26" stroke-dasharray="${p} ${100-p}" stroke-dashoffset="${off}" transform="rotate(-90 150 90)"/>`;off+=p;});
  const center=(9.36+(seeded(seed)*0.4-0.2)).toFixed(2);
  $('#egDonutBox').innerHTML='<svg class="svg-chart" viewBox="0 0 300 180" style="height:180px;margin:0 auto;max-width:300px"><circle cx="150" cy="90" r="62" fill="none" stroke="#E4EAF1" stroke-width="26"/>'+segs+'<text x="150" y="86" text-anchor="middle" font-family="var(--mono)" font-size="18" font-weight="600" fill="#16202B">'+center+'</text><text x="150" y="104" text-anchor="middle" font-size="9" fill="#7C8B9C">'+(state.lang==='zh'?'万亿 kWh':'TWh')+'</text></svg><div class="legend" style="justify-content:center;margin-top:8px;flex-wrap:wrap;gap:12px">'+pct.map((p,i)=>`<div class="legend-item"><span class="sw" style="background:${colors[i]}"></span>${names[i]} ${p}%</div>`).join('')+'</div>';
}

/* ============ LIVE TICKER ============ */
/* Only the wall clock (ovTime) ticks here. The price panel must NOT: its figures
   are static samples, and stamping them with a moving clock made them read as
   live quotes. priceStamp is a fixed i18n label now ("示例数据 · 非实时"). */
function tickLive(){
  if(!state.live)return;
  const now=new Date();
  const hh=String(now.getHours()).padStart(2,'0'),mm=String(now.getMinutes()).padStart(2,'0'),ss=String(now.getSeconds()).padStart(2,'0');
  $('#ovTime').textContent=`${hh}:${mm}:${ss}`;
}

/* ============ NAV & EVENTS ============ */
$$('.nav-item').forEach(n=>n.addEventListener('click',()=>go(n.dataset.page)));
$('#langBtn').addEventListener('click',()=>setLang(state.lang==='zh'?'en':'zh'));
$('#exportBtn').addEventListener('click',()=>toast(state.lang==='zh'?'报告已生成 → industry-report-2026-08-21.pdf':'Report generated → industry-report-2026-08-21.pdf'));
$('#avatarBtn').addEventListener('click',()=>toast('Ivy Guo · ivy.guo@example.com'));
$('#editProfileBtn').addEventListener('click',()=>toast(state.lang==='zh'?'个人资料编辑功能即将上线':'Profile editing coming soon'));
document.addEventListener('keydown',e=>{if(e.key==='/'&&document.activeElement.tagName!=='INPUT'){e.preventDefault();$('#globalSearch').focus();}});
$('#globalSearch').addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.value.trim()){state.paperQuery=e.target.value.trim();go('papers');renderPapers();e.target.value='';toast((state.lang==='zh'?'已搜索: ':'Searched: ')+state.paperQuery);}});

/* ============ DEPLOY BANNER ============ */
function showDeployBanner(url){
  if(!url)return;
  $('#deployBanner').style.display='flex';
  $('#deployText').textContent=t('deploy_online');  /* data-i18n covers it too, but the banner can appear before a repaint */
  $('#deployLink').textContent=url.replace(/^https?:\/\//,'');
  $('#deployLink').href=url;
  $('#deployCopy').onclick=()=>{navigator.clipboard.writeText(url).then(()=>toast(state.lang==='zh'?'链接已复制':'Link copied'));};
}

/* ============ RENDER ALL ============ */
const RANGE_MOUNTS=[
  ['rpOvNews','ovNews',()=>renderNews()],
  ['rpTrend','trend',()=>renderTrend()],
  ['rpLiChart','liChart',()=>renderCharts()],
  ['rpLiHeat','liHeat',()=>renderHeat()],
  ['rpLiNews','liNews',()=>renderSectorNews('#liNewsList','lithium','liNews',5)],
  ['rpAidcChart','aidcChart',()=>renderCharts()],
  ['rpAiRegion','aiRegion',()=>renderAiRegion()],
  ['rpAiNews','aiNews',()=>renderSectorNews('#aiNewsList','aidc','aiNews',5)],
  ['rpTcChart','tcChart',()=>renderCharts()],
  ['rpTcMini','tcMini',()=>renderSectorNews('#tcNewsMini','telecom','tcMini',4)],
  ['rpTcNews','tcNews',()=>renderSectorNews('#tcNewsList','telecom','tcNews',5)],
  ['rpEgDonut','egDonut',()=>renderEgDonut()],
  ['rpEgChart','egChart',()=>renderCharts()],
  ['rpEgNews','egNews',()=>renderSectorNews('#egNewsList','energy','egNews',5)],
  ['rpTradeNews','tradeNews',()=>renderSectorNews('#tradeNewsList','trade','tradeNews',6)],
  ['rpPapers','papers',()=>renderPapers()]
];
function renderAll(){
  RANGE_MOUNTS.forEach(([mid,key,fn])=>mountRangePicker(mid,key,fn));
  renderNews();
  renderHomePapers();
  renderTrend();
  renderCharts();
  renderEgDonut();
  renderPrices();
  renderTariffs();
  renderHeat();
  renderAiRegion();
  renderSectorNews('#liNewsList','lithium','liNews',5);
  renderSectorNews('#aiNewsList','aidc','aiNews',5);
  renderSectorNews('#tcNewsList','telecom','tcNews',5);
  renderSectorNews('#egNewsList','energy','egNews',5);
  renderSectorNews('#tradeNewsList','trade','tradeNews',6);
  renderSectorNews('#tcNewsMini','telecom','tcMini',4);
  renderPapers();
  renderTenderPortals();
  renderTenders();
  refreshPickers();
}

/* ============ TENDER EVENTS ============ */
$$('#tnStatusChips .chip').forEach(c=>c.addEventListener('click',()=>{$$('#tnStatusChips .chip').forEach(x=>x.classList.toggle('active',x===c));state.tenderStatus=c.dataset.s;renderTenders();}));
$$('#tnSectorChips .chip').forEach(c=>c.addEventListener('click',()=>{$$('#tnSectorChips .chip').forEach(x=>x.classList.toggle('active',x===c));state.tenderSector=c.dataset.f;renderTenders();}));
const tnSearch=$('#tenderSearch');
if(tnSearch)tnSearch.addEventListener('input',()=>{state.tenderQ=tnSearch.value;renderTenders();});

/* ============ INIT ============ */
buildCountryDrop();
state.ranges.tradeNews={preset:'90d'};
setCountry('USA');
setDateRange('7d');
applyLang();
setInterval(tickLive,3000);

/* expose for onclick */
window.go=go;
