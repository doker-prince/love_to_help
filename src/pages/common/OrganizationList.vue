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
                        <h1 class="text-2xl font-bold text-gray-900">爱心帮扶机构</h1>
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
                        <input v-model="searchKeyword" type="text" placeholder="搜索机构名称..."
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>
                    <div class="flex gap-2">
                        <select v-model="selectedStatus"
                            class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option value="">全部状态</option>
                            <option value="approved">已认证</option>
                            <option value="pending">待认证</option>
                            <option value="suspended">已暂停</option>
                        </select>
                        <button @click="searchOrganizations"
                            class="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                            搜索
                        </button>
                    </div>
                </div>
            </div>

            <!-- 机构列表 -->
            <div v-if="loading" class="text-center py-12">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
                <p class="mt-4 text-gray-600">加载中...</p>
            </div>

            <div v-else-if="organizations.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="org in organizations" :key="org.id"
                    class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <!-- 机构logo -->
                    <div class="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative">
                        <div class="absolute inset-0 bg-black bg-opacity-20"></div>
                        <div class="absolute top-2 right-2">
                            <span :class="{
                                'bg-green-100 text-green-800': org.status === 'approved',
                                'bg-yellow-100 text-yellow-800': org.status === 'pending',
                                'bg-red-100 text-red-800': org.status === 'suspended'
                            }" class="px-2 py-1 text-xs font-medium rounded-full">
                                {{ getStatusText(org.status) }}
                            </span>
                        </div>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                                <span class="text-2xl font-bold text-indigo-600">{{ org.name.charAt(0) }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- 机构信息 -->
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ org.name }}</h3>
                        <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ org.description }}</p>

                        <div class="space-y-2 text-sm text-gray-600 mb-4">
                            <div class="flex items-center">
                                <i class="fa fa-map-marker mr-2 text-gray-400"></i>
                                <span>{{ org.address }}</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fa fa-phone mr-2 text-gray-400"></i>
                                <span>{{ org.contactPhone }}</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fa fa-envelope mr-2 text-gray-400"></i>
                                <span>{{ org.contactEmail }}</span>
                            </div>
                        </div>

                        <!-- 统计信息 -->
                        <div class="flex justify-between text-sm text-gray-500 mb-4">
                            <span>项目数：{{ org.projectCount }}</span>
                            <span>成立时间：{{ formatDate(org.createdAt) }}</span>
                        </div>

                        <!-- 操作按钮 -->
                        <div class="flex space-x-2">
                            <router-link :to="`/organization/${org.id}`"
                                class="flex-1 px-4 py-2 bg-indigo-600 text-white text-center rounded-md hover:bg-indigo-700">
                                查看详情
                            </router-link>
                            <button v-if="org.status === 'approved'"
                                class="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50">
                                联系机构
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
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <h3 class="mt-2 text-sm font-medium text-gray-900">暂无机构信息</h3>
                    <p class="mt-1 text-sm text-gray-500">暂时没有可用的机构信息。</p>
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

interface Organization {
    id: number
    name: string
    description: string
    address: string
    contactPhone: string
    contactEmail: string
    status: 'approved' | 'pending' | 'suspended'
    projectCount: number
    createdAt: string
}

const organizations = ref<Organization[]>([])
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
        approved: '已认证',
        pending: '待认证',
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

const loadOrganizations = async () => {
    try {
        loading.value = true
        // 模拟API调用
        await new Promise(resolve => setTimeout(resolve, 1000))

        // 模拟数据 - 增加更多机构数据
        const mockOrganizations = [
            {
                id: 1,
                name: '中国儿童少年基金会',
                description: '致力于促进儿童少年教育、健康、文化等事业的发展，为留守儿童提供全方位的关爱和支持。',
                address: '北京市朝阳区建国门外大街1号',
                contactPhone: '010-12345678',
                contactEmail: 'contact@ccf.org.cn',
                status: 'approved',
                projectCount: 25,
                createdAt: '2020-01-01'
            },
            {
                id: 2,
                name: '绿色未来公益组织',
                description: '关注农村教育和环境保护，为留守儿童提供学习资源和环境教育，培养他们的环保意识。',
                address: '上海市浦东新区张江高科技园区',
                contactPhone: '021-87654321',
                contactEmail: 'info@greenfuture.org',
                status: 'approved',
                projectCount: 18,
                createdAt: '2021-03-15'
            },
            {
                id: 3,
                name: '阅读点亮童年',
                description: '专注于为偏远地区儿童提供优质阅读资源，培养阅读习惯，让知识改变命运。',
                address: '广州市天河区珠江新城',
                contactPhone: '020-11223344',
                contactEmail: 'hello@reading.org',
                status: 'approved',
                projectCount: 32,
                createdAt: '2019-06-20'
            },
            {
                id: 4,
                name: '健康护航公益联盟',
                description: '为农村地区儿童提供健康检查和医疗救助服务，保障儿童健康成长。',
                address: '深圳市南山区科技园',
                contactPhone: '0755-55667788',
                contactEmail: 'health@alliance.org',
                status: 'pending',
                projectCount: 12,
                createdAt: '2022-08-10'
            },
            {
                id: 5,
                name: '知识改变命运基金会',
                description: '资助贫困地区学生完成学业，提供教育资源和奖学金，帮助他们实现梦想。',
                address: '成都市锦江区春熙路',
                contactPhone: '028-99887766',
                contactEmail: 'education@foundation.org',
                status: 'approved',
                projectCount: 28,
                createdAt: '2018-12-01'
            },
            {
                id: 6,
                name: '温馨家园',
                description: '为留守儿童提供心理辅导和生活关怀，创建温馨的成长环境，让他们感受到家的温暖。',
                address: '杭州市西湖区文三路',
                contactPhone: '0571-33445566',
                contactEmail: 'warm@home.org',
                status: 'approved',
                projectCount: 15,
                createdAt: '2021-09-15'
            },
            {
                id: 7,
                name: '艺术教育推广协会',
                description: '为农村儿童提供音乐、美术等艺术教育，培养艺术天赋，丰富精神生活。',
                address: '武汉市江汉区解放大道',
                contactPhone: '027-44556677',
                contactEmail: 'art@association.org',
                status: 'approved',
                projectCount: 22,
                createdAt: '2020-05-10'
            },
            {
                id: 8,
                name: '科技启蒙教育中心',
                description: '为农村儿童提供计算机和科技教育，培养科技兴趣，提升数字素养。',
                address: '西安市雁塔区高新路',
                contactPhone: '029-66778899',
                contactEmail: 'tech@center.org',
                status: 'approved',
                projectCount: 19,
                createdAt: '2021-11-20'
            },
            {
                id: 9,
                name: '体育发展促进会',
                description: '推广体育教育，为留守儿童提供体育器材和健身指导，促进身体健康。',
                address: '重庆市渝中区解放碑',
                contactPhone: '023-88990011',
                contactEmail: 'sport@promotion.org',
                status: 'pending',
                projectCount: 8,
                createdAt: '2022-03-05'
            },
            {
                id: 10,
                name: '语言教育联盟',
                description: '为农村儿童提供英语等语言教育，培养语言能力，拓展国际视野。',
                address: '南京市鼓楼区中山路',
                contactPhone: '025-11223344',
                contactEmail: 'language@alliance.org',
                status: 'approved',
                projectCount: 16,
                createdAt: '2020-08-15'
            },
            {
                id: 11,
                name: '环保教育基金会',
                description: '培养儿童的环保意识，开展环保实践活动，建设绿色家园。',
                address: '青岛市市南区香港中路',
                contactPhone: '0532-55667788',
                contactEmail: 'eco@foundation.org',
                status: 'approved',
                projectCount: 14,
                createdAt: '2021-04-12'
            },
            {
                id: 12,
                name: '文化传承协会',
                description: '传承中华传统文化，培养文化自信，让儿童了解民族文化的魅力。',
                address: '大连市中山区人民路',
                contactPhone: '0411-33445566',
                contactEmail: 'culture@association.org',
                status: 'approved',
                projectCount: 11,
                createdAt: '2022-01-08'
            }
        ]

        // 模拟分页逻辑
        const startIndex = (currentPage.value - 1) * pageSize.value
        const endIndex = startIndex + pageSize.value
        organizations.value = mockOrganizations.slice(startIndex, endIndex)
        total.value = mockOrganizations.length
    } catch (error) {
        console.error('加载机构失败:', error)
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    loadOrganizations()
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