# 童伴桥系统端口分离功能指南

## 功能概述

童伴桥系统现已实现通过不同端口完全分离管理员和用户/机构的访问，提供更清晰的权限边界和更好的用户体验。

## 端口分配

### 🏢 管理员后台
- **端口**: `3001`
- **访问地址**: `http://localhost:3001`
- **登录页面**: `http://localhost:3001/admin-login`
- **适用角色**: 系统管理员

### 👥 用户前台
- **端口**: `3000`
- **访问地址**: `http://localhost:3000`
- **登录页面**: `http://localhost:3000/login`
- **适用角色**: 普通用户、慈善机构

## 启动方式

### 方法1：使用专用启动脚本（推荐）

#### Windows批处理文件
```bash
# 启动管理员后台
start-admin.bat

# 启动用户前台
start-user.bat
```

#### PowerShell脚本
```powershell
# 启动管理员后台
.\start-admin.ps1

# 启动用户前台
.\start-user.ps1
```

### 方法2：使用npm脚本

#### 启动管理员后台
```bash
npm run dev:admin
```

#### 启动用户前台
```bash
npm run dev:user
```

### 方法3：同时启动两个服务

打开两个终端窗口：

**终端1 - 管理员后台**：
```bash
npm run dev:admin
```

**终端2 - 用户前台**：
```bash
npm run dev:user
```

## 功能特性

### 🔐 完全隔离的登录系统
- 管理员登录：`http://localhost:3001/admin-login`
- 用户登录：`http://localhost:3000/login`
- 机构登录：`http://localhost:3000/login`

### 🛡️ 独立的权限控制
- 管理员只能访问端口3001的服务
- 用户和机构只能访问端口3000的服务
- 完全隔离的会话管理

### 📊 独立的数据存储
- 管理员信息：`adminToken` 和 `adminInfo`
- 用户信息：`token` 和 `userInfo`
- 无数据冲突风险

## 测试账号

### 管理员账号
- **用户名**: `admin`
- **密码**: `admin123`
- **访问地址**: `http://localhost:3001/admin-login`

### 用户账号
- **用户名**: `user`
- **密码**: `user123`
- **访问地址**: `http://localhost:3000/login`

### 机构账号
- **用户名**: `org`
- **密码**: `org123`
- **访问地址**: `http://localhost:3000/login`

## 开发配置

### 管理员配置文件
- **文件**: `vite.admin.config.ts`
- **端口**: 3001
- **构建输出**: `dist-admin/`

### 用户配置文件
- **文件**: `vite.config.ts`
- **端口**: 3000
- **构建输出**: `dist/`

## 构建部署

### 构建管理员版本
```bash
npm run build:admin
```

### 构建用户版本
```bash
npm run build:user
```

### 预览构建结果
```bash
# 预览管理员版本
npm run preview:admin

# 预览用户版本
npm run preview:user
```

## 优势特点

### 1. 安全性提升
- 完全隔离的访问端口
- 独立的身份验证机制
- 清晰的权限边界

### 2. 用户体验优化
- 管理员专用界面
- 用户友好的前台界面
- 无功能混淆

### 3. 开发维护便利
- 独立的配置文件
- 分离的构建输出
- 便于独立部署

### 4. 扩展性良好
- 支持独立扩展功能
- 便于添加新角色
- 灵活的架构设计

## 注意事项

### 1. 端口占用
确保端口3000和3001未被其他服务占用：
```bash
# 检查端口占用
netstat -ano | findstr :3000
netstat -ano | findstr :3001
```

### 2. 后端服务
确保后端服务器运行在 `http://localhost:8080`

### 3. 浏览器访问
- 管理员后台：使用 `http://localhost:3001`
- 用户前台：使用 `http://localhost:3000`

### 4. 会话管理
- 不同端口的登录状态完全独立
- 退出登录只影响当前端口
- 建议使用不同浏览器或隐私模式测试

## 故障排除

### 端口被占用
```bash
# 查看占用进程
netstat -ano | findstr :3000
netstat -ano | findstr :3001

# 结束进程
taskkill /PID <进程ID> /F
```

### 启动失败
1. 检查Node.js和npm版本
2. 重新安装依赖：`npm install`
3. 清除缓存：`npm cache clean --force`

### 访问问题
1. 确认服务已启动
2. 检查浏览器控制台错误
3. 验证端口配置正确

## 更新日志

### v2.0.0 (当前版本)
- ✅ 实现端口分离架构
- ✅ 创建独立的管理员配置
- ✅ 添加专用启动脚本
- ✅ 完善构建部署流程
- ✅ 优化用户体验

---

**童伴桥系统 - 端口分离架构**
*让管理更安全，让使用更简单* 