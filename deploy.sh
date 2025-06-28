#!/bin/bash

# 童伴桥项目部署脚本

echo "开始部署童伴桥项目..."

# 检查Node.js版本
echo "检查Node.js版本..."
node_version=$(node -v)
echo "当前Node.js版本: $node_version"

# 安装依赖
echo "安装项目依赖..."
npm install

# 代码检查
echo "运行代码检查..."
npm run lint

# 构建生产版本
echo "构建生产版本..."
npm run build

# 检查构建结果
if [ -d "dist" ]; then
    echo "构建成功！"
    echo "构建文件位于 dist/ 目录"
    
    # 显示构建文件大小
    echo "构建文件大小:"
    du -sh dist/
    
    echo "部署完成！"
    echo "请将 dist/ 目录的内容部署到您的Web服务器。"
else
    echo "构建失败！"
    exit 1
fi 