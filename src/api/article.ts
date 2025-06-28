import api from './auth'
import type { Article, SearchParams, ApiResponse, PaginatedResponse } from '@/types'

// 获取文章列表
export function fetchArticleList(params: SearchParams): Promise<ApiResponse<PaginatedResponse<Article>>> {
    return api.get('/articles', { params })
}

// 添加文章
export function addArticle(data: Partial<Article>): Promise<ApiResponse<Article>> {
    return api.post('/articles', data)
}

// 更新文章
export function updateArticle(data: Partial<Article>): Promise<ApiResponse<Article>> {
    return api.put(`/articles/${data.id}`, data)
}

// 删除文章
export function deleteArticle(id: number): Promise<ApiResponse<null>> {
    return api.delete(`/articles/${id}`)
}

// 获取文章详情
export function fetchArticleDetail(id: number): Promise<ApiResponse<Article>> {
    return api.get(`/articles/${id}`)
} 