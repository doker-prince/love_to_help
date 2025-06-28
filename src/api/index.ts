import axios from 'axios'
import type { ApiResponse, PaginatedResponse } from '@/types'

// 创建axios实例
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
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
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 响应拦截器
api.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token')
            localStorage.removeItem('userInfo')
            window.location.href = '/login'
        }
        return Promise.reject(error)
    }
)

// 通用API方法
export const apiService = {
    // GET请求
    get: <T = any>(url: string, params?: any): Promise<ApiResponse<T>> => {
        return api.get(url, { params })
    },

    // POST请求
    post: <T = any>(url: string, data?: any): Promise<ApiResponse<T>> => {
        return api.post(url, data)
    },

    // PUT请求
    put: <T = any>(url: string, data?: any): Promise<ApiResponse<T>> => {
        return api.put(url, data)
    },

    // DELETE请求
    delete: <T = any>(url: string): Promise<ApiResponse<T>> => {
        return api.delete(url)
    },

    // 分页请求
    getPaginated: <T = any>(url: string, params?: any): Promise<PaginatedResponse<T>> => {
        return api.get(url, { params })
    }
}

// 用户相关API
export const userApi = {
    // 登录
    login: (data: { username: string; password: string; role: string }) => {
        return apiService.post('/auth/login', data)
    },

    // 注册
    register: (data: { username: string; password: string; name?: string; email?: string; phone?: string }) => {
        return apiService.post('/auth/register', data)
    },

    // 获取用户信息
    getProfile: () => {
        return apiService.get('/user/profile')
    },

    // 更新用户信息
    updateProfile: (data: any) => {
        return apiService.put('/user/profile', data)
    },

    // 修改密码
    changePassword: (data: { currentPassword: string; newPassword: string }) => {
        return apiService.put('/user/password', data)
    },

    // 获取用户统计数据
    getStats: () => {
        return apiService.get('/user/stats')
    },

    // 获取援助记录
    getHelpRecords: (params: any) => {
        return apiService.getPaginated('/user/help-records', params)
    }
}

// 组织相关API
export const organizationApi = {
    // 获取组织列表
    getOrganizations: (params?: any) => {
        return apiService.getPaginated('/organizations', params)
    },

    // 获取组织详情
    getOrganization: (id: number) => {
        return apiService.get(`/organizations/${id}`)
    },

    // 创建组织
    createOrganization: (data: any) => {
        return apiService.post('/organizations', data)
    },

    // 更新组织信息
    updateOrganization: (id: number, data: any) => {
        return apiService.put(`/organizations/${id}`, data)
    },

    // 删除组织
    deleteOrganization: (id: number) => {
        return apiService.delete(`/organizations/${id}`)
    }
}

// 儿童相关API
export const childApi = {
    // 获取儿童列表
    getChildren: (params?: any) => {
        return apiService.getPaginated('/children', params)
    },

    // 获取儿童详情
    getChild: (id: number) => {
        return apiService.get(`/children/${id}`)
    },

    // 创建儿童信息
    createChild: (data: any) => {
        return apiService.post('/children', data)
    },

    // 更新儿童信息
    updateChild: (id: number, data: any) => {
        return apiService.put(`/children/${id}`, data)
    },

    // 删除儿童信息
    deleteChild: (id: number) => {
        return apiService.delete(`/children/${id}`)
    }
}

// 项目相关API
export const projectApi = {
    // 获取项目列表
    getProjects: (params?: any) => {
        return apiService.getPaginated('/projects', params)
    },

    // 获取项目详情
    getProject: (id: number) => {
        return apiService.get(`/projects/${id}`)
    },

    // 创建项目
    createProject: (data: any) => {
        return apiService.post('/projects', data)
    },

    // 更新项目
    updateProject: (id: number, data: any) => {
        return apiService.put(`/projects/${id}`, data)
    },

    // 删除项目
    deleteProject: (id: number) => {
        return apiService.delete(`/projects/${id}`)
    },

    // 援助项目
    helpProject: (id: number, data: { amount: number; message?: string }) => {
        return apiService.post(`/projects/${id}/help`, data)
    }
}

// 文章相关API
export const articleApi = {
    // 获取文章列表
    getArticles: (params?: any) => {
        return apiService.getPaginated('/articles', params)
    },

    // 获取文章详情
    getArticle: (id: number) => {
        return apiService.get(`/articles/${id}`)
    },

    // 创建文章
    createArticle: (data: any) => {
        return apiService.post('/articles', data)
    },

    // 更新文章
    updateArticle: (id: number, data: any) => {
        return apiService.put(`/articles/${id}`, data)
    },

    // 删除文章
    deleteArticle: (id: number) => {
        return apiService.delete(`/articles/${id}`)
    }
}

// 管理员相关API
export const adminApi = {
    // 获取用户列表
    getUsers: (params?: any) => {
        return apiService.getPaginated('/admin/users', params)
    },

    // 更新用户状态
    updateUserStatus: (id: number, status: string) => {
        return apiService.put(`/admin/users/${id}/status`, { status })
    },

    // 获取系统统计数据
    getSystemStats: () => {
        return apiService.get('/admin/stats')
    },

    // 获取系统活动日志
    getActivityLogs: (params?: any) => {
        return apiService.getPaginated('/admin/activity-logs', params)
    }
}

export default api 