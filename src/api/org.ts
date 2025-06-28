import api from './auth'
import type { Organization, SearchParams, ApiResponse, PaginatedResponse } from '@/types'

// 获取组织列表
export function fetchOrgList(params: SearchParams): Promise<ApiResponse<PaginatedResponse<Organization>>> {
    return api.get('/organizations', { params })
}

// 添加组织
export function addOrg(data: Partial<Organization>): Promise<ApiResponse<Organization>> {
    return api.post('/organizations', data)
}

// 更新组织
export function updateOrg(data: Partial<Organization>): Promise<ApiResponse<Organization>> {
    return api.put(`/organizations/${data.id}`, data)
}

// 删除组织
export function deleteOrg(id: number): Promise<ApiResponse<null>> {
    return api.delete(`/organizations/${id}`)
}

// 获取组织详情
export function fetchOrgDetail(id: number): Promise<ApiResponse<Organization>> {
    return api.get(`/organizations/${id}`)
} 