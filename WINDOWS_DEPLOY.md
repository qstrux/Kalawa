# 🖥️ Windows PowerShell 部署指南

## 📋 在本地 Windows 环境中部署 Kalawa 网站

### 🚀 快速部署步骤

#### 1️⃣ 进入项目目录

在 PowerShell 中输入：
```powershell
cd "D:\github\kalawa"
```

确认目录中包含以下文件：
- ✅ `index.html`
- ✅ `news` 文件夹  
- ✅ `assets` 文件夹
- ✅ 其他网站文件

#### 2️⃣ 创建 wrangler.toml 配置文件

在 `D:\github\kalawa` 根目录创建 `wrangler.toml` 文件：

```toml
name = "kalawa-site"
pages_build_output_dir = "."
```

**💡 说明：**
- `pages_build_output_dir = "."` 表示站点根目录就是 `D:\github\kalawa`
- 如果以后使用 `dist` 或 `public` 文件夹，相应修改为 `"dist"` 或 `"public"`

#### 3️⃣ 推送代码到 GitHub

```powershell
git add .
git commit -m "initial site upload"
git push -u origin main
```

确认代码已上传到：https://github.com/qstrux/Kalawa.git

#### 4️⃣ 部署到 Cloudflare Pages

##### 方式一：Cloudflare Dashboard (推荐) 🌐

1. **访问 Cloudflare Pages**: https://dash.cloudflare.com/pages
2. **创建新项目**：
   - 点击 "创建项目"
   - 选择 "连接到 Git"
3. **连接 GitHub**：
   - 选择 GitHub 提供商
   - 授权 Cloudflare 访问
   - 选择 `Kalawa` 仓库
4. **配置构建设置**：
   - **项目名称**: `kalawa-site`
   - **分支**: `main`
   - **Build command**: 留空
   - **Output directory**: `.`
5. **保存并部署**

##### 方式二：本地命令行部署 💻

```powershell
# 首先确保已安装 wrangler
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 部署网站
wrangler pages deploy . --project-name=kalawa-site
```

### 🔧 前提条件检查

#### Node.js 和 npm
确保已安装 Node.js：
```powershell
node --version
npm --version
```

如未安装，请访问：https://nodejs.org/

#### Wrangler CLI
安装 Cloudflare Wrangler：
```powershell
npm install -g wrangler
```

验证安装：
```powershell
wrangler --version
```

#### Git 配置
确保 Git 已配置：
```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 📊 部署后验证

#### 检查部署状态
```powershell
# 查看项目状态
wrangler pages deployment list --project-name=kalawa-site

# 查看项目信息
wrangler pages project list
```

#### 访问网站
部署成功后，Cloudflare 会提供：
- **预览 URL**: `https://[deployment-id].kalawa-site.pages.dev`
- **生产 URL**: `https://kalawa-site.pages.dev`

### 🚨 常见问题解决

#### 1. PowerShell 执行策略错误
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

#### 2. wrangler 命令未找到
```powershell
# 重新安装 wrangler
npm uninstall -g wrangler
npm install -g wrangler

# 重启 PowerShell
```

#### 3. Git 推送失败
```powershell
# 检查远程仓库
git remote -v

# 重新设置远程仓库
git remote set-url origin https://github.com/qstrux/Kalawa.git
```

#### 4. Cloudflare 登录问题
```powershell
# 清除登录缓存
wrangler logout
wrangler login
```

### 🔄 更新部署流程

当网站内容更新后：

```powershell
# 1. 进入项目目录
cd "D:\github\kalawa"

# 2. 添加更改
git add .
git commit -m "update website content"
git push

# 3. 重新部署 (如果使用命令行方式)
wrangler pages deploy . --project-name=kalawa-site
```

### 📞 获取帮助

- **Cloudflare Pages 文档**: https://developers.cloudflare.com/pages/
- **Wrangler CLI 文档**: https://developers.cloudflare.com/workers/wrangler/
- **GitHub 仓库**: https://github.com/qstrux/Kalawa

---

**✨ 按照以上步骤，您的 Kalawa 网站将成功部署到 Cloudflare Pages！**