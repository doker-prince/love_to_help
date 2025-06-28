import axios from 'axios'

// 创建axios实例，使用Vite代理避免CORS问题
const api = axios.create({
    baseURL: '/api', // 使用相对路径，通过Vite代理转发到后端
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

// 创建管理员专用的API实例
const adminApi = axios.create({
    baseURL: '/api', // 使用相对路径，通过Vite代理转发到后端
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

// 请求拦截器
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        console.log('发送请求到:', (config.baseURL || '') + (config.url || ''), config.data)
        return config
    },
    (error) => {
        console.error('请求拦截器错误:', error)
        return Promise.reject(error)
    }
)

// 管理员API请求拦截器
adminApi.interceptors.request.use(
    (config) => {
        const adminToken = localStorage.getItem('adminToken')
        if (adminToken) {
            config.headers.Authorization = `Bearer ${adminToken}`
        }
        console.log('发送管理员请求到:', (config.baseURL || '') + (config.url || ''), config.data)
        return config
    },
    (error) => {
        console.error('管理员请求拦截器错误:', error)
        return Promise.reject(error)
    }
)

// 响应拦截器
api.interceptors.response.use(
    (response) => {
        console.log('收到响应:', response.data)
        return response
    },
    (error) => {
        console.error('响应拦截器错误:', error.response?.data || error.message)
        if (error.response?.status === 401) {
            localStorage.removeItem('token')
            localStorage.removeItem('userInfo')
            window.location.href = '/login'
        }
        return Promise.reject(error)
    }
)

// 管理员API响应拦截器
adminApi.interceptors.response.use(
    (response) => {
        console.log('收到管理员响应:', response.data)
        return response
    },
    (error) => {
        console.error('管理员响应拦截器错误:', error.response?.data || error.message)
        if (error.response?.status === 401) {
            localStorage.removeItem('adminToken')
            localStorage.removeItem('adminInfo')
            window.location.href = '/admin-login'
        }
        return Promise.reject(error)
    }
)

// 认证API接口

// 登录请求参数接口
export interface LoginRequest {
    username: string
    password: string
    role: string
}

// 登录响应接口
export interface LoginResponse {
    success: boolean
    message?: string
    data?: {
        token: string
        user: {
            id: number
            username: string
            name: string
            email: string
            role: string
            avatar?: string
        }
    }
}

// 登录API - 根据角色调用不同的后端接口
export const loginApi = async (data: LoginRequest): Promise<LoginResponse> => {
    try {
        console.log('发送登录请求到后端:', data)

        let endpoint = ''
        let requestData = {
            username: data.username,
            password: data.password
        }

        // 根据角色选择不同的登录接口
        switch (data.role) {
            case 'admin':
                endpoint = '/admin/login'
                console.log('管理员登录，调用接口:', '/api/admin/login')
                break
            case 'organization':
                endpoint = '/ins/login'
                console.log('机构登录，调用接口:', '/api/ins/login')
                break
            case 'user':
            default:
                endpoint = '/user/login'
                console.log('用户登录，调用接口:', '/api/user/login')
                break
        }

        // 调用对应的后端API
        const response = await api.post(endpoint, requestData)

        console.log('后端响应:', response.data)

        // 处理后端返回的数据格式
        if (response.data.code === 1 || response.data.success || response.data.code === 200) {
            return {
                success: true,
                data: {
                    token: response.data.data?.token || response.data.token,
                    user: {
                        id: response.data.data?.id,
                        username: response.data.data?.username || response.data.data?.name,
                        name: response.data.data?.name || response.data.data?.username,
                        email: response.data.data?.email || '',
                        role: data.role, // 使用前端选择的角色
                        avatar: response.data.data?.avatar || ''
                    }
                },
                message: response.data.message || '登录成功'
            }
        } else {
            throw new Error(response.data.message || '登录失败')
        }

    } catch (error: any) {
        console.error('登录API调用失败:', error)

        // 如果是网络错误，提供更友好的错误信息
        if (error.code === 'ECONNREFUSED' || error.message.includes('Network Error')) {
            throw new Error('无法连接到后端服务器，请检查服务器是否启动')
        }

        // 如果是HTTP错误，显示后端返回的错误信息
        if (error.response?.data?.message) {
            throw new Error(error.response.data.message)
        }

        throw error
    }
}

// 注册请求参数接口
export interface RegisterRequest {
    username: string
    password: string
    email: string
    role: string
    name?: string
}

// 注册响应接口
export interface RegisterResponse {
    success: boolean
    message?: string
    data?: {
        user: {
            id: number
            username: string
            name: string
            email: string
            role: string
        }
    }
}

// 注册API - 根据角色调用不同的后端接口
export const registerApi = async (data: RegisterRequest): Promise<RegisterResponse> => {
    try {
        console.log('发送注册请求到后端:', data)

        let endpoint = ''
        let requestData = {
            username: data.username,
            password: data.password,
            email: data.email,
            name: data.name
        }

        // 根据角色选择不同的注册接口
        switch (data.role) {
            case 'organization':
                endpoint = '/ins/register'
                console.log('机构注册，调用接口:', '/api/ins/register')
                break
            case 'user':
            default:
                endpoint = '/user/register'
                console.log('用户注册，调用接口:', '/api/user/register')
                break
        }

        // 调用对应的后端API
        const response = await api.post(endpoint, requestData)

        console.log('后端响应:', response.data)

        // 处理后端返回的数据格式
        if (response.data.code === 1 || response.data.success || response.data.code === 200) {
            return {
                success: true,
                data: {
                    user: {
                        id: response.data.data?.id,
                        username: response.data.data?.username,
                        name: response.data.data?.name || data.name || data.username,
                        email: response.data.data?.email || data.email,
                        role: data.role
                    }
                },
                message: response.data.message || '注册成功'
            }
        } else {
            throw new Error(response.data.message || '注册失败')
        }

    } catch (error: any) {
        console.error('注册API调用失败:', error)

        // 如果是网络错误，提供更友好的错误信息
        if (error.code === 'ECONNREFUSED' || error.message.includes('Network Error')) {
            throw new Error('无法连接到后端服务器，请检查服务器是否启动')
        }

        // 如果是HTTP错误，显示后端返回的错误信息
        if (error.response?.data?.message) {
            throw new Error(error.response.data.message)
        }

        throw error
    }
}

// 登出API - 通过代理调用后端接口
export const logoutApi = async (): Promise<{ success: boolean; message: string }> => {
    try {
        console.log('发送登出请求到后端')
        console.log('通过代理访问后端地址:', 'http://localhost:8080/user/logout')

        // 通过代理调用后端API
        const response = await api.post('/user/logout')

        console.log('后端响应:', response.data)

        return {
            success: true,
            message: response.data.message || '登出成功'
        }

    } catch (error: any) {
        console.error('登出API调用失败:', error)

        // 即使登出失败，也要清除本地存储
        localStorage.removeItem('token')
        localStorage.removeItem('userInfo')

        return {
            success: true,
            message: '已清除本地登录信息'
        }
    }
}

export default api 