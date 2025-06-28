<template>
    <div class="min-h-screen bg-gray-50">
        <!-- 导航栏 -->
        <nav class="bg-white shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <router-link to="/" class="text-xl font-bold text-indigo-600">
                            童伴桥
                        </router-link>
                    </div>
                    <div class="flex items-center">
                        <h1 class="text-2xl font-bold text-gray-900">帮扶项目</h1>
                    </div>
                    <div class="flex items-center space-x-4">
                        <router-link to="/"
                            class="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors">
                            返回首页
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>

        <!-- 页面内容 -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <!-- 搜索和筛选 -->
            <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
                <div class="flex flex-col sm:flex-row gap-4">
                    <div class="flex-1">
                        <input v-model="searchKeyword" type="text" placeholder="搜索项目名称或组织..."
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>
                    <div class="flex gap-2">
                        <select v-model="selectedStatus"
                            class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option value="">全部状态</option>
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
            <div v-if="loading" class="text-center py-12">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
                <p class="mt-4 text-gray-600">加载中...</p>
            </div>

            <div v-else-if="projects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="project in projects" :key="project.id"
                    class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <!-- 项目图片 -->
                    <div class="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 relative">
                        <div class="absolute inset-0 bg-black bg-opacity-20"></div>
                        <div class="absolute top-2 right-2">
                            <span :class="{
                                'bg-green-100 text-green-800': project.status === 'active',
                                'bg-blue-100 text-blue-800': project.status === 'completed',
                                'bg-red-100 text-red-800': project.status === 'cancelled'
                            }" class="px-2 py-1 text-xs font-medium rounded-full">
                                {{ getStatusText(project.status) }}
                            </span>
                        </div>
                    </div>

                    <!-- 项目信息 -->
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ project.title }}</h3>
                        <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ project.description }}</p>

                        <!-- 组织信息 -->
                        <div class="flex items-center mb-4">
                            <div class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                                <span class="text-indigo-600 text-sm font-medium">{{ project.organization.name.charAt(0)
                                    }}</span>
                            </div>
                            <span class="text-sm text-gray-600">{{ project.organization.name }}</span>
                        </div>

                        <!-- 筹款进度 -->
                        <div class="mb-4">
                            <div class="flex justify-between text-sm text-gray-600 mb-1">
                                <span>筹款进度</span>
                                <span>{{ Math.round((project.currentAmount / project.targetAmount) * 100) }}%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-indigo-600 h-2 rounded-full"
                                    :style="{ width: `${Math.min((project.currentAmount / project.targetAmount) * 100, 100)}%` }">
                                </div>
                            </div>
                            <div class="flex justify-between text-sm text-gray-500 mt-1">
                                <span>已筹：¥{{ project.currentAmount.toLocaleString() }}</span>
                                <span>目标：¥{{ project.targetAmount.toLocaleString() }}</span>
                            </div>
                        </div>

                        <!-- 项目时间 -->
                        <div class="text-sm text-gray-500 mb-4">
                            <div>开始：{{ formatDate(project.startDate) }}</div>
                            <div>结束：{{ formatDate(project.endDate) }}</div>
                        </div>

                        <!-- 操作按钮 -->
                        <div class="flex space-x-2">
                            <router-link :to="`/project/${project.id}`"
                                class="flex-1 px-4 py-2 bg-indigo-600 text-white text-center rounded-md hover:bg-indigo-700">
                                查看详情
                            </router-link>
                            <button v-if="project.status === 'active'"
                                class="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50">
                                参与项目
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 空状态 -->
            <div v-else class="text-center py-12">
                <div class="text-gray-500">
                    <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <h3 class="mt-2 text-sm font-medium text-gray-900">暂无项目</h3>
                    <p class="mt-1 text-sm text-gray-500">暂时没有可参与的项目。</p>
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
                    }" class="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium cursor-pointer">
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
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import type { Project } from '@/types'

const projects = ref<Project[]>([])
const loading = ref(true)
const searchKeyword = ref('')
const selectedStatus = ref('')
const currentPage = ref(1)
const pageSize = ref(6)
const total = ref(0)

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

const loadProjects = async () => {
    try {
        loading.value = true
        // 模拟API调用
        await new Promise(resolve => setTimeout(resolve, 1000))

        // 模拟数据 - 增加更多项目数据
        const mockProjects = [
            {
                id: 1,
                title: '山区儿童教育援助计划',
                description: '为偏远山区的留守儿童提供教育资源和学习用品，帮助他们获得更好的教育机会。',
                targetAmount: 50000,
                currentAmount: 32000,
                status: 'active',
                organizationId: 1,
                organization: {
                    id: 1,
                    name: '爱心教育基金会',
                    description: '专注于儿童教育公益事业',
                    logo: '',
                    contact: { phone: '010-12345678', email: 'contact@aixin.org', address: '北京市朝阳区' },
                    status: 'active',
                    verified: true,
                    createdAt: '2024-01-01',
                    updatedAt: '2024-01-01'
                },
                children: [],
                startDate: '2024-01-01',
                endDate: '2024-12-31',
                createdAt: '2024-01-01',
                updatedAt: '2024-01-01'
            },
            {
                id: 2,
                title: '心理健康关爱项目',
                description: '为留守儿童提供心理健康咨询和关爱服务，帮助他们健康成长。',
                targetAmount: 30000,
                currentAmount: 30000,
                status: 'completed',
                organizationId: 2,
                organization: {
                    id: 2,
                    name: '心理健康协会',
                    description: '专业心理健康服务机构',
                    logo: '',
                    contact: { phone: '010-87654321', email: 'contact@xinli.org', address: '上海市浦东新区' },
                    status: 'active',
                    verified: true,
                    createdAt: '2024-01-01',
                    updatedAt: '2024-01-01'
                },
                children: [],
                startDate: '2024-01-01',
                endDate: '2024-06-30',
                createdAt: '2024-01-01',
                updatedAt: '2024-01-01'
            },
            {
                id: 3,
                title: '阅读点亮童年计划',
                description: '为农村儿童建立图书角，提供优质阅读资源，培养阅读习惯。',
                targetAmount: 25000,
                currentAmount: 18000,
                status: 'active',
                organizationId: 3,
                organization: {
                    id: 3,
                    name: '阅读推广协会',
                    description: '推广儿童阅读教育',
                    logo: '',
                    contact: { phone: '010-11111111', email: 'contact@reading.org', address: '广州市天河区' },
                    status: 'active',
                    verified: true,
                    createdAt: '2024-01-01',
                    updatedAt: '2024-01-01'
                },
                children: [],
                startDate: '2024-02-01',
                endDate: '2024-11-30',
                createdAt: '2024-02-01',
                updatedAt: '2024-02-01'
            },
            {
                id: 4,
                title: '健康体检关爱行动',
                description: '为留守儿童提供免费健康体检，及时发现健康问题。',
                targetAmount: 40000,
                currentAmount: 25000,
                status: 'active',
                organizationId: 4,
                organization: {
                    id: 4,
                    name: '健康关爱联盟',
                    description: '关注儿童健康事业',
                    logo: '',
                    contact: { phone: '010-22222222', email: 'contact@health.org', address: '深圳市南山区' },
                    status: 'active',
                    verified: true,
                    createdAt: '2024-01-01',
                    updatedAt: '2024-01-01'
                },
                children: [],
                startDate: '2024-03-01',
                endDate: '2024-12-31',
                createdAt: '2024-03-01',
                updatedAt: '2024-03-01'
            },
            {
                id: 5,
                title: '艺术教育启蒙计划',
                description: '为农村儿童提供音乐、美术等艺术教育，培养艺术天赋。',
                targetAmount: 35000,
                currentAmount: 28000,
                status: 'active',
                organizationId: 5,
                organization: {
                    id: 5,
                    name: '艺术教育基金会',
                    description: '推广艺术教育',
                    logo: '',
                    contact: { phone: '010-33333333', email: 'contact@art.org', address: '成都市锦江区' },
                    status: 'active',
                    verified: true,
                    createdAt: '2024-01-01',
                    updatedAt: '2024-01-01'
                },
                children: [],
                startDate: '2024-01-15',
                endDate: '2024-10-31',
                createdAt: '2024-01-15',
                updatedAt: '2024-01-15'
            },
            {
                id: 6,
                title: '科技启蒙教育项目',
                description: '为农村儿童提供计算机和科技教育，培养科技兴趣。',
                targetAmount: 45000,
                currentAmount: 30000,
                status: 'active',
                organizationId: 6,
                organization: {
                    id: 6,
                    name: '科技教育协会',
                    description: '推广科技教育',
                    logo: '',
                    contact: { phone: '010-44444444', email: 'contact@tech.org', address: '杭州市西湖区' },
                    status: 'active',
                    verified: true,
                    createdAt: '2024-01-01',
                    updatedAt: '2024-01-01'
                },
                children: [],
                startDate: '2024-02-15',
                endDate: '2024-11-30',
                createdAt: '2024-02-15',
                updatedAt: '2024-02-15'
            },
            {
                id: 7,
                title: '体育健身关爱计划',
                description: '为留守儿童提供体育器材和健身指导，促进身体健康。',
                targetAmount: 20000,
                currentAmount: 15000,
                status: 'active',
                organizationId: 7,
                organization: {
                    id: 7,
                    name: '体育发展基金会',
                    description: '推广体育教育',
                    logo: '',
                    contact: { phone: '010-55555555', email: 'contact@sport.org', address: '武汉市江汉区' },
                    status: 'active',
                    verified: true,
                    createdAt: '2024-01-01',
                    updatedAt: '2024-01-01'
                },
                children: [],
                startDate: '2024-03-15',
                endDate: '2024-12-31',
                createdAt: '2024-03-15',
                updatedAt: '2024-03-15'
            },
            {
                id: 8,
                title: '英语启蒙教育项目',
                description: '为农村儿童提供英语启蒙教育，培养语言能力。',
                targetAmount: 30000,
                currentAmount: 22000,
                status: 'active',
                organizationId: 8,
                organization: {
                    id: 8,
                    name: '语言教育协会',
                    description: '推广语言教育',
                    logo: '',
                    contact: { phone: '010-66666666', email: 'contact@language.org', address: '西安市雁塔区' },
                    status: 'active',
                    verified: true,
                    createdAt: '2024-01-01',
                    updatedAt: '2024-01-01'
                },
                children: [],
                startDate: '2024-01-20',
                endDate: '2024-10-31',
                createdAt: '2024-01-20',
                updatedAt: '2024-01-20'
            },
            {
                id: 9,
                title: '环保教育实践计划',
                description: '培养儿童的环保意识，开展环保实践活动。',
                targetAmount: 25000,
                currentAmount: 18000,
                status: 'active',
                organizationId: 9,
                organization: {
                    id: 9,
                    name: '环保教育基金会',
                    description: '推广环保教育',
                    logo: '',
                    contact: { phone: '010-77777777', email: 'contact@eco.org', address: '南京市鼓楼区' },
                    status: 'active',
                    verified: true,
                    createdAt: '2024-01-01',
                    updatedAt: '2024-01-01'
                },
                children: [],
                startDate: '2024-02-20',
                endDate: '2024-11-30',
                createdAt: '2024-02-20',
                updatedAt: '2024-02-20'
            },
            {
                id: 10,
                title: '传统文化传承项目',
                description: '传承中华传统文化，培养文化自信。',
                targetAmount: 20000,
                currentAmount: 12000,
                status: 'active',
                organizationId: 10,
                organization: {
                    id: 10,
                    name: '文化传承协会',
                    description: '传承传统文化',
                    logo: '',
                    contact: { phone: '010-88888888', email: 'contact@culture.org', address: '重庆市渝中区' },
                    status: 'active',
                    verified: true,
                    createdAt: '2024-01-01',
                    updatedAt: '2024-01-01'
                },
                children: [],
                startDate: '2024-03-20',
                endDate: '2024-12-31',
                createdAt: '2024-03-20',
                updatedAt: '2024-03-20'
            },
            {
                id: 11,
                title: '心理疏导关爱计划',
                description: '为留守儿童提供专业心理疏导服务。',
                targetAmount: 35000,
                currentAmount: 28000,
                status: 'active',
                organizationId: 11,
                organization: {
                    id: 11,
                    name: '心理健康协会',
                    description: '关注心理健康',
                    logo: '',
                    contact: { phone: '010-99999999', email: 'contact@psychology.org', address: '青岛市市南区' },
                    status: 'active',
                    verified: true,
                    createdAt: '2024-01-01',
                    updatedAt: '2024-01-01'
                },
                children: [],
                startDate: '2024-01-25',
                endDate: '2024-10-31',
                createdAt: '2024-01-25',
                updatedAt: '2024-01-25'
            },
            {
                id: 12,
                title: '营养改善计划',
                description: '改善留守儿童营养状况，提供营养餐。',
                targetAmount: 40000,
                currentAmount: 32000,
                status: 'active',
                organizationId: 12,
                organization: {
                    id: 12,
                    name: '营养健康基金会',
                    description: '关注营养健康',
                    logo: '',
                    contact: { phone: '010-00000000', email: 'contact@nutrition.org', address: '大连市中山区' },
                    status: 'active',
                    verified: true,
                    createdAt: '2024-01-01',
                    updatedAt: '2024-01-01'
                },
                children: [],
                startDate: '2024-02-25',
                endDate: '2024-11-30',
                createdAt: '2024-02-25',
                updatedAt: '2024-02-25'
            }
        ]

        // 模拟分页逻辑
        const startIndex = (currentPage.value - 1) * pageSize.value
        const endIndex = startIndex + pageSize.value
        projects.value = mockProjects.slice(startIndex, endIndex)
        total.value = mockProjects.length
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

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>