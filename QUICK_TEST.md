# 快速测试指南

## 🚀 快速启动

### 方法1：使用启动脚本（推荐）
```bash
# Windows批处理文件
start-dev.bat

# 或PowerShell脚本
.\start-dev.ps1
```

### 方法2：手动启动
```bash
# 进入项目目录
cd childcare-platform-vue3

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 🔗 访问地址

- **前端首页**: http://localhost:5173
- **API测试页面**: http://localhost:5173/api-test
- **登录页面**: http://localhost:5173/login
- **注册页面**: http://localhost:5173/register

## 🧪 API连接测试

1. 确保后端服务器运行在 `http://localhost:8080`
2. 访问 `http://localhost:5173/api-test`
3. 填写测试信息：
   - 后端地址：`http://localhost:8080`
   - 用户名：`admin`
   - 密码：`admin`
   - 角色：`admin`
4. 点击"测试API连接"

## 📋 测试检查清单

### ✅ 环境检查
- [ ] Node.js已安装
- [ ] npm已安装
- [ ] 后端服务器已启动
- [ ] 端口8080未被占用

### ✅ 前端功能测试
- [ ] 页面能正常加载
- [ ] 路由跳转正常
- [ ] API测试页面可访问
- [ ] 登录功能正常

### ✅ API连接测试
- [ ] 能连接到后端服务器
- [ ] 登录接口响应正常
- [ ] 错误处理正常
- [ ] 控制台无错误信息

## 🐛 常见问题

### 1. 端口被占用
```bash
# 查看端口占用
netstat -ano | findstr :5173
netstat -ano | findstr :8080

# 结束进程
taskkill /PID <进程ID> /F
```

### 2. 依赖安装失败
```bash
# 清除缓存
npm cache clean --force

# 删除node_modules
rm -rf node_modules
rm package-lock.json

# 重新安装
npm install
```

### 3. 后端连接失败
- 检查后端服务器是否启动
- 确认端口8080是否正确
- 检查防火墙设置
- 验证API路径是否正确

## 📞 技术支持

如果遇到问题，请检查：
1. 浏览器控制台错误信息
2. 终端输出信息
3. 后端服务器日志
4. 网络连接状态

## 🎯 下一步

API连接测试成功后，您可以：
1. 使用正常的登录页面
2. 测试其他功能模块
3. 开始正常的应用使用 