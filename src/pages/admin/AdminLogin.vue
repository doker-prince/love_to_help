<template>
    <div
        class="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
            <!-- Logo和标题 -->
            <div class="text-center">
                <div class="mx-auto h-16 w-16 bg-white rounded-full flex items-center justify-center mb-4">
                    <svg class="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                        </path>
                    </svg>
                </div>
                <h2 class="text-3xl font-bold text-white">管理员登录</h2>
                <p class="mt-2 text-sm text-indigo-200">童伴桥管理后台</p>
            </div>

            <!-- 登录表单 -->
            <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
                <div class="bg-white rounded-lg shadow-xl p-8">
                    <!-- 用户名输入 -->
                    <div class="mb-6">
                        <label for="username" class="block text-sm font-medium text-gray-700 mb-2">
                            管理员账号
                        </label>
                        <input id="username" v-model="form.username" type="text" required
                            class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            placeholder="请输入管理员账号" />
                    </div>

                    <!-- 密码输入 -->
                    <div class="mb-6">
                        <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
                            密码
                        </label>
                        <input id="password" v-model="form.password" type="password" required
                            class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            placeholder="请输入密码" />
                    </div>

                    <!-- 登录按钮 -->
                    <button type="submit" :disabled="loading"
                        class="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                        <span v-if="loading" class="flex items-center justify-center">
                            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                            登录中...
                        </span>
                        <span v-else>登录管理后台</span>
                    </button>

                    <!-- 错误信息 -->
                    <div v-if="errorMessage" class="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
                        {{ errorMessage }}
                    </div>

                    <!-- 成功信息 -->
                    <div v-if="successMessage"
                        class="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md">
                        {{ successMessage }}
                    </div>
                </div>

                <!-- 返回普通登录 -->
                <div class="text-center">
                    <router-link to="/login" class="text-indigo-200 hover:text-white text-sm">
                        返回普通用户登录
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { loginApi } from '../../api/auth'

const router = useRouter()

const loading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

const form = reactive({
    username: '',
    password: ''
})

const handleLogin = async () => {
    if (!form.username || !form.password) {
        errorMessage.value = '请输入用户名和密码'
        return
    }

    loading.value = true
    errorMessage.value = ''
    successMessage.value = ''

    try {
        console.log('管理员登录请求:', {
            username: form.username,
            password: form.password,
            role: 'admin'
        })

        // 调用真正的后端API
        const response = await loginApi({
            username: form.username,
            password: form.password,
            role: 'admin'
        })

        if (response.success && response.data) {
            // 保存管理员信息到本地存储
            const adminInfo = {
                id: response.data.user.id,
                username: response.data.user.username,
                name: response.data.user.name,
                role: 'admin',
                email: response.data.user.email,
                loginTime: new Date().toISOString()
            }

            localStorage.setItem('adminToken', response.data.token)
            localStorage.setItem('adminInfo', JSON.stringify(adminInfo))

            successMessage.value = '登录成功，正在跳转到管理后台...'

            // 延迟跳转到管理后台
            setTimeout(() => {
                router.push('/admin')
            }, 1000)
        } else {
            errorMessage.value = response.message || '登录失败'
        }
    } catch (error: any) {
        console.error('管理员登录失败:', error)
        errorMessage.value = error.message || '登录失败，请检查网络连接'
    } finally {
        loading.value = false
    }
}
</script>