<template>
    <div class="min-h-screen bg-gray-50">
        <!-- 组织布局 -->
        <div class="flex">
            <!-- 侧边栏 -->
            <div class="w-64 bg-white shadow-sm min-h-screen">
                <div class="p-6">
                    <h1 class="text-xl font-bold text-gray-900">组织中心</h1>
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

                    <router-link to="/organization" class="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>
                        </svg>
                        仪表板
                    </router-link>
                    <router-link to="/organization/profile"
                        class="flex items-center px-6 py-3 text-gray-700 bg-indigo-50 border-r-2 border-indigo-600">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                            </path>
                        </svg>
                        组织信息
                    </router-link>
                    <router-link to="/organization/children"
                        class="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z">
                            </path>
                        </svg>
                        儿童管理
                    </router-link>
                    <router-link to="/organization/projects"
                        class="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2">
                            </path>
                        </svg>
                        项目管理
                    </router-link>
                    <router-link to="/organization/articles"
                        class="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                            </path>
                        </svg>
                        文章管理
                    </router-link>
                </nav>
            </div>

            <!-- 主内容区 -->
            <div class="flex-1 p-8">
                <div class="max-w-4xl">
                    <!-- 页面标题 -->
                    <div class="mb-8">
                        <h2 class="text-2xl font-bold text-gray-900">组织信息</h2>
                        <p class="text-gray-600">管理您的组织资料和账户设置</p>
                    </div>

                    <!-- 组织信息表单 -->
                    <div class="bg-white rounded-lg shadow-sm">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <h3 class="text-lg font-medium text-gray-900">基本信息</h3>
                        </div>
                        <div class="p-6">
                            <form @submit.prevent="saveProfile">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <!-- Logo -->
                                    <div class="md:col-span-2">
                                        <label class="block text-sm font-medium text-gray-700 mb-2">组织Logo</label>
                                        <div class="flex items-center">
                                            <div
                                                class="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                                <span class="text-green-600 text-2xl font-medium">{{
                                                    form.name?.charAt(0) }}</span>
                                            </div>
                                            <button type="button"
                                                class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                                                更换Logo
                                            </button>
                                        </div>
                                    </div>

                                    <!-- 组织名称 -->
                                    <div>
                                        <label for="name"
                                            class="block text-sm font-medium text-gray-700 mb-2">组织名称</label>
                                        <input id="name" v-model="form.name" type="text"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="请输入组织名称" />
                                    </div>

                                    <!-- 联系人 -->
                                    <div>
                                        <label for="contactPerson"
                                            class="block text-sm font-medium text-gray-700 mb-2">联系人</label>
                                        <input id="contactPerson" v-model="form.contactPerson" type="text"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="请输入联系人姓名" />
                                    </div>

                                    <!-- 联系电话 -->
                                    <div>
                                        <label for="contactPhone"
                                            class="block text-sm font-medium text-gray-700 mb-2">联系电话</label>
                                        <input id="contactPhone" v-model="form.contactPhone" type="tel"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="请输入联系电话" />
                                    </div>

                                    <!-- 联系邮箱 -->
                                    <div>
                                        <label for="contactEmail"
                                            class="block text-sm font-medium text-gray-700 mb-2">联系邮箱</label>
                                        <input id="contactEmail" v-model="form.contactEmail" type="email"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="请输入联系邮箱" />
                                    </div>

                                    <!-- 地址 -->
                                    <div class="md:col-span-2">
                                        <label for="address"
                                            class="block text-sm font-medium text-gray-700 mb-2">地址</label>
                                        <input id="address" v-model="form.address" type="text"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="请输入详细地址" />
                                    </div>

                                    <!-- 组织描述 -->
                                    <div class="md:col-span-2">
                                        <label for="description"
                                            class="block text-sm font-medium text-gray-700 mb-2">组织描述</label>
                                        <textarea id="description" v-model="form.description" rows="4"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="请描述您的组织使命和愿景"></textarea>
                                    </div>

                                    <!-- 状态 -->
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">审核状态</label>
                                        <div class="text-gray-900">
                                            <span :class="{
                                                'bg-yellow-100 text-yellow-800': form.status === 'pending',
                                                'bg-green-100 text-green-800': form.status === 'approved',
                                                'bg-red-100 text-red-800': form.status === 'rejected'
                                            }" class="px-2 py-1 text-xs font-medium rounded-full">
                                                {{ getStatusText(form.status) }}
                                            </span>
                                        </div>
                                    </div>

                                    <!-- 注册时间 -->
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">注册时间</label>
                                        <div class="text-gray-900">{{ formatDate(form.createdAt) }}</div>
                                    </div>
                                </div>

                                <!-- 保存按钮 -->
                                <div class="mt-8 flex justify-end">
                                    <button type="submit" :disabled="loading"
                                        class="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed">
                                        {{ loading ? '保存中...' : '保存修改' }}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <!-- 修改密码 -->
                    <div class="mt-8 bg-white rounded-lg shadow-sm">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <h3 class="text-lg font-medium text-gray-900">修改密码</h3>
                        </div>
                        <div class="p-6">
                            <form @submit.prevent="changePassword">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label for="currentPassword"
                                            class="block text-sm font-medium text-gray-700 mb-2">当前密码</label>
                                        <input id="currentPassword" v-model="passwordForm.currentPassword"
                                            type="password"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="请输入当前密码" />
                                    </div>
                                    <div>
                                        <label for="newPassword"
                                            class="block text-sm font-medium text-gray-700 mb-2">新密码</label>
                                        <input id="newPassword" v-model="passwordForm.newPassword" type="password"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="请输入新密码" />
                                    </div>
                                    <div>
                                        <label for="confirmPassword"
                                            class="block text-sm font-medium text-gray-700 mb-2">确认新密码</label>
                                        <input id="confirmPassword" v-model="passwordForm.confirmPassword"
                                            type="password"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="请再次输入新密码" />
                                    </div>
                                </div>
                                <div class="mt-6 flex justify-end">
                                    <button type="submit" :disabled="passwordLoading"
                                        class="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed">
                                        {{ passwordLoading ? '修改中...' : '修改密码' }}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const loading = ref(false)
const passwordLoading = ref(false)

const form = reactive({
    name: '爱心援助基金会',
    contactPerson: '张主任',
    contactPhone: '13800138000',
    contactEmail: 'contact@charity.org',
    address: '北京市朝阳区爱心大厦100号',
    description: '我们致力于为留守儿童提供教育、心理和生活方面的帮助，让每个孩子都能健康成长。',
    status: 'approved',
    createdAt: '2024-01-01'
})

const passwordForm = reactive({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
})

const getStatusText = (status: string) => {
    const statusMap = {
        pending: '待审核',
        approved: '已通过',
        rejected: '已拒绝'
    }
    return statusMap[status as keyof typeof statusMap] || status
}

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-CN')
}

const saveProfile = async () => {
    try {
        loading.value = true
        // 模拟API调用
        await new Promise(resolve => setTimeout(resolve, 1000))
        alert('组织信息保存成功！')
    } catch (error) {
        alert('保存失败，请重试')
    } finally {
        loading.value = false
    }
}

const changePassword = async () => {
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
        alert('两次输入的密码不一致')
        return
    }

    try {
        passwordLoading.value = true
        // 模拟API调用
        await new Promise(resolve => setTimeout(resolve, 1000))
        alert('密码修改成功！')
        passwordForm.currentPassword = ''
        passwordForm.newPassword = ''
        passwordForm.confirmPassword = ''
    } catch (error) {
        alert('修改失败，请重试')
    } finally {
        passwordLoading.value = false
    }
}
</script>