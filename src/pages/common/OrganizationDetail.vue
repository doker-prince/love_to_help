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
                        <h1 class="text-2xl font-bold text-gray-900">机构详情</h1>
                    </div>
                    <div class="flex items-center space-x-4">
                        <router-link to="/organizations"
                            class="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors">
                            返回机构列表
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>

        <!-- 机构详情 -->
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div v-if="loading" class="text-center py-12">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
                <p class="mt-4 text-gray-600">加载中...</p>
            </div>

            <div v-else-if="organization" class="bg-white rounded-lg shadow-sm overflow-hidden">
                <!-- 机构头部 -->
                <div class="relative h-64 bg-gradient-to-r from-blue-500 to-purple-600">
                    <div class="absolute inset-0 bg-black bg-opacity-40"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                            <span class="text-4xl font-bold text-indigo-600">{{ organization.name.charAt(0) }}</span>
                        </div>
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h1 class="text-3xl font-bold mb-2">{{ organization.name }}</h1>
                        <div class="flex items-center space-x-4 text-sm">
                            <span :class="{
                                'bg-green-500': organization.status === 'approved',
                                'bg-yellow-500': organization.status === 'pending',
                                'bg-red-500': organization.status === 'suspended'
                            }" class="px-2 py-1 rounded-full text-xs font-medium">
                                {{ getStatusText(organization.status) }}
                            </span>
                            <span>项目数：{{ organization.projectCount }}</span>
                        </div>
                    </div>
                </div>

                <!-- 机构信息 -->
                <div class="p-6">
                    <!-- 机构描述 -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">机构介绍</h2>
                        <p class="text-gray-700 leading-relaxed">{{ organization.description }}</p>
                    </div>

                    <!-- 联系信息 -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">联系信息</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="bg-gray-50 rounded-lg p-4">
                                <div class="flex items-center mb-2">
                                    <i class="fa fa-map-marker text-indigo-600 mr-2"></i>
                                    <span class="font-medium">地址</span>
                                </div>
                                <p class="text-gray-700">{{ organization.address }}</p>
                            </div>
                            <div class="bg-gray-50 rounded-lg p-4">
                                <div class="flex items-center mb-2">
                                    <i class="fa fa-phone text-indigo-600 mr-2"></i>
                                    <span class="font-medium">电话</span>
                                </div>
                                <p class="text-gray-700">{{ organization.contactPhone }}</p>
                            </div>
                            <div class="bg-gray-50 rounded-lg p-4">
                                <div class="flex items-center mb-2">
                                    <i class="fa fa-envelope text-indigo-600 mr-2"></i>
                                    <span class="font-medium">邮箱</span>
                                </div>
                                <p class="text-gray-700">{{ organization.contactEmail }}</p>
                            </div>
                            <div class="bg-gray-50 rounded-lg p-4">
                                <div class="flex items-center mb-2">
                                    <i class="fa fa-calendar text-indigo-600 mr-2"></i>
                                    <span class="font-medium">成立时间</span>
                                </div>
                                <p class="text-gray-700">{{ formatDate(organization.createdAt) }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- 操作按钮 -->
                    <div class="flex space-x-4">
                        <button v-if="organization.status === 'approved'"
                            class="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-medium">
                            联系机构
                        </button>
                        <button
                            class="px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 font-medium">
                            分享机构
                        </button>
                        <button
                            class="px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 font-medium">
                            收藏机构
                        </button>
                    </div>
                </div>
            </div>

            <div v-else class="text-center py-12">
                <div class="text-gray-500">
                    <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <h3 class="mt-2 text-sm font-medium text-gray-900">机构不存在</h3>
                    <p class="mt-1 text-sm text-gray-500">抱歉，您访问的机构不存在或已被删除。</p>
                    <div class="mt-6">
                        <router-link to="/organizations"
                            class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                            返回机构列表
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

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

const route = useRoute()
const organization = ref<Organization | null>(null)
const loading = ref(true)

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

const loadOrganization = async () => {
    try {
        loading.value = true
        const orgId = parseInt(route.params.id as string)

        // 模拟API调用
        await new Promise(resolve => setTimeout(resolve, 1000))

        // 模拟数据
        const mockOrganizations = [
            {
                id: 1,
                name: '中国儿童少年基金会',
                description: '致力于促进儿童少年教育、健康、文化等事业的发展，为留守儿童提供全方位的关爱和支持。我们通过多种形式的公益活动，帮助留守儿童获得更好的教育资源和生活条件。',
                address: '北京市朝阳区建国门外大街1号',
                contactPhone: '010-12345678',
                contactEmail: 'contact@ccf.org.cn',
                status: 'approved' as const,
                projectCount: 25,
                createdAt: '2020-01-01'
            },
            {
                id: 2,
                name: '绿色未来公益组织',
                description: '关注农村教育和环境保护，为留守儿童提供学习资源和环境教育，培养他们的环保意识。我们相信通过教育可以改变孩子们的未来。',
                address: '上海市浦东新区张江高科技园区',
                contactPhone: '021-87654321',
                contactEmail: 'info@greenfuture.org',
                status: 'approved' as const,
                projectCount: 18,
                createdAt: '2021-03-15'
            }
        ]

        organization.value = mockOrganizations.find(org => org.id === orgId) || null
    } catch (error) {
        console.error('加载机构信息失败:', error)
        organization.value = null
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    loadOrganization()
})
</script>