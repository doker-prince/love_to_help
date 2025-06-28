@echo off
echo 正在启动童伴桥用户前台开发服务器...
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
echo 启动用户前台开发服务器...
echo 用户前台地址：http://localhost:3000
echo 用户登录页面：http://localhost:3000/login
echo 机构登录页面：http://localhost:3000/login
echo.
echo 请确保后端服务器已启动在 http://localhost:8080
echo.
npm run dev:user

pause 