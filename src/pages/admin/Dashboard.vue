<template>
    <div class="min-h-screen bg-gray-50">
        <!-- 管理员布局 -->
        <div class="flex">
            <!-- 侧边栏 -->
            <div class="w-64 bg-white shadow-sm min-h-screen">
                <div class="p-6">
                    <h1 class="text-xl font-bold text-gray-900">管理后台</h1>
                </div>
                <nav class="mt-6">
                    <!-- 仪表板 -->
                    <router-link to="/admin"
                        class="flex items-center px-6 py-3 text-gray-700 bg-indigo-50 border-r-2 border-indigo-600">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>
                        </svg>
                        仪表板
                    </router-link>

                    <!-- 用户管理 -->
                    <router-link to="/admin/users" class="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z">
                            </path>
                        </svg>
                        用户管理
                    </router-link>

                    <!-- 组织管理 -->
                    <router-link to="/admin/organizations"
                        class="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                            </path>
                        </svg>
                        组织管理
                    </router-link>

                    <!-- 儿童管理 -->
                    <router-link to="/admin/children"
                        class="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z">
                            </path>
                        </svg>
                        儿童管理
                    </router-link>

                    <!-- 项目管理 -->
                    <router-link to="/admin/projects"
                        class="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2">
                            </path>
                        </svg>
                        项目管理
                    </router-link>

                    <!-- 文章管理 -->
                    <router-link to="/admin/articles"
                        class="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                            </path>
                        </svg>
                        文章管理
                    </router-link>

                    <!-- 系统设置 -->
                    <router-link to="/admin/settings"
                        class="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                            </path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        系统设置
                    </router-link>

                    <!-- 退出登录 -->
                    <button @click="handleLogout"
                        class="w-full flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50 text-left">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                            </path>
                        </svg>
                        退出登录
                    </button>
                </nav>
            </div>

            <!-- 主内容区 -->
            <div class="flex-1 p-8">
                <!-- 欢迎信息 -->
                <div class="mb-8">
                    <h2 class="text-2xl font-bold text-gray-900">管理员仪表板</h2>
                    <p class="text-gray-600">平台整体数据概览和管理</p>
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
                                <p class="text-sm font-medium text-gray-600">注册用户</p>
                                <p class="text-2xl font-bold text-gray-900">{{ totalUsers }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-sm p-6">
                        <div class="flex items-center">
                            <div class="p-3 bg-green-100 rounded-full">
                                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                                    </path>
                                </svg>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600">注册组织</p>
                                <p class="text-2xl font-bold text-gray-900">{{ totalOrganizations }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-sm p-6">
                        <div class="flex items-center">
                            <div class="p-3 bg-yellow-100 rounded-full">
                                <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z">
                                    </path>
                                </svg>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600">在助儿童</p>
                                <p class="text-2xl font-bold text-gray-900">{{ totalChildren }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-sm p-6">
                        <div class="flex items-center">
                            <div class="p-3 bg-purple-100 rounded-full">
                                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1">
                                    </path>
                                </svg>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600">总筹款</p>
                                <p class="text-2xl font-bold text-gray-900">¥{{ totalFunding.toLocaleString() }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 图表和活动 -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <!-- 最近活动 -->
                    <div class="bg-white rounded-lg shadow-sm">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <h3 class="text-lg font-medium text-gray-900">系统活动</h3>
                        </div>
                        <div class="p-6">
                            <div class="space-y-4">
                                <div v-for="activity in systemActivities" :key="activity.id"
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
                                <router-link to="/admin/users"
                                    class="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    <div
                                        class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                                        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z">
                                            </path>
                                        </svg>
                                    </div>
                                    <span class="text-sm font-medium text-gray-900">用户管理</span>
                                </router-link>

                                <router-link to="/admin/organizations"
                                    class="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    <div
                                        class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                                        <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                                            </path>
                                        </svg>
                                    </div>
                                    <span class="text-sm font-medium text-gray-900">组织管理</span>
                                </router-link>

                                <router-link to="/admin/children"
                                    class="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    <div
                                        class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                                        <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z">
                                            </path>
                                        </svg>
                                    </div>
                                    <span class="text-sm font-medium text-gray-900">儿童管理</span>
                                </router-link>

                                <router-link to="/admin/settings"
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
                                    <span class="text-sm font-medium text-gray-900">系统设置</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 待审核项目 -->
                <div class="bg-white rounded-lg shadow-sm">
                    <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                        <h3 class="text-lg font-medium text-gray-900">待审核项目</h3>
                        <router-link to="/admin/projects" class="text-sm text-indigo-600 hover:text-indigo-700">
                            查看全部
                        </router-link>
                    </div>
                    <div class="p-6">
                        <div v-if="pendingProjects.length > 0" class="space-y-4">
                            <div v-for="project in pendingProjects" :key="project.id"
                                class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                <div class="flex items-start justify-between">
                                    <div class="flex-1">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <h4 class="text-lg font-semibold text-gray-900">{{ project.name }}</h4>
                                            <span
                                                class="bg-yellow-100 text-yellow-800 px-2 py-1 text-xs font-medium rounded-full">
                                                待审核
                                            </span>
                                        </div>
                                        <p class="text-gray-600 mb-2">{{ project.description }}</p>
                                        <div class="flex items-center space-x-4 text-sm text-gray-500">
                                            <span>组织: {{ project.organizationName }}</span>
                                            <span>目标: ¥{{ project.targetAmount.toLocaleString() }}</span>
                                            <span>创建时间: {{ formatDate(project.createdAt) }}</span>
                                        </div>
                                    </div>
                                    <div class="flex space-x-2">
                                        <button @click="approveProject(project.id)"
                                            class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm">
                                            通过
                                        </button>
                                        <button @click="rejectProject(project.id)"
                                            class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm">
                                            拒绝
                                        </button>
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
                            <h3 class="mt-2 text-sm font-medium text-gray-900">暂无待审核项目</h3>
                            <p class="mt-1 text-sm text-gray-500">所有项目都已审核完成</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const totalUsers = ref(1250)
const totalOrganizations = ref(45)
const totalChildren = ref(320)
const totalFunding = ref(2500000)

// 模拟数据
const systemActivities = ref([
    {
        id: 1,
        title: '新用户注册',
        description: '用户 张三 完成注册',
        createdAt: '2024-01-15 14:30'
    },
    {
        id: 2,
        title: '组织申请',
        description: '爱心基金会 申请注册',
        createdAt: '2024-01-15 13:20'
    },
    {
        id: 3,
        title: '项目审核',
        description: '山区教育项目 审核通过',
        createdAt: '2024-01-15 11:15'
    },
    {
        id: 4,
        title: '系统维护',
        description: '数据库备份完成',
        createdAt: '2024-01-15 09:45'
    }
])

const pendingProjects = ref([
    {
        id: 1,
        name: '山区儿童教育援助计划',
        description: '为山区儿童提供教育资源和学习用品，帮助他们获得更好的教育机会',
        organizationName: '爱心援助基金会',
        targetAmount: 50000,
        createdAt: '2024-01-15'
    },
    {
        id: 2,
        name: '心理健康关爱项目',
        description: '关注儿童心理健康，提供专业心理咨询和辅导服务',
        organizationName: '阳光心理援助中心',
        targetAmount: 30000,
        createdAt: '2024-01-14'
    }
])

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-CN')
}

const approveProject = (projectId: number) => {
    // 审核通过项目
    console.log('审核通过项目:', projectId)
}

const rejectProject = (projectId: number) => {
    // 拒绝项目
    console.log('拒绝项目:', projectId)
}

const handleLogout = async () => {
    // 显示确认对话框
    const confirmed = await showConfirmDialog('确定要退出管理员登录吗？', '退出登录', '取消')
    if (!confirmed) {
        return
    }

    // 清除本地存储的管理员信息
    localStorage.removeItem('adminToken')
    localStorage.removeItem('adminInfo')

    console.log('管理员退出登录，清除管理员信息')

    // 显示成功提示
    showToast('管理员退出登录成功', 'success')

    // 跳转到管理员登录页面
    router.push('/admin-login')
}

// 显示确认对话框
const showConfirmDialog = (message: string, confirmText = '确定', cancelText = '取消'): Promise<boolean> => {
    return new Promise((resolve) => {
        // 创建遮罩层
        const overlay = document.createElement('div')
        overlay.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center'

        // 创建对话框
        const dialog = document.createElement('div')
        dialog.className = 'bg-white rounded-lg shadow-xl max-w-sm w-full mx-4 transform transition-all duration-300 scale-95 opacity-0'

        dialog.innerHTML = `
            <div class="p-6">
                <div class="flex items-center mb-4">
                    <div class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                        <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-medium text-gray-900">确认操作</h3>
                </div>
                <p class="text-gray-600 mb-6">${message}</p>
                <div class="flex justify-end space-x-3">
                    <button class="cancel-btn px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                        ${cancelText}
                    </button>
                    <button class="confirm-btn px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors">
                        ${confirmText}
                    </button>
                </div>
            </div>
        `

        overlay.appendChild(dialog)
        document.body.appendChild(overlay)

        // 显示动画
        setTimeout(() => {
            dialog.classList.remove('scale-95', 'opacity-0')
        }, 10)

        // 绑定事件
        const confirmBtn = dialog.querySelector('.confirm-btn')
        const cancelBtn = dialog.querySelector('.cancel-btn')

        const cleanup = () => {
            dialog.classList.add('scale-95', 'opacity-0')
            setTimeout(() => {
                document.body.removeChild(overlay)
            }, 300)
        }

        confirmBtn?.addEventListener('click', () => {
            cleanup()
            resolve(true)
        })

        cancelBtn?.addEventListener('click', () => {
            cleanup()
            resolve(false)
        })

        // 点击遮罩层关闭
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                cleanup()
                resolve(false)
            }
        })
    })
}

// 显示Toast提示
const showToast = (message: string, type: 'success' | 'error' | 'info' | 'warning' = 'info') => {
    // 创建Toast容器
    const toast = document.createElement('div')

    // 根据类型设置样式
    const typeStyles = {
        success: 'bg-green-500 border-green-600',
        error: 'bg-red-500 border-red-600',
        info: 'bg-blue-500 border-blue-600',
        warning: 'bg-yellow-500 border-yellow-600'
    }

    const icons = {
        success: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>`,
        error: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>`,
        info: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>`,
        warning: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
        </svg>`
    }

    toast.className = `fixed top-4 right-4 ${typeStyles[type]} text-white px-6 py-4 rounded-lg shadow-lg z-50 transform transition-all duration-300 translate-x-full border-l-4 flex items-center space-x-3 max-w-sm`

    toast.innerHTML = `
        <div class="flex-shrink-0">
            ${icons[type]}
        </div>
        <div class="flex-1">
            <p class="text-sm font-medium">${message}</p>
        </div>
        <button class="close-btn flex-shrink-0 text-white hover:text-gray-200 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
    `

    // 添加到页面
    document.body.appendChild(toast)

    // 显示动画
    setTimeout(() => {
        toast.classList.remove('translate-x-full')
    }, 100)

    // 绑定关闭事件
    const closeBtn = toast.querySelector('.close-btn')
    closeBtn?.addEventListener('click', () => {
        hideToast(toast)
    })

    // 自动隐藏
    setTimeout(() => {
        hideToast(toast)
    }, 4000)
}

// 隐藏Toast
const hideToast = (toast: HTMLElement) => {
    toast.classList.add('translate-x-full')
    setTimeout(() => {
        if (document.body.contains(toast)) {
            document.body.removeChild(toast)
        }
    }, 300)
}

onMounted(() => {
    // 加载管理员数据
})
</script>