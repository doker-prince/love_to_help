<template>
    <div class="min-h-screen bg-gray-50">
        <!-- 组织布局 -->
        <div class="flex">
            <!-- 侧边栏 -->
            <div class="w-64 bg-white shadow-sm min-h-screen">
                <div class="p-6">
                    <h1 class="text-xl font-bold text-gray-900">组织中心</h1>
                </div>
                <nav class="mt-6">
                    <!-- 返回主页 -->
                    <router-link to="/"
                        class="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50 border-b border-gray-100">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                            </path>
                        </svg>
                        返回主页
                    </router-link>

                    <router-link to="/organization" class="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>
                        </svg>
                        仪表板
                    </router-link>
                    <router-link to="/organization/profile"
                        class="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                            </path>
                        </svg>
                        组织信息
                    </router-link>
                    <router-link to="/organization/children"
                        class="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z">
                            </path>
                        </svg>
                        儿童管理
                    </router-link>
                    <router-link to="/organization/projects"
                        class="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2">
                            </path>
                        </svg>
                        项目管理
                    </router-link>
                    <router-link to="/organization/articles"
                        class="flex items-center px-6 py-3 text-gray-700 bg-indigo-50 border-r-2 border-indigo-600">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                            </path>
                        </svg>
                        文章管理
                    </router-link>
                </nav>
            </div>

            <!-- 主内容区 -->
            <div class="flex-1 p-8">
                <!-- 页面标题 -->
                <div class="mb-8 flex justify-between items-center">
                    <div>
                        <h2 class="text-2xl font-bold text-gray-900">文章管理</h2>
                        <p class="text-gray-600">管理您的组织文章和资讯</p>
                    </div>
                    <router-link to="/organization/articles/add"
                        class="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                        发布文章
                    </router-link>
                </div>

                <!-- 统计卡片 -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div class="bg-white rounded-lg shadow-sm p-6">
                        <div class="flex items-center">
                            <div class="p-2 bg-blue-100 rounded-lg">
                                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                                    </path>
                                </svg>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600">总文章数</p>
                                <p class="text-2xl font-semibold text-gray-900">{{ stats.totalArticles }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-sm p-6">
                        <div class="flex items-center">
                            <div class="p-2 bg-green-100 rounded-lg">
                                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600">已发布</p>
                                <p class="text-2xl font-semibold text-gray-900">{{ stats.publishedArticles }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-sm p-6">
                        <div class="flex items-center">
                            <div class="p-2 bg-yellow-100 rounded-lg">
                                <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600">草稿</p>
                                <p class="text-2xl font-semibold text-gray-900">{{ stats.draftArticles }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-sm p-6">
                        <div class="flex items-center">
                            <div class="p-2 bg-purple-100 rounded-lg">
                                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                    </path>
                                </svg>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600">总阅读量</p>
                                <p class="text-2xl font-semibold text-gray-900">{{ stats.totalViews.toLocaleString() }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 筛选和搜索 -->
                <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <div class="flex flex-col sm:flex-row gap-4">
                        <div class="flex-1">
                            <input v-model="searchKeyword" type="text" placeholder="搜索文章标题..."
                                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>
                        <div class="flex gap-2">
                            <select v-model="selectedStatus"
                                class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                <option value="">全部状态</option>
                                <option value="published">已发布</option>
                                <option value="draft">草稿</option>
                                <option value="pending">待审核</option>
                            </select>
                            <button @click="searchArticles"
                                class="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                                搜索
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 文章列表 -->
                <div class="bg-white rounded-lg shadow-sm">
                    <div class="px-6 py-4 border-b border-gray-200">
                        <h3 class="text-lg font-medium text-gray-900">文章列表</h3>
                    </div>
                    <div class="p-6">
                        <div v-if="loading" class="text-center py-12">
                            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
                            <p class="mt-4 text-gray-600">加载中...</p>
                        </div>

                        <div v-else-if="articles.length > 0" class="space-y-6">
                            <div v-for="article in pagedArticles" :key="article.id"
                                class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                                <div class="flex items-start justify-between mb-4">
                                    <div class="flex-1">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <h4 class="text-lg font-semibold text-gray-900">{{ article.title }}</h4>
                                            <span :class="{
                                                'bg-green-100 text-green-800': article.status === 'published',
                                                'bg-yellow-100 text-yellow-800': article.status === 'draft',
                                                'bg-blue-100 text-blue-800': article.status === 'pending'
                                            }" class="px-2 py-1 text-xs font-medium rounded-full">
                                                {{ getStatusText(article.status) }}
                                            </span>
                                        </div>
                                        <p class="text-gray-600 mb-2">{{ article.summary }}</p>
                                        <div class="flex items-center space-x-4 text-sm text-gray-500">
                                            <span>作者: {{ article.author }}</span>
                                            <span>发布时间: {{ formatDate(article.publishedAt) }}</span>
                                            <span>阅读量: {{ article.views }}</span>
                                            <span>点赞数: {{ article.likes }}</span>
                                        </div>
                                    </div>
                                    <div class="flex space-x-2">
                                        <router-link :to="`/organization/articles/${article.id}/edit`"
                                            class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm">
                                            编辑
                                        </router-link>
                                        <button @click="deleteArticle(article.id)"
                                            class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm">
                                            删除
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-else class="text-center py-12">
                            <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                                </path>
                            </svg>
                            <h3 class="mt-2 text-sm font-medium text-gray-900">暂无文章</h3>
                            <p class="mt-1 text-sm text-gray-500">开始发布您的第一篇文章吧！</p>
                            <div class="mt-6">
                                <router-link to="/organization/articles/add"
                                    class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                                    发布文章
                                </router-link>
                            </div>
                        </div>

                        <!-- 分页 -->
                        <div v-if="totalPages > 1" class="mt-8 flex justify-center">
                            <nav class="flex space-x-2">
                                <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1"
                                    class="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                                    上一页
                                </button>
                                <span v-for="page in visiblePages" :key="page" @click="changePage(page)" :class="{
                                    'bg-indigo-600 text-white': page === currentPage,
                                    'bg-white text-gray-700 hover:bg-gray-50': page !== currentPage
                                }"
                                    class="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium cursor-pointer">
                                    {{ page }}
                                </span>
                                <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages"
                                    class="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                                    下一页
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

// 响应式数据
const loading = ref(false)
const searchKeyword = ref('')
const selectedStatus = ref('')
const currentPage = ref(1)
const totalPages = ref(1)
const pageSize = ref(10)

// 统计数据
const stats = ref({
    totalArticles: 12,
    publishedArticles: 8,
    draftArticles: 3,
    totalViews: 15420
})

// 文章列表
const articles = ref(Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `文章标题${i + 1}`,
    summary: `这是第${i + 1}篇文章的摘要。`,
    author: '爱心基金会',
    status: ['published', 'draft', 'pending'][i % 3],
    publishedAt: `2024-0${(i % 9) + 1}-15`,
    views: 1000 + i * 37,
    likes: 50 + i * 2
})));

// 计算可见页码
const visiblePages = computed(() => {
    const pages = []
    const start = Math.max(1, currentPage.value - 2)
    const end = Math.min(totalPages.value, currentPage.value + 2)

    for (let i = start; i <= end; i++) {
        pages.push(i)
    }
    return pages
})

// 获取状态文本
const getStatusText = (status: string) => {
    const statusMap: Record<string, string> = {
        published: '已发布',
        draft: '草稿',
        pending: '待审核'
    }
    return statusMap[status] || status
}

// 格式化日期
const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-CN')
}

// 搜索文章
const searchArticles = () => {
    console.log('搜索文章:', { keyword: searchKeyword.value, status: selectedStatus.value })
    // 这里应该调用API进行搜索
}

// 切换页码
const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page
        // 这里应该调用API获取对应页面的数据
    }
}

// 删除文章
const deleteArticle = async (articleId: number) => {
    if (confirm('确定要删除这篇文章吗？')) {
        console.log('删除文章:', articleId)
        // 这里应该调用API删除文章
        // 删除成功后刷新列表
    }
}

// 加载数据
const loadData = async () => {
    loading.value = true
    try {
        // 这里应该调用API获取数据
        console.log('加载文章数据')
    } catch (error) {
        console.error('加载数据失败:', error)
    } finally {
        loading.value = false
    }
}

const pagedArticles = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value
    const end = start + pageSize.value
    return articles.value.slice(start, end)
})

onMounted(() => {
    loadData()
})
</script>