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
                        class="flex items-center px-6 py-3 text-gray-700 bg-indigo-50 border-r-2 border-indigo-600">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2">
                            </path>
                        </svg>
                        项目管理
                    </router-link>
                    <router-link to="/organization/articles"
                        class="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
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
                        <h2 class="text-2xl font-bold text-gray-900">项目管理</h2>
                        <p class="text-gray-600">管理您的援助项目</p>
                    </div>
                    <router-link to="/organization/projects/add"
                        class="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                        创建项目
                    </router-link>
                </div>

                <!-- 筛选和搜索 -->
                <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <div class="flex flex-col sm:flex-row gap-4">
                        <div class="flex-1">
                            <input v-model="searchKeyword" type="text" placeholder="搜索项目名称..."
                                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>
                        <div class="flex gap-2">
                            <select v-model="selectedStatus"
                                class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                <option value="">全部状态</option>
                                <option value="pending">待审核</option>
                                <option value="active">进行中</option>
                                <option value="completed">已完成</option>
                                <option value="cancelled">已取消</option>
                            </select>
                            <button @click="searchProjects"
                                class="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                                搜索
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 项目列表 -->
                <div class="bg-white rounded-lg shadow-sm">
                    <div class="px-6 py-4 border-b border-gray-200">
                        <h3 class="text-lg font-medium text-gray-900">项目列表</h3>
                    </div>
                    <div class="p-6">
                        <div v-if="loading" class="text-center py-12">
                            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
                            <p class="mt-4 text-gray-600">加载中...</p>
                        </div>

                        <div v-else-if="pagedProjects.length > 0"
                            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div v-for="project in pagedProjects" :key="project.id"
                                class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                                <div class="flex items-start justify-between mb-4">
                                    <h4 class="text-lg font-semibold text-gray-900">{{ project.name }}</h4>
                                    <span :class="{
                                        'bg-yellow-100 text-yellow-800': project.status === 'pending',
                                        'bg-green-100 text-green-800': project.status === 'active',
                                        'bg-gray-100 text-gray-800': project.status === 'completed',
                                        'bg-red-100 text-red-800': project.status === 'cancelled'
                                    }" class="px-2 py-1 text-xs font-medium rounded-full">
                                        {{ getStatusText(project.status) }}
                                    </span>
                                </div>
                                <p class="text-gray-600 text-sm mb-4">{{ project.description }}</p>
                                <div class="space-y-2 mb-4">
                                    <div class="flex justify-between text-sm text-gray-500">
                                        <span>目标金额</span>
                                        <span>¥{{ project.targetAmount.toLocaleString() }}</span>
                                    </div>
                                    <div class="flex justify-between text-sm text-gray-500">
                                        <span>已筹金额</span>
                                        <span class="text-indigo-600 font-medium">¥{{
                                            project.raisedAmount.toLocaleString() }}</span>
                                    </div>
                                    <div class="w-full bg-gray-200 rounded-full h-2">
                                        <div class="bg-indigo-600 h-2 rounded-full"
                                            :style="{ width: `${(project.raisedAmount / project.targetAmount) * 100}%` }">
                                        </div>
                                    </div>
                                </div>
                                <div class="flex justify-between items-center text-sm text-gray-500 mb-4">
                                    <span>开始时间: {{ formatDate(project.startDate) }}</span>
                                    <span v-if="project.endDate">结束时间: {{ formatDate(project.endDate) }}</span>
                                </div>
                                <div class="flex space-x-2">
                                    <router-link :to="`/organization/projects/${project.id}`"
                                        class="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-center text-sm">
                                        查看详情
                                    </router-link>
                                    <button @click="editProject(project.id)"
                                        class="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-sm">
                                        编辑
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div v-else class="text-center py-12">
                            <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2">
                                </path>
                            </svg>
                            <h3 class="mt-2 text-sm font-medium text-gray-900">暂无项目</h3>
                            <p class="mt-1 text-sm text-gray-500">开始创建您的第一个项目吧！</p>
                            <div class="mt-6">
                                <router-link to="/organization/projects/add"
                                    class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                                    创建项目
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

const loading = ref(true)
const searchKeyword = ref('')
const selectedStatus = ref('')
const currentPage = ref(1)
const pageSize = ref(9)
const total = ref(0)

// 模拟数据
const projects = ref(Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `项目${i + 1}`,
    description: `这是第${i + 1}个项目的描述。`,
    status: ['pending', 'active', 'completed', 'cancelled'][i % 4],
    targetAmount: 10000 + (i % 5) * 5000,
    raisedAmount: 5000 + (i % 7) * 2000,
    startDate: `2024-0${(i % 9) + 1}-01`,
    endDate: `2024-0${(i % 9) + 2}-28`
})));

const totalPages = computed(() => Math.ceil(total.value / pageSize.value))

const visiblePages = computed(() => {
    const pages = []
    const start = Math.max(1, currentPage.value - 2)
    const end = Math.min(totalPages.value, currentPage.value + 2)

    for (let i = start; i <= end; i++) {
        pages.push(i)
    }
    return pages
})

const pagedProjects = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value
    const end = start + pageSize.value
    return projects.value.slice(start, end)
})

const getStatusText = (status: string) => {
    const statusMap = {
        pending: '待审核',
        active: '进行中',
        completed: '已完成',
        cancelled: '已取消'
    }
    return statusMap[status as keyof typeof statusMap] || status
}

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-CN')
}

const searchProjects = () => {
    currentPage.value = 1
    loadProjects()
}

const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page
        loadProjects()
    }
}

const editProject = (projectId: number) => {
    // 编辑项目
    console.log('编辑项目:', projectId)
}

const loadProjects = async () => {
    try {
        loading.value = true
        // 模拟API调用
        await new Promise(resolve => setTimeout(resolve, 1000))
        total.value = projects.value.length
    } catch (error) {
        console.error('加载项目失败:', error)
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    loadProjects()
})
</script>