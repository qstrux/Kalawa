# 🚀 Kalawa 网站部署指南

这份文档详细说明了如何部署 Kalawa 金融服务网站到不同的平台。

## 📋 快速开始

### 🖥️ Windows 用户
如果您在 Windows PowerShell 环境中工作，请参考 [Windows 部署指南](./WINDOWS_DEPLOY.md)

### 🐧 Linux/macOS 用户

### 使用自动化部署脚本 (推荐)
```bash
./deploy.sh
```

该脚本提供交互式菜单，支持：
- 🌐 GitHub Pages 部署
- ⚡ Cloudflare Pages 部署  
- 💻 本地开发服务器
- 📊 项目状态检查

### 手动部署方法

#### 1. 📖 本地开发服务器

快速启动本地服务器查看网站：

```bash
# 方法 1: 使用 npm 脚本
npm run dev          # 端口 8080
npm run serve        # 端口 3000  
npm start           # 端口 8000

# 方法 2: 直接使用 Python
python3 -m http.server 8000
```

访问: http://localhost:8000

#### 2. 🌐 GitHub Pages 部署

**自动部署 (推荐)**

1. 确保代码在 `main` 分支
2. 推送到 GitHub：
```bash
git add .
git commit -m "Deploy: Update website"
git push origin main
```

3. GitHub Actions 将自动部署到: https://qstrux.github.io/Kalawa

**手动配置 GitHub Pages**
1. 访问仓库设置: https://github.com/qstrux/Kalawa/settings/pages
2. 选择 "Deploy from a branch"
3. 选择 "main" 分支和 "/ (root)" 文件夹
4. 点击 "Save"

#### 3. ⚡ Cloudflare Pages 部署

**前提条件：**
```bash
# 安装 Wrangler CLI
npm install -g wrangler

# 登录 Cloudflare 账户
wrangler login
```

**部署命令：**
```bash
# 生产环境部署
wrangler pages deploy .

# 预览部署
wrangler pages dev .
```

## 🛠️ 项目结构

```
/home/user/webapp/
├── index.html              # 主页面
├── *.html                 # 其他页面
├── static/                # 静态资源
│   ├── css/              # 样式文件
│   ├── js/               # JavaScript 文件
│   └── images/           # 图片资源
├── .github/workflows/     # GitHub Actions
│   └── deploy.yml        # 自动部署配置
├── package.json          # 项目配置
├── wrangler.toml        # Cloudflare 配置
├── deploy.sh           # 部署脚本
└── README.md          # 项目说明
```

## 📊 部署选项对比

| 平台 | 优势 | 适用场景 | 自定义域名 | CDN |
|------|------|----------|------------|-----|
| **GitHub Pages** | 免费、简单、GitHub 集成 | 开源项目、文档站点 | ✅ | ✅ |
| **Cloudflare Pages** | 高性能、全球 CDN、边缘计算 | 生产环境、高流量 | ✅ | ✅ |
| **本地服务器** | 开发调试、离线访问 | 开发测试 | ❌ | ❌ |

## 🔧 高级配置

### 自定义域名设置

**GitHub Pages:**
1. 在仓库设置中添加 CNAME 记录
2. 在域名 DNS 中添加 CNAME 指向 `qstrux.github.io`

**Cloudflare Pages:**
1. 在 Cloudflare Dashboard 中添加自定义域名
2. DNS 会自动配置

### 环境变量

编辑 `wrangler.toml` 文件：
```toml
[env.production.vars]
API_URL = "https://api.kalawa.com"
ENVIRONMENT = "production"
```

## 🚨 故障排除

### 常见问题

**1. GitHub Pages 404 错误**
- 确保 `index.html` 在根目录
- 检查 GitHub Pages 设置中的源分支

**2. Cloudflare 部署失败**
- 确认已登录: `wrangler whoami`
- 检查项目名称是否唯一

**3. 本地服务器无法访问**
- 检查端口是否被占用
- 确认防火墙设置

### 调试命令

```bash
# 检查项目状态
./deploy.sh  # 选择选项 5

# 查看 Git 状态
git status
git log --oneline -5

# 测试本地服务器
curl http://localhost:8000
```

## 📞 获取帮助

- 🐛 问题报告: [GitHub Issues](https://github.com/qstrux/Kalawa/issues)
- 📚 文档: [GitHub Wiki](https://github.com/qstrux/Kalawa/wiki)
- 💬 讨论: [GitHub Discussions](https://github.com/qstrux/Kalawa/discussions)

---

**最后更新**: $(date)
**维护者**: qstrux team