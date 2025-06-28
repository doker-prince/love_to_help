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
                    <router-link to="/admin" class="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>
                        </svg>
                        仪表板
                    </router-link>

                    <!-- 用户管理 -->
                    <router-link to="/admin/users"
                        class="flex items-center px-6 py-3 text-gray-700 bg-indigo-50 border-r-2 border-indigo-600">
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
                <!-- 页面标题 -->
                <div class="mb-8">
                    <h2 class="text-2xl font-bold text-gray-900">用户管理</h2>
                    <p class="text-gray-600">管理系统中的所有用户</p>
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
                                <p class="text-sm font-medium text-gray-600">总用户数</p>
                                <p class="text-2xl font-semibold text-gray-900">{{ stats.totalUsers }}</p>
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
                                <p class="text-sm font-medium text-gray-600">活跃用户</p>
                                <p class="text-2xl font-semibold text-gray-900">{{ stats.activeUsers }}</p>
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
                                <p class="text-sm font-medium text-gray-600">新注册</p>
                                <p class="text-2xl font-semibold text-gray-900">{{ stats.newUsers }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-sm p-6">
                        <div class="flex items-center">
                            <div class="p-2 bg-red-100 rounded-lg">
                                <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z">
                                    </path>
                                </svg>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600">禁用用户</p>
                                <p class="text-2xl font-semibold text-gray-900">{{ stats.disabledUsers }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 筛选和搜索 -->
                <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <div class="flex flex-col sm:flex-row gap-4">
                        <div class="flex-1">
                            <input v-model="searchKeyword" type="text" placeholder="搜索用户名或邮箱..."
                                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>
                        <div class="flex gap-2">
                            <select v-model="selectedRole"
                                class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                <option value="">全部角色</option>
                                <option value="user">普通用户</option>
                                <option value="organization">组织用户</option>
                                <option value="admin">管理员</option>
                            </select>
                            <select v-model="selectedStatus"
                                class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                <option value="">全部状态</option>
                                <option value="active">活跃</option>
                                <option value="inactive">非活跃</option>
                                <option value="disabled">已禁用</option>
                            </select>
                            <button @click="searchUsers"
                                class="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                                搜索
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 用户列表 -->
                <div class="bg-white rounded-lg shadow-sm">
                    <div class="px-6 py-4 border-b border-gray-200">
                        <h3 class="text-lg font-medium text-gray-900">用户列表</h3>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        用户信息
                                    </th>
                                    <th
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        角色
                                    </th>
                                    <th
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        状态
                                    </th>
                                    <th
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        注册时间
                                    </th>
                                    <th
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        最后登录
                                    </th>
                                    <th
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        操作
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr v-if="loading">
                                    <td colspan="6" class="px-6 py-12 text-center">
                                        <div
                                            class="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto">
                                        </div>
                                        <p class="mt-2 text-gray-600">加载中...</p>
                                    </td>
                                </tr>
                                <tr v-else-if="users.length === 0">
                                    <td colspan="6" class="px-6 py-12 text-center">
                                        <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z">
                                            </path>
                                        </svg>
                                        <h3 class="mt-2 text-sm font-medium text-gray-900">暂无用户</h3>
                                        <p class="mt-1 text-sm text-gray-500">没有找到符合条件的用户</p>
                                    </td>
                                </tr>
                                <tr v-else v-for="user in users" :key="user.id" class="hover:bg-gray-50">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div
                                                class="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                                                <span class="text-indigo-600 font-semibold">{{
                                                    user.username.charAt(0).toUpperCase() }}</span>
                                            </div>
                                            <div class="ml-4">
                                                <div class="text-sm font-medium text-gray-900">{{ user.username }}</div>
                                                <div class="text-sm text-gray-500">{{ user.email }}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span :class="{
                                            'bg-blue-100 text-blue-800': user.role === 'user',
                                            'bg-green-100 text-green-800': user.role === 'organization',
                                            'bg-purple-100 text-purple-800': user.role === 'admin'
                                        }" class="px-2 py-1 text-xs font-medium rounded-full">
                                            {{ getRoleText(user.role) }}
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span :class="{
                                            'bg-green-100 text-green-800': user.status === 'active',
                                            'bg-yellow-100 text-yellow-800': user.status === 'inactive',
                                            'bg-red-100 text-red-800': user.status === 'disabled'
                                        }" class="px-2 py-1 text-xs font-medium rounded-full">
                                            {{ getStatusText(user.status) }}
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {{ formatDate(user.createdAt) }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {{ user.lastLoginAt ? formatDate(user.lastLoginAt) : '从未登录' }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <div class="flex space-x-2">
                                            <button @click="viewUser(user.id)"
                                                class="text-indigo-600 hover:text-indigo-900">
                                                查看
                                            </button>
                                            <button @click="editUser(user.id)"
                                                class="text-gray-600 hover:text-gray-900">
                                                编辑
                                            </button>
                                            <button v-if="user.status === 'active'" @click="disableUser(user.id)"
                                                class="text-red-600 hover:text-red-900">
                                                禁用
                                            </button>
                                            <button v-else @click="enableUser(user.id)"
                                                class="text-green-600 hover:text-green-900">
                                                启用
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- 分页 -->
                    <div v-if="totalPages > 1" class="px-6 py-4 border-t border-gray-200">
                        <div class="flex justify-center">
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
import { useRouter } from 'vue-router'

const router = useRouter()

const loading = ref(true)
const searchKeyword = ref('')
const selectedRole = ref('')
const selectedStatus = ref('')
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)

// 统计数据
const stats = ref({
    totalUsers: 1250,
    activeUsers: 1180,
    newUsers: 45,
    disabledUsers: 25
})

// 模拟数据
const users = ref([
    {
        id: 1,
        username: 'zhangsan',
        email: 'zhangsan@example.com',
        role: 'user',
        status: 'active',
        createdAt: '2024-01-15',
        lastLoginAt: '2024-01-20'
    },
    {
        id: 2,
        username: '爱心基金会',
        email: 'contact@lovefoundation.org',
        role: 'organization',
        status: 'active',
        createdAt: '2024-01-10',
        lastLoginAt: '2024-01-19'
    },
    {
        id: 3,
        username: 'admin',
        email: 'admin@platform.com',
        role: 'admin',
        status: 'active',
        createdAt: '2024-01-01',
        lastLoginAt: '2024-01-20'
    },
    {
        id: 4,
        username: 'lisi',
        email: 'lisi@example.com',
        role: 'user',
        status: 'inactive',
        createdAt: '2024-01-12',
        lastLoginAt: '2024-01-15'
    },
    {
        id: 5,
        username: 'wangwu',
        email: 'wangwu@example.com',
        role: 'user',
        status: 'disabled',
        createdAt: '2024-01-08',
        lastLoginAt: '2024-01-10'
    }
])

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

const getRoleText = (role: string) => {
    const roleMap = {
        user: '普通用户',
        organization: '组织用户',
        admin: '管理员'
    }
    return roleMap[role as keyof typeof roleMap] || role
}

const getStatusText = (status: string) => {
    const statusMap = {
        active: '活跃',
        inactive: '非活跃',
        disabled: '已禁用'
    }
    return statusMap[status as keyof typeof statusMap] || status
}

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-CN')
}

const searchUsers = () => {
    currentPage.value = 1
    loadUsers()
}

const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page
        loadUsers()
    }
}

const viewUser = (userId: number) => {
    // 查看用户详情
    console.log('查看用户:', userId)
}

const editUser = (userId: number) => {
    // 编辑用户信息
    console.log('编辑用户:', userId)
}

const disableUser = (userId: number) => {
    // 禁用用户
    console.log('禁用用户:', userId)
}

const enableUser = (userId: number) => {
    // 启用用户
    console.log('启用用户:', userId)
}

const handleLogout = () => {
    // 清除本地存储的管理员信息
    localStorage.removeItem('adminToken')
    localStorage.removeItem('adminInfo')

    console.log('管理员退出登录，清除管理员信息')

    // 跳转到管理员登录页面
    router.push('/admin-login')
}

const loadUsers = async () => {
    try {
        loading.value = true
        // 模拟API调用
        await new Promise(resolve => setTimeout(resolve, 1000))
        total.value = users.value.length
    } catch (error) {
        console.error('加载用户失败:', error)
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    loadUsers()
})
</script>