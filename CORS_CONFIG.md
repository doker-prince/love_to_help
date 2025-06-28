# CORS配置指南

## 问题描述
前端运行在 `http://localhost:3000`，后端运行在 `http://localhost:8080`，浏览器阻止了跨域请求。

## 解决方案

### 方案1：后端配置CORS（推荐）

在您的Spring Boot后端项目中添加CORS配置：

#### 方法1：使用@CrossOrigin注解
```java
@RestController
@RequestMapping("/user")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"}, allowCredentials = "true")
public class UserController {
    
    @PostMapping("/login")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"})
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        // 登录逻辑
    }
}
```

#### 方法2：全局CORS配置
```java
@Configuration
public class CorsConfig implements WebMvcConfigurer {
    
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000", "http://localhost:5173")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true)
                .maxAge(3600);
    }
}
```

#### 方法3：使用CorsFilter
```java
@Configuration
public class CorsConfig {
    
    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(Arrays.asList("http://localhost:3000", "http://localhost:5173"));
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        config.setAllowedHeaders(Arrays.asList("*"));
        config.setAllowCredentials(true);
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        
        return new CorsFilter(source);
    }
}
```

### 方案2：前端代理配置（临时解决方案）

如果无法修改后端，可以在前端配置代理：

#### Vite代理配置
在 `vite.config.ts` 中添加：
```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
```

然后修改API配置：
```typescript
// src/api/auth.ts
const api = axios.create({
    baseURL: '/api', // 使用相对路径
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})
```

### 方案3：使用浏览器插件（仅开发环境）

安装浏览器插件来禁用CORS（仅用于开发测试）：
- Chrome: "CORS Unblock" 或 "Allow CORS"
- Firefox: "CORS Everywhere"

## 推荐步骤

1. **首选方案1**：在后端添加CORS配置
2. **如果无法修改后端**：使用方案2的前端代理
3. **仅用于测试**：使用方案3的浏览器插件

## 验证配置

配置完成后，重新测试API连接：
1. 重启后端服务器
2. 重启前端开发服务器
3. 访问 `http://localhost:5173/api-test` 进行测试

## 注意事项

- CORS配置只影响浏览器环境
- 生产环境需要配置正确的域名
- 不要在生产环境使用 `*` 允许所有域名
- 确保 `allowCredentials: true` 如果需要在请求中包含cookies 