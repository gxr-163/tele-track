
/* ============ I18N ============ */
const I18N = {
  zh:{
    app_title:'TELE·TRACK — 行业情报',search_ph:'搜索新闻、论文、公司…  ( / )',
    lbl_monitor:'监控',lbl_sectors:'行业',lbl_trade:'贸易',lbl_research:'研究',lbl_system:'系统',
    nav_overview:'总览',nav_tender:'公开招标',nav_lithium:'锂电池',nav_aidc:'AIDC',nav_telecom:'电信',nav_energy:'能源',nav_trade:'贸易与关税',nav_papers:'学术论文',nav_settings:'设置',
    side_src:'数据源: 47 路 · 延迟 < 3min',
    ov_title:'行业动态总览',ov_sub_a:'Telecom & Energy 实时监测 · 聚焦',ov_sub_b:'数据更新于',
    tab_all:'全部',tab_battery:'电池',tab_aidc:'AIDC',tab_pfe:'PFE 限制',btn_export:'导出报告',
    pfe_title:'PFE 限制监测',pfe_industry:'行业新闻',pfe_gov:'政府政策 · 官方直连',gov_f_all:'全部来源',gov_f_hint:'点击筛选该来源最新动态（↗ 直达官网）',gov_open_site:'打开官网',
    tn_title:'公开招标监测',tn_sub:'各国官方采购平台招标信息 · 一键直达官网',tn_portals:'官方招标平台直连',tn_portals_sub:'政府采购官方平台 · 点击直达',tn_list:'招标项目列表',tn_stat_open:'进行中招标',tn_stat_exp:'7天内截止',tn_stat_mkt:'覆盖市场',tn_stat_new:'本周新增',tn_due7_sub:'临近截止',tn_mkt_sub:'覆盖国家/地区',tn_new_sub:'近7日发布',tn_f_all:'全部',tn_open:'进行中',tn_closed:'已截止',tn_days:'{n} 天后截止',tn_today:'今天截止',tn_view:'去官网查看',tn_ph:'搜索招标项目 / 机构 / 平台…',tn_empty:'暂无匹配的招标信息',tn_empty_hint:'可切换国家、行业或清除搜索关键词',tn_live:'● 实时',tn_soon:'⏳ 抓紧',tn_mkt_d:'🌐 全球',tn_new_d:'🆕 新增',
    kpi_li_idx:'锂电池指数',kpi_aidc_cap:'AIDC 装机',kpi_news_today:'今日新闻',kpi_papers_week:'本周论文',kpi_1d:'日变化',kpi_qoq:'环比上季',kpi_24h:'24小时量',
    pt_title:'核心商品价格 · 现货',pn_news:'行业新闻流',pn_papers:'最新学术论文',view_all:'查看全部 →',
    dc_today:'今日',dc_yest:'昨日',dc_7d:'7天',dc_30d:'30天',dc_custom:'自定义',
    load_more_news:'加载更多新闻 ↓',load_more_papers:'加载更多论文 ↓',
    news_auto_expand:'当前时段无新闻，已自动扩大至 {range}',
    news_empty:'该筛选条件下暂无新闻',news_empty_hint:'可切换国家、标签或时间范围',
    news_sector_empty:'该时段暂无相关新闻',
    trend_title:'新闻热度趋势',leg_lithium:'锂电池',leg_aidc:'AIDC',leg_telecom:'电信',leg_energy:'能源',
    li_title:'锂电池产业监测',li_sub:'产业链 · 价格 · 产能 · 政策 · 实时新闻',li_kpi1:'碳酸锂现货',li_kpi2:'动力电池装机',li_kpi3:'储能电池出货',li_kpi4:'产能利用率',li_mom:'月环比',li_yoy:'月同比',li_head:'头部厂商',li_chart1:'碳酸锂价格走势',li_chain:'产业链热度',li_news2:'锂电池相关新闻',
    ai_title:'AIDC 算力基础设施监测',ai_sub:'AI Data Center · 装机 · PUE · 资本开支',ai_kpi1:'智能算力规模',ai_kpi2:'平均 PUE',ai_kpi3:'数据中心资本开支',ai_kpi4:'在用机柜',ai_yoy:'同比',ai_new:'新建项目',ai_mom:'环比',ai_chart1:'算力装机趋势 (EFLOPS)',ai_region:'区域布局',ai_news:'AIDC 相关新闻',
    tc_title:'电信行业监测',tc_sub:'5G · 网络资本开支 · 运营商数据',tc_kpi1:'5G 基站',tc_kpi2:'5G 用户',tc_kpi3:'电信资本开支',tc_kpi4:'算力网络投入',tc_cum:'累计',tc_pen:'渗透率 62%',tc_share:'占比提升',tc_chart1:'5G 基站累计建设',tc_ops:'运营商动态',tc_news:'电信新闻流',
    eg_title:'能源行业监测',eg_sub:'电力需求 · 储能 · 新能源装机 · 电价',eg_kpi1:'全社会用电量',eg_kpi2:'新型储能新增',eg_kpi3:'风光装机占比',eg_kpi4:'绿电交易量',eg_cum:'1-7月累计',eg_yoy:'同比',eg_gen:'发电装机',eg_yoy2:'同比',eg_chart1:'电力需求结构',eg_chart2:'新型储能装机趋势',eg_news:'能源新闻流',
    tr_title:'贸易与关税监测',tr_sub:'各国原材料价格 · 关税政策 · 贸易壁垒实时追踪',tr_kpi1:'中国锂电出口额',tr_kpi2:'对华综合关税均值',tr_kpi3:'欧盟 CBAM 覆盖率',tr_kpi4:'贸易政策事件',tr_yoy1:'1-7月同比',tr_yoy2:'同比上升',tr_cbam:'碳关税过渡期结束',tr_7d:'近7日新增',tr_tariff_tbl:'主要产品关税对比',tr_vs_cn:'对华进口',tr_mat_tbl:'各国原材料实时价格',tr_timeline:'关税政策动态',
    pa_title:'学术论文库',pa_sub:'顶刊自动追踪 · Nature Energy / Science / Joule / EES / Adv. Mater. / IEEE / arXiv',pa_search_ph:'搜索标题 / 作者 / 关键词',pa_cites:'被引',pa_hot:'🔥 热门',pa_f_all:'全部',
    se_title:'系统设置',se_sub:'数据源、推送、订阅与 API 配置',se_edit:'编辑',se_ds:'数据源与抓取',se_notif:'通知',se_sub2:'订阅与区域',se_api:'API 与集成',se_upgrade:'升级',
    dm_title:'自定义日期时间范围',dm_sub:'选择新闻抓取的起止日期与时间',dm_cancel:'取消',dm_apply:'应用',rp_24h:'近24小时',rp_7d:'近7天',rp_30d:'近30天',rp_90d:'近90天',rp_1y:'近1年',rp_custom:'自定义',rp_from:'开始',rp_to:'结束',rp_apply:'应用',rp_title:'日期与时间范围',
    tag_lithium:'锂电池',tag_aidc:'AIDC',tag_telecom:'电信',tag_energy:'能源',tag_trade:'贸易',tag_pfe:'PFE 政策',
    th_commodity:'品种',th_spot:'现货',th_24h:'24h',th_7d:'7d',th_30d:'30d',
    th_product:'产品',th_market:'市场',th_rate:'税率',th_note:'说明',th_effective:'生效',
    th_country:'国家',th_li:'碳酸锂',th_lfp:'LFP正极',th_gr:'石墨负极',th_hy:'氢氧化锂',
    grp_lithium:'锂电池原材料',grp_aidc:'AIDC 核心 (公司重点)',
    region_e:'华东',region_n:'华北',region_s:'华南',region_w:'西部枢纽',th_region:'区域',th_cap:'算力',th_yoy:'同比',th_pue:'PUE',
    chain_upstream:'上游锂矿',chain_cathode:'正极材料',chain_anode:'负极材料',chain_electrolyte:'电解液',chain_sep:'隔膜',chain_cell:'电芯',chain_recycle:'回收'
  },
  en:{
    app_title:'TELE·TRACK — Industry Intelligence',search_ph:'Search news, papers, companies…  ( / )',
    lbl_monitor:'Monitor',lbl_sectors:'Sectors',lbl_trade:'Trade',lbl_research:'Research',lbl_system:'System',
    nav_overview:'Overview',nav_tender:'Tenders',nav_lithium:'Lithium Battery',nav_aidc:'AIDC',nav_telecom:'Telecom',nav_energy:'Energy',nav_trade:'Trade & Tariffs',nav_papers:'Academic Papers',nav_settings:'Settings',
    side_src:'Sources: 47 feeds · latency < 3min',
    ov_title:'Industry Overview',ov_sub_a:'Telecom & Energy real-time monitor · focus on',ov_sub_b:'updated at',
    tab_all:'All',tab_battery:'Battery',tab_aidc:'AIDC',tab_pfe:'PFE Ban',btn_export:'Export Report',
    pfe_title:'PFE Restrictions',pfe_industry:'Industry News',pfe_gov:'Government Policy · Official',gov_f_all:'All sources',gov_f_hint:'Click to filter the latest items from this source (↗ opens the official site)',gov_open_site:'Open official site',
    tn_title:'Public Tender Monitor',tn_sub:'Public procurement tenders from official platforms · one-click to source',tn_portals:'Official Tender Portals',tn_portals_sub:'Government platforms · click to open',tn_list:'Tender List',tn_stat_open:'Open Tenders',tn_stat_exp:'Due in 7 Days',tn_stat_mkt:'Markets',tn_stat_new:'New This Week',tn_due7_sub:'deadline approaching',tn_mkt_sub:'countries covered',tn_new_sub:'published in 7d',tn_f_all:'All',tn_open:'Open',tn_closed:'Closed',tn_days:'{n} days left',tn_today:'Due today',tn_view:'View portal',tn_ph:'Search tenders / agency / platform…',tn_empty:'No matching tenders',tn_empty_hint:'Try a different country, sector or clear the search',tn_live:'● LIVE',tn_soon:'⏳ Urgent',tn_mkt_d:'🌐 Global',tn_new_d:'🆕 New',
    kpi_li_idx:'Lithium Battery Index',kpi_aidc_cap:'AIDC Capacity',kpi_news_today:'News Today',kpi_papers_week:'Papers This Week',kpi_1d:'1D change',kpi_qoq:'vs prev quarter',kpi_24h:'24h volume',
    pt_title:'Core Commodity Prices · Spot',pn_news:'Industry News Feed',pn_papers:'Latest Academic Papers',view_all:'View all →',
    dc_today:'Today',dc_yest:'Yesterday',dc_7d:'7 days',dc_30d:'30 days',dc_custom:'Custom',
    load_more_news:'Load more news ↓',load_more_papers:'Load more papers ↓',
    news_auto_expand:'No news in current period; auto-expanded to {range}',
    news_empty:'No news under current filters',
    news_empty_hint:'Try a different country, tag or time range',
    news_sector_empty:'No related news in this period',
    trend_title:'News Volume Trend',leg_lithium:'Lithium',leg_aidc:'AIDC',leg_telecom:'Telecom',leg_energy:'Energy',
    li_title:'Lithium Battery Monitor',li_sub:'Supply chain · Prices · Capacity · Policy · Live news',li_kpi1:'Li Carbonate Spot',li_kpi2:'EV Battery Installed',li_kpi3:'ESS Shipment',li_kpi4:'Utilization Rate',li_mom:'MoM',li_yoy:'YoY',li_head:'Top makers',li_chart1:'Li Carbonate Price Trend',li_chain:'Supply Chain Heat',li_news2:'Lithium-related News',
    ai_title:'AIDC Compute Infrastructure Monitor',ai_sub:'AI Data Center · Capacity · PUE · Capex',ai_kpi1:'Smart Compute Scale',ai_kpi2:'Avg PUE',ai_kpi3:'Data Center Capex',ai_kpi4:'Active Racks',ai_yoy:'YoY',ai_new:'New projects',ai_mom:'QoQ',ai_chart1:'Compute Capacity Trend (EFLOPS)',ai_region:'Regional Layout',ai_news:'AIDC-related News',
    tc_title:'Telecom Industry Monitor',tc_sub:'5G · Network Capex · Operator Data',tc_kpi1:'5G Base Stations',tc_kpi2:'5G Users',tc_kpi3:'Telecom Capex',tc_kpi4:'Compute Network Invest',tc_cum:'Cumulative',tc_pen:'Penetration 62%',tc_share:'Share rising',tc_chart1:'5G Base Station Cumulative',tc_ops:'Operator Updates',tc_news:'Telecom News Feed',
    eg_title:'Energy Industry Monitor',eg_sub:'Power Demand · Storage · RE Capacity · Tariffs',eg_kpi1:'Total Power Consumption',eg_kpi2:'New Storage Added',eg_kpi3:'RE Share of Capacity',eg_kpi4:'Green Power Trade',eg_cum:'Jan-Jul cumulative',eg_yoy:'YoY',eg_gen:'Generation capacity',eg_yoy2:'YoY',eg_chart1:'Power Demand Mix',eg_chart2:'New Storage Trend',eg_news:'Energy News Feed',
    tr_title:'Trade & Tariffs Monitor',tr_sub:'Raw material prices · Tariff policy · Trade barriers real-time tracking',tr_kpi1:'China Li-battery Exports',tr_kpi2:'Avg Tariff on China',tr_kpi3:'EU CBAM Coverage',tr_kpi4:'Trade Policy Events',tr_yoy1:'Jan-Jul YoY',tr_yoy2:'YoY increase',tr_cbam:'Carbon tariff transition ends',tr_7d:'Last 7 days new',tr_tariff_tbl:'Major Product Tariffs',tr_vs_cn:'on China imports',tr_mat_tbl:'Raw Material Prices by Country',tr_timeline:'Tariff Policy Updates',
    pa_title:'Academic Paper Library',pa_sub:'Top-journal auto-tracking · Nature Energy / Science / Joule / EES / Adv. Mater. / IEEE / arXiv',pa_search_ph:'Search title / author / keyword',pa_cites:'citations',pa_hot:'🔥 HOT',pa_f_all:'All',
    se_title:'System Settings',se_sub:'Data sources, alerts, subscriptions & API config',se_edit:'Edit',se_ds:'Data Sources',se_notif:'Notifications',se_sub2:'Subscriptions & Region',se_api:'API & Integration',se_upgrade:'Upgrade',
    dm_title:'Custom Date & Time Range',dm_sub:'Select news capture start and end date & time',dm_cancel:'Cancel',dm_apply:'Apply',rp_24h:'Last 24h',rp_7d:'Last 7d',rp_30d:'Last 30d',rp_90d:'Last 90d',rp_1y:'Last 1Y',rp_custom:'Custom',rp_from:'From',rp_to:'To',rp_apply:'Apply',rp_title:'Date & Time Range',
    tag_lithium:'Lithium',tag_aidc:'AIDC',tag_telecom:'Telecom',tag_energy:'Energy',tag_trade:'Trade',tag_pfe:'PFE Policy',
    th_commodity:'Commodity',th_spot:'Spot',th_24h:'24h',th_7d:'7d',th_30d:'30d',
    th_product:'Product',th_market:'Market',th_rate:'Rate',th_note:'Note',th_effective:'Effective',
    th_country:'Country',th_li:'Li Carbonate',th_lfp:'LFP Cathode',th_gr:'Graphite Anode',th_hy:'Li Hydroxide',
    grp_lithium:'Lithium Materials',grp_aidc:'AIDC Core (Company Priority)',
    region_e:'East China',region_n:'North China',region_s:'South China',region_w:'West Hub',th_region:'Region',th_cap:'Capacity',th_pue:'PUE',
    chain_upstream:'Li Ore',chain_cathode:'Cathode',chain_anode:'Anode',chain_electrolyte:'Electrolyte',chain_sep:'Separator',chain_cell:'Cell',chain_recycle:'Recycling'
  }
};

/* ============ COUNTRIES ============ */
const FLAGS = {China:'🇨🇳',USA:'🇺🇸',Germany:'🇩🇪',Japan:'🇯🇵','South Korea':'🇰🇷',Australia:'🇦🇺','UK':'🇬🇧',France:'🇫🇷',Netherlands:'🇳🇱',Sweden:'🇸🇪',Switzerland:'🇨🇭'};
/* US market is the #1 priority → USA first in selector, default region */
const COUNTRIES = ['USA','China','Germany','Japan','South Korea','Australia','UK','France','Netherlands','Sweden','Switzerland'];

/* ============ PRICE DATA (per country) ============ */
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
    {m:'Brazil',r:'18%',n:{zh:'南共市对外关税',en:'Mercosur'},s:'flat',e:'长期'}
  ]},
  {p:{zh:'储能电池 / ESS Battery',en:'ESS Battery'},markets:[
    {m:'USA',r:'25%',n:{zh:'2026 非车用',en:'2026 non-EV'},s:'up',e:'2026-07'},
    {m:'EU',r:'0%~10%',n:{zh:'基础关税',en:'MFN base'},s:'flat',e:'长期'},
    {m:'Australia',r:'5%',n:{zh:'基础关税',en:'MFN base'},s:'flat',e:'长期'}
  ]},
  {p:{zh:'LFP 正极材料',en:'LFP Cathode'},markets:[
    {m:'USA',r:'25%',n:{zh:'301条款',en:'Sec.301'},s:'up',e:'2026-01'},
    {m:'EU',r:'调查中',n:{zh:'反倾销立案',en:'AD investigation'},s:'new',e:'2026-06'}
  ]},
  {p:{zh:'天然石墨负极',en:'Graphite Anode'},markets:[
    {m:'USA',r:'25%',n:{zh:'2026 生效',en:'2026 effect'},s:'up',e:'2026-01'},
    {m:'EU',r:'10%~20%',n:{zh:'反倾销复审',en:'AD review'},s:'flat',e:'2025-12'}
  ]},
  {p:{zh:'AI 服务器 / GPU',en:'AI Server / GPU'},markets:[
    {m:'USA',r:'25%',n:{zh:'301条款',en:'Sec.301'},s:'flat',e:'长期'},
    {m:'EU',r:'0%',n:{zh:'MFN 免税',en:'MFN duty-free'},s:'flat',e:'长期'},
    {m:'Netherlands',r:'管制',n:{zh:'出口管制 (EUV/先进制程)',en:'Export control'},s:'new',e:'持续'}
  ]},
  {p:{zh:'800G 光模块',en:'800G Optical Module'},markets:[
    {m:'USA',r:'25%',n:{zh:'301条款',en:'Sec.301'},s:'flat',e:'长期'},
    {m:'EU',r:'0%~5%',n:{zh:'基础关税',en:'MFN base'},s:'flat',e:'长期'}
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
    {name:'FCC',url:'https://www.fcc.gov'},
    {name:'The Verge',url:'https://www.theverge.com'},
    {name:'Light Reading',url:'https://www.lightreading.com'},
    {name:"Dell'Oro Group",url:'https://www.delloro.com'},
    {name:'Wood Mackenzie',url:'https://www.woodmac.com'},
    {name:'USTR',url:'https://ustr.gov'},
    {name:'IDC',url:'https://www.idc.com'},
    {name:'CNBC',url:'https://www.cnbc.com'},
    /* ---- US government watch (PFE / supply-chain & trade enforcement) ---- */
    {name:'DHS',url:'https://www.dhs.gov/uflpa-entity-list',gov:true},
    {name:'BIS',url:'https://www.bis.doc.gov',gov:true},
    {name:'Federal Register',url:'https://www.federalregister.gov',gov:true},
    {name:'Presidential Docs',url:'https://www.federalregister.gov/presidential-documents',gov:true},
    {name:'CBP',url:'https://www.cbp.gov',gov:true},
    {name:'OFAC',url:'https://ofac.treasury.gov',gov:true}
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
const NEWS = [
  /* ---- USA / PFE — US government watch (DHS / BIS / Federal Register / CBP / OFAC) ---- */
  {id:53,t:'pfe',src:'DHS',url:'https://www.dhs.gov/uflpa-entity-list',time:'09:50',title:{zh:'DHS 更新 UFLPA 实体清单：新增中国锂电与储能供应链实体',en:'DHS updates UFLPA Entity List: adds Chinese lithium-battery & storage supply-chain entities'},sum:{zh:'国土安全部 UFLPA 实体清单新增多家涉锂电正极、负极及储能系统组装的中国企业，CBP 可据此对相关货物实施扣留与没收，出口商需提供完整供应链溯源证明方可放行。',en:"DHS added multiple Chinese firms in Li-battery cathode, anode, and ESS assembly to the UFLPA Entity List. CBP may detain/forfeit related goods; exporters need full supply-chain traceability evidence for release."},tags:['UFLPA','Entity List'],cn:'USA'},
  {id:54,t:'pfe',src:'BIS',url:'https://www.bis.doc.gov/index.php/policy-guidance/entity-list',time:'09:35',title:{zh:'BIS 实体清单更新：先进封装与 AI 芯片配套中国实体被列入',en:'BIS Entity List update: Chinese entities in advanced packaging & AI-chip ecosystem added'},sum:{zh:'商务部工业与安全局将多家中国先进封装、HBM 配套与 AI 加速卡相关企业列入实体清单，EAR 管制范围扩大，涉及设备、材料与设计服务的对美出口需逐单申请许可。',en:"BIS added several Chinese firms in advanced packaging, HBM support, and AI accelerators to the Entity List, broadening EAR controls. Equipment, materials, and design services to the US now require license applications."},tags:['BIS','Entity List'],cn:'USA'},
  {id:55,t:'pfe',src:'Federal Register',url:'https://www.federalregister.gov',time:'09:20',title:{zh:'Federal Register 公示 FCC 光模块组件穿透规则草案，60 天评论期',en:'Federal Register publishes FCC optical-module component-covered rule draft; 60-day comment period'},sum:{zh:'FCC 关于通信设备组件穿透审查的规则草案正式进入公示，涵盖半导体、基带处理器、蜂窝模块与光收发组件，公众评论期 60 天，行业可在此期间提交豁免与替代方案意见。',en:"The FCC's component-covered review rule draft is now published, covering semiconductors, baseband processors, cellular modules, and optical transceivers. The 60-day public comment period lets industry submit exemption and alternative proposals."},tags:['FCC','Optical Module'],cn:'USA'},
  {id:56,t:'pfe',src:'CBP',url:'https://www.cbp.gov/trade/forced-labor',time:'09:05',title:{zh:'CBP 发布 UFLPA 执法年报：涉锂电货物扣留规模创纪录',en:'CBP issues UFLPA enforcement report: record detentions of lithium-related goods'},sum:{zh:'海关与边境保护局年度执法报告显示，涉锂电与光伏供应链的扣留令数量、货值与放行周期均创新高，重点核查石墨、正极前驱体与电解液关键成分的原产地证据。',en:"CBP's annual UFLPA enforcement report shows record detention orders, value, and release timelines for lithium-battery and PV supply chains, focusing on origin evidence for graphite, cathode precursor, and electrolyte components."},tags:['CBP','Enforcement'],cn:'USA'},
  {id:57,t:'pfe',src:'OFAC',url:'https://ofac.treasury.gov',time:'08:50',title:{zh:'OFAC 将中国电池材料与光伏实体列入 SDN 清单',en:'OFAC designates Chinese battery-material & PV entities to SDN List'},sum:{zh:'财政部海外资产控制办公室依据涉疆与人权相关行政令，将多家中国电池材料、光伏组件企业及关联贸易公司列入 SDN 清单，禁止美国主体与其交易并冻结在美资产。',en:"OFAC designated multiple Chinese battery-material and PV firms plus affiliated trading companies to the SDN List under Xinjiang- and human-rights-related executive orders, barring US persons from dealings and freezing US assets."},tags:['OFAC','Sanctions'],cn:'USA'},
  /* ---- USA / PFE — Presidential Documents (federalregister.gov/presidential-documents) ---- */
  {id:68,t:'pfe',src:'Presidential Docs',url:'https://www.federalregister.gov/documents/2026/08/30/2026-18214/2026-18214',time:'10:35',d:Date.now()-1*864e5,title:{zh:'行政命令 14521：加快关键矿产与电池材料本土项目审批',en:'Executive Order 14521: Accelerating permitting for domestic critical minerals and battery material projects'},sum:{zh:'总统签署行政命令，指示内政部、能源部与环保署在 90 天内建立锂、石墨、镍、钴等关键矿产与电池材料开采加工项目的跨部门快速审批通道，并授权国防部动用国防生产法第三章支持本土正极材料与电解液产能建设。',en:'The President signed an Executive Order directing Interior, Energy, and EPA to establish a 90-day interagency fast-track permitting channel for lithium, graphite, nickel, and cobalt mining and processing projects, and authorizing DOD to use Defense Production Act Title III to back domestic cathode and electrolyte capacity.'},tags:['EO 14521','Critical Minerals'],cn:'USA'},
  {id:69,t:'pfe',src:'Presidential Docs',url:'https://www.federalregister.gov/documents/2026/08/30/2026-18208/2026-18208',time:'09:05',d:Date.now()-1*864e5,title:{zh:'总统备忘录：AI 数据中心电力接入与电网扩容联邦协调机制',en:'Presidential Memorandum: Federal coordination mechanism for AI data center power interconnection and grid expansion'},sum:{zh:'备忘录在白宫国家能源委员会下设立 AI 数据中心电力工作组，协调联邦能源管理委员会（FERC）与各州输电项目审批，要求对超过 500MW 的算力园区电力接入申请在 45 天内完成联邦层面审查，缓解 AIDC 装机瓶颈。',en:'The memorandum establishes an AI data center power task force under the National Energy Council, coordinating FERC and state-level transmission approvals. Federal review of interconnection requests for compute campuses above 500 MW must complete within 45 days to ease AIDC capacity bottlenecks.'},tags:['Memorandum','AIDC Power'],cn:'USA'},
  {id:70,t:'pfe',src:'Presidential Docs',url:'https://www.federalregister.gov/documents/2026/08/29/2026-18175/2026-18175',time:'16:20',d:Date.now()-2*864e5,title:{zh:'行政命令 14522：对华电池材料与石墨关税调整及贸易救济措施',en:'Executive Order 14522: Adjusting tariffs on Chinese battery materials and graphite, with new trade remedies'},sum:{zh:'行政命令自 2026 年 10 月起上调对华天然石墨、电解液关键组分与电池级氢氧化锂的附加关税，同时为已承诺在美建厂的电池企业设置过渡期豁免通道；商务部须每季度向总统提交供应链转移进展评估报告。',en:'Effective October 2026, the order raises additional tariffs on Chinese natural graphite, key electrolyte components, and battery-grade lithium hydroxide, while creating transition-period exemptions for battery makers with committed US plant construction. Commerce must report quarterly to the President on supply-chain shift progress.'},tags:['EO 14522','Tariff'],cn:'USA'},
  {id:71,t:'pfe',src:'Presidential Docs',url:'https://www.federalregister.gov/documents/2026/08/29/2026-18161/2026-18161',time:'11:45',d:Date.now()-2*864e5,title:{zh:'总统公告 11115：对进口电网级储能系统发起 232 条款国家安全调查',en:'Proclamation 11115: Section 232 national security investigation launched on imported grid-scale storage systems'},sum:{zh:'依据《1962 年贸易扩展法》第 232 条，总统指示商务部长对进口电网级电池储能系统与电力逆变器启动国家安全调查，评估进口依赖对电网韧性的影响，270 天内提交报告；调查期间相关进口暂不加征新关税。',en:'Under Section 232 of the Trade Expansion Act of 1962, the President directed the Commerce Secretary to launch a national security investigation into imported grid-scale battery storage systems and power inverters, assessing import reliance impact on grid resilience with a 270-day reporting deadline; no new tariffs apply during the investigation.'},tags:['Proclamation','Section 232'],cn:'USA'},
  {id:72,t:'pfe',src:'Presidential Docs',url:'https://www.federalregister.gov/documents/2026/08/28/2026-18122/2026-18122',time:'14:10',d:Date.now()-3*864e5,title:{zh:'总统裁定：扩大能源部先进技术车辆制造贷款计划覆盖范围至储能制造',en:'Presidential Determination: Expanding DOE ATVM loan program scope to include storage manufacturing'},sum:{zh:'总统裁定授权能源部将先进技术车辆制造（ATVM）贷款计划适用范围扩展至电网级储能电芯与系统集成制造项目，单个项目贷款上限提升至 100 亿美元，重点支持 LFP 电芯与长时储能技术本土产能建设。',en:'The determination authorizes DOE to extend the Advanced Technology Vehicles Manufacturing (ATVM) loan program to grid-scale storage cell and system-integration manufacturing projects, raising the per-project loan cap to $10B and prioritizing LFP cell and long-duration storage domestic capacity.'},tags:['Determination','ATVM'],cn:'USA'},
  {id:73,t:'pfe',src:'Presidential Docs',url:'https://www.federalregister.gov/documents/2026/08/31/2026-17843/declaring-a-national-emergency-to-secure-the-united-states-bulk-power-system',time:'11:15',d:Date.now(),title:{zh:'行政命令 EO 14421：宣布国家紧急状态以确保美国大电网系统安全',en:'Executive Order 14421: Declaring a national emergency to secure the US bulk-power system'},sum:{zh:'总统于 2026-08-26 签署第 14421 号行政命令，依据《国际紧急经济权力法》（IEEPA）与国家紧急状态法宣布国家紧急状态，应对境外对美大电网（≥69kV 输变电）系统电力设备供应的威胁。命令禁止美国实体购置、进口、转让或安装由「受覆盖外国实体」供应、构成破坏/颠覆或国家安全风险的设备（含变电站变压器、电网级逆变器、电池储能系统、UPS、发电机、继电保护与工业控制系统），可对已安装设备采取识别、隔离、监控、更换或拆除等限制；要求能源部长 120 天内发布实施细则（认定受覆盖实体、许可程序与合格供应商清单），180 天内向 FAR 委员会提交联邦采购修订建议，优先采购美国本土制造的能源基础设施。',en:"Signed 2026-08-26, EO 14421 declares a national emergency under the International Emergency Economic Powers Act (IEEPA) and the National Emergencies Act to address threats from foreign supply of bulk-power system electric equipment (≥69 kV transmission). It prohibits US persons from acquiring, importing, transferring, or installing equipment (substation transformers, grid-scale inverters, battery energy storage systems, UPS, generators, protective relaying, and industrial control systems) supplied by covered foreign entities posing sabotage or national-security risk, authorizes conditions on already-installed equipment (identify, isolate, monitor, replace, or remove), and directs DOE to publish implementing rules within 120 days (covered-entity designations, licensing, pre-qualified vendor list) and recommend FAR revisions within 180 days to prioritize US-made energy infrastructure in federal procurement."},tags:['EO 14421','National Emergency','Grid Security'],cn:'USA'},
  /* ---- USA / PFE ---- */
  {id:31,t:'pfe',src:'Reuters',url:'https://www.reuters.com/technology/fcc-drafts-curbs-chinese-optical-modules-2026-08-21/',time:'13:25',title:{zh:'路透：FCC 起草限制中国光模块新机型进入美国市场',en:'Reuters: FCC drafts measures to restrict new Chinese optical modules from US market'},sum:{zh:'报道称 FCC 正起草措施，限制中国数据中心光收发模块新型号进入美国。高速光模块（800G/1.6T）的 DSP、MCU、光收发组件或纳入组件穿透审查，中际旭创、新易盛等厂商暂未被点名，方案仍可能调整。',en:'The FCC is drafting measures to restrict new models of Chinese data-center optical transceivers from entering the US. High-speed modules (800G/1.6T) including DSP, MCU, and transceiver components may fall under component-covered review. Zhongji Innolight and Eoptolink are not yet named; the proposal remains subject to change.'},tags:['光模块','Optical Module'],cn:'USA'},
  {id:32,t:'pfe',src:'FCC',url:'https://www.fcc.gov/document/fcc-covered-list-expansion-2026',time:'12:40',title:{zh:'FCC 组件穿透规则落地：受限企业逻辑硬件部件限制范围扩大',en:'FCC component-covered rule finalized: restricted-entity logical hardware scope expanded'},sum:{zh:'新规明确：若受限企业生产的设备无法获得 FCC 授权，其他厂商同类设备只要包含其逻辑硬件部件（半导体、基带处理器、蜂窝模块、光收发模块等），新机型授权也可能被拒。',en:'The new rule clarifies that if a restricted entity cannot obtain FCC authorization, other manufacturers using the same logical hardware components (semiconductors, baseband processors, cellular modules, optical transceivers) may also be denied new-model authorization.'},tags:['组件穿透','Covered List'],cn:'USA'},
  {id:33,t:'pfe',src:'CNBC',url:'https://www.cnbc.com/2026/08/21/us-china-tech-restrictions.html',time:'11:50',title:{zh:'CNBC：商务部反制 FCC/DHS 涉华消极措施，光模块限制预期升温',en:'CNBC: China\'s MOFCOM retaliates against FCC/DHS measures; optical-module curbs expected'},sum:{zh:'商务部针对 FCC 与国土安全部近期涉华消极措施宣布多项反制行动。业界关注 FCC 是否将中国光模块纳入限制清单，以及附条件批准豁免通道的具体安排。',en:"China's Ministry of Commerce announced countermeasures against recent FCC and DHS actions. The industry is watching whether the FCC will add Chinese optical modules to its covered list and what conditional-approval exemptions will look like."},tags:['反制','Retaliation'],cn:'USA'},
  {id:34,t:'pfe',src:'Bloomberg',url:'https://www.bloomberg.com/news/articles/2026-08-21/feoc-rule-china-battery-supply-chain',time:'11:05',title:{zh:'美国收紧 FEOC 规则：中国锂电材料供应链面临新一轮合规审查',en:'US tightens FEOC rules: Chinese battery material supply chain faces new compliance review'},sum:{zh:'美国财政部与能源部就 IRA 项下 FEOC（外国关注实体）认定细则征求行业意见，正极前驱体与石墨环节中国企业或受影响，电池厂商加速海外产能与本地化布局。',en:'The US Treasury and DOE are seeking industry input on FEOC (Foreign Entity of Concern) determination rules under the IRA. Cathode precursor and graphite segments with Chinese involvement may be affected; battery makers are accelerating overseas capacity and localization.'},tags:['FEOC','IRA'],cn:'USA'},
  {id:35,t:'pfe',src:'The Verge',url:'https://www.theverge.com/2026/8/21/fcc-covered-list-expansion',time:'10:20',title:{zh:'Covered List 扩容至设备品类：无人机、路由器、逆变器、机器人先后受限',en:'Covered List expands to device categories: drones, routers, inverters, robots now restricted'},sum:{zh:'FCC 限制清单由点名企业扩展至外国生产的整机品类，无人机及关键组件、路由器、电力逆变器、先进机器人等陆续被纳入，附条件批准（Conditional Approval）成为主要豁免通道。',en:"The FCC's covered list has expanded from named entities to entire device categories produced abroad. Drones, key components, routers, power inverters, and advanced robots are now included; Conditional Approval has become the primary exemption pathway."},tags:['Covered List','Device Ban'],cn:'USA'},
  {id:36,t:'trade',src:'Reuters',url:'https://www.reuters.com/business/finance/us-tariff-optical-modules-2026-08-21/',time:'09:45',title:{zh:'美国评估对进口光模块与逆变器加征关税，供应链备货节奏受扰动',en:'US weighs tariffs on imported optical modules and inverters; supply chains brace'},sum:{zh:'美国贸易代表办公室评估对高速光模块及电力逆变器加征关税，叠加 FCC 限制清单影响，中国厂商与美国客户出现提前备货、分散订单的迹象。',en:'USTR is evaluating tariffs on high-speed optical modules and power inverters. Combined with the FCC covered-list impact, Chinese suppliers and US customers are front-loading inventory and diversifying orders.'},tags:['关税','Tariff'],cn:'USA'},
  {id:3,t:'aidc',src:'Bloomberg',url:'https://www.bloomberg.com/news/articles/2026-08-21/hyperscaler-capex-2026',time:'08:58',title:{zh:'Hyperscaler capex 指引再上调：AI 服务器订单排至明年 Q2',en:'Hyperscaler capex guidance raised again: AI server orders stretch to next Q2'},sum:{zh:'多家云厂商在最新财报电话会中上调 2026 年资本开支指引，液冷、电力与光模块供应链订单能见度显著延长。',en:'Multiple cloud providers raised their 2026 capex guidance in latest earnings calls. Liquid cooling, power, and optical module supply-chain order visibility has extended significantly.'},tags:['Capex','Liquid Cooling'],cn:'USA'},
  {id:7,t:'aidc',src:'Reuters',url:'https://www.reuters.com/technology/nvidia-gpu-ramp-liquid-cooling-2026-08-21/',time:'07:45',title:{zh:'Nvidia 新一代 GPU 量产爬坡，液冷渗透率明年或超 40%',en:'Nvidia next-gen GPU ramps: liquid cooling penetration may exceed 40% next year'},sum:{zh:'供应链消息称下一代平台机柜功耗提升至 120kW+，直接液冷方案成为标配，冷板与 CDU 订单加速释放。',en:'Supply-chain sources say the next platform raises rack power to 120kW+, making direct liquid cooling standard. Cold plate and CDU orders are accelerating.'},tags:['GPU','Liquid Cooling'],cn:'USA'},
  {id:9,t:'telecom',src:'Light Reading',url:'https://www.lightreading.com/mobile/t-mobile-nokia-6g-terahertz-trial',time:'07:12',title:{zh:'T-Mobile 与诺基亚完成 6G 太赫兹原型验证，速率破 100Gbps',en:'T-Mobile and Nokia complete 6G terahertz prototype trial, breaking 100 Gbps'},sum:{zh:'双方在 250GHz 频段完成多天线原型测试，标志着 6G 候选频段从实验室走向外场验证阶段。',en:'The two companies completed a multi-antenna prototype test in the 250 GHz band, marking the transition of 6G candidate frequencies from lab to field-trial stage.'},tags:['6G','Terahertz'],cn:'USA'},
  {id:10,t:'energy',src:'Wood Mackenzie',url:'https://www.woodmac.com/news/global-storage-h1-2026/',time:'06:58',title:{zh:'全球储能新增装机上半年达 48GW，中美合计占比 71%',en:'Global new storage capacity reaches 48 GW in H1; China and US account for 71%'},sum:{zh:'中国上半年新增储能装机 26GW 居首，美国以 8GW 紧随其后；电网侧与工商业储能贡献主要增量。',en:"China led with 26 GW of new storage in H1, followed by the US at 8 GW. Grid-side and commercial & industrial storage contributed the bulk of additions."},tags:['Storage','Global'],cn:'USA'},
  {id:14,t:'trade',src:'Reuters',url:'https://www.reuters.com/world/us/china-battery-tariff-2026-ustr-review/',time:'05:55',title:{zh:'美国对华锂电关税 2026 年再上调，EV 电池综合税率或达 50%',en:'US raises China battery tariffs again in 2026; EV battery composite rate may hit 50%'},sum:{zh:'USTR 公告 301 条款四年度复审结果，动力电池与天然石墨关税 2026 年 1 月起进一步上调，业内评估出口成本上升约 8-12%。',en:'USTR announced Section 301 four-year review results. EV battery and natural graphite tariffs rise further from Jan 2026; industry estimates export cost increases of 8-12%.'},tags:['Tariff','Section 301'],cn:'USA'},
  {id:30,t:'aidc',src:"Dell'Oro Group",url:'https://www.delloro.com/news/800g-module-shipments-2026',time:'01:55',title:{zh:'800G 光模块出货量 2026 年预计翻倍，数据中心交换机升级驱动',en:'800G optical module shipments expected to double in 2026, driven by data-center switch upgrades'},sum:{zh:"Dell'Oro 报告显示 800G 光模块出货量预计同比增长 110%，AI 集群 scale-out 网络升级是主要需求来源。",en:"Dell'Oro reports 800G optical module shipments are expected to grow 110% YoY. AI cluster scale-out network upgrades are the primary demand driver."},tags:['800G','Optical'],cn:'USA'},
  /* ---- USA / Battery — US lithium-battery sector (industry news for the Battery tab) ---- */
  {id:60,t:'lithium',src:'Bloomberg',url:'https://www.bloomberg.com/news/articles/2026-08/ira-45x-final-rule',time:'14:20',d:Date.now()-1*864e5,title:{zh:'IRA 45X 先进制造补贴最终规则落地，美国电池产能激励加码',en:'IRA 45X advanced manufacturing credit final rule lands; US battery capacity incentives expand'},sum:{zh:'能源部与财政部敲定 45X 先进制造生产税抵免最终规则，电芯、正极材料、石墨与电池关键矿物均适用，单笔项目最高可覆盖 30% 制造成本，本土电池产能规划加速兑现。',en:'DOE and Treasury finalized the 45X advanced manufacturing production credit rule covering cells, cathode materials, graphite, and critical battery minerals, up to 30% of manufacturing cost per project. Domestic battery capacity plans are accelerating.'},tags:['IRA','45X'],cn:'USA'},
  {id:61,t:'lithium',src:'Reuters',url:'https://www.reuters.com/business/autos-transportation/us-battery-plant-expansion-2026-08/',time:'13:05',d:Date.now()-2*864e5,title:{zh:'美国本土电池厂扩产潮：4680 与 LFP 产线集中上马',en:'US battery plant expansion wave: 4680 and LFP lines ramp up'},sum:{zh:'特斯拉、LG Energy Solution 与松下能源相继宣布美国产线扩产，4680 大圆柱与 LFP 磷酸铁锂并行推进，2027 年前新增产能合计超 120GWh，供应链本土化率目标过半。',en:'Tesla, LG Energy Solution, and Panasonic Energy announced US capacity expansions, advancing 4680 large-format cylindrical and LFP chemistry in parallel. Combined new capacity exceeds 120 GWh by 2027, targeting over half-local supply chains.'},tags:['4680','LFP'],cn:'USA'},
  {id:62,t:'lithium',src:'CNBC',url:'https://www.cnbc.com/2026/08/us-lithium-mining-recycling.html',time:'11:40',d:Date.now()-3*864e5,title:{zh:'美国锂矿与回收投资提速：能源部贷款支持本土供应链',en:'US lithium mining and recycling investment accelerates: DOE loans back domestic supply chain'},sum:{zh:'Albemarle 与 Redwood Materials 获能源部先进技术车辆制造贷款，分别投向美国本土锂资源开采与电池材料闭环回收，目标 2028 年实现关键矿物自给率显著提升。',en:'Albemarle and Redwood Materials received DOE ATVM loans for domestic lithium extraction and closed-loop battery material recycling, aiming to significantly raise critical-mineral self-sufficiency by 2028.'},tags:['Lithium Mining','Recycling'],cn:'USA'},
  {id:63,t:'lithium',src:'Wood Mackenzie',url:'https://www.woodmac.com/news/us-ess-boom-2026',time:'09:55',d:Date.now()-4*864e5,title:{zh:'美国储能装机延续高增：LFP 电芯需求外溢拉动电池进口',en:'US storage installations keep booming: LFP cell demand spills into battery imports'},sum:{zh:'美国大储项目排队并网，LFP 电芯供不应求，尽管关税与 FEOC 审查趋严，本土组装+进口电芯的混合模式仍是主流，头部储能集成商锁定 2027 年前产能。',en:'US utility-scale storage projects queue for grid connection, with LFP cells in short supply. Despite tighter tariffs and FEOC scrutiny, domestic assembly plus imported cells remains the dominant model; top integrators are locking capacity through 2027.'},tags:['ESS','LFP'],cn:'USA'},

  /* ---- China ---- */
  {id:1,t:'lithium',src:'SMM 上海有色',url:'https://www.smm.cn/news/lithium-carbonate-2026-08-21',time:'09:32',title:{zh:'碳酸锂主力合约日内涨超 3%，供给端盐湖检修叠加需求回暖',en:'Li carbonate futures surge over 3% intraday as salt-lake maintenance meets recovering demand'},sum:{zh:'SMM 数据显示，8 月碳酸锂周度产量环比下降 5.2%，锂盐厂挺价情绪升温，下游正极材料厂刚需采购启动。',en:"SMM data shows August weekly lithium carbonate output fell 5.2% MoM. Producers are holding prices firm; downstream cathode makers have started restocking on demand."},tags:['锂价','Li Price'],cn:'China'},
  {id:2,t:'aidc',src:'InfoQ',url:'https://www.infoq.cn/article/aidc-construction-2026',time:'09:15',title:{zh:'国内智算中心建设提速：8 省市上半年新开工算力项目超 60 个',en:'China AI data center construction accelerates: 60+ new compute projects in 8 provinces in H1'},sum:{zh:'据不完全统计，上半年全国智算中心新开工项目 61 个，规划算力合计约 85 EFLOPS，平均 PUE 目标降至 1.2 以下。',en:'According to preliminary statistics, 61 new AI compute center projects broke ground in H1, with planned total capacity of ~85 EFLOPS and average PUE target below 1.2.'},tags:['智算','AIDC'],cn:'China'},
  {id:4,t:'lithium',src:'高工锂电 GGII',url:'https://www.gg-lb.com/art/solid-state-pilot-2026',time:'08:40',title:{zh:'固态电池中试线密集落地，硫化物路线产业化时点提前',en:'Solid-state battery pilot lines cluster; sulfide route industrialization timeline moves up'},sum:{zh:'GGII 统计显示年内已有 9 家企业启动硫化物固态电池中试线建设，预计 2027 年 GWh 级量产窗口开启。',en:'GGII statistics show 9 companies have launched sulfide solid-state battery pilot lines this year. GWh-scale production is expected to open in 2027.'},tags:['固态电池','Solid-state'],cn:'China'},
  {id:5,t:'telecom',src:'C114 通信网',url:'https://www.c114.com.cn/news/a5g-a-400-cities-2026',time:'08:21',title:{zh:'三大运营商 5G-A 商用城市扩容至 400+，上行增强成为主推场景',en:'China\'s three operators expand 5G-Advanced to 400+ cities; uplink enhancement becomes key scenario'},sum:{zh:'5G-A 三载波聚合与上行增强在视频直播、工业质检场景渗透率快速提升，带动基站主设备新一轮集采。',en:'5G-A three-carrier aggregation and uplink enhancement are seeing rapid penetration in video broadcasting and industrial inspection, driving a new round of base-station equipment procurement.'},tags:['5G-A','Procurement'],cn:'China'},
  {id:6,t:'energy',src:'北极星储能网',url:'https://news.bjx.com.cn/html/20260821/ess-bid-price.html',time:'08:02',title:{zh:'储能系统报价再创新低：2h 磷酸铁锂储能系统中标均价 0.48 元/Wh',en:'ESS bid price hits new low: 2-hour LFP storage system average award price 0.48 RMB/Wh'},sum:{zh:'7 月储能系统中标均价环比下降 6%，电芯价格下行与集成效率提升是主要驱动，业主侧配储收益率改善。',en:'July ESS average award price fell 6% MoM, driven by cell price declines and improved integration efficiency. Owner-side storage ROI is improving.'},tags:['储能','ESS Bid'],cn:'China'},
  {id:12,t:'energy',src:'北极星储能网',url:'https://news.bjx.com.cn/html/20260821/pv-module-price.html',time:'06:25',title:{zh:'光伏组件价格企稳：TOPCon 双面双玻均价 0.71 元/W',en:'PV module prices stabilize: TOPCon bifacial double-glass average 0.71 RMB/W'},sum:{zh:'8 月组件价格连续两周持平，硅料价格触底回升带动产业链价格企稳，部分头部厂商上调排产。',en:'August module prices held flat for two consecutive weeks. Polysilicon bottoming out and recovering has stabilized the supply chain; some top manufacturers raised production schedules.'},tags:['光伏','PV Price'],cn:'China'},
  {id:13,t:'aidc',src:'财新 Caixin',url:'https://www.caixin.com/2026-08-21/data-center-green-power.html',time:'06:10',title:{zh:'数据中心电力保障成瓶颈：西部绿电直供试点启动',en:'Data center power supply becomes bottleneck: western green-power direct supply pilot launched'},sum:{zh:'多地启动数据中心绿电直供与源网荷储一体化试点，探索算力与绿电协同消纳的新商业模式。',en:'Multiple regions have launched green-power direct supply and source-grid-load-storage integration pilots, exploring new business models for coordinated compute and green-power consumption.'},tags:['绿电','Green Power'],cn:'China'},
  {id:24,t:'lithium',src:'工信部 MIIT',url:'https://www.miit.gov.cn/recycle-whitelist-batch8-2026',time:'03:25',title:{zh:'锂电回收白名单扩容至 156 家，规范化回收率目标 2030 年达 75%',en:'Battery recycling whitelist expands to 156 companies; 2030 target 75% formal recycling rate'},sum:{zh:'工信部公示第八批动力电池回收白名单企业，梯次利用与再生利用产能合计规划超 600GWh 当量。',en:'MIIT published the 8th batch of battery recycling whitelist companies. Cascaded use and regeneration capacity totals over 600 GWh equivalent.'},tags:['回收','Recycling'],cn:'China'},
  {id:25,t:'aidc',src:'IDC',url:'https://www.idc.com/getdoc.jsp?containerId=prc-aidc-h1-2026',time:'03:10',title:{zh:'中国智能算力市场 2026H1 规模达 190 亿元，同比增 51%',en:'China AI compute market reaches 19 B RMB in H1 2026, up 51% YoY'},sum:{zh:'IDC 最新报告显示智算服务市场高速增长，推理算力占比首次超过训练，端侧智能带来增量需求。',en:"IDC's latest report shows high-speed growth in AI compute services. Inference now exceeds training for the first time; edge AI is driving incremental demand."},tags:['市场','Inference'],cn:'China'},
  {id:26,t:'energy',src:'国家能源局',url:'https://www.nea.gov.cn/power-consumption-jul-2026',time:'02:55',title:{zh:'7 月全社会用电量同比增长 7.2%，高技术制造业用电领跑',en:'July total power consumption up 7.2% YoY; high-tech manufacturing leads'},sum:{zh:'计算机通信电子设备制造业用电量同比增长 15.3%，数据中心与 AI 相关产业成为用电增长新引擎。',en:'Computer & communication electronics manufacturing power consumption grew 15.3% YoY. Data centers and AI-related industries are the new growth engine for power demand.'},tags:['用电量','Power Demand'],cn:'China'},
  {id:28,t:'energy',src:'第一财经 Yicai',url:'https://www.yicai.com/news/vpp-load-15gw-2026',time:'02:25',title:{zh:'虚拟电厂试点扩围：聚合可调节负荷规模超 15GW',en:'Virtual power plant pilots expand: aggregated adjustable load exceeds 15 GW'},sum:{zh:'多地虚拟电厂进入常态化运营，工商业储能、充电桩与空调负荷参与需求响应，辅助服务收益模式成熟。',en:'Multiple VPPs have entered routine operation. Commercial & industrial storage, EV chargers, and HVAC loads participate in demand response; ancillary service revenue models are maturing.'},tags:['VPP','Demand Response'],cn:'China'},
  {id:29,t:'lithium',src:'Benchmark Mineral Intelligence',url:'https://www.benchmarkminerals.com/lfp-capacity-2027-forecast',time:'02:10',title:{zh:'全球 LFP 正极产能 2027 年将超 500 万吨，中国企业占比 78%',en:'Global LFP cathode capacity to exceed 5 million tonnes by 2027; Chinese firms hold 78% share'},sum:{zh:'Benchmark 预测 LFP 正极产能将快速扩张，中国头部企业通过技术授权与合资方式布局欧洲与东南亚。',en:'Benchmark forecasts rapid LFP cathode capacity expansion. Leading Chinese companies are expanding into Europe and Southeast Asia via technology licensing and joint ventures.'},tags:['LFP','Capacity'],cn:'China'},
  {id:27,t:'trade',src:'中国商务部',url:'http://www.mofcom.gov.cn/india-pli-battery-response.html',time:'02:40',title:{zh:'印度延长锂电池 PLI 至 2028，中国商务部关注贸易转移效应',en:'India extends battery PLI to 2028; China\'s MOFCOM monitors trade diversion effects'},sum:{zh:'印度政府将 PLI 计划延期并加大补贴力度，目标 2028 年形成 200GWh 本土电池产能，降低对进口依赖。中国商务部关注贸易转移效应。',en:"India's government extended the PLI program and increased subsidies, targeting 200 GWh of domestic battery capacity by 2028 to reduce import dependence. China's MOFCOM is monitoring trade diversion effects."},tags:['PLI','Trade Diversion'],cn:'China'},

  /* ---- Germany ---- */
  {id:8,t:'lithium',src:'EV-volumes',url:'https://www.ev-volumes.com/july-2026-global-ev-sales/',time:'07:30',title:{zh:'7 月全球新能源车销量 142 万辆，欧洲插混回暖明显',en:'July global EV sales 1.42M units; European PHEV rebound notable'},sum:{zh:'EV-volumes 数据显示 7 月全球 BEV+PHEV 销量同比增长 18%，欧洲市场在补贴政策落地后环比反弹 9%。',en:'EV-volumes data shows July global BEV+PHEV sales up 18% YoY. The European market rebounded 9% MoM after subsidy policies took effect.'},tags:['EV Sales','Global'],cn:'Germany'},
  {id:15,t:'trade',src:'Handelsblatt',url:'https://www.handelsblatt.com/eu-anti-subsidy-ev-china-final-2026',time:'05:40',title:{zh:'欧盟对华电动车反补贴终裁落地，综合税率 20.5%~35.3%',en:'EU anti-subsidy final ruling on Chinese EVs: composite rate 20.5%-35.3%'},sum:{zh:'欧委会公布终裁税率，叠加 10% 最惠国基础关税后，部分企业综合进口税率接近 45%；中企加速欧洲本地化建厂应对。',en:'The European Commission announced final rates. With the 10% MFN base tariff, some companies face total import rates near 45%. Chinese firms are accelerating European localization.'},tags:['Anti-subsidy','EU'],cn:'Germany'},
  {id:18,t:'aidc',src:'CleanEnergyWire',url:'https://www.cleanenergywire.org/eu-data-center-energy-directive-2026',time:'04:55',title:{zh:'欧洲数据中心能耗新规落地：强制要求余热回收与绿电采购',en:'EU data center energy rules finalized: mandatory waste-heat recovery and green-power procurement'},sum:{zh:'欧盟数据中心能效指令实施细则生效，大型数据中心须在 2030 年前将余热回收比例提升至 40%。',en:"The EU's data center energy efficiency directive takes effect. Large data centers must raise waste-heat recovery to 40% by 2030."},tags:['EU Directive','Energy'],cn:'Germany'},
  {id:23,t:'trade',src:'Frankfurter Allgemeine',url:'https://www.faz.net/cbam-transition-ends-2026',time:'03:40',title:{zh:'欧盟 CBAM 过渡期 2025 年底结束，2026 年全面开征碳关税',en:'EU CBAM transition ends late 2025; full carbon tariff collection begins 2026'},sum:{zh:'碳边境调节机制过渡期结束，钢铁、铝、水泥、化肥、电力、氢六大行业全面纳入，电池间接纳入范围扩大。',en:'The CBAM transition period has ended. Steel, aluminum, cement, fertilizer, electricity, and hydrogen are fully covered; batteries are being indirectly included.'},tags:['CBAM','Carbon Tariff'],cn:'Germany'},
  {id:58,t:'energy',src:'Handelsblatt',url:'https://www.handelsblatt.com/germany-ess-install-h1-2026',time:'06:15',title:{zh:'德国储能装机 2026H1 新增 3.2GW，工商储补贴落地',en:'Germany adds 3.2 GW of storage in H1 2026 as C&I storage subsidies take effect'},sum:{zh:'德国联邦网络局数据显示上半年新增储能 3.2GW，工商业储能因补贴与峰谷套利收益改善增长最快；家庭储能延续 2025 年势头，本土电芯产能布局加速。',en:"Germany's Bundesnetzagentur shows 3.2 GW of new storage in H1. C&I storage grew fastest on subsidies and improved peak-shaving returns; home storage extends its 2025 momentum as domestic cell capacity builds up."},tags:['储能','ESS'],cn:'Germany'},
  {id:59,t:'telecom',src:'The Register EU',url:'https://www.theregister.com/telekom-open-ran-2026',time:'10:05',title:{zh:'德国电信完成 5G-A Open RAN 商用试点，首批城市上线',en:'Deutsche Telekom completes 5G-Advanced Open RAN commercial pilot in first cities'},sum:{zh:'德国电信在三个城市完成 5G-A + Open RAN 商用试点，验证多供应商无线接入与智能编排，计划 2027 年扩展到 20 城，同时推动欧洲 Open RAN 生态本地化。',en:"Deutsche Telekom completed 5G-Advanced + Open RAN commercial pilots in three cities, validating multi-vendor RAN and intelligent orchestration. It plans expansion to 20 cities by 2027, boosting Europe's Open RAN ecosystem."},tags:['Open RAN','5G-A'],cn:'Germany'},

  /* ---- Japan ---- */
  {id:11,t:'lithium',src:'Nikkei Asia',url:'https://asia.nikkei.com/Business/transportation/toyota-solid-state-2027-plan',time:'06:40',title:{zh:'日本车企加速全固态电池布局，丰田 2027 量产计划不变',en:'Japanese automakers accelerate solid-state battery push; Toyota\'s 2027 production plan on track'},sum:{zh:'丰田、日产相继公布固态电池量产时间表，硫化物电解质专利布局成为竞争焦点，日韩材料企业同步扩产。',en:'Toyota and Nissan have released solid-state battery production timelines. Sulfide electrolyte patent布局 is the competitive focus; Japanese and Korean material companies are expanding capacity in parallel.'},tags:['固态电池','Solid-state'],cn:'Japan'},
  {id:37,t:'lithium',src:'The Japan Times',url:'https://www.japantimes.co.jp/news/2026/08-21/japan-battery-recycling-meti/',time:'10:15',title:{zh:'日本经产省发布电池回收路线图：2030 年锂回收率目标 80%',en:'Japan METI releases battery recycling roadmap: 80% lithium recovery target by 2030'},sum:{zh:'日本经产省正式发布车用动力电池回收路线图，明确 2030 年锂、钴、镍回收率目标分别为 80%、95%、95%，推动全链条追溯与本土材料循环。',en:"Japan's METI released an EV battery recycling roadmap, setting 2030 recovery targets of 80% lithium, 95% cobalt, and 95% nickel, promoting full-chain traceability and domestic material circulation."},tags:['回收','Recycling'],cn:'Japan'},
  {id:38,t:'telecom',src:'Nikkei Asia',url:'https://asia.nikkei.com/Business/telecom/ntt-6g-open-ran-2026',time:'14:20',title:{zh:'NTT 与 KDDI 联合推进 6G 开放架构，2027 外场试验计划确定',en:'NTT and KDDI jointly advance 6G open architecture; 2027 field trial plan confirmed'},sum:{zh:'日本两大运营商宣布合作开发 6G 开放无线接入网（O-RAN）架构，计划 2027 年启动外场试验，重点验证太赫兹通信与智能反射面技术。',en:"Japan's two largest operators announced joint development of a 6G open RAN architecture. Field trials are planned for 2027, focusing on terahertz communication and reconfigurable intelligent surfaces."},tags:['6G','O-RAN'],cn:'Japan'},

  /* ---- South Korea ---- */
  {id:39,t:'lithium',src:'Korea Herald',url:'https://www.koreaherald.com/view.php?ud=20260821000501',time:'11:30',title:{zh:'韩国公布关键矿产自给率目标：锂、钴、石墨 2030 年达 50%',en:'South Korea sets critical mineral self-sufficiency targets: lithium, cobalt, graphite to 50% by 2030'},sum:{zh:'韩国产业通商资源部发布关键矿产保障战略，目标 2030 年锂、钴、天然石墨自给率提升至 50%，通过海外矿产股权投资与本土回收双轨并行。',en:"South Korea's MOTIE released a critical mineral security strategy, targeting 50% self-sufficiency in lithium, cobalt, and natural graphite by 2030 through overseas equity investments and domestic recycling."},tags:['关键矿产','Critical Minerals'],cn:'South Korea'},
  {id:40,t:'aidc',src:'Pulse News',url:'https://pulsenews.co.kr/view.php?year=2026&no=821003',time:'09:50',title:{zh:'韩国 SK 集团加码 AIDC：投资 15 万亿韩元建设超大规模 AI 园区',en:'SK Group doubles down on AIDC: 15 trillion KRW investment for mega AI campus'},sum:{zh:'SK 集团宣布未来五年投资 15 万亿韩元，在京畿道建设超大规模 AI 数据中心园区，规划算力超 50 EFLOPS，采用全液冷架构与自研 AI 芯片。',en:'SK Group announced a 15 trillion KRW, 5-year investment to build a mega AI data center campus in Gyeonggi-do, with planned capacity over 50 EFLOPS, using all-liquid cooling architecture and in-house AI chips.'},tags:['AIDC','SK Group'],cn:'South Korea'},
  {id:41,t:'lithium',src:'ET News',url:'https://www.etnews.com/20260821000126',time:'08:15',title:{zh:'LG 新能源与三星 SDI 联合开发全固态电池，目标 2028 量产',en:'LG Energy Solution and Samsung SDI jointly develop all-solid-state batteries; mass production targeted for 2028'},sum:{zh:'韩国两大电池巨头宣布在全固态电池领域开展合作，共享硫化物电解质专利与中试线资源，联合开发标准化电芯平台，目标 2028 年实现 GWh 级量产。',en:"Korea's two battery giants announced cooperation on all-solid-state batteries, sharing sulfide electrolyte patents and pilot-line resources, jointly developing a standardized cell platform targeting GWh-scale production by 2028."},tags:['固态电池','All-solid-state'],cn:'South Korea'},

  /* ---- Australia ---- */
  {id:17,t:'lithium',src:'Fastmarkets',url:'https://www.fastmarkets.com/insights/australia-lithium-q2-2026',time:'05:10',title:{zh:'澳洲锂矿 Q2 产量环比下滑 9%，Greenbushes 下调全年指引',en:'Australian lithium mine output falls 9% QoQ in Q2; Greenbushes cuts full-year guidance'},sum:{zh:'澳洲锂精矿产量连续两个季度回落，高成本矿山现金成本压力显现，行业供给出清信号增强。',en:'Australian lithium concentrate output has declined for two consecutive quarters. High-cost mines are showing cash-cost pressure; industry supply rationalization signals are strengthening.'},tags:['锂矿','Li Ore'],cn:'Australia'},
  {id:42,t:'energy',src:'Australian Mining',url:'https://www.australianmining.com.au/news/au-large-scale-storage-2026',time:'12:10',title:{zh:'澳大利亚大型储能项目开工潮：8 个州共 42GW 规划获批',en:'Australia large-scale storage construction wave: 42 GW approved across 8 states'},sum:{zh:'澳大利亚各州加速大型储能项目审批，新南威尔士、维多利亚、昆士兰三州合计 42GW 规划已获环评批准，预计 2026-2028 年陆续并网。',en:'Australian states are accelerating large-scale storage approvals. NSW, Victoria, and Queensland have 42 GW of planned capacity with environmental approval, expected to connect 2026-2028.'},tags:['储能','Storage'],cn:'Australia'},
  {id:43,t:'energy',src:'Renew Economy',url:'https://reneweconomy.com.au/au-vpp-agg-2026',time:'07:20',title:{zh:'澳大利亚虚拟电厂聚合规模突破 5GW，分布式储能成主力',en:'Australia VPP aggregated capacity exceeds 5 GW; distributed storage becomes backbone'},sum:{zh:'澳大利亚能源市场运营商（AEMO）报告显示，全国虚拟电厂聚合规模突破 5GW，家用储能与屋顶光伏参与比例大幅提升，辅助服务收益占比超过 40%。',en:"AEMO reports that national VPP aggregated capacity has exceeded 5 GW. Home storage and rooftop PV participation rates have risen sharply; ancillary service revenue now accounts for over 40%."},tags:['VPP','Distributed Storage'],cn:'Australia'},

  /* ---- UK ---- */
  {id:16,t:'trade',src:'Benchmark Mineral Intelligence',url:'https://www.benchmarkminerals.com/uk-critical-minerals-strategy-2026',time:'05:25',title:{zh:'英国推出关键矿产战略：锂、钴、石墨纳入战略储备清单',en:'UK launches critical minerals strategy: lithium, cobalt, graphite added to strategic reserve list'},sum:{zh:'英国政府公布关键矿产战略更新，将锂、钴、天然石墨、锰列入战略储备，鼓励本土回收与多元化采购。',en:'The UK government published an updated critical minerals strategy, adding lithium, cobalt, natural graphite, and manganese to strategic reserves, encouraging domestic recycling and diversified sourcing.'},tags:['关键矿产','Critical Minerals'],cn:'UK'},
  {id:44,t:'telecom',src:'Financial Times',url:'https://www.ft.com/content/uk-5g-open-ran-2026',time:'10:45',title:{zh:'英国 5G Open RAN 部署加速：四大运营商共享基础设施协议达成',en:'UK 5G Open RAN deployment accelerates: four operators sign shared-infrastructure agreement'},sum:{zh:'英国四大移动运营商签署农村共享网络协议，将在偏远地区部署 Open RAN 基站，目标 2027 年覆盖 95% 人口，降低网络部署成本约 30%。',en:"UK's four mobile operators signed a rural network-sharing agreement to deploy Open RAN base stations in remote areas, targeting 95% population coverage by 2027 and reducing deployment costs by ~30%."},tags:['Open RAN','5G'],cn:'UK'},
  {id:45,t:'aidc',src:'BusinessCloud',url:'https://www.businesscloud.co.uk/uk-data-center-growth-2026',time:'08:30',title:{zh:'英国数据中心投资创纪录：2026H1 吸引外资超 50 亿英镑',en:'UK data center investment hits record: over £5B foreign capital in H1 2026'},sum:{zh:'英国数字基础设施领域在 2026 上半年吸引外资超 50 亿英镑，伦敦与大曼彻斯特地区为主要投资目的地，新建数据中心规划算力超 800MW。',en:"The UK's digital infrastructure sector attracted over £5B in foreign investment in H1 2026. London and Greater Manchester are primary destinations, with new data center plans totaling over 800MW."},tags:['Data Center','Investment'],cn:'UK'},
  {id:64,t:'lithium',src:'Financial Times',url:'https://www.ft.com/content/uk-gigafactory-supply-chain-2026',time:'07:40',d:Date.now()-2*864e5,title:{zh:'英国超级工厂供应链本土化提速：正极与前驱体项目落地',en:'UK gigafactory supply chain localizes: cathode and precursor projects land'},sum:{zh:'Tata 旗下 Agratas 与 Envision AESC 相继在英国敲定正极材料与前驱体本地供应协议，Somerset 与 Sunderland 两大电池基地供应链本土化率目标提升至 60%，配套石墨与隔膜项目同步推进。',en:"Tata's Agratas and Envision AESC have signed local cathode and precursor supply agreements in the UK. Localization targets for the Somerset and Sunderland gigafactory bases rise to 60%, with graphite and separator projects advancing in tandem."},tags:['Gigafactory','Localization'],cn:'UK'},

  /* ---- France ---- */
  {id:19,t:'trade',src:'Les Echos',url:'https://www.lesechos.com/industrie/battery-subsidy-france-2026',time:'04:40',title:{zh:'法国推出电池产业补贴：LFP 正极与电芯本土产能加码',en:'France launches battery industry subsidies: LFP cathode and cell domestic capacity boosted'},sum:{zh:'法国政府宣布新增 21 亿欧元补贴支持本土电池产业链，重点扶持 LFP 正极材料与储能电芯产能建设。',en:'The French government announced €2.1B in new subsidies for the domestic battery supply chain, focusing on LFP cathode materials and storage cell capacity.'},tags:['Subsidy','LFP'],cn:'France'},
  {id:46,t:'energy',src:'Usine Nouvelle',url:'https://www.usinenouvelle.com/france-nuclear-smr-2026',time:'09:05',title:{zh:'法国小型核反应堆 (SMR) 项目获批：2030 年首台并网',en:'France small modular reactor (SMR) project approved: first grid connection by 2030'},sum:{zh:'法国核安全署批准 Nuward SMR 示范项目建设，装机 340MW，预计 2028 年开始安装、2030 年并网。项目目标为数据中心提供低碳基荷电力。',en:"France's nuclear safety authority approved the Nuward SMR demonstration project, 340 MW capacity. Installation begins 2028, grid connection 2030. The project aims to provide low-carbon baseload power for data centers."},tags:['SMR','Nuclear'],cn:'France'},
  {id:47,t:'aidc',src:'FranceInfo',url:'https://www.francetvinfo.fr/data-center-marseille-2026',time:'13:10',title:{zh:'马赽数据中心集群扩容：地中海海底光缆驱动增长',en:'Marseille data center cluster expands: sub-Mediterranean cables drive growth'},sum:{zh:'马赛作为欧洲南部门户枢纽，多条地中海海底光缆登陆点带动数据中心需求，2026 年新增机房面积超 4 万平方米，运营商包括 Equinix、Digital Realty 等。',en:"Marseille as Europe's southern gateway hub, multiple sub-Mediterranean cable landings are driving data center demand. 2026 sees 40,000+ sqm of new white space; operators include Equinix and Digital Realty."},tags:['Data Center','Marseille'],cn:'France'},
  {id:65,t:'lithium',src:'Les Echos',url:'https://www.lesechos.com/industrie/acc-verkhor-dunkirk-2026',time:'10:30',d:Date.now()-3*864e5,title:{zh:'法国 ACC 与 Verkor 敦刻尔克电池基地扩产，LFP 与高镍并行',en:'France ACC and Verkor expand Dunkirk battery bases: LFP and high-nickel in parallel'},sum:{zh:'ACC（Stellantis/TotalEnergies/梅赛德斯合资）与 Verkor 相继上调敦刻尔克与滨海布洛涅基地产能规划，新增 LFP 储能电芯线与高镍三元产线，法国本土电池产能 2027 年目标突破 60GWh。',en:"ACC (the Stellantis/TotalEnergies/Mercedes JV) and Verkor raised capacity plans at their Dunkirk and Boulogne-sur-Mer bases, adding LFP storage cell lines and high-nickel NMC lines. France targets over 60 GWh of domestic battery capacity by 2027."},tags:['Gigafactory','LFP'],cn:'France'},

  /* ---- Netherlands ---- */
  {id:20,t:'aidc',src:'NL Times',url:'https://nltimes.nl/2026/08/21/netherlands-export-control-semiconductors',time:'04:25',title:{zh:'荷兰扩大半导体设备出口管制：先进光刻与核心零部件纳入',en:'Netherlands expands semiconductor equipment export controls: advanced lithography and core components included'},sum:{zh:'荷兰政府更新出口管制清单，更多先进制程光刻设备与零部件出口需许可，影响先进 AI 芯片供应链。',en:"The Dutch government updated its export control list; more advanced-process lithography equipment and components now require export licenses, affecting the advanced AI chip supply chain."},tags:['Export Control','Semiconductor'],cn:'Netherlands'},
  {id:48,t:'aidc',src:'Dutch News',url:'https://www.dutchnews.nl/news/2026/08/21/ams-data-center-green',time:'10:50',title:{zh:'阿姆斯特丹数据中心绿电比例突破 80%，市议会强制 PUE 限值',en:'Amsterdam data center green-power ratio exceeds 80%; city council mandates PUE limit'},sum:{zh:'阿姆斯特丹市议会通过新规，要求 2027 年后新建数据中心 PUE 不超过 1.2，且绿电采购比例不低于 80%。目前已有 3 个超大规模数据中心达标。',en:"Amsterdam city council passed new rules requiring new data centers from 2027 to have PUE ≤1.2 and green-power procurement ≥80%. Three hyperscale data centers already meet the standard."},tags:['Green Power','PUE'],cn:'Netherlands'},
  {id:49,t:'trade',src:'ASML Newsroom',url:'https://www.asml.com/en/news/asml-q2-2026-earnings',time:'14:30',title:{zh:'ASML 季度财报：High-NA EUV 订单超预期，AI 驱动需求强劲',en:'ASML quarterly results: High-NA EUV orders beat expectations; AI-driven demand strong'},sum:{zh:'ASML 公布 Q2 财报，High-NA EUV 光刻机订单量超市场预期 23%，公司上调全年营收指引，AI 芯片制程升级驱动需求强劲。',en:"ASML reported Q2 earnings with High-NA EUV lithography orders 23% above market expectations. The company raised full-year revenue guidance; AI chip process upgrades are driving strong demand."},tags:['ASML','EUV'],cn:'Netherlands'},
  {id:66,t:'lithium',src:'Dutch News',url:'https://www.dutchnews.nl/news/2026/08/21/netherlands-battery-recycling',time:'09:20',d:Date.now()-4*864e5,title:{zh:'荷兰电池回收枢纽成型：鹿特丹港扩建锂电循环处理能力',en:'Netherlands battery recycling hub takes shape: Rotterdam port expands Li-ion circular capacity'},sum:{zh:'荷兰在鹿特丹港与埃因霍温布局两座大型锂电池回收与湿法冶金处理设施，年处理能力合计 12 万吨，依托港口物流优势承接欧洲退役电池，目标 2030 年材料回收闭环率 90%。',en:"The Netherlands is building two large lithium-battery recycling and hydrometallurgical facilities at Rotterdam port and Eindhoven, with combined annual capacity of 120 kilotonnes. Leveraging port logistics, it targets a 90% closed-loop material recovery rate by 2030."},tags:['Recycling','Rotterdam'],cn:'Netherlands'},

  /* ---- Sweden ---- */
  {id:21,t:'energy',src:'SVT Nyheter',url:'https://www.svt.se/nyheter/sweden-data-center-green-power-95',time:'04:10',title:{zh:'瑞典北部数据中心集群绿电消纳率突破 95%',en:'Northern Sweden data center cluster green-power consumption exceeds 95%'},sum:{zh:'多家超大规模数据中心在瑞典北部落地，依托水电与风电资源，全年绿电消纳率超 95%，PUE 降至 1.1。',en:'Multiple hyperscale data centers have landed in northern Sweden, leveraging hydro and wind power. Annual green-power consumption exceeds 95%, with PUE down to 1.1.'},tags:['Green Power','Nordic'],cn:'Sweden'},
  {id:50,t:'energy',src:'EnergiFöretagen',url:'https://www.energiforetagen.se/nyheter/grid-expansion-north-2026',time:'11:15',title:{zh:'瑞典北部电网扩容投资 120 亿克朗，保障数据中心电力供应',en:'Sweden invests 12B SEK to expand northern grid, securing data center power supply'},sum:{zh:'瑞典电网公司 Svenska Kraftnät 宣布投资 120 亿瑞典克朗扩建北部输电网，目标 2028 年前新增 8GW 输电能力，保障数据中心与工业用电需求。',en:"Swedish grid operator Svenska Kraftnät announced a 12B SEK investment to expand the northern transmission grid, adding 8 GW of transmission capacity by 2028 to secure data center and industrial power demand."},tags:['Grid','Power Supply'],cn:'Sweden'},
  {id:67,t:'lithium',src:'SVT Nyheter',url:'https://www.svt.se/nyheter/northvolt-skelleftea-restart-2026',time:'08:50',d:Date.now()-5*864e5,title:{zh:'Northvolt 谢莱夫特奥工厂重启：瑞典电池产业迎新一轮资本注入',en:'Northvolt restarts Skellefteå plant: Swedish battery industry draws fresh capital'},sum:{zh:'Northvolt 在完成债务重组后重启谢莱夫特奥超级工厂一期产线，新引入欧洲与中东主权基金投资，同步推进正极材料与回收业务拆分，瑞典政府将电池列为国家战略产业。',en:"Northvolt restarted Phase 1 of its Skellefteå gigafactory after debt restructuring, bringing in fresh sovereign-fund investment from Europe and the Middle East. Cathode and recycling units are being spun off; Sweden has designated batteries a strategic industry."},tags:['Northvolt','Gigafactory'],cn:'Sweden'},

  /* ---- Switzerland ---- */
  {id:22,t:'lithium',src:'Swissinfo',url:'https://www.swissinfo.ch/eng/battery-recycling-law-switzerland-2026',time:'03:55',title:{zh:'瑞士通过电池回收法规：2030 年回收率目标 70%',en:'Switzerland passes battery recycling law: 70% recovery target by 2030'},sum:{zh:'瑞士联邦议会通过新版电池回收法规，要求 2030 年锂电池材料回收率达 70%，建立全链条追溯体系。',en:"The Swiss Federal Assembly passed the new battery recycling law, requiring 70% lithium battery material recovery by 2030 and establishing a full-chain traceability system."},tags:['回收','Recycling'],cn:'Switzerland'},
  {id:51,t:'aidc',src:'NZZ Neue Zürcher Zeitung',url:'https://www.nzz.ch/switzerland-data-center-alps-2026',time:'09:00',title:{zh:'瑞士阿尔卑斯山区数据中心崛起：自然冷却与绿电驱动优势',en:'Swiss Alps data centers rise: natural cooling and green power drive advantage'},sum:{zh:'瑞士利用阿尔卑斯山区低温与丰富水电资源，吸引 Equinix、Microsoft 等运营商建设数据中心，全年自然冷却天数超 300 天，PUE 低至 1.08。',en:"Switzerland is leveraging Alpine low temperatures and abundant hydro power to attract operators like Equinix and Microsoft. Natural cooling days exceed 300/year, with PUE as low as 1.08."},tags:['Data Center','Natural Cooling'],cn:'Switzerland'},
  {id:52,t:'trade',src:'Le Temps',url:'https://www.letemps.ch/economie/swiss-trade-policy-cbam-2026',time:'15:20',title:{zh:'瑞士调整贸易政策应对 CBAM：碳定价机制与欧盟接轨',en:'Switzerland adjusts trade policy for CBAM: carbon pricing mechanism aligns with EU'},sum:{zh:'瑞士联邦委员会宣布将国内碳定价机制与欧盟 CBAM 对接，避免双重征税，同时保障出口企业竞争力。钢铁、铝、水泥行业率先纳入。',en:"The Swiss Federal Council announced alignment of its domestic carbon pricing mechanism with the EU CBAM to avoid double taxation while protecting export competitiveness. Steel, aluminum, and cement are first to be included."},tags:['CBAM','Trade Policy'],cn:'Switzerland'}
];
/* assign a full timestamp to each news item — dates are relative to today so they always appear recent;
   spread within ~6 days (capped) so every item lands inside the default 7-day window even after time-of-day;
   items that already carry an explicit d (hand-authored fresh timestamps) are left untouched */
NEWS.forEach((n,i)=>{if(n.d)return;const now=new Date();const offset=Math.min(6,Math.round(i/8));n.d=new Date(now.getFullYear(),now.getMonth(),now.getDate()-offset,parseInt(n.time.slice(0,2))||0,parseInt(n.time.slice(3,5))||0);});

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
const state = {country:'USA',tab:'all',newsShown:7,papersShown:6,paperJournal:'all',paperQuery:'',live:true,lang:lsGet('tl_lang')||'zh',tenderSector:'all',tenderStatus:'all',tenderQ:'',govSrc:'all'};

/* ============ HELPERS ============ */
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const t = k => (I18N[state.lang]||I18N.zh)[k] || k;
function toast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(el._h);el._h=setTimeout(()=>el.classList.remove('show'),2200);}
function go(page){$$('.nav-item').forEach(n=>n.classList.toggle('active',n.dataset.page===page));$$('.page').forEach(p=>p.classList.toggle('active',p.id==='page-'+page));$('#main').scrollTop=0;renderAll();}

/* ============ LANG ============ */
function applyLang(){
  document.documentElement.lang = state.lang==='zh'?'zh-CN':'en';
  document.title = t('app_title');
  $$('[data-i18n]').forEach(el=>{el.textContent=t(el.dataset.i18n);});
  $$('[data-i18n-ph]').forEach(el=>{el.placeholder=t(el.dataset.i18nPh);});
  $('#langLabel').textContent = state.lang==='zh'?'EN':'中文';
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
  const title=lang==='zh'?(n.title.zh||n.title):(n.title.en||n.title.zh||n.title);
  const sum=lang==='zh'?(n.sum.zh||n.sum):(n.sum.en||n.sum.zh||n.sum);
  const href=n.url||'#';
  const srcLink=NEWS_MEDIA[n.cn]&&NEWS_MEDIA[n.cn].find(m=>m.name===n.src);
  const srcUrl=srcLink?srcLink.url:'#';
  const isGov=srcLink&&srcLink.gov;
  return `<div class="news-item" data-href="${esc(href)}"><div class="news-rail"><span class="news-dot ${ti[1]}"></span><span class="line"></span></div><div class="news-body"><div class="news-meta"><a class="src" href="${esc(srcUrl)}" target="_blank" rel="noopener" onclick="event.stopPropagation()">${esc(n.src)}</a>${isGov?'<span class="tag t-gov">GOV</span>':''}<span class="sep"></span>${n.time}<span class="sep"></span>${FLAGS[n.cn]||''} ${n.cn}<span class="sep"></span><a class="read-ext" href="${esc(href)}" target="_blank" rel="noopener" onclick="event.stopPropagation()">${lang==='zh'?'阅读原文':'Read article'} ↗</a></div><div class="news-title"><a href="${esc(href)}" target="_blank" rel="noopener" onclick="event.stopPropagation()">${esc(title)}</a></div><div class="news-summary">${esc(sum)}</div><div class="news-tags"><span class="tag ${ti[1]}">${t(ti[0])}</span>${n.tags.map(x=>`<span class="tag t-country">${esc(x)}</span>`).join('')}</div></div></div>`;
}
/* Auto-expand helper: if no news in the given [start,end] range, progressively widen until results found */
const EXPAND_STEPS=[14,30,90,365,0]; // 0 = all available
function filterAutoExpand(list,start,end){
  let filtered=list.filter(n=>n.d>=start&&n.d<=end);
  if(filtered.length>0||list.length===0)return {list:filtered,expanded:false,expDays:null};
  for(const days of EXPAND_STEPS){
    const s=days===0?new Date(0):new Date(end.getTime()-days*864e5);
    filtered=list.filter(n=>n.d>=s&&n.d<=end);
    if(filtered.length>0)return {list:filtered,expanded:true,expDays:days};
  }
  return {list:[],expanded:false,expDays:null};
}
function expandLabel(days){
  const zh=state.lang==='zh';
  if(days>=365)return zh?'近1年':'past 1 year';
  if(days>=90)return zh?'近90天':'past 90 days';
  if(days>=30)return zh?'近30天':'past 30 days';
  if(days>=14)return zh?'近14天':'past 14 days';
  return zh?'全部':'all time';
}
function renderNews(){
  if(state.tab==='pfe'){renderPFE();return;}
  const {start,end}=rngNow('ovNews');
  let list;
  list=NEWS.filter(n=>n.cn===state.country); /* strictly the selected country's own news */
  if(state.tab!=='all')list=list.filter(n=>n.t===state.tab);
  // Auto-expand if no results in current range
  const {list:filteredList,expanded,expDays}=filterAutoExpand(list,start,end);
  list=filteredList;
  // Sort by timestamp descending (most recent first)
  list.sort((a,b)=>b.d-a.d);
  list=list.slice(0,state.newsShown);
  const zh=state.lang==='zh';
  let html='';
  if(expanded){
    html+='<div class="news-auto-expand">'+t('news_auto_expand').replace('{range}',expandLabel(expDays))+'</div>';
  }
  html+=list.length?list.map(newsHTML).join(''):'<div class="empty">'+t('news_empty')+'<br><span style="font-size:10.5px">'+t('news_empty_hint')+'</span></div>';
  $('#newsList').innerHTML=html;
  $('#newsCount').textContent=list.length;
  if($('#ovNewsTitle'))$('#ovNewsTitle').textContent=t('pn_news');
  $('#loadMoreNews').style.display='';
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
  const govAll=NEWS.filter(n=>n.t==='pfe'&&isGovNews(n)).sort((a,b)=>b.d-a.d);
  const ind=NEWS.filter(n=>n.t==='pfe'&&!isGovNews(n)).sort((a,b)=>b.d-a.d);
  const gov=state.govSrc==='all'?govAll:govAll.filter(n=>n.src===state.govSrc); /* source-filtered gov list, most recent first */
  const indRes=filterAutoExpand(ind,start,end);
  const govRes=filterAutoExpand(gov,start,end);
  let html='';
  /* Section 1 — industry news */
  html+='<div class="news-sec-title"><span class="bar"></span>'+t('pfe_industry')+'<span class="cnt">'+indRes.list.length+'</span></div>';
  if(indRes.expanded)html+='<div class="news-auto-expand">'+t('news_auto_expand').replace('{range}',expandLabel(indRes.expDays))+'</div>';
  html+=indRes.list.length?indRes.list.map(newsHTML).join(''):'<div class="empty">'+t('news_empty')+'</div>';
  /* Section 2 — government policy + source filter chips
     Chip body = filter the gov list in-place; the ↗ sub-button = direct link to the official site */
  html+='<div class="news-sec-title gov"><span class="bar"></span>'+t('pfe_gov')+'<span class="cnt">'+govRes.list.length+'</span></div>';
  const govSrc=(NEWS_MEDIA.USA||[]).filter(m=>m.gov);
  if(govSrc.length){
    let chips='<span class="gov-chip"><button type="button" class="gcf'+(state.govSrc==='all'?' active':'')+'" data-src="all" title="'+t('gov_f_hint')+'">'+esc(t('gov_f_all'))+'<span class="gc-cnt">'+govAll.length+'</span></button></span>';
    chips+=govSrc.map(m=>{
      const cnt=govAll.filter(n=>n.src===m.name).length;
      return '<span class="gov-chip">'
        +'<button type="button" class="gcf'+(state.govSrc===m.name?' active':'')+'" data-src="'+esc(m.name)+'" title="'+t('gov_f_hint')+'">'+esc(m.name)+'<span class="gc-cnt">'+cnt+'</span></button>'
        +'<a class="gce" href="'+esc(m.url)+'" target="_blank" rel="noopener" title="'+esc(m.name)+' · '+t('gov_open_site')+'">↗</a>'
        +'</span>';
    }).join('');
    html+='<div class="gov-src-row">'+chips+'</div>';
  }
  if(govRes.expanded)html+='<div class="news-auto-expand">'+t('news_auto_expand').replace('{range}',expandLabel(govRes.expDays))+'</div>';
  html+=govRes.list.length?govRes.list.map(newsHTML).join(''):'<div class="empty">'+t('news_empty')+'</div>';
  $('#newsList').innerHTML=html;
  $('#newsCount').textContent=indRes.list.length+govRes.list.length;
  if($('#ovNewsTitle'))$('#ovNewsTitle').textContent=t('pfe_title');
  $('#loadMoreNews').style.display='none';
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
$$('#ovTabs .tab').forEach(tab=>tab.addEventListener('click',()=>{$$('#ovTabs .tab').forEach(x=>x.classList.toggle('active',x===tab));state.tab=tab.dataset.f;renderNews();}));
function renderSectorNews(id,type,key,count){
  const {start,end}=rngNow(key||'7d');
  let list=NEWS.filter(n=>n.t===type&&n.cn===state.country); /* own-country news first */
  // Auto-expand if no results in current range
  let {list:filteredList,expanded,expDays}=filterAutoExpand(list,start,end);
  if(filteredList.length===0){ /* country has zero news in this sector → fall back to global pool */
    list=NEWS.filter(n=>n.t===type);
    const fb=filterAutoExpand(list,start,end);
    filteredList=fb.list;expanded=fb.expanded;expDays=fb.expDays;
  }
  // Sort by recency
  filteredList.sort((a,b)=>b.d-a.d);
  list=filteredList.slice(0,count||5);
  let html='';
  if(expanded){
    html+='<div class="news-auto-expand">'+t('news_auto_expand').replace('{range}',expandLabel(expDays))+'</div>';
  }
  html+=list.length?list.map(newsHTML).join(''):'<div class="empty">'+t('news_sector_empty')+'</div>';
  $(id).innerHTML=html;
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
  el.innerHTML=ordered.map(p=>`<a href="${esc(p.url)}" target="_blank" rel="noopener" class="${p.cn===state.country?'cur':''}"><span class="pf">${FLAGS[p.cn]||''}</span>${esc(p.name)} ↗</a>`).join('');
}
function tenderHTML(x){
  const ti=tagInfo(x.t),zh=state.lang==='zh',now=Date.now();
  const title=zh?(x.title.zh||x.title):(x.title.en||x.title.zh||x.title);
  const open=x.ddl>=now,days=Math.ceil((x.ddl-now)/864e5);
  const ddlTxt=open?(days<=0?t('tn_today'):t('tn_days').replace('{n}',days)):t('tn_closed');
  const ddlCls=open?(days<=7?'due':'open'):'closed';
  return `<div class="tender-item" data-href="${esc(x.url)}"><div class="tender-left"><div class="tender-top"><span class="tag ${ti[1]}">${t(ti[0])}</span><span class="tag t-status t-${ddlCls}">${open?t('tn_open'):t('tn_closed')}</span></div><div class="tender-title"><a href="${esc(x.url)}" target="_blank" rel="noopener" onclick="event.stopPropagation()">${esc(title)}</a></div><div class="tender-meta"><span class="tend-agency">${esc(x.agency)}</span><span class="sep"></span><span>${FLAGS[x.cn]||''} ${x.cn}</span><span class="sep"></span><span>📅 ${fmtDate(new Date(x.d))}</span><span class="sep"></span><span class="tend-src">${esc(x.src)}</span></div></div><div class="tender-right"><div class="tender-budget">${esc(x.budget)}</div><div class="tender-ddl ${ddlCls}">${ddlTxt}</div><a class="btn ghost tender-go" href="${esc(x.url)}" target="_blank" rel="noopener" onclick="event.stopPropagation()">${t('tn_view')} ↗</a></div></div>`;
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
  const cn=state.country;
  let html='<thead><tr><th>'+t('th_commodity')+'</th><th>'+t('th_spot')+'</th><th>'+t('th_24h')+'</th><th>'+t('th_7d')+'</th><th>'+t('th_30d')+'</th></tr></thead><tbody>';
  PRICE_GROUPS.forEach(g=>{
    html+=`<tr class="price-group ${g.cls}"><th colspan="5">${g.rows.some(r=>r.hot)?'<span class="star">★</span>':''}${t(g.i18n)}</th></tr>`;
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
function renderTariffs(){
  let html='<thead><tr><th>'+t('th_product')+'</th><th>'+t('th_market')+'</th><th>'+t('th_rate')+'</th><th>'+t('th_note')+'</th><th>'+t('th_effective')+'</th></tr></thead><tbody>';
  TARIFFS.forEach(row=>{
    row.markets.forEach((m,i)=>{
      html+=`<tr${i===0?'':' style="border-top:1px solid var(--line-2)"'}>`;
      if(i===0)html+=`<td class="name" rowspan="${row.markets.length}"><b>${row.p[state.lang]}</b></td>`;
      html+=`<td class="name">${FLAGS[m.m]||''} ${m.m}</td><td><span class="tariff-badge ${m.s}">${m.r}</span></td><td style="font-family:var(--sans)">${m.n[state.lang]}</td><td style="font-size:10.5px;color:var(--ink-3)">${m.e}</td></tr>`;
    });
  });
  html+='</tbody>';
  $('#tariffTable').innerHTML=html;

  html='<thead><tr><th>'+t('th_country')+'</th><th>'+t('th_li')+'</th><th>'+t('th_lfp')+'</th><th>'+t('th_gr')+'</th><th>'+t('th_hy')+'</th></tr></thead><tbody>';
  MAT_PRICES.forEach(m=>{
    html+=`<tr><td class="name">${FLAGS[m.c]||''} ${m.c} <span style="font-size:9px;color:var(--ink-3)">(${m.cur})</span></td><td>${m.li}</td><td>${m.lfp}</td><td>${m.gr}</td><td>${m.hy}</td></tr>`;
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
  return `<div class="paper"><div class="p-journal"><span class="j-ico" style="background:${JOURNAL_COLORS[p.j]}">${p.jname[0]}</span>${p.jname}<span class="sep" style="width:3px;height:3px;border-radius:50%;background:var(--line);display:inline-block;margin:0 2px"></span>${p.date}${p.hot?'<span style="color:var(--up)">'+t('pa_hot')+'</span>':''}</div><div class="p-title">${esc(title)}</div><div class="p-authors">${esc(p.auth)} · ${esc(p.org)}</div><div class="p-foot"><span class="cites">${t('pa_cites')} <b>${p.cites}</b></span><span class="p-doistyle"><span>${t(tm[0])}</span><span>DOI</span></span></div></div>`;
}
function renderPapers(){
  const {start,end}=rngNow('papers');
  let list=PAPERS.filter(p=>{const d=new Date(p.date);return d>=start&&d<=end;});
  if(state.paperJournal!=='all')list=list.filter(p=>p.j===state.paperJournal);
  if(state.paperQuery){const q=state.paperQuery.toLowerCase();list=list.filter(p=>{const title=p.title;const tt=typeof title==='string'?title:((title.zh||'')+' '+(title.en||''));return (tt+p.auth+p.org).toLowerCase().includes(q);});}
  list=list.slice(0,state.papersShown);
  $('#paperGrid').innerHTML=list.length?list.map(paperHTML).join(''):'<div class="empty" style="grid-column:1/-1">'+(state.lang==='zh'?'未找到匹配论文':'No matching papers')+'</div>';
}
$('#loadMorePapers').addEventListener('click',()=>{state.papersShown+=6;renderPapers();});
$$('#paperJournals .chip').forEach(c=>c.addEventListener('click',()=>{$$('#paperJournals .chip').forEach(x=>x.classList.toggle('active',x===c));state.paperJournal=c.dataset.j;renderPapers();}));
$('#paperSearch').addEventListener('input',e=>{state.paperQuery=e.target.value;renderPapers();});
function renderHomePapers(){$('#paperList').innerHTML=PAPERS.slice(0,4).map(paperHTML).join('');}

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
function tickLive(){
  if(!state.live)return;
  const now=new Date();
  const hh=String(now.getHours()).padStart(2,'0'),mm=String(now.getMinutes()).padStart(2,'0'),ss=String(now.getSeconds()).padStart(2,'0');
  $('#ovTime').textContent=`${hh}:${mm}:${ss}`;
  $('#priceStamp').textContent=`UTC+8 ${hh}:${mm}`;
  const k=$('#kpiLiIndex'),delta=(Math.random()*.8-.2).toFixed(2);
  k.textContent=(4287.6+parseFloat(delta)*10).toFixed(1);
  const dEl=$('#kpiLiDelta');
  dEl.className='kpi-delta '+(delta>=0?'up':'down');
  dEl.textContent=`${delta>=0?'▲':'▼'} ${Math.abs(delta)}%`;
  const n=$('#kpiNews');n.textContent=Math.round(247+(Math.random()*6-3));
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
  const d=state.lang==='zh'?'已部署 · 公网访问:':'Deployed · Public URL:';
  $('#deployText').textContent=d;
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
