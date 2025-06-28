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

                    <router-link to="/organization"
                        class="flex items-center px-6 py-3 text-gray-700 bg-indigo-50 border-r-2 border-indigo-600">
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
                <!-- 欢迎信息 -->
                <div class="mb-8">
                    <h2 class="text-2xl font-bold text-gray-900">欢迎回来，{{ organizationName }}</h2>
                    <p class="text-gray-600">这里是您的组织管理中心，查看最新的数据和活动</p>
                </div>

                <!-- 统计卡片 -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div class="bg-white rounded-lg shadow-sm p-6">
                        <div class="flex items-center">
                            <div class="p-3 bg-blue-100 rounded-full">
                                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z">
                                    </path>
                                </svg>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600">在助儿童</p>
                                <p class="text-2xl font-bold text-gray-900">{{ childrenCount }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-sm p-6">
                        <div class="flex items-center">
                            <div class="p-3 bg-green-100 rounded-full">
                                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2">
                                    </path>
                                </svg>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600">进行中项目</p>
                                <p class="text-2xl font-bold text-gray-900">{{ activeProjects }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-sm p-6">
                        <div class="flex items-center">
                            <div class="p-3 bg-yellow-100 rounded-full">
                                <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1">
                                    </path>
                                </svg>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600">总筹款金额</p>
                                <p class="text-2xl font-bold text-gray-900">¥{{ totalFunding.toLocaleString() }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-sm p-6">
                        <div class="flex items-center">
                            <div class="p-3 bg-purple-100 rounded-full">
                                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                                    </path>
                                </svg>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600">爱心人士</p>
                                <p class="text-2xl font-bold text-gray-900">{{ donorsCount }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 图表和活动 -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <!-- 最近活动 -->
                    <div class="bg-white rounded-lg shadow-sm">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <h3 class="text-lg font-medium text-gray-900">最近活动</h3>
                        </div>
                        <div class="p-6">
                            <div class="space-y-4">
                                <div v-for="activity in recentActivities" :key="activity.id"
                                    class="flex items-start space-x-3">
                                    <div class="flex-shrink-0">
                                        <div
                                            class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                                            <svg class="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p class="text-sm font-medium text-gray-900">{{ activity.title }}</p>
                                        <p class="text-sm text-gray-500">{{ activity.description }}</p>
                                        <p class="text-xs text-gray-400 mt-1">{{ formatDate(activity.createdAt) }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 快速操作 -->
                    <div class="bg-white rounded-lg shadow-sm">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <h3 class="text-lg font-medium text-gray-900">快速操作</h3>
                        </div>
                        <div class="p-6">
                            <div class="grid grid-cols-2 gap-4">
                                <router-link to="/organization/children/select"
                                    class="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    <div
                                        class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                                        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                        </svg>
                                    </div>
                                    <span class="text-sm font-medium text-gray-900">添加帮扶儿童</span>
                                </router-link>

                                <router-link to="/organization/projects/add"
                                    class="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    <div
                                        class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                                        <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2">
                                            </path>
                                        </svg>
                                    </div>
                                    <span class="text-sm font-medium text-gray-900">创建项目</span>
                                </router-link>

                                <router-link to="/organization/articles/add"
                                    class="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    <div
                                        class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                                        <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                                            </path>
                                        </svg>
                                    </div>
                                    <span class="text-sm font-medium text-gray-900">发布文章</span>
                                </router-link>

                                <router-link to="/organization/profile"
                                    class="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    <div
                                        class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                                        <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                                            </path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    </div>
                                    <span class="text-sm font-medium text-gray-900">组织设置</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 最新项目 -->
                <div class="bg-white rounded-lg shadow-sm">
                    <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                        <h3 class="text-lg font-medium text-gray-900">最新项目</h3>
                        <router-link to="/organization/projects" class="text-sm text-indigo-600 hover:text-indigo-700">
                            查看全部
                        </router-link>
                    </div>
                    <div class="p-6">
                        <div v-if="recentProjects.length > 0"
                            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div v-for="project in recentProjects" :key="project.id"
                                class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                <div class="flex items-start justify-between mb-3">
                                    <h4 class="text-lg font-semibold text-gray-900">{{ project.name }}</h4>
                                    <span :class="{
                                        'bg-green-100 text-green-800': project.status === 'active',
                                        'bg-yellow-100 text-yellow-800': project.status === 'pending',
                                        'bg-gray-100 text-gray-800': project.status === 'completed'
                                    }" class="px-2 py-1 text-xs font-medium rounded-full">
                                        {{ getProjectStatusText(project.status) }}
                                    </span>
                                </div>
                                <p class="text-gray-600 text-sm mb-3">{{ project.description }}</p>
                                <div class="flex justify-between items-center text-sm text-gray-500">
                                    <span>目标: ¥{{ project.targetAmount.toLocaleString() }}</span>
                                    <span>已筹: ¥{{ project.raisedAmount.toLocaleString() }}</span>
                                </div>
                                <div class="mt-3">
                                    <div class="w-full bg-gray-200 rounded-full h-2">
                                        <div class="bg-indigo-600 h-2 rounded-full"
                                            :style="{ width: `${(project.raisedAmount / project.targetAmount) * 100}%` }">
                                        </div>
                                    </div>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const organizationName = ref('爱心援助基金会')
const childrenCount = ref(25)
const activeProjects = ref(8)
const totalFunding = ref(1250000)
const donorsCount = ref(156)

// 模拟数据
const recentActivities = ref([
    {
        id: 1,
        title: '新儿童加入',
        description: '小明已成功加入援助计划',
        createdAt: '2024-01-15 14:30'
    },
    {
        id: 2,
        title: '项目更新',
        description: '山区教育项目进度更新',
        createdAt: '2024-01-14 16:20'
    },
    {
        id: 3,
        title: '收到捐款',
        description: '收到爱心人士捐款 ¥5,000',
        createdAt: '2024-01-13 09:15'
    },
    {
        id: 4,
        title: '文章发布',
        description: '发布新文章《爱心传递》',
        createdAt: '2024-01-12 11:45'
    }
])

const recentProjects = ref([
    {
        id: 1,
        name: '山区儿童教育援助',
        description: '为山区儿童提供教育资源和学习用品',
        status: 'active',
        targetAmount: 50000,
        raisedAmount: 35000
    },
    {
        id: 2,
        name: '心理健康关爱项目',
        description: '关注儿童心理健康，提供专业心理咨询',
        status: 'active',
        targetAmount: 30000,
        raisedAmount: 28000
    },
    {
        id: 3,
        name: '冬季温暖行动',
        description: '为贫困儿童提供冬季衣物和保暖用品',
        status: 'pending',
        targetAmount: 20000,
        raisedAmount: 15000
    }
])

const getProjectStatusText = (status: string) => {
    const statusMap = {
        active: '进行中',
        pending: '待审核',
        completed: '已完成'
    }
    return statusMap[status as keyof typeof statusMap] || status
}

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('zh-CN')
}

onMounted(() => {
    // 加载组织数据
})
</script>