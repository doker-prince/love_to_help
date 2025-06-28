// 用户相关类型
export interface User {
    id: number
    username: string
    name: string
    email: string
    phone?: string
    avatar?: string
    role: 'user' | 'organization' | 'admin'
    status: 'active' | 'inactive' | 'pending'
    createdAt: string
    updatedAt: string
}

// 儿童相关类型
export interface Child {
    id: number
    name: string
    age: number
    gender: 'male' | 'female'
    photo?: string
    description: string
    needs: string[]
    organizationId: number
    organizationName: string
    status: 'active' | 'completed' | 'inactive'
    createdAt: string
    updatedAt: string
}

// 组织相关类型
export interface Organization {
    id: number
    name: string
    description: string
    logo?: string
    contactPerson: string
    contactPhone: string
    contactEmail: string
    address: string
    status: 'pending' | 'approved' | 'rejected'
    createdAt: string
    updatedAt: string
}

// 项目相关类型
export interface Project {
    id: number
    name: string
    description: string
    targetAmount: number
    raisedAmount: number
    organizationId: number
    organizationName: string
    status: 'pending' | 'active' | 'completed' | 'cancelled'
    startDate: string
    endDate?: string
    createdAt: string
    updatedAt: string
}

// 文章相关类型
export interface Article {
    id: number
    title: string
    content: string
    summary: string
    coverImage?: string
    authorId: number
    authorName: string
    category: string
    tags: string[]
    viewCount: number
    status: 'draft' | 'published' | 'archived'
    createdAt: string
    updatedAt: string
}

// 帮助记录相关类型
export interface HelpRecord {
    id: number
    userId: number
    childId: number
    childName: string
    projectId: number
    projectName: string
    amount: number
    message?: string
    status: 'pending' | 'completed' | 'cancelled'
    createdAt: string
    updatedAt: string
}

// API响应类型
export interface ApiResponse<T = any> {
    code: number
    message: string
    data: T
}

// 分页类型
export interface Pagination {
    page: number
    pageSize: number
    total: number
    totalPages: number
}

// 分页响应类型
export interface PaginatedResponse<T> {
    items: T[]
    pagination: Pagination
}

// 登录请求类型
export interface LoginRequest {
    username: string
    password: string
    userType: 'user' | 'organization' | 'admin'
}

// 注册请求类型
export interface RegisterRequest {
    username: string
    password: string
    email: string
    userType: 'user' | 'organization'
    organizationInfo?: {
        name: string
        description: string
        contactPerson: string
        contactPhone: string
        contactEmail: string
        address: string
    }
}

// 搜索参数类型
export interface SearchParams {
    keyword?: string
    status?: string
    category?: string
    startDate?: string
    endDate?: string
    page?: number
    pageSize?: number
} 