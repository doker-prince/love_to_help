import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { userApi, organizationApi, adminApi } from '@/api'
import type { User } from '@/types'

export const useUserStore = defineStore('user', () => {
    // 状态
    const userInfo = ref<User | null>(null)
    const token = ref<string | null>(null)
    const loading = ref(false)

    // 计算属性
    const isLoggedIn = computed(() => !!token.value)
    const userRole = computed(() => userInfo.value?.role || 'user')

    // 登录
    const login = async (loginData: { username: string; password: string; role: string }) => {
        try {
            loading.value = true

            // 这里应该调用实际的登录API
            // const response = await userApi.login(loginData)
            // token.value = response.data.token
            // userInfo.value = response.data.user

            // 模拟API调用
            await new Promise(resolve => setTimeout(resolve, 1000))

            // 模拟数据
            const mockUser: User = {
                id: 1,
                username: loginData.username,
                name: '爱心用户',
                email: 'user@example.com',
                phone: '13800138000',
                role: loginData.role as 'user' | 'organization' | 'admin',
                status: 'active',
                createdAt: '2024-01-01T00:00:00Z',
                updatedAt: '2024-01-01T00:00:00Z'
            }

            const mockToken = 'mock-jwt-token-' + Date.now()

            userInfo.value = mockUser
            token.value = mockToken

            // 保存到本地存储
            localStorage.setItem('token', mockToken)
            localStorage.setItem('userInfo', JSON.stringify(mockUser))

            return { success: true, user: mockUser }
        } catch (error) {
            console.error('登录失败:', error)
            throw new Error('登录失败，请检查用户名和密码')
        } finally {
            loading.value = false
        }
    }

    // 注册
    const register = async (registerData: { username: string; password: string; name?: string; email?: string; phone?: string }) => {
        try {
            loading.value = true

            // 这里应该调用实际的注册API
            // const response = await userApi.register(registerData)
            // token.value = response.data.token
            // userInfo.value = response.data.user

            // 模拟API调用
            await new Promise(resolve => setTimeout(resolve, 1000))

            // 模拟数据
            const mockUser: User = {
                id: Date.now(),
                username: registerData.username,
                name: registerData.name || registerData.username,
                email: registerData.email || '',
                phone: registerData.phone || '',
                role: 'user',
                status: 'active',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            }

            const mockToken = 'mock-jwt-token-' + Date.now()

            userInfo.value = mockUser
            token.value = mockToken

            // 保存到本地存储
            localStorage.setItem('token', mockToken)
            localStorage.setItem('userInfo', JSON.stringify(mockUser))

            return { success: true, user: mockUser }
        } catch (error) {
            console.error('注册失败:', error)
            throw new Error('注册失败，请重试')
        } finally {
            loading.value = false
        }
    }

    // 登出
    const logout = () => {
        userInfo.value = null
        token.value = null
        localStorage.removeItem('token')
        localStorage.removeItem('userInfo')
    }

    // 初始化用户状态
    const initUser = () => {
        const savedToken = localStorage.getItem('token')
        const savedUserInfo = localStorage.getItem('userInfo')

        if (savedToken && savedUserInfo) {
            try {
                token.value = savedToken
                userInfo.value = JSON.parse(savedUserInfo)
            } catch (error) {
                console.error('解析用户信息失败:', error)
                logout()
            }
        }
    }

    // 更新用户信息
    const updateUserInfo = (newUserInfo: Partial<User>) => {
        if (userInfo.value) {
            userInfo.value = { ...userInfo.value, ...newUserInfo }
            localStorage.setItem('userInfo', JSON.stringify(userInfo.value))
        }
    }

    // 检查权限
    const hasPermission = (requiredRole: string) => {
        if (!userInfo.value) return false

        const roleHierarchy = {
            admin: 3,
            organization: 2,
            user: 1
        }

        const userLevel = roleHierarchy[userRole.value as keyof typeof roleHierarchy] || 0
        const requiredLevel = roleHierarchy[requiredRole as keyof typeof roleHierarchy] || 0

        return userLevel >= requiredLevel
    }

    return {
        // 状态
        userInfo,
        token,
        loading,

        // 计算属性
        isLoggedIn,
        userRole,

        // 方法
        login,
        register,
        logout,
        initUser,
        updateUserInfo,
        hasPermission
    }
}) 