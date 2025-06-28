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
                        <h1 class="text-2xl font-bold text-gray-900">需要帮助的儿童</h1>
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
                        <input v-model="searchKeyword" type="text" placeholder="搜索儿童姓名或地区..."
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>
                    <div class="flex gap-2">
                        <select v-model="selectedStatus"
                            class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option value="">全部状态</option>
                            <option value="waiting">等待帮助</option>
                            <option value="supported">正在帮助</option>
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
            <div v-if="loading" class="text-center py-12">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
                <p class="mt-4 text-gray-600">加载中...</p>
            </div>

            <div v-else-if="children.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="child in children" :key="child.id"
                    class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <!-- 儿童照片 -->
                    <div class="h-48 bg-gray-200 relative">
                        <img v-if="child.photos && child.photos.length > 0" :src="child.photos[0]" :alt="child.name"
                            class="w-full h-full object-cover" />
                        <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
                            <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="absolute top-2 right-2">
                            <span :class="{
                                'bg-yellow-100 text-yellow-800': child.status === 'waiting',
                                'bg-blue-100 text-blue-800': child.status === 'supported',
                                'bg-green-100 text-green-800': child.status === 'completed'
                            }" class="px-2 py-1 text-xs font-medium rounded-full">
                                {{ getStatusText(child.status) }}
                            </span>
                        </div>
                    </div>

                    <!-- 儿童信息 -->
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ child.name }}</h3>
                        <div class="space-y-2 text-sm text-gray-600">
                            <div class="flex items-center">
                                <span class="w-16">年龄：</span>
                                <span>{{ child.age }}岁</span>
                            </div>
                            <div class="flex items-center">
                                <span class="w-16">性别：</span>
                                <span>{{ child.gender === 'male' ? '男' : '女' }}</span>
                            </div>
                            <div class="flex items-center">
                                <span class="w-16">地区：</span>
                                <span>{{ child.location }}</span>
                            </div>
                        </div>

                        <p class="mt-4 text-gray-700 line-clamp-3">{{ child.description }}</p>

                        <!-- 需求标签 -->
                        <div class="mt-4 flex flex-wrap gap-2">
                            <span v-for="need in child.needs.slice(0, 3)" :key="need"
                                class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                                {{ need }}
                            </span>
                            <span v-if="child.needs.length > 3"
                                class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                +{{ child.needs.length - 3 }}
                            </span>
                        </div>

                        <!-- 操作按钮 -->
                        <div class="mt-6 flex space-x-2">
                            <router-link :to="`/child/${child.id}`"
                                class="flex-1 px-4 py-2 bg-indigo-600 text-white text-center rounded-md hover:bg-indigo-700">
                                查看详情
                            </router-link>
                            <button v-if="child.status === 'waiting'"
                                class="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50">
                                提供帮助
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
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                    <h3 class="mt-2 text-sm font-medium text-gray-900">暂无儿童信息</h3>
                    <p class="mt-1 text-sm text-gray-500">暂时没有需要帮助的儿童信息。</p>
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
import type { Child } from '@/types'

const children = ref<Child[]>([])
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
        waiting: '等待帮助',
        supported: '正在帮助',
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

const loadChildren = async () => {
    try {
        loading.value = true
        // 模拟API调用
        await new Promise(resolve => setTimeout(resolve, 1000))

        // 模拟数据 - 修复数据结构以匹配模板
        const mockChildren = [
            {
                id: 1,
                name: '小明',
                age: 10,
                gender: 'male',
                location: '湖北省黄冈市',
                description: '父母常年在外打工，与爷爷奶奶一起生活。小明学习成绩优异，尤其喜欢数学和科学。',
                needs: ['教育资助', '学习用品', '生活用品'],
                status: 'waiting',
                photos: ['https://picsum.photos/seed/child1/400/300'],
                organizationId: 1,
                organizationName: '爱心教育基金会',
                createdAt: '2024-01-01',
                updatedAt: '2024-01-01'
            },
            {
                id: 2,
                name: '小花',
                age: 8,
                gender: 'female',
                location: '云南省丽江市',
                description: '母亲在小花很小的时候就离开了家，父亲外出打工，她和年迈的奶奶相依为命。小花喜欢画画。',
                needs: ['心理关爱', '艺术教育', '生活用品'],
                status: 'supported',
                photos: ['https://picsum.photos/seed/child2/400/300'],
                organizationId: 2,
                organizationName: '心理健康协会',
                createdAt: '2024-01-02',
                updatedAt: '2024-01-02'
            },
            {
                id: 3,
                name: '小刚',
                age: 13,
                gender: 'male',
                location: '四川省南充市',
                description: '父母在小刚很小的时候就去城市打工，他由爷爷奶奶照顾。小刚是学校篮球队的主力队员。',
                needs: ['体育器材', '学习用品', '营养餐'],
                status: 'waiting',
                photos: ['https://picsum.photos/seed/child3/400/300'],
                organizationId: 3,
                organizationName: '体育发展基金会',
                createdAt: '2024-01-03',
                updatedAt: '2024-01-03'
            },
            {
                id: 4,
                name: '小雨',
                age: 11,
                gender: 'female',
                location: '贵州省黔东南州',
                description: '父亲因工伤失去劳动能力，母亲不得不外出打工养家。小雨需要照顾父亲和年幼的妹妹。',
                needs: ['医疗救助', '生活用品', '心理关爱'],
                status: 'waiting',
                photos: ['https://picsum.photos/seed/child4/400/300'],
                organizationId: 4,
                organizationName: '健康关爱联盟',
                createdAt: '2024-01-04',
                updatedAt: '2024-01-04'
            },
            {
                id: 5,
                name: '小强',
                age: 9,
                gender: 'male',
                location: '安徽省阜阳市',
                description: '父母都在外地打工，小强和外婆一起生活。他非常懂事，经常帮助外婆做家务。',
                needs: ['教育资助', '生活用品', '营养餐'],
                status: 'supported',
                photos: ['https://picsum.photos/seed/child5/400/300'],
                organizationId: 5,
                organizationName: '知识改变命运基金会',
                createdAt: '2024-01-05',
                updatedAt: '2024-01-05'
            },
            {
                id: 6,
                name: '小丽',
                age: 12,
                gender: 'female',
                location: '江西省上饶市',
                description: '母亲因病去世，父亲外出打工还债。小丽和年迈的爷爷相依为命，学习成绩优秀。',
                needs: ['教育资助', '心理关爱', '生活用品'],
                status: 'waiting',
                photos: ['https://picsum.photos/seed/child6/400/300'],
                organizationId: 6,
                organizationName: '温馨家园',
                createdAt: '2024-01-06',
                updatedAt: '2024-01-06'
            },
            {
                id: 7,
                name: '小华',
                age: 14,
                gender: 'male',
                location: '河南省信阳市',
                description: '父母离异，父亲外出打工，小华和奶奶生活。他喜欢音乐，希望将来能成为一名音乐家。',
                needs: ['艺术教育', '心理关爱', '学习用品'],
                status: 'supported',
                photos: ['https://picsum.photos/seed/child7/400/300'],
                organizationId: 7,
                organizationName: '艺术教育推广协会',
                createdAt: '2024-01-07',
                updatedAt: '2024-01-07'
            },
            {
                id: 8,
                name: '小芳',
                age: 7,
                gender: 'female',
                location: '湖南省邵阳市',
                description: '父母都在外地打工，小芳和外婆生活。她刚上小学，对学习充满热情。',
                needs: ['教育资助', '学习用品', '生活用品'],
                status: 'waiting',
                photos: ['https://picsum.photos/seed/child8/400/300'],
                organizationId: 8,
                organizationName: '科技启蒙教育中心',
                createdAt: '2024-01-08',
                updatedAt: '2024-01-08'
            },
            {
                id: 9,
                name: '小军',
                age: 15,
                gender: 'male',
                location: '广西壮族自治区桂林市',
                description: '父亲因事故去世，母亲外出打工。小军是家里的长子，需要照顾弟弟妹妹。',
                needs: ['生活用品', '心理关爱', '教育资助'],
                status: 'waiting',
                photos: ['https://picsum.photos/seed/child9/400/300'],
                organizationId: 9,
                organizationName: '体育发展促进会',
                createdAt: '2024-01-09',
                updatedAt: '2024-01-09'
            },
            {
                id: 10,
                name: '小燕',
                age: 6,
                gender: 'female',
                location: '福建省宁德市',
                description: '父母都在外地打工，小燕和爷爷奶奶生活。她活泼可爱，喜欢唱歌跳舞。',
                needs: ['艺术教育', '生活用品', '营养餐'],
                status: 'supported',
                photos: ['https://picsum.photos/seed/child10/400/300'],
                organizationId: 10,
                organizationName: '语言教育联盟',
                createdAt: '2024-01-10',
                updatedAt: '2024-01-10'
            },
            {
                id: 11,
                name: '小伟',
                age: 16,
                gender: 'male',
                location: '山东省临沂市',
                description: '父母外出打工，小伟和爷爷生活。他学习成绩优秀，希望将来能考上好大学。',
                needs: ['教育资助', '学习用品', '心理关爱'],
                status: 'waiting',
                photos: ['https://picsum.photos/seed/child11/400/300'],
                organizationId: 11,
                organizationName: '环保教育基金会',
                createdAt: '2024-01-11',
                updatedAt: '2024-01-11'
            },
            {
                id: 12,
                name: '小敏',
                age: 8,
                gender: 'female',
                location: '河北省承德市',
                description: '母亲因病去世，父亲外出打工。小敏和奶奶生活，她非常懂事，经常帮助奶奶。',
                needs: ['生活用品', '心理关爱', '教育资助'],
                status: 'waiting',
                photos: ['https://picsum.photos/seed/child12/400/300'],
                organizationId: 12,
                organizationName: '文化传承协会',
                createdAt: '2024-01-12',
                updatedAt: '2024-01-12'
            }
        ]

        // 模拟分页逻辑
        const startIndex = (currentPage.value - 1) * pageSize.value
        const endIndex = startIndex + pageSize.value
        children.value = mockChildren.slice(startIndex, endIndex)
        total.value = mockChildren.length
    } catch (error) {
        console.error('加载儿童数据失败:', error)
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    loadChildren()
})
</script>

<style scoped>
.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>