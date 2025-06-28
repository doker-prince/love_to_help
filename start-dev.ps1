Write-Host "正在启动童伴桥前端开发服务器..." -ForegroundColor Green
Write-Host ""

# 检查Node.js环境
Write-Host "检查Node.js环境..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "Node.js版本: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "错误：未找到Node.js，请先安装Node.js" -ForegroundColor Red
    Read-Host "按任意键退出"
    exit 1
}

Write-Host ""
Write-Host "检查npm环境..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version
    Write-Host "npm版本: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "错误：未找到npm，请先安装npm" -ForegroundColor Red
    Read-Host "按任意键退出"
    exit 1
}

Write-Host ""
Write-Host "安装依赖包..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "错误：依赖安装失败" -ForegroundColor Red
    Read-Host "按任意键退出"
    exit 1
}

Write-Host ""
Write-Host "启动开发服务器..." -ForegroundColor Green
Write-Host "前端地址：http://localhost:5173" -ForegroundColor Cyan
Write-Host "API测试页面：http://localhost:5173/api-test" -ForegroundColor Cyan
Write-Host ""
Write-Host "请确保后端服务器已启动在 http://localhost:8080" -ForegroundColor Yellow
Write-Host ""

npm run dev 