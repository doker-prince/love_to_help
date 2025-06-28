<template>
    <div class="min-h-screen bg-gray-50 flex">
        <!-- 左侧背景介绍 -->
        <div
            class="hidden lg:flex lg:w-3/10 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800 p-8 lg:p-12 flex-col justify-center relative overflow-hidden">
            <!-- 背景装饰 -->
            <div class="absolute inset-0 opacity-5">
                <div class="absolute top-10 left-10 w-20 h-20 bg-indigo-200 rounded-full"></div>
                <div class="absolute bottom-20 right-20 w-12 h-12 bg-purple-200 rounded-full"></div>
                <div class="absolute top-1/2 left-1/3 w-8 h-8 bg-blue-200 rounded-full"></div>
            </div>

            <div class="max-w-sm relative z-10">
                <h2 class="text-xl lg:text-2xl font-bold mb-3 text-gray-800">童伴桥</h2>
                <p class="text-gray-600 mb-6 leading-relaxed text-sm">
                    连接留守儿童与爱心帮扶机构的桥梁，让每个孩子都能感受到社会的温暖与关爱。
                </p>

                <div class="space-y-3">
                    <div class="flex items-center bg-white/60 backdrop-blur-sm rounded-lg p-2.5 border border-white/20">
                        <div
                            class="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white mr-2.5 flex-shrink-0">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z">
                                </path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-medium text-sm mb-0.5 text-gray-800">1200+ 留守儿童</h3>
                            <p class="text-gray-600 text-xs">等待您的帮助与关爱</p>
                        </div>
                    </div>

                    <div class="flex items-center bg-white/60 backdrop-blur-sm rounded-lg p-2.5 border border-white/20">
                        <div
                            class="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white mr-2.5 flex-shrink-0">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                                </path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-medium text-sm mb-0.5 text-gray-800">890+ 帮扶项目</h3>
                            <p class="text-gray-600 text-xs">为儿童提供多方面支持</p>
                        </div>
                    </div>

                    <div class="flex items-center bg-white/60 backdrop-blur-sm rounded-lg p-2.5 border border-white/20">
                        <div
                            class="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center text-white mr-2.5 flex-shrink-0">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z">
                                </path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-medium text-sm mb-0.5 text-gray-800">3200+ 爱心人士</h3>
                            <p class="text-gray-600 text-xs">已加入我们的帮扶行列</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 右侧登录表单 -->
        <div class="w-full lg:w-3/5 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-lg w-full space-y-8">
                <!-- Logo -->
                <div class="text-center">
                    <div
                        class="mx-auto h-16 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                        <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z">
                            </path>
                        </svg>
                    </div>
                    <h2 class="mt-6 text-3xl font-extrabold text-gray-900">童伴桥</h2>
                    <p class="mt-2 text-sm text-gray-600">留守儿童帮扶平台</p>
                </div>

                <!-- 登录表单 -->
                <div class="bg-white rounded-lg shadow-lg p-8">
                    <div class="space-y-6">
                        <!-- 角色选择 -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-3">选择登录身份</label>
                            <div class="grid grid-cols-2 gap-3">
                                <div class="relative">
                                    <input type="radio" id="role-user" v-model="selectedRole" value="user"
                                        class="peer sr-only">
                                    <label for="role-user"
                                        class="block border-2 border-gray-300 rounded-lg p-3 cursor-pointer peer-checked:border-indigo-600 peer-checked:bg-indigo-50 transition-colors">
                                        <div class="flex items-center">
                                            <div
                                                class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-indigo-600 mr-3 flex-shrink-0">
                                                <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z">
                                                    </path>
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 class="font-medium text-sm">普通用户</h3>
                                                <p class="text-gray-500 text-xs mt-0.5">浏览儿童信息，参与帮扶项目</p>
                                            </div>
                                        </div>
                                    </label>
                                </div>

                                <div class="relative">
                                    <input type="radio" id="role-organization" v-model="selectedRole"
                                        value="organization" class="peer sr-only">
                                    <label for="role-organization"
                                        class="block border-2 border-gray-300 rounded-lg p-3 cursor-pointer peer-checked:border-indigo-600 peer-checked:bg-indigo-50 transition-colors">
                                        <div class="flex items-center">
                                            <div
                                                class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 flex-shrink-0">
                                                <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                                                    </path>
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 class="font-medium text-sm">帮扶机构</h3>
                                                <p class="text-gray-500 text-xs mt-0.5">发布帮扶项目，管理帮扶事务</p>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <!-- 用户名 -->
                        <div>
                            <label for="username" class="block text-sm font-medium text-gray-700">
                                用户名
                            </label>
                            <input id="username" v-model="form.username" type="text" required
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="请输入用户名" />
                        </div>

                        <!-- 密码 -->
                        <div>
                            <label for="password" class="block text-sm font-medium text-gray-700">
                                密码
                            </label>
                            <input id="password" v-model="form.password" type="password" required
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="请输入密码" />
                        </div>

                        <!-- 记住我和忘记密码 -->
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <input type="checkbox" id="remember" v-model="form.remember"
                                    class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                                <label for="remember" class="ml-2 block text-sm text-gray-900">记住我</label>
                            </div>
                            <div>
                                <a href="#"
                                    class="text-sm text-indigo-600 hover:text-indigo-500 hover:underline">忘记密码？</a>
                            </div>
                        </div>

                        <!-- 登录按钮 -->
                        <div>
                            <button @click="handleLogin" :disabled="loading"
                                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200">
                                <span v-if="loading" class="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                        </path>
                                    </svg>
                                </span>
                                {{ loading ? '登录中...' : '登录' }}
                            </button>
                        </div>

                        <!-- 错误信息 -->
                        <div v-if="errorMessage" class="text-red-600 text-sm text-center">
                            {{ errorMessage }}
                        </div>

                        <!-- 注册链接 -->
                        <div class="text-center">
                            <router-link to="/register" class="text-sm text-indigo-600 hover:text-indigo-500">
                                还没有账号？立即注册
                            </router-link>
                        </div>
                    </div>
                </div>

                <!-- 底部信息 -->
                <div class="text-center text-sm text-gray-500">
                    <p>© 2024 童伴桥. 让爱心连接每一个需要帮助的孩子</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { loginApi } from '@/api/auth'

const router = useRouter()

// 角色选项
const roles = [
    { value: 'user', label: '普通用户' },
    { value: 'organization', label: '帮扶机构' }
]

// 表单数据
const form = reactive({
    username: '',
    password: '',
    remember: false
})

// 状态
const selectedRole = ref('user')
const loading = ref(false)
const errorMessage = ref('')

// 登录处理
const handleLogin = async () => {
    // 表单验证
    if (!form.username.trim()) {
        errorMessage.value = '请输入用户名'
        return
    }
    if (!form.password.trim()) {
        errorMessage.value = '请输入密码'
        return
    }

    try {
        loading.value = true
        errorMessage.value = ''

        console.log('=== 开始登录流程 ===')
        console.log('表单数据:', {
            username: form.username,
            password: form.password,
            role: selectedRole.value,
            remember: form.remember
        })

        // 调用登录API
        const result = await loginApi({
            username: form.username,
            password: form.password,
            role: selectedRole.value
        })

        console.log('登录API响应:', result)

        if (result.success && result.data) {
            // 登录成功，保存用户信息
            const { token, user } = result.data
            localStorage.setItem('token', token)
            localStorage.setItem('userInfo', JSON.stringify(user))

            // 如果选择记住我，保存登录状态
            if (form.remember) {
                localStorage.setItem('rememberLogin', 'true')
            }

            console.log('登录成功！用户信息:', user)
            console.log('Token:', token)

            // 触发登录成功事件，通知其他组件更新状态
            window.dispatchEvent(new CustomEvent('userLogin', {
                detail: { user, token }
            }))

            // 根据角色跳转到不同的页面
            let redirectPath = '/'
            switch (selectedRole.value) {
                case 'organization':
                    redirectPath = '/'
                    console.log('机构登录成功，跳转到系统主页面')
                    break
                case 'user':
                default:
                    redirectPath = '/'
                    console.log('用户登录成功，跳转到系统主页面')
                    break
            }

            console.log('准备跳转到:', redirectPath)
            router.push(redirectPath)
        } else {
            // 登录失败
            errorMessage.value = result.message || '登录失败'
            console.error('登录失败:', result.message)
        }

    } catch (error: any) {
        console.error('登录错误:', error)
        errorMessage.value = error.message || '登录失败，请重试'
    } finally {
        loading.value = false
        console.log('=== 登录流程结束 ===')
    }
}
</script>

<style scoped>
.login-bg {
    min-height: 100vh;
    background: linear-gradient(135deg, #6dd5ed 0%, #2193b0 100%);
    display: flex;
    align-items: center;
    justify-content: center;
}

.login-card {
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
    padding: 48px 36px 32px 36px;
    width: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.login-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 32px;
}

.login-logo img {
    width: 64px;
    height: 64px;
    margin-bottom: 8px;
}

.login-logo h2 {
    font-weight: bold;
    color: #2193b0;
    margin: 0;
    font-size: 1.6rem;
    letter-spacing: 2px;
}
</style>