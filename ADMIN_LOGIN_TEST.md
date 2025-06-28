# 管理员登录功能测试指南

## 问题修复

已修复管理员登录页面不发送数据到后端的问题。现在管理员登录会调用真正的后端API。

## 修复内容

### 1. 修改管理员登录页面
- 文件：`src/pages/admin/AdminLogin.vue`
- 修改：从模拟登录改为调用真实API
- 导入：`import { loginApi } from '../../api/auth'`

### 2. 创建管理员专用API实例
- 文件：`src/api/auth.ts`
- 新增：`adminApi` 实例，专门处理管理员请求
- 配置：独立的请求和响应拦截器

### 3. API调用流程
- 管理员登录：`/admin/login`
- 使用管理员专用API实例
- 独立的错误处理和跳转逻辑

## 测试步骤

### 1. 启动服务
```bash
# 启动管理员后台
npm run dev:admin
# 或
start-admin.bat
```

### 2. 访问管理员登录页面
- 地址：`http://localhost:3001/admin-login`

### 3. 测试登录功能
使用测试账号：
- **用户名**: `admin`
- **密码**: `admin123`

### 4. 检查控制台输出
应该看到以下日志：
```
管理员登录请求: {username: "admin", password: "admin123", role: "admin"}
发送管理员请求到: /api/admin/login {username: "admin", password: "admin123"}
管理员登录，调用接口: http://localhost:8080/admin/login
通过代理访问后端: http://localhost:8080/admin/login
收到管理员响应: {code: 1, data: {...}, message: "登录成功"}
```

## 预期结果

### 成功登录
1. 显示"登录成功，正在跳转到管理后台..."
2. 自动跳转到 `/admin` 页面
3. 本地存储保存管理员信息：
   - `adminToken`: 后端返回的token
   - `adminInfo`: 管理员信息

### 登录失败
1. 显示具体的错误信息
2. 不跳转页面
3. 可以重新输入账号密码

## 故障排除

### 1. 后端连接失败
**错误信息**: "无法连接到后端服务器，请检查服务器是否启动"
**解决方案**: 
- 确保后端服务器运行在 `http://localhost:8080`
- 检查防火墙设置
- 验证端口8080未被占用

### 2. 账号密码错误
**错误信息**: "管理员账号或密码错误"
**解决方案**:
- 确认使用正确的测试账号
- 检查后端数据库中是否存在该管理员账号

### 3. API路径错误
**错误信息**: "404 Not Found"
**解决方案**:
- 确认后端有 `/admin/login` 接口
- 检查Vite代理配置是否正确

### 4. CORS错误
**错误信息**: "Access to XMLHttpRequest has been blocked by CORS policy"
**解决方案**:
- 确认Vite代理配置正确
- 检查后端CORS配置

## 验证要点

### 1. 网络请求
- 打开浏览器开发者工具
- 查看Network标签页
- 确认有对 `/api/admin/login` 的POST请求

### 2. 请求数据
- 请求体应包含：`{username: "admin", password: "admin123"}`
- Content-Type: `application/json`

### 3. 响应数据
- 成功时返回：`{code: 1, data: {...}, message: "登录成功"}`
- 失败时返回：`{code: 0, message: "错误信息"}`

### 4. 本地存储
- 登录成功后，检查localStorage
- 应包含 `adminToken` 和 `adminInfo`

## 测试用例

### 用例1：正确账号密码
- 输入：`admin` / `admin123`
- 预期：登录成功，跳转到管理后台

### 用例2：错误账号密码
- 输入：`admin` / `wrongpassword`
- 预期：显示错误信息，不跳转

### 用例3：空账号密码
- 输入：空值
- 预期：显示"请输入用户名和密码"

### 用例4：网络错误
- 关闭后端服务器
- 预期：显示"无法连接到后端服务器"

## 更新日志

### v2.1.0 (当前版本)
- ✅ 修复管理员登录不发送数据到后端的问题
- ✅ 创建管理员专用API实例
- ✅ 实现真正的后端API调用
- ✅ 完善错误处理机制
- ✅ 添加详细的测试指南

---

**童伴桥系统 - 管理员登录功能**
*安全、可靠、高效* 