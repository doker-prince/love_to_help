<template>
    <div class="org-dashboard-bg">
        <div class="dashboard-header">
            <div class="welcome-text">
                <h2>欢迎回来，{{ orgInfo.name }}</h2>
                <p>今天是 {{ currentDate }}，祝您工作愉快！</p>
            </div>
            <div class="quick-actions">
                <el-button type="primary" @click="newActivity">发布活动</el-button>
                <el-button @click="viewApplications">查看申请</el-button>
            </div>
        </div>

        <!-- 统计卡片 -->
        <div class="stats-container">
            <el-row :gutter="24">
                <el-col :xs="24" :sm="12" :md="6" v-for="stat in stats" :key="stat.title">
                    <div class="stat-card" :class="stat.type">
                        <div class="stat-icon">
                            <el-icon>
                                <component :is="stat.icon" />
                            </el-icon>
                        </div>
                        <div class="stat-content">
                            <div class="stat-number">{{ stat.value }}</div>
                            <div class="stat-title">{{ stat.title }}</div>
                            <div class="stat-trend" :class="stat.trend > 0 ? 'up' : 'down'">
                                {{ stat.trend > 0 ? '+' : '' }}{{ stat.trend }}% 较上月
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>

        <!-- 图表区域 -->
        <div class="charts-container">
            <el-row :gutter="24">
                <el-col :xs="24" :lg="12">
                    <div class="chart-card">
                        <div class="chart-title">帮扶申请趋势</div>
                        <div class="chart-content">
                            <div class="chart-placeholder">
                                <el-icon>
                                    <TrendCharts />
                                </el-icon>
                                <p>图表区域 - 帮扶申请趋势</p>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="24" :lg="12">
                    <div class="chart-card">
                        <div class="chart-title">帮扶类型分布</div>
                        <div class="chart-content">
                            <div class="chart-placeholder">
                                <el-icon>
                                    <PieChart />
                                </el-icon>
                                <p>图表区域 - 帮扶类型分布</p>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>

        <!-- 最新活动 -->
        <div class="activities-container">
            <div class="section-header">
                <h3>最新活动</h3>
                <el-button text @click="viewAllActivities">查看全部</el-button>
            </div>
            <el-row :gutter="24">
                <el-col :xs="24" :sm="12" :md="8" v-for="activity in activities" :key="activity.id">
                    <div class="activity-card">
                        <div class="activity-image">
                            <img :src="activity.image" :alt="activity.title" />
                            <div class="activity-status" :class="activity.status">{{ activity.statusText }}</div>
                        </div>
                        <div class="activity-content">
                            <h4 class="activity-title">{{ activity.title }}</h4>
                            <p class="activity-desc">{{ activity.description }}</p>
                            <div class="activity-meta">
                                <span class="activity-time">{{ activity.time }}</span>
                                <span class="activity-location">{{ activity.location }}</span>
                            </div>
                            <div class="activity-stats">
                                <span class="stat-item">
                                    <el-icon>
                                        <User />
                                    </el-icon>
                                    {{ activity.participants }}人参与
                                </span>
                                <span class="stat-item">
                                    <el-icon>
                                        <Calendar />
                                    </el-icon>
                                    {{ activity.duration }}
                                </span>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>

        <!-- 待处理申请 -->
        <div class="applications-container">
            <div class="section-header">
                <h3>待处理申请</h3>
                <el-button text @click="viewAllApplications">查看全部</el-button>
            </div>
            <el-table :data="applications" style="width: 100%" class="applications-table">
                <el-table-column prop="applyNo" label="申请编号" width="120" />
                <el-table-column prop="childName" label="儿童姓名" width="100" />
                <el-table-column prop="helpType" label="帮扶类型" width="120" />
                <el-table-column prop="applyTime" label="申请时间" width="160" />
                <el-table-column prop="status" label="状态" width="100">
                    <template #default="scope">
                        <el-tag :type="getStatusType(scope.row.status)">{{ scope.row.statusText }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="150">
                    <template #default="scope">
                        <el-button size="small" @click="viewApplication(scope.row)">查看</el-button>
                        <el-button size="small" type="primary" @click="processApplication(scope.row)">处理</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
    User,
    Calendar,
    TrendCharts,
    PieChart,
    Document,
    Star,
    Trophy,
    Heart
} from '@element-plus/icons-vue'

const currentDate = ref(new Date().toLocaleDateString('zh-CN'))
const orgInfo = ref({
    name: '阳光助学基金会'
})

const stats = ref([
    {
        title: '总申请数',
        value: 156,
        trend: 12.5,
        type: 'primary',
        icon: 'Document'
    },
    {
        title: '进行中',
        value: 23,
        trend: 8.2,
        type: 'success',
        icon: 'Star'
    },
    {
        title: '已完成',
        value: 89,
        trend: -3.1,
        type: 'warning',
        icon: 'Trophy'
    },
    {
        title: '满意度',
        value: '98%',
        trend: 2.1,
        type: 'danger',
        icon: 'Heart'
    }
])

const activities = ref([
    {
        id: 1,
        title: '春季助学活动',
        description: '为山区儿童提供教育支持和学习用品',
        image: '/activity1.jpg',
        time: '2024-03-15',
        location: '山区小学',
        participants: 45,
        duration: '3个月',
        status: 'ongoing',
        statusText: '进行中'
    },
    {
        id: 2,
        title: '心理健康辅导',
        description: '专业心理咨询师为留守儿童提供心理支持',
        image: '/activity2.jpg',
        time: '2024-03-20',
        location: '社区中心',
        participants: 32,
        duration: '6个月',
        status: 'upcoming',
        statusText: '即将开始'
    },
    {
        id: 3,
        title: '艺术兴趣班',
        description: '开设绘画、音乐等艺术课程，培养孩子兴趣',
        image: '/activity3.jpg',
        time: '2024-03-25',
        location: '文化中心',
        participants: 28,
        duration: '4个月',
        status: 'completed',
        statusText: '已完成'
    }
])

const applications = ref([
    {
        id: 1,
        applyNo: 'AP202403001',
        childName: '小明',
        helpType: '教育帮扶',
        applyTime: '2024-03-10 14:30',
        status: 'pending',
        statusText: '待审核'
    },
    {
        id: 2,
        applyNo: 'AP202403002',
        childName: '小红',
        helpType: '心理辅导',
        applyTime: '2024-03-11 09:15',
        status: 'reviewing',
        statusText: '审核中'
    },
    {
        id: 3,
        applyNo: 'AP202403003',
        childName: '小华',
        helpType: '生活帮扶',
        applyTime: '2024-03-12 16:20',
        status: 'pending',
        statusText: '待审核'
    }
])

function newActivity() {
    window.$message?.info('跳转到发布活动页面')
}

function viewApplications() {
    window.$message?.info('跳转到申请管理页面')
}

function viewAllActivities() {
    window.$message?.info('跳转到活动管理页面')
}

function viewAllApplications() {
    window.$message?.info('跳转到申请管理页面')
}

function viewApplication(row: any) {
    window.$message?.info(`查看申请：${row.applyNo}`)
}

function processApplication(row: any) {
    window.$message?.info(`处理申请：${row.applyNo}`)
}

function getStatusType(status: string) {
    const types: Record<string, string> = {
        pending: 'warning',
        reviewing: 'primary',
        approved: 'success',
        rejected: 'danger'
    }
    return types[status] || 'info'
}

onMounted(() => {
    // 初始化数据
})
</script>

<style scoped>
.org-dashboard-bg {
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    padding: 24px;
}

.dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
    background: rgba(255, 255, 255, 0.9);
    padding: 24px;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.welcome-text h2 {
    color: #2c3e50;
    margin: 0 0 8px 0;
    font-size: 1.5rem;
}

.welcome-text p {
    color: #7f8c8d;
    margin: 0;
}

.quick-actions {
    display: flex;
    gap: 12px;
}

.stats-container {
    margin-bottom: 32px;
}

.stat-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 16px;
    padding: 24px;
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: transform 0.2s;
}

.stat-card:hover {
    transform: translateY(-4px);
}

.stat-card.primary .stat-icon {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.stat-card.success .stat-icon {
    background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
}

.stat-card.warning .stat-icon {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.stat-card.danger .stat-icon {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.stat-icon {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    color: white;
    font-size: 24px;
}

.stat-content {
    flex: 1;
}

.stat-number {
    font-size: 2rem;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 4px;
}

.stat-title {
    color: #7f8c8d;
    font-size: 0.9rem;
    margin-bottom: 4px;
}

.stat-trend {
    font-size: 0.8rem;
    font-weight: 500;
}

.stat-trend.up {
    color: #27ae60;
}

.stat-trend.down {
    color: #e74c3c;
}

.charts-container {
    margin-bottom: 32px;
}

.chart-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 16px;
    padding: 24px;
    margin-bottom: 24px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.chart-title {
    font-size: 1.2rem;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 20px;
}

.chart-placeholder {
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
    border-radius: 8px;
    color: #6c757d;
}

.chart-placeholder .el-icon {
    font-size: 48px;
    margin-bottom: 16px;
}

.activities-container,
.applications-container {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 16px;
    padding: 24px;
    margin-bottom: 24px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
}

.section-header h3 {
    color: #2c3e50;
    margin: 0;
    font-size: 1.3rem;
}

.activity-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 24px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
}

.activity-card:hover {
    transform: translateY(-4px);
}

.activity-image {
    position: relative;
    height: 160px;
    overflow: hidden;
}

.activity-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.activity-status {
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 0.8rem;
    color: white;
    font-weight: 500;
}

.activity-status.ongoing {
    background: #3498db;
}

.activity-status.upcoming {
    background: #f39c12;
}

.activity-status.completed {
    background: #27ae60;
}

.activity-content {
    padding: 16px;
}

.activity-title {
    color: #2c3e50;
    margin: 0 0 8px 0;
    font-size: 1.1rem;
}

.activity-desc {
    color: #7f8c8d;
    margin: 0 0 12px 0;
    font-size: 0.9rem;
    line-height: 1.4;
}

.activity-meta {
    display: flex;
    gap: 16px;
    margin-bottom: 12px;
    font-size: 0.8rem;
    color: #95a5a6;
}

.activity-stats {
    display: flex;
    gap: 16px;
}

.stat-item {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.8rem;
    color: #7f8c8d;
}

.applications-table {
    border-radius: 8px;
    overflow: hidden;
}

@media (max-width: 768px) {
    .dashboard-header {
        flex-direction: column;
        gap: 16px;
        text-align: center;
    }

    .quick-actions {
        width: 100%;
        justify-content: center;
    }

    .stat-card {
        padding: 16px;
    }

    .stat-icon {
        width: 50px;
        height: 50px;
        font-size: 20px;
    }

    .stat-number {
        font-size: 1.5rem;
    }
}
</style>