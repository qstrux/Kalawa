# Kalawa Website Local Setup Script for Windows PowerShell
# 适用于 D:\github\kalawa 目录

param(
    [string]$ProjectPath = "D:\github\kalawa"
)

Write-Host "🏦 Kalawa Website Local Setup" -ForegroundColor Cyan
Write-Host "============================" -ForegroundColor Cyan

# 检查项目路径
if (Test-Path $ProjectPath) {
    Write-Host "✅ 项目目录存在: $ProjectPath" -ForegroundColor Green
    Set-Location $ProjectPath
} else {
    Write-Host "❌ 项目目录不存在: $ProjectPath" -ForegroundColor Red
    Write-Host "请确认路径是否正确或先创建目录" -ForegroundColor Yellow
    exit 1
}

# 检查必要文件
$requiredFiles = @("index.html")
$missingFiles = @()

foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        Write-Host "✅ $file 存在" -ForegroundColor Green
    } else {
        Write-Host "❌ $file 缺失" -ForegroundColor Red
        $missingFiles += $file
    }
}

if ($missingFiles.Count -gt 0) {
    Write-Host "⚠️ 缺少必要文件，请检查项目完整性" -ForegroundColor Yellow
}

# 检查 Node.js 和 npm
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js 版本: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js 未安装，请访问 https://nodejs.org/" -ForegroundColor Red
    exit 1
}

try {
    $npmVersion = npm --version
    Write-Host "✅ npm 版本: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npm 未找到" -ForegroundColor Red
    exit 1
}

# 检查或安装 wrangler
try {
    $wranglerVersion = wrangler --version
    Write-Host "✅ Wrangler 版本: $wranglerVersion" -ForegroundColor Green
} catch {
    Write-Host "📦 安装 Wrangler CLI..." -ForegroundColor Yellow
    npm install -g wrangler
    
    try {
        $wranglerVersion = wrangler --version
        Write-Host "✅ Wrangler 安装成功: $wranglerVersion" -ForegroundColor Green
    } catch {
        Write-Host "❌ Wrangler 安装失败" -ForegroundColor Red
        exit 1
    }
}

# 创建 wrangler.toml 如果不存在
if (-not (Test-Path "wrangler.toml")) {
    Write-Host "📝 创建 wrangler.toml 配置文件..." -ForegroundColor Yellow
    
    $wranglerConfig = @"
name = "kalawa-site"
pages_build_output_dir = "."
"@
    
    $wranglerConfig | Out-File -FilePath "wrangler.toml" -Encoding UTF8
    Write-Host "✅ wrangler.toml 已创建" -ForegroundColor Green
} else {
    Write-Host "✅ wrangler.toml 已存在" -ForegroundColor Green
}

# 检查 Git 配置
try {
    $gitUser = git config --global user.name
    $gitEmail = git config --global user.email
    
    if ($gitUser -and $gitEmail) {
        Write-Host "✅ Git 已配置: $gitUser <$gitEmail>" -ForegroundColor Green
    } else {
        Write-Host "⚠️ Git 用户信息未完全配置" -ForegroundColor Yellow
        Write-Host "请运行以下命令配置 Git:" -ForegroundColor Yellow
        Write-Host "git config --global user.name `"Your Name`"" -ForegroundColor Cyan
        Write-Host "git config --global user.email `"your.email@example.com`"" -ForegroundColor Cyan
    }
} catch {
    Write-Host "❌ Git 未安装或配置" -ForegroundColor Red
}

Write-Host ""
Write-Host "🚀 部署选项:" -ForegroundColor Cyan
Write-Host "1. Cloudflare Dashboard: https://dash.cloudflare.com/pages" -ForegroundColor White
Write-Host "2. 本地命令部署: wrangler pages deploy . --project-name=kalawa-site" -ForegroundColor White
Write-Host ""
Write-Host "📚 更多信息请查看 WINDOWS_DEPLOY.md" -ForegroundColor Cyan

# 询问是否要执行部署
$deploy = Read-Host "是否现在进行 Cloudflare 登录？(y/n)"
if ($deploy -eq "y" -or $deploy -eq "Y") {
    Write-Host "🔐 启动 Cloudflare 登录..." -ForegroundColor Yellow
    try {
        wrangler login
        Write-Host "✅ 登录完成！现在可以部署网站了" -ForegroundColor Green
    } catch {
        Write-Host "❌ 登录失败，请手动运行 'wrangler login'" -ForegroundColor Red
    }
}

Write-Host "✨ 设置完成！" -ForegroundColor Green