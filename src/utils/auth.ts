// 用户认证状态管理工具

// 用户信息接口
export interface UserInfo {
    id?: number
    username?: string
    email?: string
    role?: string
    name?: string
    avatar?: string
    [key: string]: any
}

// 检查是否已登录
export const isLoggedIn = (): boolean => {
    const token = localStorage.getItem('token')
    return !!token
}

// 获取用户信息
export const getUserInfo = (): UserInfo | null => {
    const userInfoStr = localStorage.getItem('userInfo')
    if (userInfoStr) {
        try {
            return JSON.parse(userInfoStr)
        } catch (error) {
            console.error('解析用户信息失败:', error)
            return null
        }
    }
    return null
}

// 获取用户头像字母
export const getUserInitials = (): string => {
    const userInfo = getUserInfo()
    if (userInfo && userInfo.name) {
        return userInfo.name.charAt(0).toUpperCase()
    }
    if (userInfo && userInfo.username) {
        return userInfo.username.charAt(0).toUpperCase()
    }
    return 'U'
}

// 退出登录
export const logout = (): void => {
    localStorage.removeItem('token')
    localStorage.removeItem('userInfo')
    localStorage.removeItem('rememberLogin')
}

// 获取token
export const getToken = (): string | null => {
    return localStorage.getItem('token')
}

// 设置用户信息
export const setUserInfo = (userInfo: UserInfo): void => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
}

// 设置token
export const setToken = (token: string): void => {
    localStorage.setItem('token', token)
}

// 获取用户角色
export const getUserRole = (): string | null => {
    const userInfo = getUserInfo()
    return userInfo?.role || null
}

// 检查用户是否有特定角色
export const hasRole = (role: string): boolean => {
    const userRole = getUserRole()
    return userRole === role
}

// 保存用户信息
export const saveUserInfo = (token: string, userInfo: UserInfo): void => {
    localStorage.setItem('userToken', token)
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
}

// 清除用户信息
export const clearUserInfo = (): void => {
    localStorage.removeItem('userToken')
    localStorage.removeItem('userInfo')
    localStorage.removeItem('adminToken')
    localStorage.removeItem('adminInfo')
}

// 设置用户token
export const setUserToken = (token: string): void => {
    localStorage.setItem('userToken', token)
} 