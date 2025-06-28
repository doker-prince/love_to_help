<template>
    <div class="min-h-screen bg-gray-50">
        <!-- 顶部导航栏 -->
        <header class="bg-white shadow-sm border-b border-gray-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <!-- Logo -->
                    <div class="flex items-center">
                        <router-link to="/" class="flex items-center">
                            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                                </path>
                            </svg>
                            <span class="ml-2 text-xl font-bold text-gray-900">爱心帮扶平台</span>
                        </router-link>
                    </div>

                    <!-- 管理员菜单 -->
                    <div class="flex items-center space-x-4">
                        <div class="relative">
                            <button @click="toggleAdminMenu"
                                class="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                                <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                    <span class="text-purple-600 font-medium">{{ adminInitial }}</span>
                                </div>
                                <span class="hidden md:block">{{ adminName }}</span>
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>

                            <!-- 下拉菜单 -->
                            <div v-if="showAdminMenu"
                                class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                <router-link to="/admin"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    仪表板
                                </router-link>
                                <router-link to="/admin/users"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    用户管理
                                </router-link>
                                <router-link to="/admin/organizations"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    组织管理
                                </router-link>
                                <router-link to="/admin/projects"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    项目管理
                                </router-link>
                                <router-link to="/admin/children"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    儿童管理
                                </router-link>
                                <router-link to="/admin/articles"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    文章管理
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
const showAdminMenu = ref(false)

// 模拟管理员数据
const adminName = ref('管理员')
const adminInitial = computed(() => adminName.value.charAt(0))

const toggleAdminMenu = () => {
    showAdminMenu.value = !showAdminMenu.value
}

const logout = () => {
    // 清除管理员数据
    localStorage.removeItem('token')
    localStorage.removeItem('userRole')
    localStorage.removeItem('adminInfo')

    // 跳转到首页
    router.push('/')
}

// 点击外部关闭菜单
const closeAdminMenu = (event: Event) => {
    const target = event.target as HTMLElement
    if (!target.closest('.relative')) {
        showAdminMenu.value = false
    }
}

// 监听点击事件
document.addEventListener('click', closeAdminMenu)
</script>