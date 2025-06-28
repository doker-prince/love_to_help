<template>
    <div class="min-h-screen bg-gray-50 text-gray-800">
        <!-- 导航栏 -->
        <AppHeader />

        <!-- 主要内容 -->
        <main>
            <!-- 英雄区域 -->
            <HeroSection />

            <!-- 统计数据 -->
            <StatisticsSection />

            <!-- 帮扶项目 -->
            <ProjectsSection />

            <!-- 留守儿童 -->
            <ChildrenSection />

            <!-- 帮扶机构 -->
            <OrganizationsSection />

            <!-- 平台优势 -->
            <PlatformAdvantages />

            <!-- 关于我们 -->
            <AboutSection />

            <!-- 联系我们 -->
            <ContactSection />
        </main>

        <!-- 页脚 -->
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
// 导入组件
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import StatisticsSection from '@/components/home/StatisticsSection.vue'
import ProjectsSection from '@/components/home/ProjectsSection.vue'
import ChildrenSection from '@/components/home/ChildrenSection.vue'
import OrganizationsSection from '@/components/home/OrganizationsSection.vue'
import PlatformAdvantages from '@/components/home/PlatformAdvantages.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import ContactSection from '@/components/home/ContactSection.vue'
</script>

<style scoped>
/* CSS变量定义 */
:root {
    --primary-color: #2563eb;
    --primary-hover: #1d4ed8;
    --secondary-color: #64748b;
    --success-color: #10b981;
    --warning-color: #f59e0b;
    --danger-color: #ef4444;
    --light-bg: #f8fafc;
    --dark-bg: #1e293b;
    --border-color: #e2e8f0;
}

/* 全局样式 */
.text-primary {
    color: var(--primary-color) !important;
}

.bg-primary {
    background-color: var(--primary-color) !important;
}

.border-primary {
    border-color: var(--primary-color) !important;
}

.hover\:bg-primary:hover {
    background-color: var(--primary-hover) !important;
}

.hover\:text-primary:hover {
    color: var(--primary-color) !important;
}

/* 各部分背景色区分 */
.bg-white {
    background-color: #ffffff;
}

.bg-gray-50 {
    background-color: #f9fafb;
}

.bg-gray-100 {
    background-color: #f3f4f6;
}

/* 按钮样式增强 */
.btn-primary {
    background-color: #2563eb;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    font-weight: 500;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
}

.btn-primary:hover {
    background-color: #1d4ed8;
    transform: translateY(-1px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.btn-secondary {
    background-color: transparent;
    color: #2563eb;
    border: 2px solid #2563eb;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
}

.btn-secondary:hover {
    background-color: #2563eb;
    color: white;
    transform: translateY(-1px);
}

/* 统计卡片 */
.stat-card {
    background: white;
    border-radius: 0.75rem;
    padding: 1.5rem;
    text-align: center;
    transition: all 0.3s ease;
    border: 1px solid #e5e7eb;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.stat-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

/* 项目卡片 */
.project-card {
    background: white;
    border-radius: 0.75rem;
    overflow: hidden;
    transition: all 0.3s ease;
    border: 1px solid #e5e7eb;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

/* 动画效果 */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in-up {
    animation: fadeInUp 0.6s ease-out;
}

/* 响应式增强 */
@media (max-width: 768px) {
    .hero-gradient {
        padding: 2rem 0;
    }

    .stat-card {
        margin-bottom: 1rem;
    }
}
</style>