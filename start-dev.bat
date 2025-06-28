@echo off
echo 正在启动童伴桥前端开发服务器...
echo.

echo 检查Node.js环境...
node --version
if %errorlevel% neq 0 (
    echo 错误：未找到Node.js，请先安装Node.js
    pause
    exit /b 1
)

echo.
echo 检查npm环境...
npm --version
if %errorlevel% neq 0 (
    echo 错误：未找到npm，请先安装npm
    pause
    exit /b 1
)

echo.
echo 安装依赖包...
npm install
if %errorlevel% neq 0 (
    echo 错误：依赖安装失败
    pause
    exit /b 1
)

echo.
echo 启动开发服务器...
echo 前端地址：http://localhost:5173
echo API测试页面：http://localhost:5173/api-test
echo.
echo 请确保后端服务器已启动在 http://localhost:8080
echo.
npm run dev

pause 