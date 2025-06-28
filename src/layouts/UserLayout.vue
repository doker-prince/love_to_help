<template>
    <div class="min-h-screen bg-gray-50">
        <!-- 顶部导航栏 -->
        <header class="bg-white shadow-sm border-b border-gray-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <!-- Logo -->
                    <div class="flex items-center">
                        <router-link to="/" class="flex items-center">
                            <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                                </path>
                            </svg>
                            <span class="ml-2 text-xl font-bold text-gray-900">爱心帮扶平台</span>
                        </router-link>
                    </div>

                    <!-- 用户菜单 -->
                    <div class="flex items-center space-x-4">
                        <div class="relative">
                            <button @click="toggleUserMenu"
                                class="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                                <div class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                                    <span class="text-indigo-600 font-medium">{{ userInitial }}</span>
                                </div>
                                <span class="hidden md:block">{{ userName }}</span>
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>

                            <!-- 下拉菜单 -->
                            <div v-if="showUserMenu"
                                class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                <router-link to="/user/profile"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    个人信息
                                </router-link>
                                <router-link to="/user/help-records"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    帮助记录
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
const showUserMenu = ref(false)

// 模拟用户数据
const userName = ref('张三')
const userInitial = computed(() => userName.value.charAt(0))

const toggleUserMenu = () => {
    showUserMenu.value = !showUserMenu.value
}

const logout = () => {
    // 清除用户数据
    localStorage.removeItem('token')
    localStorage.removeItem('userRole')
    localStorage.removeItem('userInfo')

    // 跳转到首页
    router.push('/')
}

// 点击外部关闭菜单
const closeUserMenu = (event: Event) => {
    const target = event.target as HTMLElement
    if (!target.closest('.relative')) {
        showUserMenu.value = false
    }
}

// 监听点击事件
document.addEventListener('click', closeUserMenu)
</script>