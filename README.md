# TELE·TRACK — Industry Intelligence Dashboard

电信与能源行业实时情报监测看板，聚焦锂电池 + AIDC（AI 数据中心）双主线，覆盖 6 大模块：

- **总览 Overview** — 新闻流、学术论文、热度趋势、核心商品价格（LFP / 锂盐 / AI 服务器 / 光模块等）
- **锂电池 Lithium Battery** — 碳酸锂价格走势、产业链热度、相关新闻
- **AIDC 算力基础设施** — 装机趋势、区域布局、相关新闻
- **电信 Telecom** — 5G 基站建设、运营商动态、新闻流
- **能源 Energy** — 电力需求结构、储能装机、新闻流
- **贸易与关税 Trade & Tariffs** — 各国关税对比、原材料价格、政策动态

## 在线访问

```
https://gxr-163.github.io/tele-track/
```

## 功能特性

- 中英双语切换（右上角 EN / 中文）
- 11 国监测区域切换（中国 / 美国 / 德国 / 日本 / 韩国 / 澳大利亚 / 英国 / 法国 / 荷兰 / 瑞典 / 瑞士）
- 16 个模块统一日期 + 时间范围筛选（近24小时 / 近7天 / 近30天 / 近90天 / 近1年 / 自定义起止时间）
- PFE 政策新闻流（FCC Covered List / 组件穿透规则 / FEOC 锂电合规等美国限制性政策）
- 纯静态实现，零外部依赖，无后端，可离线运行

## 更新部署

1. 修改 `index.html` / `style.css` / `app.js`（或从主文件 `industry-tracker.html` 重新拆分）
2. 提交并推送：

```bash
git add index.html style.css app.js README.md
git commit -m "Update tele-track"
git push origin main
```

3. GitHub Pages 会在 1~3 分钟内自动更新。

## 技术说明

- 纯 HTML/CSS/JavaScript 静态实现，拆分三个文件（HTML ≈32 KB / CSS ≈21 KB / JS ≈58 KB）
- 所有数据为内置演示数据（seeded 伪随机生成），无需联网即可使用
- 本地设置存储于浏览器 localStorage，多设备互不干扰
