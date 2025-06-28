# 童伴桥 - 留守儿童帮扶平台

## 🚀 快速开始

### 端口分离架构

童伴桥系统采用端口分离架构，为不同角色提供独立的访问入口：

#### 🏢 管理员后台 (端口 3001)
```bash
# 启动管理员后台
npm run dev:admin
# 或使用启动脚本
start-admin.bat
```

- **访问地址**: http://localhost:3001
- **登录页面**: http://localhost:3001/admin-login
- **适用角色**: 系统管理员

#### 👥 用户前台 (端口 3000)
```bash
# 启动用户前台
npm run dev:user
# 或使用启动脚本
start-user.bat
```

- **访问地址**: http://localhost:3000
- **登录页面**: http://localhost:3000/login
- **适用角色**: 普通用户、慈善机构

### 同时启动两个服务

打开两个终端窗口：

**终端1 - 管理员后台**：
```bash
npm run dev:admin
```

**终端2 - 用户前台**：
```bash
npm run dev:user
```

## 📋 项目信息

- **项目名称**: 童伴桥 - 留守儿童帮扶平台
- **技术栈**: Vue 3 + TypeScript + Vite + Tailwind CSS
- **后端API**: Spring Boot (端口 8080)
- **数据库**: MySQL
- **缓存**: Redis

## 🛠️ 开发环境

### 环境要求
- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装依赖
```bash
npm install
```

### 开发脚本

#### 管理员后台
```bash
# 开发模式
npm run dev:admin

# 构建
npm run build:admin

# 预览构建结果
npm run preview:admin
```

#### 用户前台
```bash
# 开发模式
npm run dev:user

# 构建
npm run build:user

# 预览构建结果
npm run preview:user
```

## 🔐 测试账号

### 管理员账号
- **用户名**: `admin`
- **密码**: `admin123`
- **访问地址**: http://localhost:3001/admin-login

### 用户账号
- **用户名**: `user`
- **密码**: `user123`
- **访问地址**: http://localhost:3000/login

### 机构账号
- **用户名**: `org`
- **密码**: `org123`
- **访问地址**: http://localhost:3000/login

## 📁 项目结构

```
childcare-platform-vue3/
├── src/
│   ├── pages/
│   │   ├── common/          # 公共页面
│   │   ├── user/           # 用户相关页面
│   │   ├── organization/   # 机构相关页面
│   │   └── admin/          # 管理员页面
│   ├── components/         # 组件
│   ├── router/            # 路由配置
│   ├── utils/             # 工具函数
│   └── api/               # API接口
├── vite.config.ts         # 用户前台配置
├── vite.admin.config.ts   # 管理员后台配置
├── start-admin.bat        # 管理员启动脚本
├── start-user.bat         # 用户启动脚本
└── package.json
```

## 🚀 部署

### 构建生产版本

#### 管理员后台
```bash
npm run build:admin
```
构建结果输出到 `dist-admin/` 目录

#### 用户前台
```bash
npm run build:user
```
构建结果输出到 `dist/` 目录

### Docker部署
```bash
# 构建镜像
docker build -t childcare-platform .

# 运行容器
docker-compose up -d
```

## 📚 相关文档

- [端口分离功能指南](./PORT_SEPARATION_GUIDE.md)
- [管理员登录功能指南](./ADMIN_LOGIN_GUIDE.md)
- [用户导航指南](./USER_NAVIGATION_GUIDE.md)
- [API测试指南](./QUICK_TEST.md)
- [CORS配置指南](./CORS_CONFIG.md)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

---

**童伴桥系统 - 让爱心连接世界** 