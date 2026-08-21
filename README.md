# TELE·TRACK GitHub Pages 部署说明

## 目标网址

部署成功后，你的网页将可通过以下地址访问：

```
https://你的GitHub用户名.github.io/tele-track/
```

例如 `https://ivyguo.github.io/tele-track/`

## 前提条件

1. 一个 GitHub 账号（免费注册：https://github.com/signup）
2. 电脑上已安装 Git（下载：https://git-scm.com/downloads）

## 部署步骤

### 1. 创建 GitHub 仓库

- 登录 GitHub：https://github.com
- 点击右上角 `+` → `New repository`
- Repository name 填：`tele-track`
- 选择 `Public`（公开，免费托管）
- **不要勾选** "Add a README file"
- 点击 `Create repository`

### 2. 推送本文件夹到 GitHub

在 `github-pages` 文件夹内打开终端（Git Bash / PowerShell / CMD），依次执行：

```bash
git init
git add index.html README.md
git commit -m "Initial commit: TELE·TRACK single-page app"
git branch -M main
git remote add origin https://github.com/你的GitHub用户名/tele-track.git
git push -u origin main
```

把 `你的GitHub用户名` 替换成你的真实 GitHub 用户名。

### 3. 开启 GitHub Pages

- 在 GitHub 仓库页面，点击 `Settings`（设置）
- 左侧菜单找到 `Pages`
- Source 选择 `Deploy from a branch`
- Branch 选择 `main`，文件夹选择 `/(root)`
- 点击 `Save`
- 等待 1-3 分钟，访问 `https://你的GitHub用户名.github.io/tele-track/`

## 更新网页

每次修改本地 `industry-tracker.html` 后：

1. 把最新文件复制到 `github-pages/index.html`
2. 在 `github-pages` 文件夹执行：

```bash
git add index.html
git commit -m "Update tele-track"
git push origin main
```

GitHub Pages 会在几分钟内自动更新。

## 绑定自定义域名（可选）

如果你有自己的域名（如 `tele-track.com`），可以在 GitHub Pages 设置里添加 Custom domain，并按提示配置 DNS。

## 说明

- 本项目是单文件静态网页，无后端、无外部依赖，适合 GitHub Pages 免费托管。
- 当前文件 `index.html` 即为完整应用，包含所有功能：中英切换、国家选择、日期时间区间筛选、PFE 政策新闻等。
