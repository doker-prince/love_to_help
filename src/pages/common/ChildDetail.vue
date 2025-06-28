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
                        <h1 class="text-2xl font-bold text-gray-900">儿童详情</h1>
                    </div>
                    <div class="flex items-center space-x-4">
                        <router-link to="/children"
                            class="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors">
                            返回儿童列表
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>

        <!-- 儿童详情 -->
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div v-if="loading" class="text-center py-12">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
                <p class="mt-4 text-gray-600">加载中...</p>
            </div>

            <div v-else-if="child" class="bg-white rounded-lg shadow-sm overflow-hidden">
                <!-- 儿童照片 -->
                <div class="relative h-64 bg-gradient-to-r from-indigo-500 to-purple-600">
                    <img v-if="child.photos && child.photos.length > 0" :src="child.photos[0]" :alt="child.name"
                        class="w-full h-full object-cover" />
                    <div class="absolute inset-0 bg-black bg-opacity-40"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h1 class="text-3xl font-bold mb-2">{{ child.name }}</h1>
                        <div class="flex items-center space-x-4 text-sm">
                            <span>{{ child.age }}岁</span>
                            <span>{{ child.gender === 'male' ? '男' : '女' }}</span>
                            <span>{{ child.location }}</span>
                            <span :class="{
                                'bg-yellow-500': child.status === 'waiting',
                                'bg-blue-500': child.status === 'supported',
                                'bg-green-500': child.status === 'completed'
                            }" class="px-2 py-1 rounded-full text-xs font-medium">
                                {{ getStatusText(child.status) }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- 儿童信息 -->
                <div class="p-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- 基本信息 -->
                        <div>
                            <h2 class="text-xl font-semibold text-gray-900 mb-4">基本信息</h2>
                            <div class="space-y-3">
                                <div class="flex justify-between">
                                    <span class="text-gray-600">姓名：</span>
                                    <span class="font-medium">{{ child.name }}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600">年龄：</span>
                                    <span class="font-medium">{{ child.age }}岁</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600">性别：</span>
                                    <span class="font-medium">{{ child.gender === 'male' ? '男' : '女' }}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600">地区：</span>
                                    <span class="font-medium">{{ child.location }}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600">状态：</span>
                                    <span :class="{
                                        'text-yellow-600': child.status === 'waiting',
                                        'text-blue-600': child.status === 'supported',
                                        'text-green-600': child.status === 'completed'
                                    }" class="font-medium">
                                        {{ getStatusText(child.status) }}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- 需求信息 -->
                        <div>
                            <h2 class="text-xl font-semibold text-gray-900 mb-4">需求信息</h2>
                            <div class="space-y-3">
                                <div class="flex flex-wrap gap-2">
                                    <span v-for="need in child.needs" :key="need"
                                        class="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">
                                        {{ need }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 详细描述 -->
                    <div class="mt-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">详细描述</h2>
                        <p class="text-gray-700 leading-relaxed">{{ child.description }}</p>
                    </div>

                    <!-- 照片展示 -->
                    <div v-if="child.photos && child.photos.length > 1" class="mt-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">照片展示</h2>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <img v-for="(photo, index) in child.photos.slice(1)" :key="index" :src="photo"
                                :alt="`${child.name}的照片${index + 2}`" class="w-full h-32 object-cover rounded-lg" />
                        </div>
                    </div>

                    <!-- 操作按钮 -->
                    <div class="mt-8 flex space-x-4">
                        <button v-if="child.status === 'waiting'"
                            class="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-medium">
                            提供帮助
                        </button>
                        <button
                            class="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 font-medium">
                            分享
                        </button>
                        <button
                            class="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 font-medium">
                            收藏
                        </button>
                    </div>
                </div>
            </div>

            <div v-else class="text-center py-12">
                <div class="text-gray-500">
                    <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                    <h3 class="mt-2 text-sm font-medium text-gray-900">儿童信息不存在</h3>
                    <p class="mt-1 text-sm text-gray-500">抱歉，您访问的儿童信息不存在或已被删除。</p>
                    <div class="mt-6">
                        <router-link to="/children"
                            class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                            返回儿童列表
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
import type { Child } from '@/types'
import { fetchChildDetail } from '@/api/child'

const route = useRoute()
const child = ref<Child | null>(null)
const loading = ref(true)

const getStatusText = (status: string) => {
    const statusMap = {
        waiting: '等待帮助',
        supported: '正在帮助',
        completed: '已完成'
    }
    return statusMap[status as keyof typeof statusMap] || status
}

const loadChild = async () => {
    try {
        loading.value = true
        const childId = parseInt(route.params.id as string)
        const response = await fetchChildDetail(childId)
        child.value = response.data.data
    } catch (error) {
        console.error('加载儿童信息失败:', error)
        child.value = null
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    loadChild()
})
</script>