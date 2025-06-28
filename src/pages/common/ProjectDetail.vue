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
                        <h1 class="text-2xl font-bold text-gray-900">项目详情</h1>
                    </div>
                    <div class="flex items-center space-x-4">
                        <router-link to="/projects"
                            class="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors">
                            返回项目列表
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>

        <!-- 项目详情 -->
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div v-if="loading" class="text-center py-12">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
                <p class="mt-4 text-gray-600">加载中...</p>
            </div>

            <div v-else-if="project" class="bg-white rounded-lg shadow-sm overflow-hidden">
                <!-- 项目头部 -->
                <div class="relative h-64 bg-gradient-to-r from-indigo-500 to-purple-600">
                    <div class="absolute inset-0 bg-black bg-opacity-40"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h1 class="text-3xl font-bold mb-2">{{ project.title }}</h1>
                        <div class="flex items-center space-x-4 text-sm">
                            <span>组织：{{ project.organization.name }}</span>
                            <span :class="{
                                'bg-green-500': project.status === 'active',
                                'bg-blue-500': project.status === 'completed',
                                'bg-red-500': project.status === 'cancelled'
                            }" class="px-2 py-1 rounded-full text-xs font-medium">
                                {{ getStatusText(project.status) }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- 项目信息 -->
                <div class="p-6">
                    <!-- 筹款进度 -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">筹款进度</h2>
                        <div class="bg-gray-50 rounded-lg p-6">
                            <div class="flex justify-between items-center mb-2">
                                <span class="text-2xl font-bold text-indigo-600">
                                    ¥{{ project.currentAmount.toLocaleString() }}
                                </span>
                                <span class="text-gray-600">
                                    目标：¥{{ project.targetAmount.toLocaleString() }}
                                </span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-3 mb-2">
                                <div class="bg-indigo-600 h-3 rounded-full transition-all duration-300"
                                    :style="{ width: `${Math.min((project.currentAmount / project.targetAmount) * 100, 100)}%` }">
                                </div>
                            </div>
                            <div class="text-center text-sm text-gray-600">
                                已完成 {{ Math.round((project.currentAmount / project.targetAmount) * 100) }}%
                            </div>
                        </div>
                    </div>

                    <!-- 项目描述 -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">项目描述</h2>
                        <p class="text-gray-700 leading-relaxed">{{ project.description }}</p>
                    </div>

                    <!-- 组织信息 -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">发起组织</h2>
                        <div class="bg-gray-50 rounded-lg p-6">
                            <div class="flex items-center mb-4">
                                <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                                    <span class="text-indigo-600 text-lg font-medium">{{
                                        project.organization.name.charAt(0) }}</span>
                                </div>
                                <div>
                                    <h3 class="text-lg font-semibold text-gray-900">{{ project.organization.name }}</h3>
                                    <p class="text-gray-600">{{ project.organization.description }}</p>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                <div>
                                    <span class="text-gray-600">联系电话：</span>
                                    <span>{{ project.organization.contact.phone }}</span>
                                </div>
                                <div>
                                    <span class="text-gray-600">邮箱：</span>
                                    <span>{{ project.organization.contact.email }}</span>
                                </div>
                                <div>
                                    <span class="text-gray-600">地址：</span>
                                    <span>{{ project.organization.contact.address }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 项目时间 -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">项目时间</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="bg-gray-50 rounded-lg p-4">
                                <div class="text-sm text-gray-600 mb-1">开始时间</div>
                                <div class="font-medium">{{ formatDate(project.startDate) }}</div>
                            </div>
                            <div class="bg-gray-50 rounded-lg p-4">
                                <div class="text-sm text-gray-600 mb-1">结束时间</div>
                                <div class="font-medium">{{ formatDate(project.endDate) }}</div>
                            </div>
                        </div>
                    </div>

                    <!-- 相关儿童 -->
                    <div v-if="project.children && project.children.length > 0" class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">相关儿童</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div v-for="child in project.children" :key="child.id" class="bg-gray-50 rounded-lg p-4">
                                <div class="flex items-center">
                                    <div
                                        class="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                                        <span class="text-indigo-600 text-sm font-medium">{{ child.name.charAt(0)
                                            }}</span>
                                    </div>
                                    <div>
                                        <div class="font-medium">{{ child.name }}</div>
                                        <div class="text-sm text-gray-600">{{ child.age }}岁 · {{ child.location }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 操作按钮 -->
                    <div class="flex space-x-4">
                        <button v-if="project.status === 'active'"
                            class="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-medium">
                            参与项目
                        </button>
                        <button
                            class="px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 font-medium">
                            分享项目
                        </button>
                        <button
                            class="px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 font-medium">
                            收藏项目
                        </button>
                    </div>
                </div>
            </div>

            <div v-else class="text-center py-12">
                <div class="text-gray-500">
                    <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <h3 class="mt-2 text-sm font-medium text-gray-900">项目不存在</h3>
                    <p class="mt-1 text-sm text-gray-500">抱歉，您访问的项目不存在或已被删除。</p>
                    <div class="mt-6">
                        <router-link to="/projects"
                            class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                            返回项目列表
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
import type { Project } from '@/types'

const route = useRoute()
const project = ref<Project | null>(null)
const loading = ref(true)

const getStatusText = (status: string) => {
    const statusMap = {
        active: '进行中',
        completed: '已完成',
        cancelled: '已取消'
    }
    return statusMap[status as keyof typeof statusMap] || status
}

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

const loadProject = async () => {
    try {
        loading.value = true
        const projectId = parseInt(route.params.id as string)
        // 模拟API调用
        await new Promise(resolve => setTimeout(resolve, 1000))

        // 模拟数据
        project.value = {
            id: projectId,
            title: '山区儿童教育援助计划',
            description: '为偏远山区的留守儿童提供教育资源和学习用品，帮助他们获得更好的教育机会。本项目将覆盖四川省凉山州、贵州省黔东南州等地区的留守儿童，为他们提供书包、文具、图书等学习用品，并组织志愿者进行教育辅导。',
            targetAmount: 50000,
            currentAmount: 32000,
            status: 'active',
            organizationId: 1,
            organization: {
                id: 1,
                name: '爱心教育基金会',
                description: '专注于儿童教育公益事业，致力于为贫困地区儿童提供教育支持',
                logo: '',
                contact: { phone: '010-12345678', email: 'contact@aixin.org', address: '北京市朝阳区建国门外大街1号' },
                status: 'active',
                verified: true,
                createdAt: '2024-01-01',
                updatedAt: '2024-01-01'
            },
            children: [
                {
                    id: 1,
                    name: '小明',
                    age: 8,
                    gender: 'male',
                    location: '四川省凉山州',
                    description: '小明是一个聪明可爱的男孩，父母外出打工，由爷爷奶奶照顾。',
                    needs: ['教育资助', '学习用品'],
                    status: 'waiting',
                    photos: [],
                    createdAt: '2024-01-15',
                    updatedAt: '2024-01-15'
                }
            ],
            startDate: '2024-01-01',
            endDate: '2024-12-31',
            createdAt: '2024-01-01',
            updatedAt: '2024-01-01'
        }
    } catch (error) {
        console.error('加载项目失败:', error)
        project.value = null
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    loadProject()
})
</script>