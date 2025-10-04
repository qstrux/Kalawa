#!/bin/bash

# Kalawa Website Deployment Script
# 支持多种部署选项：GitHub Pages, Cloudflare Pages, 本地服务器

set -e

echo "🚀 Kalawa Website Deployment Script"
echo "=================================="

# 检查当前分支
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Current branch: $CURRENT_BRANCH"

# 函数：显示菜单
show_menu() {
    echo ""
    echo "选择部署选项："
    echo "1) 🌐 GitHub Pages (推荐)"
    echo "2) ⚡ Cloudflare Pages"
    echo "3) 💻 本地开发服务器 (端口 8000)"
    echo "4) 🧪 本地测试服务器 (端口 3000)"
    echo "5) 📊 项目状态检查"
    echo "6) ❌ 退出"
    echo ""
}

# 函数：GitHub Pages 部署
deploy_github_pages() {
    echo "🌐 准备 GitHub Pages 部署..."
    
    # 确保在正确的分支
    if [ "$CURRENT_BRANCH" != "main" ]; then
        echo "⚠️  警告：当前不在 main 分支"
        echo "GitHub Pages 将从 main 分支自动部署"
        echo ""
        read -p "是否切换到 main 分支并合并当前更改？ (y/n): " -n 1 -r
        echo ""
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            git checkout main
            git merge $CURRENT_BRANCH
        fi
    fi
    
    echo "🔄 推送到 GitHub..."
    git add .
    git commit -m "Deploy: Update Kalawa website $(date)" || echo "没有新的更改需要提交"
    git push origin main
    
    echo "✅ GitHub Pages 部署已触发！"
    echo "🌍 网站将在几分钟内可用: https://qstrux.github.io/Kalawa"
    echo "📊 查看部署状态: https://github.com/qstrux/Kalawa/actions"
}

# 函数：Cloudflare Pages 部署
deploy_cloudflare() {
    echo "⚡ Cloudflare Pages 部署..."
    
    if ! command -v wrangler &> /dev/null; then
        echo "❌ Wrangler CLI 未安装"
        echo "📦 安装 Wrangler: npm install -g wrangler"
        echo "🔐 登录 Cloudflare: wrangler login"
        return 1
    fi
    
    echo "🚀 部署到 Cloudflare Pages..."
    echo ""
    echo "选择部署方式："
    echo "1) 🌐 通过 Cloudflare Dashboard (推荐)"
    echo "2) 💻 本地命令行部署"
    echo ""
    read -p "请选择 (1-2): " deploy_choice
    
    case $deploy_choice in
        1)
            echo "📋 Dashboard 部署指南："
            echo "1. 访问: https://dash.cloudflare.com/pages"
            echo "2. 点击 '创建项目' → '连接到 Git'"
            echo "3. 选择 GitHub → 选择 'Kalawa' 仓库"
            echo "4. 配置设置："
            echo "   - Build command: 留空"
            echo "   - Output directory: ."
            echo "5. 点击 '保存并部署'"
            echo ""
            echo "🌍 部署完成后网站将在几分钟内可用"
            ;;
        2)
            echo "💻 本地命令行部署..."
            wrangler pages deploy . --project-name=kalawa-site
            ;;
        *)
            echo "❌ 无效选择"
            ;;
    esac
    
    echo "✅ Cloudflare Pages 部署完成！"
}

# 函数：启动本地服务器
start_local_server() {
    PORT=${1:-8000}
    echo "💻 启动本地服务器 (端口 $PORT)..."
    echo "🌍 网站地址: http://localhost:$PORT"
    echo "⏹️  按 Ctrl+C 停止服务器"
    echo ""
    
    python3 -m http.server $PORT
}

# 函数：项目状态检查
check_status() {
    echo "📊 Kalawa 网站项目状态"
    echo "====================="
    echo ""
    
    # 检查文件
    echo "📁 关键文件检查:"
    for file in "index.html" "README.md" ".github/workflows/deploy.yml" "wrangler.toml"; do
        if [ -f "$file" ]; then
            echo "  ✅ $file"
        else
            echo "  ❌ $file (缺失)"
        fi
    done
    echo ""
    
    # Git 状态
    echo "📋 Git 状态:"
    git status --short
    echo ""
    
    # 远程仓库
    echo "🔗 远程仓库:"
    git remote -v
    echo ""
    
    # 分支信息
    echo "🌿 分支信息:"
    git branch -a
    echo ""
    
    # 最近的提交
    echo "📝 最近的提交:"
    git log --oneline -5
}

# 主循环
while true; do
    show_menu
    read -p "请选择 (1-6): " choice
    
    case $choice in
        1)
            deploy_github_pages
            ;;
        2)
            deploy_cloudflare
            ;;
        3)
            start_local_server 8000
            ;;
        4)
            start_local_server 3000
            ;;
        5)
            check_status
            ;;
        6)
            echo "👋 再见！"
            exit 0
            ;;
        *)
            echo "❌ 无效选择，请选择 1-6"
            ;;
    esac
    
    echo ""
    read -p "按 Enter 键继续..." 
done