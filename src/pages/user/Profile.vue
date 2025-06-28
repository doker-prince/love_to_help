<template>
    <div class="min-h-screen bg-gray-50">
        <!-- 用户布局 -->
        <div class="flex">
            <!-- 侧边栏 -->
            <div class="w-64 bg-white shadow-sm min-h-screen">
                <div class="p-6">
                    <h1 class="text-xl font-bold text-gray-900">用户中心</h1>
                </div>
                <nav class="mt-6">
                    <!-- 返回主页 -->
                    <router-link to="/"
                        class="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50 border-b border-gray-100">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                            </path>
                        </svg>
                        返回主页
                    </router-link>

                    <router-link to="/user" class="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>
                        </svg>
                        仪表板
                    </router-link>
                    <router-link to="/user/profile"
                        class="flex items-center px-6 py-3 text-gray-700 bg-indigo-50 border-r-2 border-indigo-600">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        个人资料
                    </router-link>
                    <router-link to="/user/help-records"
                        class="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2">
                            </path>
                        </svg>
                        援助记录
                    </router-link>
                </nav>
            </div>

            <!-- 主内容区 -->
            <div class="flex-1 p-8">
                <div class="max-w-2xl mx-auto">
                    <!-- 页面标题 -->
                    <div class="mb-8">
                        <h2 class="text-2xl font-bold text-gray-900">个人资料</h2>
                        <p class="text-gray-600">管理您的个人信息和账户设置</p>
                    </div>

                    <!-- 个人资料表单 -->
                    <div class="bg-white rounded-lg shadow-sm">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <h3 class="text-lg font-medium text-gray-900">基本信息</h3>
                        </div>
                        <form @submit.prevent="handleSaveProfile" class="p-6 space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label for="username" class="block text-sm font-medium text-gray-700">用户名</label>
                                    <input id="username" v-model="profileForm.username" type="text"
                                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        required />
                                </div>
                                <div>
                                    <label for="name" class="block text-sm font-medium text-gray-700">真实姓名</label>
                                    <input id="name" v-model="profileForm.name" type="text"
                                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                                </div>
                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700">邮箱</label>
                                    <input id="email" v-model="profileForm.email" type="email"
                                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                                </div>
                                <div>
                                    <label for="phone" class="block text-sm font-medium text-gray-700">手机号</label>
                                    <input id="phone" v-model="profileForm.phone" type="tel"
                                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                                </div>
                            </div>

                            <div>
                                <label for="address" class="block text-sm font-medium text-gray-700">地址</label>
                                <input id="address" v-model="profileForm.address" type="text"
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>

                            <div>
                                <label for="bio" class="block text-sm font-medium text-gray-700">个人简介</label>
                                <textarea id="bio" v-model="profileForm.bio" rows="4"
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="介绍一下您自己..."></textarea>
                            </div>

                            <!-- 保存按钮 -->
                            <div class="flex justify-end">
                                <button type="submit" :disabled="saving"
                                    class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50">
                                    <svg v-if="saving" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none"
                                        viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                        </path>
                                    </svg>
                                    {{ saving ? '保存中...' : '保存资料' }}
                                </button>
                            </div>
                        </form>
                    </div>

                    <!-- 修改密码 -->
                    <div class="mt-8 bg-white rounded-lg shadow-sm">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <h3 class="text-lg font-medium text-gray-900">修改密码</h3>
                        </div>
                        <form @submit.prevent="handleChangePassword" class="p-6 space-y-6">
                            <div>
                                <label for="currentPassword"
                                    class="block text-sm font-medium text-gray-700">当前密码</label>
                                <input id="currentPassword" v-model="passwordForm.currentPassword" type="password"
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    required />
                            </div>
                            <div>
                                <label for="newPassword" class="block text-sm font-medium text-gray-700">新密码</label>
                                <input id="newPassword" v-model="passwordForm.newPassword" type="password"
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    required />
                            </div>
                            <div>
                                <label for="confirmPassword"
                                    class="block text-sm font-medium text-gray-700">确认新密码</label>
                                <input id="confirmPassword" v-model="passwordForm.confirmPassword" type="password"
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    required />
                            </div>

                            <!-- 修改密码按钮 -->
                            <div class="flex justify-end">
                                <button type="submit" :disabled="changingPassword"
                                    class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50">
                                    <svg v-if="changingPassword" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                        fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                        </path>
                                    </svg>
                                    {{ changingPassword ? '修改中...' : '修改密码' }}
                                </button>
                            </div>
                        </form>
                    </div>

                    <!-- 消息提示 -->
                    <div v-if="message" class="mt-4 p-4 rounded-md"
                        :class="messageType === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'">
                        {{ message }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

// 状态
const saving = ref(false)
const changingPassword = ref(false)
const message = ref('')
const messageType = ref('success')

// 表单数据
const profileForm = reactive({
    username: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    bio: ''
})

const passwordForm = reactive({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
})

// 加载用户资料
const loadProfile = async () => {
    try {
        // 模拟数据
        Object.assign(profileForm, {
            username: 'user123',
            name: '张三',
            email: 'user@example.com',
            phone: '13800138000',
            address: '北京市朝阳区',
            bio: '热爱公益，希望能为留守儿童贡献一份力量。'
        })
    } catch (error) {
        console.error('加载用户资料失败:', error)
        showMessage('加载用户资料失败', 'error')
    }
}

// 保存个人资料
const handleSaveProfile = async () => {
    try {
        saving.value = true
        // 模拟API调用
        await new Promise(resolve => setTimeout(resolve, 1000))
        showMessage('个人资料保存成功', 'success')
    } catch (error) {
        console.error('保存个人资料失败:', error)
        showMessage('保存个人资料失败', 'error')
    } finally {
        saving.value = false
    }
}

// 修改密码
const handleChangePassword = async () => {
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
        showMessage('两次输入的密码不一致', 'error')
        return
    }

    if (passwordForm.newPassword.length < 6) {
        showMessage('新密码长度不能少于6位', 'error')
        return
    }

    try {
        changingPassword.value = true
        // 模拟API调用
        await new Promise(resolve => setTimeout(resolve, 1000))
        showMessage('密码修改成功', 'success')
        // 清空密码表单
        passwordForm.currentPassword = ''
        passwordForm.newPassword = ''
        passwordForm.confirmPassword = ''
    } catch (error) {
        console.error('修改密码失败:', error)
        showMessage('修改密码失败', 'error')
    } finally {
        changingPassword.value = false
    }
}

// 显示消息
const showMessage = (msg, type) => {
    message.value = msg
    messageType.value = type
    setTimeout(() => {
        message.value = ''
    }, 3000)
}

onMounted(() => {
    loadProfile()
})
</script>