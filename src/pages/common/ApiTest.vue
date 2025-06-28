<template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
        <div class="max-w-md w-full bg-white rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-bold text-center mb-6">API连接测试</h2>

            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700">后端地址</label>
                    <input v-model="backendUrl" type="text"
                        class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                        placeholder="http://localhost:8080" />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700">用户名</label>
                    <input v-model="username" type="text"
                        class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2" placeholder="输入用户名" />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700">密码</label>
                    <input v-model="password" type="password"
                        class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2" placeholder="输入密码" />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700">角色</label>
                    <select v-model="role" class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2">
                        <option value="user">普通用户</option>
                        <option value="organization">帮扶机构</option>
                        <option value="admin">管理员</option>
                    </select>
                </div>

                <button @click="testConnection" :disabled="loading"
                    class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50">
                    {{ loading ? '测试中...' : '测试API连接' }}
                </button>

                <div v-if="message" class="p-3 rounded-md"
                    :class="messageType === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
                    {{ message }}
                </div>

                <div v-if="response" class="mt-4">
                    <h3 class="text-sm font-medium text-gray-700 mb-2">API响应:</h3>
                    <pre
                        class="bg-gray-100 p-3 rounded text-xs overflow-auto">{{ JSON.stringify(response, null, 2) }}</pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

// 表单数据
const backendUrl = ref('http://localhost:8080')
const username = ref('admin')
const password = ref('admin')
const role = ref('admin')
const loading = ref(false)
const message = ref('')
const messageType = ref<'success' | 'error'>('success')
const response = ref(null)

// 测试API连接
const testConnection = async () => {
    if (!backendUrl.value || !username.value || !password.value) {
        showMessage('请填写完整信息', 'error')
        return
    }

    try {
        loading.value = true
        message.value = ''
        response.value = null

        console.log('开始测试API连接...')
        console.log('后端地址:', backendUrl.value)

        // 创建axios实例
        const api = axios.create({
            baseURL: '/api', // 使用相对路径，通过Vite代理转发到后端
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        // 测试登录接口
        const loginData = {
            username: username.value,
            password: password.value,
            role: role.value
        }

        console.log('发送登录请求:', loginData)
        console.log('通过代理访问后端:', backendUrl.value + '/user/login')

        const result = await api.post('/user/login', loginData)

        console.log('收到响应:', result.data)
        response.value = result.data

        // 处理后端返回的数据格式 - 后端使用code字段，1表示成功
        if (result.data.code === 1 || result.data.success || result.data.code === 200) {
            showMessage('API连接成功！登录测试通过', 'success')
        } else {
            showMessage(`API连接成功，但登录失败: ${result.data.message}`, 'error')
        }

    } catch (error: any) {
        console.error('API测试失败:', error)
        response.value = {
            error: error.message,
            response: error.response?.data,
            status: error.response?.status
        }

        if (error.code === 'ECONNREFUSED' || error.message.includes('Network Error')) {
            showMessage('无法连接到后端服务器，请检查服务器是否启动', 'error')
        } else if (error.response?.status === 404) {
            showMessage('接口不存在，请检查API路径是否正确', 'error')
        } else if (error.response?.data?.message) {
            showMessage(`API错误: ${error.response.data.message}`, 'error')
        } else {
            showMessage(`连接失败: ${error.message}`, 'error')
        }
    } finally {
        loading.value = false
    }
}

// 显示消息
const showMessage = (msg: string, type: 'success' | 'error') => {
    message.value = msg
    messageType.value = type
}
</script>