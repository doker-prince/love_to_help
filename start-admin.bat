@echo off
echo 正在启动童伴桥管理员后台开发服务器...
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
echo 启动管理员后台开发服务器...
echo 管理员后台地址：http://localhost:3001
echo 管理员登录页面：http://localhost:3001/admin-login
echo.
echo 请确保后端服务器已启动在 http://localhost:8080
echo.
npm run dev:admin

pause 