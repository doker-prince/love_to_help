import api from './auth'
import type { User, SearchParams, ApiResponse, PaginatedResponse } from '@/types'

// 获取用户列表
export function fetchUserList(params: SearchParams): Promise<ApiResponse<PaginatedResponse<User>>> {
    return api.get('/users', { params })
}

// 添加用户
export function addUser(data: Partial<User>): Promise<ApiResponse<User>> {
    return api.post('/users', data)
}

// 更新用户
export function updateUser(data: Partial<User>): Promise<ApiResponse<User>> {
    return api.put(`/users/${data.id}`, data)
}

// 删除用户
export function deleteUser(id: number): Promise<ApiResponse<null>> {
    return api.delete(`/users/${id}`)
}

// 获取用户详情
export function fetchUserDetail(id: number): Promise<ApiResponse<User>> {
    return api.get(`/users/${id}`)
} 