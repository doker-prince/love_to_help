import api from './auth'
import type { Child, SearchParams, ApiResponse, PaginatedResponse } from '@/types'

// 获取儿童列表
export function fetchChildList(params: SearchParams): Promise<ApiResponse<PaginatedResponse<Child>>> {
    return api.get('/children', { params })
}

// 添加儿童
export function addChild(data: Partial<Child>): Promise<ApiResponse<Child>> {
    return api.post('/children', data)
}

// 更新儿童信息
export function updateChild(data: Partial<Child>): Promise<ApiResponse<Child>> {
    return api.put(`/children/${data.id}`, data)
}

// 删除儿童
export function deleteChild(id: number): Promise<ApiResponse<null>> {
    return api.delete(`/children/${id}`)
}

// 获取儿童详情
export function fetchChildDetail(id: number): Promise<ApiResponse<Child>> {
    return api.get(`/children/${id}`)
} 