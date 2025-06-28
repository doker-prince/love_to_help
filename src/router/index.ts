import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// 路由配置
const routes: RouteRecordRaw[] = [
    // 公共路由
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/common/Home.vue'),
        meta: { title: '首页' }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/common/Login.vue'),
        meta: { title: '登录' }
    },
    {
        path: '/admin-login',
        name: 'AdminLogin',
        component: () => import('@/pages/admin/AdminLogin.vue'),
        meta: { title: '管理员登录' }
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/pages/common/Register.vue'),
        meta: { title: '注册' }
    },
    {
        path: '/api-test',
        name: 'ApiTest',
        component: () => import('@/pages/common/ApiTest.vue'),
        meta: { title: 'API测试' }
    },
    {
        path: '/articles',
        name: 'ArticleList',
        component: () => import('@/pages/common/ArticleList.vue'),
        meta: { title: '文章列表' }
    },
    {
        path: '/articles/:id',
        name: 'ArticleDetail',
        component: () => import('@/pages/common/ArticleDetail.vue'),
        meta: { title: '文章详情' }
    },
    {
        path: '/children',
        name: 'ChildList',
        component: () => import('@/pages/common/ChildList.vue'),
        meta: { title: '儿童列表' }
    },
    {
        path: '/children/:id',
        name: 'ChildDetail',
        component: () => import('@/pages/common/ChildDetail.vue'),
        meta: { title: '儿童详情' }
    },
    {
        path: '/projects',
        name: 'ProjectList',
        component: () => import('@/pages/common/ProjectList.vue'),
        meta: { title: '项目列表' }
    },
    {
        path: '/projects/:id',
        name: 'ProjectDetail',
        component: () => import('@/pages/common/ProjectDetail.vue'),
        meta: { title: '项目详情' }
    },
    {
        path: '/organizations',
        name: 'OrganizationList',
        component: () => import('@/pages/common/OrganizationList.vue'),
        meta: { title: '机构列表' }
    },
    {
        path: '/organizations/:id',
        name: 'OrganizationDetail',
        component: () => import('@/pages/common/OrganizationDetail.vue'),
        meta: { title: '机构详情' }
    },
    // 用户相关路由
    {
        path: '/user',
        name: 'UserDashboard',
        component: () => import('@/pages/user/Dashboard.vue'),
        meta: { title: '用户仪表板', requiresAuth: true, role: 'user' }
    },
    {
        path: '/user/profile',
        name: 'UserProfile',
        component: () => import('@/pages/user/Profile.vue'),
        meta: { title: '用户资料', requiresAuth: true, role: 'user' }
    },
    {
        path: '/user/help-records',
        name: 'UserHelpRecords',
        component: () => import('@/pages/user/HelpRecords.vue'),
        meta: { title: '援助记录', requiresAuth: true, role: 'user' }
    },
    // 组织相关路由
    {
        path: '/organization',
        name: 'OrganizationDashboard',
        component: () => import('@/pages/organization/Dashboard.vue'),
        meta: { title: '组织仪表板', requiresAuth: true, role: 'organization' }
    },
    {
        path: '/organization/profile',
        name: 'OrganizationProfile',
        component: () => import('@/pages/organization/Profile.vue'),
        meta: { title: '组织资料', requiresAuth: true, role: 'organization' }
    },
    {
        path: '/organization/children',
        name: 'OrganizationChildren',
        component: () => import('@/pages/organization/Children.vue'),
        meta: { title: '儿童管理', requiresAuth: true, role: 'organization' }
    },
    {
        path: '/organization/projects',
        name: 'OrganizationProjects',
        component: () => import('@/pages/organization/Projects.vue'),
        meta: { title: '项目管理', requiresAuth: true, role: 'organization' }
    },
    {
        path: '/organization/articles',
        name: 'OrganizationArticles',
        component: () => import('@/pages/organization/Articles.vue'),
        meta: { title: '文章管理', requiresAuth: true, role: 'organization' }
    },
    {
        path: '/organization/children/add',
        name: 'OrganizationChildAdd',
        component: () => import('@/pages/organization/ChildAdd.vue'),
        meta: { title: '添加儿童', requiresAuth: true, role: 'organization' }
    },
    {
        path: '/organization/projects/add',
        name: 'OrganizationProjectAdd',
        component: () => import('@/pages/organization/ProjectAdd.vue'),
        meta: { title: '创建项目', requiresAuth: true, role: 'organization' }
    },
    {
        path: '/organization/articles/add',
        name: 'OrganizationArticleAdd',
        component: () => import('@/pages/organization/ArticleAdd.vue'),
        meta: { title: '发布文章', requiresAuth: true, role: 'organization' }
    },
    {
        path: '/organization/children/select',
        name: 'OrganizationChildrenSelect',
        component: () => import('@/pages/organization/ChildrenSelect.vue'),
        meta: { title: '选择帮扶儿童', requiresAuth: true, role: 'organization' }
    },
    // 管理员相关路由
    {
        path: '/admin',
        name: 'AdminDashboard',
        component: () => import('@/pages/admin/Dashboard.vue'),
        meta: { title: '管理员仪表板', requiresAdminAuth: true }
    },
    {
        path: '/admin/users',
        name: 'AdminUsers',
        component: () => import('@/pages/admin/Users.vue'),
        meta: { title: '用户管理', requiresAdminAuth: true }
    },
    {
        path: '/admin/organizations',
        name: 'AdminOrganizations',
        component: () => import('@/pages/admin/Organizations.vue'),
        meta: { title: '组织管理', requiresAdminAuth: true }
    },
    {
        path: '/admin/children',
        name: 'AdminChildren',
        component: () => import('@/pages/admin/Children.vue'),
        meta: { title: '儿童管理', requiresAdminAuth: true }
    },
    {
        path: '/admin/projects',
        name: 'AdminProjects',
        component: () => import('@/pages/admin/Projects.vue'),
        meta: { title: '项目管理', requiresAdminAuth: true }
    },
    {
        path: '/admin/articles',
        name: 'AdminArticles',
        component: () => import('@/pages/admin/Articles.vue'),
        meta: { title: '文章管理', requiresAdminAuth: true }
    },
    {
        path: '/admin/settings',
        name: 'AdminSettings',
        component: () => import('@/pages/admin/Settings.vue'),
        meta: { title: '系统设置', requiresAdminAuth: true }
    },
    // 404页面
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/pages/common/NotFound.vue'),
        meta: { title: '页面未找到' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
    // 设置页面标题
    if (to.meta.title) {
        document.title = `${to.meta.title} - 童伴桥`
    }

    // 检查管理员路由权限
    if (to.meta.requiresAdminAuth) {
        const adminToken = localStorage.getItem('adminToken')
        const adminInfo = localStorage.getItem('adminInfo')

        if (!adminToken || !adminInfo) {
            next('/admin-login')
            return
        }

        try {
            const admin = JSON.parse(adminInfo)
            if (admin.role !== 'admin') {
                next('/admin-login')
                return
            }
        } catch (error) {
            console.error('解析管理员信息失败:', error)
            next('/admin-login')
            return
        }
    }

    // 检查普通用户路由权限
    if (to.meta.requiresAuth) {
        const token = localStorage.getItem('token')
        const userInfo = localStorage.getItem('userInfo')

        if (!token || !userInfo) {
            next('/login')
            return
        }

        // 检查角色权限
        if (to.meta.role) {
            try {
                const user = JSON.parse(userInfo)
                if (user.role !== to.meta.role) {
                    next('/login')
                    return
                }
            } catch (error) {
                console.error('解析用户信息失败:', error)
                next('/login')
                return
            }
        }
    }

    next()
})

export default router 