<template>
    <div class="min-h-screen bg-gray-50">
        <!-- 顶部导航栏 -->
        <header class="bg-white shadow-sm border-b border-gray-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <!-- Logo -->
                    <div class="flex items-center">
                        <router-link to="/" class="flex items-center">
                            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                                </path>
                            </svg>
                            <span class="ml-2 text-xl font-bold text-gray-900">爱心帮扶平台</span>
                        </router-link>
                    </div>

                    <!-- 组织菜单 -->
                    <div class="flex items-center space-x-4">
                        <div class="relative">
                            <button @click="toggleOrgMenu"
                                class="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                                <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                    <span class="text-green-600 font-medium">{{ orgInitial }}</span>
                                </div>
                                <span class="hidden md:block">{{ orgName }}</span>
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>

                            <!-- 下拉菜单 -->
                            <div v-if="showOrgMenu"
                                class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                <router-link to="/organization/profile"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    组织信息
                                </router-link>
                                <router-link to="/organization/projects"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    项目管理
                                </router-link>
                                <router-link to="/organization/children"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    儿童管理
                                </router-link>
                                <hr class="my-1">
                                <button @click="logout"
                                    class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    退出登录
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- 主要内容 -->
        <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <router-view />
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showOrgMenu = ref(false)

// 模拟组织数据
const orgName = ref('爱心援助基金会')
const orgInitial = computed(() => orgName.value.charAt(0))

const toggleOrgMenu = () => {
    showOrgMenu.value = !showOrgMenu.value
}

const logout = () => {
    // 清除组织数据
    localStorage.removeItem('token')
    localStorage.removeItem('userRole')
    localStorage.removeItem('orgInfo')

    // 跳转到首页
    router.push('/')
}

// 点击外部关闭菜单
const closeOrgMenu = (event: Event) => {
    const target = event.target as HTMLElement
    if (!target.closest('.relative')) {
        showOrgMenu.value = false
    }
}

// 监听点击事件
document.addEventListener('click', closeOrgMenu)
</script>