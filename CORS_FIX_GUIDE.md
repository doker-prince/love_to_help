# CORS问题快速修复指南

## 问题描述
您遇到了CORS错误：
```
Access to XMLHttpRequest at 'http://localhost:8080/user/login' from origin 'http://localhost:3000' has been blocked by CORS policy
```

## 已实施的解决方案

我已经为您配置了Vite代理来解决CORS问题：

### 1. Vite配置已更新
- 端口设置为 `5173`
- 配置了代理：`/api` → `http://localhost:8080`

### 2. API配置已更新
- 使用相对路径 `/api` 而不是绝对路径
- 通过Vite代理转发请求到后端

## 测试步骤

### 1. 重启前端服务器
```bash
# 停止当前服务器 (Ctrl+C)
# 重新启动
npm run dev
```

### 2. 验证配置
- 前端地址：`http://localhost:5173`
- API测试页面：`http://localhost:5173/api-test`
- 代理配置：`/api/*` → `http://localhost:8080/*`

### 3. 测试API连接
1. 访问 `http://localhost:5173/api-test`
2. 填写测试信息
3. 点击"测试API连接"

## 请求流程

现在请求流程如下：
```
浏览器 → http://localhost:5173/api/user/login
    ↓ (Vite代理)
后端 → http://localhost:8080/user/login
```

## 验证代理是否工作

在浏览器控制台中，您应该看到：
```
发送请求到: /api/user/login {username: "admin", password: "admin", role: "admin"}
通过代理访问后端: http://localhost:8080/user/login
收到响应: {success: true, data: {...}}
```

## 如果仍有问题

### 1. 检查后端服务器
确保后端服务器在 `http://localhost:8080` 运行

### 2. 检查端口
- 前端：`http://localhost:5173`
- 后端：`http://localhost:8080`

### 3. 检查网络
确保没有防火墙阻止连接

### 4. 查看控制台
检查浏览器控制台和终端输出

## 备用方案

如果代理方案不工作，您还可以：

### 方案1：后端CORS配置
在后端Spring Boot项目中添加：
```java
@CrossOrigin(origins = "http://localhost:5173")
```

### 方案2：浏览器插件
安装CORS浏览器插件（仅开发环境）

## 成功标志

当CORS问题解决后，您应该看到：
- ✅ 没有CORS错误
- ✅ API请求成功
- ✅ 收到后端响应
- ✅ 登录功能正常工作

现在请重新启动前端服务器并测试！ 