# API数据格式说明

## 后端返回数据格式

### 成功响应格式
```json
{
    "code": 1,
    "message": null,
    "data": {
        "id": 1,
        "username": "user",
        "name": "张三",
        "age": 45,
        "gender": 1,
        "phone": "15103290783",
        "province": "河北省",
        "municipality": "邢台市",
        "county": "威县",
        "detailedAddress": "具体地址",
        "address": null,
        "imgUrl": "https://tenon96.oss-cn-beijing.aliyuncs.com/4bde3c1d-c16a-4787-84af-2172db53f493.jpg",
        "token": "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3NTEwODc2NDYsInVzZXJJZCI6MX0.QamULcIrjfBirs12aATsuR96456vmWP9S4z-rUr-mx0",
        "createTime": 1733368907000,
        "updateTime": 1746955308000
    }
}
```

### 失败响应格式
```json
{
    "code": 0,
    "message": "用户名或密码错误",
    "data": null
}
```

## 前端处理逻辑

### 成功判断条件
前端现在会检查以下条件来判断是否成功：
```typescript
if (response.data.code === 1 || response.data.success || response.data.code === 200) {
    // 登录成功
}
```

### 数据映射
后端数据 → 前端数据：
```typescript
{
    id: response.data.data?.id,
    username: response.data.data?.username,
    name: response.data.data?.name,
    email: response.data.data?.email || '',
    phone: response.data.data?.phone || '',
    role: response.data.data?.role || 'user',
    status: 'active',
    createdAt: response.data.data?.createTime ? new Date(response.data.data.createTime).toISOString() : '',
    updatedAt: response.data.data?.updateTime ? new Date(response.data.data.updateTime).toISOString() : ''
}
```

## 字段说明

### 后端字段
- `code`: 状态码，1表示成功，0表示失败
- `message`: 消息，成功时为null，失败时为错误信息
- `data`: 数据对象，包含用户信息
  - `id`: 用户ID
  - `username`: 用户名
  - `name`: 真实姓名
  - `age`: 年龄
  - `gender`: 性别（1=男，0=女）
  - `phone`: 手机号
  - `province`: 省份
  - `municipality`: 市
  - `county`: 县
  - `detailedAddress`: 详细地址
  - `imgUrl`: 头像URL
  - `token`: JWT令牌
  - `createTime`: 创建时间（时间戳）
  - `updateTime`: 更新时间（时间戳）

### 前端字段
- `success`: 布尔值，表示是否成功
- `data.token`: JWT令牌
- `data.user`: 用户信息对象
  - `id`: 用户ID
  - `username`: 用户名
  - `name`: 真实姓名
  - `email`: 邮箱（后端可能没有，默认为空字符串）
  - `phone`: 手机号
  - `role`: 角色（后端可能没有，默认为'user'）
  - `status`: 状态（默认为'active'）
  - `createdAt`: 创建时间（ISO格式）
  - `updatedAt`: 更新时间（ISO格式）

## 时间格式转换

后端返回的时间戳需要转换为ISO格式：
```typescript
// 时间戳转ISO格式
new Date(response.data.data.createTime).toISOString()
```

## 测试数据

### 成功登录示例
```json
{
    "code": 1,
    "message": null,
    "data": {
        "id": 1,
        "username": "admin",
        "name": "管理员",
        "token": "eyJhbGciOiJIUzI1NiJ9...",
        "createTime": 1733368907000,
        "updateTime": 1746955308000
    }
}
```

### 失败登录示例
```json
{
    "code": 0,
    "message": "用户名或密码错误",
    "data": null
}
```

## 注意事项

1. **状态码判断**：后端使用 `code: 1` 表示成功，不是 `success: true`
2. **数据嵌套**：用户数据在 `data` 字段中，不是直接在根级别
3. **时间格式**：后端返回时间戳，前端转换为ISO格式
4. **可选字段**：某些字段可能不存在，需要提供默认值
5. **错误处理**：失败时 `message` 字段包含错误信息 