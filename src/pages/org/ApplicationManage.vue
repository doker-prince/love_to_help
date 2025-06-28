<template>
    <div class="application-manage-bg">
        <div class="page-header">
            <div class="header-title">
                <h2>申请管理</h2>
                <p>管理帮扶申请，审核申请材料，安排帮扶对接</p>
            </div>
            <div class="header-stats">
                <div class="stat-item">
                    <span class="stat-number">{{ stats.pending }}</span>
                    <span class="stat-label">待审核</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">{{ stats.reviewing }}</span>
                    <span class="stat-label">审核中</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">{{ stats.approved }}</span>
                    <span class="stat-label">已通过</span>
                </div>
            </div>
        </div>

        <!-- 搜索和筛选 -->
        <div class="search-section">
            <el-row :gutter="24">
                <el-col :xs="24" :sm="8" :md="6">
                    <el-input v-model="searchForm.keyword" placeholder="搜索申请编号或儿童姓名" clearable
                        @keyup.enter="handleSearch">
                        <template #prefix>
                            <el-icon>
                                <Search />
                            </el-icon>
                        </template>
                    </el-input>
                </el-col>
                <el-col :xs="24" :sm="8" :md="6">
                    <el-select v-model="searchForm.status" placeholder="申请状态" clearable>
                        <el-option label="全部" value="" />
                        <el-option label="待审核" value="pending" />
                        <el-option label="审核中" value="reviewing" />
                        <el-option label="已通过" value="approved" />
                        <el-option label="已拒绝" value="rejected" />
                    </el-select>
                </el-col>
                <el-col :xs="24" :sm="8" :md="6">
                    <el-select v-model="searchForm.helpType" placeholder="帮扶类型" clearable>
                        <el-option label="全部" value="" />
                        <el-option label="教育帮扶" value="education" />
                        <el-option label="心理辅导" value="psychology" />
                        <el-option label="生活帮扶" value="life" />
                        <el-option label="医疗帮扶" value="medical" />
                    </el-select>
                </el-col>
                <el-col :xs="24" :sm="8" :md="6">
                    <el-button type="primary" @click="handleSearch">搜索</el-button>
                    <el-button @click="resetSearch">重置</el-button>
                </el-col>
            </el-row>
        </div>

        <!-- 申请列表 -->
        <div class="application-list">
            <el-table :data="applications" style="width: 100%" class="application-table">
                <el-table-column prop="applyNo" label="申请编号" width="140" />
                <el-table-column prop="childName" label="儿童姓名" width="100" />
                <el-table-column prop="helpType" label="帮扶类型" width="120" />
                <el-table-column prop="applyTime" label="申请时间" width="160" />
                <el-table-column prop="urgency" label="紧急程度" width="100">
                    <template #default="scope">
                        <el-tag :type="getUrgencyType(scope.row.urgency)">{{ scope.row.urgencyText }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="status" label="状态" width="100">
                    <template #default="scope">
                        <el-tag :type="getStatusType(scope.row.status)">{{ scope.row.statusText }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="200" fixed="right">
                    <template #default="scope">
                        <el-button size="small" @click="viewDetail(scope.row)">查看</el-button>
                        <el-button v-if="scope.row.status === 'pending'" size="small" type="primary"
                            @click="processApplication(scope.row)">
                            审核
                        </el-button>
                        <el-button v-if="scope.row.status === 'approved'" size="small" type="success"
                            @click="arrangeHelp(scope.row)">
                            安排
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <!-- 分页 -->
        <div class="pagination-section">
            <el-pagination v-model:current-page="pagination.current" v-model:page-size="pagination.size"
                :page-sizes="[10, 20, 50, 100]" :total="pagination.total"
                layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange"
                @current-change="handleCurrentChange" />
        </div>

        <!-- 详情弹窗 -->
        <el-dialog v-model="detailVisible" title="申请详情" width="700px" :close-on-click-modal="false">
            <div class="detail-content" v-if="currentApplication">
                <el-descriptions :column="2" border>
                    <el-descriptions-item label="申请编号">{{ currentApplication.applyNo }}</el-descriptions-item>
                    <el-descriptions-item label="申请时间">{{ currentApplication.applyTime }}</el-descriptions-item>
                    <el-descriptions-item label="儿童姓名">{{ currentApplication.childName }}</el-descriptions-item>
                    <el-descriptions-item label="儿童年龄">{{ currentApplication.childAge }}岁</el-descriptions-item>
                    <el-descriptions-item label="帮扶类型">{{ currentApplication.helpType }}</el-descriptions-item>
                    <el-descriptions-item label="紧急程度">
                        <el-tag :type="getUrgencyType(currentApplication.urgency)">{{ currentApplication.urgencyText
                            }}</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item label="申请状态">
                        <el-tag :type="getStatusType(currentApplication.status)">{{ currentApplication.statusText
                            }}</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item label="联系电话">{{ currentApplication.phone }}</el-descriptions-item>
                    <el-descriptions-item label="申请描述" :span="2">{{ currentApplication.description
                        }}</el-descriptions-item>
                    <el-descriptions-item label="备注信息" :span="2">{{ currentApplication.remark || '暂无'
                        }}</el-descriptions-item>
                </el-descriptions>
            </div>
            <template #footer>
                <el-button @click="detailVisible = false">关闭</el-button>
            </template>
        </el-dialog>

        <!-- 审核弹窗 -->
        <el-dialog v-model="reviewVisible" title="审核申请" width="500px" :close-on-click-modal="false">
            <el-form :model="reviewForm" :rules="reviewRules" ref="reviewFormRef" label-width="100px">
                <el-form-item label="审核结果" prop="result">
                    <el-radio-group v-model="reviewForm.result">
                        <el-radio value="approved">通过</el-radio>
                        <el-radio value="rejected">拒绝</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="审核意见" prop="comment">
                    <el-input v-model="reviewForm.comment" type="textarea" :rows="4" placeholder="请输入审核意见" />
                </el-form-item>
                <el-form-item label="安排时间" v-if="reviewForm.result === 'approved'">
                    <el-date-picker v-model="reviewForm.arrangeTime" type="datetime" placeholder="选择安排时间"
                        format="YYYY-MM-DD HH:mm" value-format="YYYY-MM-DD HH:mm:ss" />
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button @click="reviewVisible = false">取消</el-button>
                <el-button type="primary" @click="submitReview">提交审核</el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { Search } from '@element-plus/icons-vue'

const searchForm = reactive({
    keyword: '',
    status: '',
    helpType: ''
})

const pagination = reactive({
    current: 1,
    size: 20,
    total: 0
})

const stats = reactive({
    pending: 15,
    reviewing: 8,
    approved: 45
})

const applications = ref([
    {
        id: 1,
        applyNo: 'AP202403001',
        childName: '小明',
        childAge: 10,
        helpType: '教育帮扶',
        applyTime: '2024-03-10 14:30:00',
        urgency: 'high',
        urgencyText: '紧急',
        status: 'pending',
        statusText: '待审核',
        phone: '138****1234',
        description: '孩子需要教育方面的帮助，希望能获得学习辅导和书籍支持。',
        remark: '家庭经济困难，需要重点关注'
    },
    {
        id: 2,
        applyNo: 'AP202403002',
        childName: '小红',
        childAge: 12,
        helpType: '心理辅导',
        applyTime: '2024-03-11 09:15:00',
        urgency: 'medium',
        urgencyText: '一般',
        status: 'reviewing',
        statusText: '审核中',
        phone: '139****5678',
        description: '孩子性格内向，需要心理辅导帮助。',
        remark: '已安排心理咨询师评估'
    },
    {
        id: 3,
        applyNo: 'AP202403003',
        childName: '小华',
        childAge: 8,
        helpType: '生活帮扶',
        applyTime: '2024-03-12 16:20:00',
        urgency: 'low',
        urgencyText: '普通',
        status: 'approved',
        statusText: '已通过',
        phone: '137****9012',
        description: '需要基本生活用品和学习用品。',
        remark: '已安排志愿者对接'
    }
])

const detailVisible = ref(false)
const reviewVisible = ref(false)
const currentApplication = ref(null)
const reviewFormRef = ref()

const reviewForm = reactive({
    result: '',
    comment: '',
    arrangeTime: ''
})

const reviewRules = {
    result: [{ required: true, message: '请选择审核结果', trigger: 'change' }],
    comment: [{ required: true, message: '请输入审核意见', trigger: 'blur' }]
}

function handleSearch() {
    window.$message?.info('执行搜索...')
}

function resetSearch() {
    Object.assign(searchForm, { keyword: '', status: '', helpType: '' })
    handleSearch()
}

function handleSizeChange(size: number) {
    pagination.size = size
    handleSearch()
}

function handleCurrentChange(current: number) {
    pagination.current = current
    handleSearch()
}

function getUrgencyType(urgency: string) {
    const types: Record<string, string> = {
        high: 'danger',
        medium: 'warning',
        low: 'info'
    }
    return types[urgency] || 'info'
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

function viewDetail(row: any) {
    currentApplication.value = row
    detailVisible.value = true
}

function processApplication(row: any) {
    currentApplication.value = row
    Object.assign(reviewForm, { result: '', comment: '', arrangeTime: '' })
    reviewVisible.value = true
}

function arrangeHelp(row: any) {
    window.$message?.info(`安排帮扶：${row.applyNo}`)
}

function submitReview() {
    reviewFormRef.value?.validate((valid: boolean) => {
        if (!valid) return
        window.$message?.success('审核提交成功')
        reviewVisible.value = false
        handleSearch()
    })
}

onMounted(() => {
    pagination.total = applications.value.length
})
</script>

<style scoped>
.application-manage-bg {
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    padding: 24px;
}

.page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
    background: rgba(255, 255, 255, 0.95);
    padding: 24px;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.header-title h2 {
    color: #2c3e50;
    margin: 0 0 8px 0;
    font-size: 1.8rem;
}

.header-title p {
    color: #7f8c8d;
    margin: 0;
}

.header-stats {
    display: flex;
    gap: 32px;
}

.stat-item {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2rem;
    font-weight: bold;
    color: #3498db;
    margin-bottom: 4px;
}

.stat-label {
    color: #7f8c8d;
    font-size: 0.9rem;
}

.search-section {
    background: rgba(255, 255, 255, 0.95);
    padding: 24px;
    border-radius: 16px;
    margin-bottom: 24px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.application-list {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 16px;
    padding: 24px;
    margin-bottom: 24px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.application-table {
    border-radius: 8px;
    overflow: hidden;
}

.pagination-section {
    display: flex;
    justify-content: center;
    background: rgba(255, 255, 255, 0.95);
    padding: 24px;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.detail-content {
    margin-bottom: 16px;
}

@media (max-width: 768px) {
    .page-header {
        flex-direction: column;
        gap: 16px;
        text-align: center;
    }

    .header-stats {
        gap: 16px;
    }

    .stat-number {
        font-size: 1.5rem;
    }
}
</style>