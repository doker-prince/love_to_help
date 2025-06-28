<template>
    <div class="min-h-screen bg-gray-50">
        <!-- 管理员布局 -->
        <div class="flex">
            <!-- 侧边栏 -->
            <div class="w-64 bg-white shadow-sm min-h-screen">
                <div class="p-6">
                    <h1 class="text-xl font-bold text-gray-900">管理后台</h1>
                </div>
                <nav class="mt-6">
                    <!-- 仪表板 -->
                    <router-link to="/admin" class="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>
                        </svg>
                        仪表板
                    </router-link>

                    <!-- 用户管理 -->
                    <router-link to="/admin/users" class="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z">
                            </path>
                        </svg>
                        用户管理
                    </router-link>

                    <!-- 组织管理 -->
                    <router-link to="/admin/organizations"
                        class="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                            </path>
                        </svg>
                        组织管理
                    </router-link>

                    <!-- 儿童管理 -->
                    <router-link to="/admin/children"
                        class="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z">
                            </path>
                        </svg>
                        儿童管理
                    </router-link>

                    <!-- 项目管理 -->
                    <router-link to="/admin/projects"
                        class="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2">
                            </path>
                        </svg>
                        项目管理
                    </router-link>

                    <!-- 文章管理 -->
                    <router-link to="/admin/articles"
                        class="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                            </path>
                        </svg>
                        文章管理
                    </router-link>

                    <!-- 系统设置 -->
                    <router-link to="/admin/settings"
                        class="flex items-center px-6 py-3 text-gray-700 bg-indigo-50 border-r-2 border-indigo-600">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                            </path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        系统设置
                    </router-link>

                    <!-- 退出登录 -->
                    <button @click="handleLogout"
                        class="w-full flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50 text-left">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                            </path>
                        </svg>
                        退出登录
                    </button>
                </nav>
            </div>

            <!-- 主内容区 -->
            <div class="flex-1 p-8">
                <!-- 页面标题 -->
                <div class="mb-8">
                    <h2 class="text-2xl font-bold text-gray-900">系统设置</h2>
                    <p class="text-gray-600">管理系统配置和参数</p>
                </div>

                <!-- 设置卡片 -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <!-- 基本设置 -->
                    <div class="bg-white rounded-lg shadow-sm">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <h3 class="text-lg font-medium text-gray-900">基本设置</h3>
                        </div>
                        <div class="p-6 space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">网站名称</label>
                                <input v-model="settings.siteName" type="text"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">网站描述</label>
                                <textarea v-model="settings.siteDescription" rows="3"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">联系邮箱</label>
                                <input v-model="settings.contactEmail" type="email"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                            </div>
                        </div>
                    </div>

                    <!-- 安全设置 -->
                    <div class="bg-white rounded-lg shadow-sm">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <h3 class="text-lg font-medium text-gray-900">安全设置</h3>
                        </div>
                        <div class="p-6 space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">密码最小长度</label>
                                <input v-model="settings.minPasswordLength" type="number" min="6" max="20"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">登录失败锁定次数</label>
                                <input v-model="settings.maxLoginAttempts" type="number" min="3" max="10"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                            </div>
                            <div class="flex items-center">
                                <input v-model="settings.enableTwoFactor" type="checkbox" id="twoFactor"
                                    class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label for="twoFactor" class="ml-2 block text-sm text-gray-900">启用双因素认证</label>
                            </div>
                        </div>
                    </div>

                    <!-- 邮件设置 -->
                    <div class="bg-white rounded-lg shadow-sm">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <h3 class="text-lg font-medium text-gray-900">邮件设置</h3>
                        </div>
                        <div class="p-6 space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">SMTP服务器</label>
                                <input v-model="settings.smtpServer" type="text"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">SMTP端口</label>
                                <input v-model="settings.smtpPort" type="number"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">邮箱账号</label>
                                <input v-model="settings.smtpUsername" type="text"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">邮箱密码</label>
                                <input v-model="settings.smtpPassword" type="password"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                            </div>
                        </div>
                    </div>

                    <!-- 系统维护 -->
                    <div class="bg-white rounded-lg shadow-sm">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <h3 class="text-lg font-medium text-gray-900">系统维护</h3>
                        </div>
                        <div class="p-6 space-y-4">
                            <div class="flex items-center justify-between">
                                <span class="text-sm font-medium text-gray-700">系统状态</span>
                                <span
                                    class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">正常运行</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-sm font-medium text-gray-700">数据库连接</span>
                                <span
                                    class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">正常</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-sm font-medium text-gray-700">缓存状态</span>
                                <span
                                    class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">正常</span>
                            </div>
                            <div class="pt-4">
                                <button @click="clearCache"
                                    class="w-full px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700">
                                    清除缓存
                                </button>
                            </div>
                            <div>
                                <button @click="backupDatabase"
                                    class="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                    备份数据库
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 保存按钮 -->
                <div class="mt-8 flex justify-end">
                    <button @click="saveSettings"
                        class="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                        保存设置
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 系统设置
const settings = ref({
    siteName: '童伴桥',
    siteDescription: '留守儿童帮扶平台',
    contactEmail: 'admin@tongbanqiao.com',
    minPasswordLength: 8,
    maxLoginAttempts: 5,
    enableTwoFactor: false,
    smtpServer: 'smtp.example.com',
    smtpPort: 587,
    smtpUsername: 'noreply@example.com',
    smtpPassword: ''
})

const handleLogout = () => {
    // 清除本地存储的管理员信息
    localStorage.removeItem('adminToken')
    localStorage.removeItem('adminInfo')

    console.log('管理员退出登录，清除管理员信息')

    // 跳转到管理员登录页面
    router.push('/admin-login')
}

const saveSettings = () => {
    console.log('保存系统设置:', settings.value)
    // 这里应该调用API保存设置
    alert('设置已保存')
}

const clearCache = () => {
    console.log('清除系统缓存')
    alert('缓存已清除')
}

const backupDatabase = () => {
    console.log('备份数据库')
    alert('数据库备份已开始')
}
</script>