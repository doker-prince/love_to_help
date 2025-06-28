<template>
    <header class="sticky top-0 z-50 bg-white shadow-md transition-all duration-300" id="navbar">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center">
                    <router-link to="/" class="flex items-center">
                        <i class="fa fa-heart text-primary text-2xl mr-2"></i>
                        <span class="text-xl font-bold text-primary">童伴桥</span>
                    </router-link>
                    <nav class="hidden md:ml-10 md:flex space-x-8">
                        <a href="#home" class="nav-link" :class="{ 'text-primary': activeSection === 'home' }"
                            @click="scrollToSection('home')">
                            首页
                        </a>
                        <a href="#projects" class="nav-link" :class="{ 'text-primary': activeSection === 'projects' }"
                            @click="scrollToSection('projects')">
                            帮扶项目
                        </a>
                        <a href="#children" class="nav-link" :class="{ 'text-primary': activeSection === 'children' }"
                            @click="scrollToSection('children')">
                            留守儿童
                        </a>
                        <a href="#organizations" class="nav-link"
                            :class="{ 'text-primary': activeSection === 'organizations' }"
                            @click="scrollToSection('organizations')">
                            帮扶机构
                        </a>
                        <a href="#about" class="nav-link" :class="{ 'text-primary': activeSection === 'about' }"
                            @click="scrollToSection('about')">
                            关于我们
                        </a>
                    </nav>
                </div>
                <div class="flex items-center">
                    <div class="hidden md:block">
                        <div class="flex items-center">
                            <!-- 未登录状态 -->
                            <template v-if="!userLoggedIn">
                                <router-link to="/login"
                                    class="text-gray-600 hover:text-primary mr-4 transition-colors">登录</router-link>
                                <router-link to="/register"
                                    class="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-colors shadow-md">注册</router-link>
                            </template>
                            <!-- 已登录状态 -->
                            <template v-else>
                                <div class="relative">
                                    <button @click="toggleUserMenu"
                                        class="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors">
                                        <div
                                            class="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
                                            {{ userInitials }}
                                        </div>
                                        <span class="hidden sm:block">{{ userInfo.name || userInfo.username
                                            }}</span>
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>

                                    <!-- 用户菜单下拉框 -->
                                    <div v-if="showUserMenu"
                                        class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                        <!-- 普通用户菜单 -->
                                        <template v-if="userInfo.role === 'user'">
                                            <router-link to="/user"
                                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                用户中心
                                            </router-link>
                                            <router-link to="/user/profile"
                                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                个人资料
                                            </router-link>
                                            <router-link to="/user/help-records"
                                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                援助记录
                                            </router-link>
                                        </template>

                                        <!-- 机构用户菜单 -->
                                        <template v-else-if="userInfo.role === 'organization'">
                                            <router-link to="/organization"
                                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                机构中心
                                            </router-link>
                                            <router-link to="/organization/profile"
                                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                机构资料
                                            </router-link>
                                            <router-link to="/organization/projects"
                                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                项目管理
                                            </router-link>
                                            <router-link to="/organization/children"
                                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                儿童管理
                                            </router-link>
                                        </template>

                                        <hr class="my-1">
                                        <button @click="handleLogout"
                                            class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                                            退出登录
                                        </button>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                    <div class="md:hidden">
                        <button type="button" id="mobile-menu-button" class="text-gray-600 hover:text-primary"
                            @click="toggleMobileMenu">
                            <i class="fa fa-bars text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 移动端菜单 -->
        <div id="mobile-menu" class="hidden md:hidden bg-white shadow-lg absolute w-full" v-show="showMobileMenu">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#home" class="block px-3 py-2 rounded-md text-base font-medium"
                    :class="activeSection === 'home' ? 'text-primary bg-blue-50' : 'text-gray-600 hover:text-primary hover:bg-blue-50'"
                    @click="scrollToSection('home')">首页</a>
                <a href="#projects" class="block px-3 py-2 rounded-md text-base font-medium"
                    :class="activeSection === 'projects' ? 'text-primary bg-blue-50' : 'text-gray-600 hover:text-primary hover:bg-blue-50'"
                    @click="scrollToSection('projects')">帮扶项目</a>
                <a href="#children" class="block px-3 py-2 rounded-md text-base font-medium"
                    :class="activeSection === 'children' ? 'text-primary bg-blue-50' : 'text-gray-600 hover:text-primary hover:bg-blue-50'"
                    @click="scrollToSection('children')">留守儿童</a>
                <a href="#organizations" class="block px-3 py-2 rounded-md text-base font-medium"
                    :class="activeSection === 'organizations' ? 'text-primary bg-blue-50' : 'text-gray-600 hover:text-primary hover:bg-blue-50'"
                    @click="scrollToSection('organizations')">帮扶机构</a>
                <a href="#about" class="block px-3 py-2 rounded-md text-base font-medium"
                    :class="activeSection === 'about' ? 'text-primary bg-blue-50' : 'text-gray-600 hover:text-primary hover:bg-blue-50'"
                    @click="scrollToSection('about')">关于我们</a>
                <div class="flex space-x-2 px-3 py-2">
                    <template v-if="!userLoggedIn">
                        <router-link to="/login"
                            class="flex-1 text-center text-gray-600 border border-gray-300 rounded-md py-2 hover:bg-gray-50">登录</router-link>
                        <router-link to="/register"
                            class="flex-1 text-center bg-primary text-white rounded-md py-2 hover:bg-primary/90">注册</router-link>
                    </template>
                    <template v-else>
                        <div class="flex-1 text-center text-gray-600 py-2">{{ userInfo.name || userInfo.username }}
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { isLoggedIn, getUserInfo, getUserInitials, logout, type UserInfo } from '@/utils/auth'

const router = useRouter()

// 用户状态
const userLoggedIn = ref(false)
const userInfo = ref<UserInfo>({})
const showUserMenu = ref(false)
const showMobileMenu = ref(false)
const activeSection = ref('home')

// 计算用户头像字母
const userInitials = computed(() => {
    return getUserInitials()
})

// 检查登录状态
const checkLoginStatus = () => {
    userLoggedIn.value = isLoggedIn()
    const info = getUserInfo()
    userInfo.value = info || {}
}

// 监听登录状态变化
const handleLoginStatusChange = () => {
    checkLoginStatus()
}

// 切换用户菜单
const toggleUserMenu = () => {
    showUserMenu.value = !showUserMenu.value
}

// 切换移动端菜单
const toggleMobileMenu = () => {
    showMobileMenu.value = !showMobileMenu.value
}

// 关闭用户菜单
const closeUserMenu = () => {
    showUserMenu.value = false
}

// 滚动到指定区域
const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
        const navbarHeight = 64 // 导航栏高度
        const elementPosition = element.offsetTop - navbarHeight
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        })
        activeSection.value = sectionId
        showMobileMenu.value = false
    }
}

// 监听滚动事件，更新活动区域
const handleScroll = () => {
    const sections = ['home', 'projects', 'children', 'organizations', 'about']
    const scrollPosition = window.scrollY + 100 // 偏移量

    for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
            const elementTop = element.offsetTop
            const elementBottom = elementTop + element.offsetHeight

            if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                activeSection.value = section
                break
            }
        }
    }
}

// 退出登录
const handleLogout = async () => {
    try {
        // 显示确认对话框
        const confirmed = await showConfirmDialog('确定要退出登录吗？', '退出登录', '取消')
        if (!confirmed) {
            return
        }

        // 清除用户信息
        logout()

        // 更新状态
        userLoggedIn.value = false
        userInfo.value = {}
        showUserMenu.value = false

        // 触发退出登录事件，通知其他组件更新状态
        window.dispatchEvent(new CustomEvent('userLogout'))

        // 显示成功提示
        showToast('退出登录成功', 'success')

        // 跳转到首页
        router.push('/')

        console.log('退出登录成功')
    } catch (error) {
        console.error('退出登录失败:', error)
        // 即使API调用失败，也要清除本地存储
        logout()
        userLoggedIn.value = false
        userInfo.value = {}

        // 触发退出登录事件
        window.dispatchEvent(new CustomEvent('userLogout'))

        // 显示提示
        showToast('已清除本地登录信息', 'info')

        router.push('/')
    }
}

// 显示确认对话框
const showConfirmDialog = (message: string, confirmText = '确定', cancelText = '取消'): Promise<boolean> => {
    return new Promise((resolve) => {
        // 创建遮罩层
        const overlay = document.createElement('div')
        overlay.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center'

        // 创建对话框
        const dialog = document.createElement('div')
        dialog.className = 'bg-white rounded-lg shadow-xl max-w-sm w-full mx-4 transform transition-all duration-300 scale-95 opacity-0'

        dialog.innerHTML = `
            <div class="p-6">
                <div class="flex items-center mb-4">
                    <div class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                        <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-medium text-gray-900">确认操作</h3>
                </div>
                <p class="text-gray-600 mb-6">${message}</p>
                <div class="flex justify-end space-x-3">
                    <button class="cancel-btn px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                        ${cancelText}
                    </button>
                    <button class="confirm-btn px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors">
                        ${confirmText}
                    </button>
                </div>
            </div>
        `

        overlay.appendChild(dialog)
        document.body.appendChild(overlay)

        // 显示动画
        setTimeout(() => {
            dialog.classList.remove('scale-95', 'opacity-0')
        }, 10)

        // 绑定事件
        const confirmBtn = dialog.querySelector('.confirm-btn')
        const cancelBtn = dialog.querySelector('.cancel-btn')

        const cleanup = () => {
            dialog.classList.add('scale-95', 'opacity-0')
            setTimeout(() => {
                document.body.removeChild(overlay)
            }, 300)
        }

        confirmBtn?.addEventListener('click', () => {
            cleanup()
            resolve(true)
        })

        cancelBtn?.addEventListener('click', () => {
            cleanup()
            resolve(false)
        })

        // 点击遮罩层关闭
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                cleanup()
                resolve(false)
            }
        })
    })
}

// 显示Toast提示
const showToast = (message: string, type: 'success' | 'error' | 'info' | 'warning' = 'info') => {
    // 创建Toast容器
    const toast = document.createElement('div')

    // 根据类型设置样式
    const typeStyles = {
        success: 'bg-green-500 border-green-600',
        error: 'bg-red-500 border-red-600',
        info: 'bg-blue-500 border-blue-600',
        warning: 'bg-yellow-500 border-yellow-600'
    }

    const icons = {
        success: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>`,
        error: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>`,
        info: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>`,
        warning: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
        </svg>`
    }

    toast.className = `fixed top-4 right-4 ${typeStyles[type]} text-white px-6 py-4 rounded-lg shadow-lg z-50 transform transition-all duration-300 translate-x-full border-l-4 flex items-center space-x-3 max-w-sm`

    toast.innerHTML = `
        <div class="flex-shrink-0">
            ${icons[type]}
        </div>
        <div class="flex-1">
            <p class="text-sm font-medium">${message}</p>
        </div>
        <button class="close-btn flex-shrink-0 text-white hover:text-gray-200 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
    `

    // 添加到页面
    document.body.appendChild(toast)

    // 显示动画
    setTimeout(() => {
        toast.classList.remove('translate-x-full')
    }, 100)

    // 绑定关闭事件
    const closeBtn = toast.querySelector('.close-btn')
    closeBtn?.addEventListener('click', () => {
        hideToast(toast)
    })

    // 自动隐藏
    setTimeout(() => {
        hideToast(toast)
    }, 4000)
}

// 隐藏Toast
const hideToast = (toast: HTMLElement) => {
    toast.classList.add('translate-x-full')
    setTimeout(() => {
        if (document.body.contains(toast)) {
            document.body.removeChild(toast)
        }
    }, 300)
}

// 点击外部关闭菜单
const handleClickOutside = (event: Event) => {
    const userMenu = document.querySelector('.user-menu')
    if (userMenu && !userMenu.contains(event.target as Node)) {
        closeUserMenu()
    }
}

// 生命周期
onMounted(() => {
    checkLoginStatus()
    document.addEventListener('click', handleClickOutside)
    window.addEventListener('scroll', handleScroll)

    // 监听登录状态变化
    window.addEventListener('storage', handleLoginStatusChange)

    // 监听自定义登录事件
    window.addEventListener('userLogin', handleLoginStatusChange)
    window.addEventListener('userLogout', handleLoginStatusChange)
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('storage', handleLoginStatusChange)
    window.removeEventListener('userLogin', handleLoginStatusChange)
    window.removeEventListener('userLogout', handleLoginStatusChange)
})
</script>

<style scoped>
/* 导航链接样式 */
.nav-link {
    position: relative;
    color: #6b7280;
    font-weight: 500;
    transition: color 0.3s ease;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
}

.nav-link:hover {
    color: #2563eb;
}

.nav-link.active {
    color: #2563eb;
    background-color: rgba(37, 99, 235, 0.1);
}

/* 颜色定义 */
.text-primary {
    color: #2563eb;
}

.bg-primary {
    background-color: #2563eb;
}

.bg-blue-600 {
    background-color: #2563eb;
}

.hover\:bg-blue-700:hover {
    background-color: #1d4ed8;
}

.bg-blue-50 {
    background-color: #eff6ff;
}

/* 用户菜单 */
.user-menu {
    position: absolute;
    right: 0;
    top: 100%;
    margin-top: 0.5rem;
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    min-width: 12rem;
    z-index: 50;
}

/* 移动端菜单 */
.mobile-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border-top: 1px solid #e5e7eb;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .nav-link {
        padding: 0.75rem 1rem;
        border-radius: 0.375rem;
        margin: 0.25rem 0;
    }
}
</style>