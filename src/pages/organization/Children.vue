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
                        class="flex items-center px-6 py-3 text-gray-700 bg-indigo-50 border-r-2 border-indigo-600">
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
                        <h2 class="text-2xl font-bold text-gray-900">儿童管理</h2>
                        <p class="text-gray-600">管理您组织下的儿童信息</p>
                    </div>
                    <router-link to="/organization/children/select"
                        class="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                        添加帮扶儿童
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
                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z">
                                    </path>
                                </svg>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600">总儿童数</p>
                                <p class="text-2xl font-semibold text-gray-900">{{ stats.totalChildren }}</p>
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
                                <p class="text-sm font-medium text-gray-600">正在援助</p>
                                <p class="text-2xl font-semibold text-gray-900">{{ stats.activeChildren }}</p>
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
                                <p class="text-sm font-medium text-gray-600">待援助</p>
                                <p class="text-2xl font-semibold text-gray-900">{{ stats.pendingChildren }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-sm p-6">
                        <div class="flex items-center">
                            <div class="p-2 bg-purple-100 rounded-lg">
                                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                </svg>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600">总援助金额</p>
                                <p class="text-2xl font-semibold text-gray-900">¥{{ stats.totalAmount.toLocaleString()
                                    }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 筛选和搜索 -->
                <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <div class="flex flex-col sm:flex-row gap-4">
                        <div class="flex-1">
                            <input v-model="searchKeyword" type="text" placeholder="搜索儿童姓名..."
                                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>
                        <div class="flex gap-2">
                            <select v-model="selectedStatus"
                                class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                <option value="">全部状态</option>
                                <option value="active">正在援助</option>
                                <option value="pending">待援助</option>
                                <option value="completed">已完成</option>
                            </select>
                            <button @click="searchChildren"
                                class="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                                搜索
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 儿童列表 -->
                <div class="bg-white rounded-lg shadow-sm">
                    <div class="px-6 py-4 border-b border-gray-200">
                        <h3 class="text-lg font-medium text-gray-900">儿童列表</h3>
                    </div>
                    <div class="p-6">
                        <div v-if="loading" class="text-center py-12">
                            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
                            <p class="mt-4 text-gray-600">加载中...</p>
                        </div>

                        <div v-else-if="pagedChildren.length > 0"
                            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div v-for="child in pagedChildren" :key="child.id"
                                class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                                <div class="flex items-start justify-between mb-4">
                                    <div class="flex items-center">
                                        <div
                                            class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                                            <span class="text-indigo-600 font-semibold">{{ child.name.charAt(0)
                                                }}</span>
                                        </div>
                                        <div class="ml-3">
                                            <h4 class="text-lg font-semibold text-gray-900">{{ child.name }}</h4>
                                            <p class="text-sm text-gray-500">{{ child.age }}岁</p>
                                        </div>
                                    </div>
                                    <span :class="{
                                        'bg-green-100 text-green-800': child.status === 'active',
                                        'bg-yellow-100 text-yellow-800': child.status === 'pending',
                                        'bg-gray-100 text-gray-800': child.status === 'completed'
                                    }" class="px-2 py-1 text-xs font-medium rounded-full">
                                        {{ getStatusText(child.status) }}
                                    </span>
                                </div>
                                <div class="space-y-2 mb-4">
                                    <div class="flex justify-between text-sm text-gray-500">
                                        <span>性别</span>
                                        <span>{{ child.gender === 'male' ? '男' : '女' }}</span>
                                    </div>
                                    <div class="flex justify-between text-sm text-gray-500">
                                        <span>地区</span>
                                        <span>{{ child.region }}</span>
                                    </div>
                                    <div class="flex justify-between text-sm text-gray-500">
                                        <span>援助金额</span>
                                        <span class="text-indigo-600 font-medium">¥{{ child.helpAmount.toLocaleString()
                                            }}</span>
                                    </div>
                                </div>
                                <p class="text-gray-600 text-sm mb-4">{{ child.description }}</p>
                                <div class="flex space-x-2">
                                    <router-link :to="`/organization/children/${child.id}`"
                                        class="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-center text-sm">
                                        查看详情
                                    </router-link>
                                    <button @click="editChild(child.id)"
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
                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z">
                                </path>
                            </svg>
                            <h3 class="mt-2 text-sm font-medium text-gray-900">暂无儿童信息</h3>
                            <p class="mt-1 text-sm text-gray-500">开始添加需要援助的儿童吧！</p>
                            <div class="mt-6">
                                <router-link to="/organization/children/select"
                                    class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                                    添加帮扶儿童
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

// 统计数据
const stats = ref({
    totalChildren: 25,
    activeChildren: 18,
    pendingChildren: 7,
    totalAmount: 125000
})

// 模拟数据
const children = ref(Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `儿童${i + 1}`,
    age: 7 + (i % 6),
    gender: i % 2 === 0 ? 'male' : 'female',
    region: ['四川', '云南', '贵州', '广西', '湖南'][i % 5] + '省',
    status: ['active', 'pending', 'completed'][i % 3],
    helpAmount: 4000 + (i % 5) * 1000,
    description: `这是第${i + 1}个儿童的简介。`
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

const pagedChildren = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value
    const end = start + pageSize.value
    return children.value.slice(start, end)
})

const getStatusText = (status: string) => {
    const statusMap = {
        active: '正在援助',
        pending: '待援助',
        completed: '已完成'
    }
    return statusMap[status as keyof typeof statusMap] || status
}

const searchChildren = () => {
    currentPage.value = 1
    loadChildren()
}

const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page
        loadChildren()
    }
}

const editChild = (childId: number) => {
    // 编辑儿童信息
    console.log('编辑儿童:', childId)
}

const loadChildren = async () => {
    try {
        loading.value = true
        // 模拟API调用
        await new Promise(resolve => setTimeout(resolve, 1000))
        total.value = children.value.length
    } catch (error) {
        console.error('加载儿童信息失败:', error)
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    loadChildren()
})
</script>