<template>
    <div
        class="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-cyan-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
            <!-- Logo -->
            <div class="text-center">
                <div class="mx-auto h-16 w-16 bg-indigo-600 rounded-full flex items-center justify-center">
                    <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z">
                        </path>
                    </svg>
                </div>
                <h2 class="mt-6 text-3xl font-extrabold text-gray-900">童伴桥</h2>
                <p class="mt-2 text-sm text-gray-600">加入我们，为留守儿童献爱心</p>
            </div>

            <!-- 注册表单 -->
            <div class="bg-white rounded-lg shadow-lg p-8">
                <div class="space-y-6">
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

                    <!-- 确认密码 -->
                    <div>
                        <label for="confirmPassword" class="block text-sm font-medium text-gray-700">
                            确认密码
                        </label>
                        <input id="confirmPassword" v-model="form.confirmPassword" type="password" required
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="请再次输入密码" />
                    </div>

                    <!-- 用户协议 -->
                    <div class="flex items-center">
                        <input id="agree" v-model="form.agree" type="checkbox"
                            class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                        <label for="agree" class="ml-2 block text-sm text-gray-900">
                            我已阅读并同意
                            <a href="#" class="text-indigo-600 hover:text-indigo-500">用户协议</a>
                            和
                            <a href="#" class="text-indigo-600 hover:text-indigo-500">隐私政策</a>
                        </label>
                    </div>

                    <!-- 注册按钮 -->
                    <div>
                        <button @click="handleRegister" :disabled="loading || !form.agree"
                            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed">
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
                            {{ loading ? '注册中...' : '注册' }}
                        </button>
                    </div>

                    <!-- 错误信息 -->
                    <div v-if="errorMessage" class="text-red-600 text-sm text-center">
                        {{ errorMessage }}
                    </div>

                    <!-- 成功信息 -->
                    <div v-if="successMessage" class="text-green-600 text-sm text-center">
                        {{ successMessage }}
                    </div>

                    <!-- 登录链接 -->
                    <div class="text-center">
                        <router-link to="/login" class="text-sm text-indigo-600 hover:text-indigo-500">
                            已有账号？立即登录
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
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

// 表单数据
const form = reactive({
    username: '',
    password: '',
    confirmPassword: '',
    agree: false
})

// 状态
const loading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

// 注册处理
const handleRegister = async () => {
    // 表单验证
    if (!form.username.trim()) {
        errorMessage.value = '请输入用户名'
        return
    }
    if (!form.password.trim()) {
        errorMessage.value = '请输入密码'
        return
    }
    if (form.password !== form.confirmPassword) {
        errorMessage.value = '两次输入的密码不一致'
        return
    }
    if (!form.agree) {
        errorMessage.value = '请同意用户协议和隐私政策'
        return
    }

    try {
        loading.value = true
        errorMessage.value = ''
        successMessage.value = ''

        const result = await userStore.register(form.username, form.password)

        if (result.success) {
            successMessage.value = result.message
            // 3秒后跳转到登录页
            setTimeout(() => {
                router.push('/login')
            }, 3000)
        } else {
            errorMessage.value = result.message
        }
    } catch (error: any) {
        errorMessage.value = error.message || '注册失败，请重试'
    } finally {
        loading.value = false
    }
}
</script>