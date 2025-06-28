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
                        class="flex items-center px-6 py-3 text-gray-700 bg-indigo-50 border-r-2 border-indigo-600">
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
                    <h2 class="text-2xl font-bold text-gray-900">组织管理</h2>
                    <p class="text-gray-600">管理系统中的所有组织</p>
                </div>

                <!-- 统计卡片 -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div class="bg-white rounded-lg shadow-sm p-6">
                        <div class="flex items-center">
                            <div class="p-2 bg-blue-100 rounded-lg">
                                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                                    </path>
                                </svg>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600">总组织数</p>
                                <p class="text-2xl font-semibold text-gray-900">{{ stats.totalOrganizations }}</p>
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
                                <p class="text-sm font-medium text-gray-600">已认证</p>
                                <p class="text-2xl font-semibold text-gray-900">{{ stats.verifiedOrganizations }}</p>
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
                                <p class="text-sm font-medium text-gray-600">待审核</p>
                                <p class="text-2xl font-semibold text-gray-900">{{ stats.pendingOrganizations }}</p>
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
                                <p class="text-sm font-medium text-gray-600">活跃项目</p>
                                <p class="text-2xl font-semibold text-gray-900">{{ stats.activeProjects }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 筛选和搜索 -->
                <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <div class="flex flex-col sm:flex-row gap-4">
                        <div class="flex-1">
                            <input v-model="searchKeyword" type="text" placeholder="搜索组织名称..."
                                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>
                        <div class="flex gap-2">
                            <select v-model="selectedStatus"
                                class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                <option value="">全部状态</option>
                                <option value="pending">待审核</option>
                                <option value="approved">已通过</option>
                                <option value="rejected">已拒绝</option>
                                <option value="suspended">已暂停</option>
                            </select>
                            <button @click="searchOrganizations"
                                class="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                                搜索
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 组织列表 -->
                <div class="bg-white rounded-lg shadow-sm">
                    <div class="px-6 py-4 border-b border-gray-200">
                        <h3 class="text-lg font-medium text-gray-900">组织列表</h3>
                    </div>
                    <div class="p-6">
                        <div v-if="loading" class="text-center py-12">
                            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
                            <p class="mt-4 text-gray-600">加载中...</p>
                        </div>
                        <div v-else class="text-center py-12">
                            <h3 class="text-sm font-medium text-gray-900">组织管理功能</h3>
                            <p class="mt-1 text-sm text-gray-500">这里将显示所有组织的管理功能</p>
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
const selectedStatus = ref('')
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)

// 统计数据
const stats = ref({
    totalOrganizations: 45,
    verifiedOrganizations: 38,
    pendingOrganizations: 7,
    activeProjects: 156
})

// 模拟数据
const organizations = ref([
    {
        id: 1,
        name: '爱心援助基金会',
        address: '北京市朝阳区爱心大厦100号',
        contactPerson: '张主任',
        contactPhone: '13800138000',
        status: 'approved',
        createdAt: '2024-01-01',
        projectCount: 12
    },
    {
        id: 2,
        name: '希望工程基金会',
        address: '上海市浦东新区希望广场200号',
        contactPerson: '李经理',
        contactPhone: '13900139000',
        status: 'approved',
        createdAt: '2024-01-05',
        projectCount: 8
    },
    {
        id: 3,
        name: '阳光儿童援助中心',
        address: '广州市天河区阳光路300号',
        contactPerson: '王主任',
        contactPhone: '13700137000',
        status: 'pending',
        createdAt: '2024-01-10',
        projectCount: 0
    },
    {
        id: 4,
        name: '温暖之家慈善机构',
        address: '深圳市南山区温暖街400号',
        contactPerson: '陈经理',
        contactPhone: '13600136000',
        status: 'approved',
        createdAt: '2024-01-15',
        projectCount: 15
    },
    {
        id: 5,
        name: '爱心天使公益组织',
        address: '成都市锦江区爱心路500号',
        contactPerson: '刘主任',
        contactPhone: '13500135000',
        status: 'rejected',
        createdAt: '2024-01-20',
        projectCount: 0
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

const getStatusText = (status: string) => {
    const statusMap = {
        pending: '待审核',
        approved: '已通过',
        rejected: '已拒绝',
        suspended: '已暂停'
    }
    return statusMap[status as keyof typeof statusMap] || status
}

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-CN')
}

const searchOrganizations = () => {
    currentPage.value = 1
    loadOrganizations()
}

const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page
        loadOrganizations()
    }
}

const viewOrganization = (orgId: number) => {
    // 查看组织详情
    console.log('查看组织:', orgId)
}

const editOrganization = (orgId: number) => {
    // 编辑组织信息
    console.log('编辑组织:', orgId)
}

const approveOrganization = (orgId: number) => {
    // 通过组织审核
    console.log('通过组织:', orgId)
}

const rejectOrganization = (orgId: number) => {
    // 拒绝组织审核
    console.log('拒绝组织:', orgId)
}

const suspendOrganization = (orgId: number) => {
    // 暂停组织
    console.log('暂停组织:', orgId)
}

const loadOrganizations = async () => {
    try {
        loading.value = true
        // 模拟API调用
        await new Promise(resolve => setTimeout(resolve, 1000))
        total.value = organizations.value.length
    } catch (error) {
        console.error('加载组织失败:', error)
    } finally {
        loading.value = false
    }
}

const handleLogout = () => {
    // 清除本地存储的管理员信息
    localStorage.removeItem('adminToken')
    localStorage.removeItem('adminInfo')

    console.log('管理员退出登录，清除管理员信息')

    // 跳转到管理员登录页面
    router.push('/admin-login')
}

onMounted(() => {
    loadOrganizations()
})
</script>