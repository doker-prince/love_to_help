#!/bin/bash

# 童伴桥项目测试脚本

echo "开始测试童伴桥项目..."

# 检查Node.js版本
echo "1. 检查Node.js版本..."
node_version=$(node -v)
echo "✓ Node.js版本: $node_version"

# 检查npm版本
echo "2. 检查npm版本..."
npm_version=$(npm -v)
echo "✓ npm版本: $npm_version"

# 安装依赖
echo "3. 安装项目依赖..."
if npm install; then
    echo "✓ 依赖安装成功"
else
    echo "✗ 依赖安装失败"
    exit 1
fi

# 代码检查
echo "4. 运行代码检查..."
if npm run lint; then
    echo "✓ 代码检查通过"
else
    echo "✗ 代码检查失败"
    exit 1
fi

# 类型检查
echo "5. 运行TypeScript类型检查..."
if npx vue-tsc --noEmit; then
    echo "✓ 类型检查通过"
else
    echo "✗ 类型检查失败"
    exit 1
fi

# 构建测试
echo "6. 测试构建..."
if npm run build; then
    echo "✓ 构建测试通过"
else
    echo "✗ 构建测试失败"
    exit 1
fi

# 检查构建结果
if [ -d "dist" ]; then
    echo "✓ 构建文件生成成功"
    echo "构建文件大小:"
    du -sh dist/
else
    echo "✗ 构建文件未生成"
    exit 1
fi

echo ""
echo "🎉 所有测试通过！项目配置正确。"
echo ""
echo "下一步："
echo "1. 运行 'npm run dev' 启动开发服务器"
echo "2. 访问 http://localhost:3000 查看应用"
echo "3. 开始开发您的功能" 