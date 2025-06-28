<template>
    <div class="activity-manage-bg">
        <div class="page-header">
            <div class="header-title">
                <h2>活动管理</h2>
                <p>管理机构的帮扶活动，发布新活动，跟踪活动进展</p>
            </div>
            <el-button type="primary" size="large" @click="openEdit()">
                <el-icon>
                    <Plus />
                </el-icon>
                发布活动
            </el-button>
        </div>

        <!-- 搜索和筛选 -->
        <div class="search-section">
            <el-row :gutter="24">
                <el-col :xs="24" :sm="8" :md="6">
                    <el-input v-model="searchForm.keyword" placeholder="搜索活动名称" clearable @keyup.enter="handleSearch">
                        <template #prefix>
                            <el-icon>
                                <Search />
                            </el-icon>
                        </template>
                    </el-input>
                </el-col>
                <el-col :xs="24" :sm="8" :md="6">
                    <el-select v-model="searchForm.status" placeholder="活动状态" clearable>
                        <el-option label="全部" value="" />
                        <el-option label="即将开始" value="upcoming" />
                        <el-option label="进行中" value="ongoing" />
                        <el-option label="已完成" value="completed" />
                        <el-option label="已取消" value="cancelled" />
                    </el-select>
                </el-col>
                <el-col :xs="24" :sm="8" :md="6">
                    <el-select v-model="searchForm.type" placeholder="活动类型" clearable>
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

        <!-- 活动列表 -->
        <div class="activity-list">
            <el-row :gutter="24">
                <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="activity in activities" :key="activity.id">
                    <div class="activity-card">
                        <div class="activity-image">
                            <img :src="activity.image" :alt="activity.title" />
                            <div class="activity-status" :class="activity.status">{{ activity.statusText }}</div>
                            <div class="activity-actions">
                                <el-button size="small" circle @click="openEdit(activity)">
                                    <el-icon>
                                        <Edit />
                                    </el-icon>
                                </el-button>
                                <el-button size="small" circle type="danger" @click="deleteActivity(activity)">
                                    <el-icon>
                                        <Delete />
                                    </el-icon>
                                </el-button>
                            </div>
                        </div>
                        <div class="activity-content">
                            <h3 class="activity-title">{{ activity.title }}</h3>
                            <p class="activity-desc">{{ activity.description }}</p>
                            <div class="activity-meta">
                                <div class="meta-item">
                                    <el-icon>
                                        <Calendar />
                                    </el-icon>
                                    <span>{{ activity.startTime }}</span>
                                </div>
                                <div class="meta-item">
                                    <el-icon>
                                        <Location />
                                    </el-icon>
                                    <span>{{ activity.location }}</span>
                                </div>
                                <div class="meta-item">
                                    <el-icon>
                                        <User />
                                    </el-icon>
                                    <span>{{ activity.participants }}人参与</span>
                                </div>
                            </div>
                            <div class="activity-progress" v-if="activity.status === 'ongoing'">
                                <div class="progress-text">进度：{{ activity.progress }}%</div>
                                <el-progress :percentage="activity.progress" :stroke-width="6" />
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>

        <!-- 分页 -->
        <div class="pagination-section">
            <el-pagination v-model:current-page="pagination.current" v-model:page-size="pagination.size"
                :page-sizes="[12, 24, 48, 96]" :total="pagination.total"
                layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange"
                @current-change="handleCurrentChange" />
        </div>

        <!-- 编辑弹窗 -->
        <el-dialog v-model="editVisible" :title="editForm.id ? '编辑活动' : '发布活动'" width="600px"
            :close-on-click-modal="false" class="activity-dialog">
            <el-form :model="editForm" :rules="rules" ref="editFormRef" label-width="100px">
                <el-form-item label="活动名称" prop="title">
                    <el-input v-model="editForm.title" placeholder="请输入活动名称" />
                </el-form-item>
                <el-form-item label="活动类型" prop="type">
                    <el-select v-model="editForm.type" placeholder="请选择活动类型">
                        <el-option label="教育帮扶" value="education" />
                        <el-option label="心理辅导" value="psychology" />
                        <el-option label="生活帮扶" value="life" />
                        <el-option label="医疗帮扶" value="medical" />
                    </el-select>
                </el-form-item>
                <el-form-item label="活动描述" prop="description">
                    <el-input v-model="editForm.description" type="textarea" :rows="3" placeholder="请输入活动描述" />
                </el-form-item>
                <el-form-item label="活动时间" prop="timeRange">
                    <el-date-picker v-model="editForm.timeRange" type="datetimerange" range-separator="至"
                        start-placeholder="开始时间" end-placeholder="结束时间" format="YYYY-MM-DD HH:mm"
                        value-format="YYYY-MM-DD HH:mm:ss" />
                </el-form-item>
                <el-form-item label="活动地点" prop="location">
                    <el-input v-model="editForm.location" placeholder="请输入活动地点" />
                </el-form-item>
                <el-form-item label="参与人数" prop="maxParticipants">
                    <el-input-number v-model="editForm.maxParticipants" :min="1" :max="1000" />
                </el-form-item>
                <el-form-item label="活动图片" prop="image">
                    <el-upload class="activity-uploader" :show-file-list="false" :before-upload="beforeUpload"
                        :on-success="handleUploadSuccess" action="#">
                        <img v-if="editForm.image" :src="editForm.image" class="uploaded-image" />
                        <el-icon v-else class="uploader-icon">
                            <Plus />
                        </el-icon>
                    </el-upload>
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button @click="editVisible = false">取消</el-button>
                <el-button type="primary" @click="saveActivity">保存</el-button>
            </template>
        </el-dialog>

        <!-- 删除确认弹窗 -->
        <el-dialog v-model="deleteVisible" title="确认删除" width="400px" :close-on-click-modal="false">
            <div class="delete-content">
                <el-icon class="delete-icon">
                    <Warning />
                </el-icon>
                <p>确定要删除活动"{{ deleteActivityInfo.title }}"吗？</p>
                <p class="delete-tip">删除后无法恢复，请谨慎操作。</p>
            </div>
            <template #footer>
                <el-button @click="deleteVisible = false">取消</el-button>
                <el-button type="danger" @click="confirmDelete">确定删除</el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import {
    Plus,
    Search,
    Edit,
    Delete,
    Calendar,
    Location,
    User,
    Warning
} from '@element-plus/icons-vue'

const searchForm = reactive({
    keyword: '',
    status: '',
    type: ''
})

const pagination = reactive({
    current: 1,
    size: 12,
    total: 0
})

const activities = ref([
    {
        id: 1,
        title: '春季助学活动',
        description: '为山区儿童提供教育支持和学习用品，帮助他们获得更好的学习机会。',
        type: 'education',
        image: '/activity1.jpg',
        startTime: '2024-03-15 09:00',
        location: '山区小学',
        participants: 45,
        maxParticipants: 50,
        status: 'ongoing',
        statusText: '进行中',
        progress: 65
    },
    {
        id: 2,
        title: '心理健康辅导',
        description: '专业心理咨询师为留守儿童提供心理支持，帮助他们健康成长。',
        type: 'psychology',
        image: '/activity2.jpg',
        startTime: '2024-03-20 14:00',
        location: '社区中心',
        participants: 32,
        maxParticipants: 40,
        status: 'upcoming',
        statusText: '即将开始',
        progress: 0
    },
    {
        id: 3,
        title: '艺术兴趣班',
        description: '开设绘画、音乐等艺术课程，培养孩子的艺术兴趣和创造力。',
        type: 'education',
        image: '/activity3.jpg',
        startTime: '2024-03-25 10:00',
        location: '文化中心',
        participants: 28,
        maxParticipants: 30,
        status: 'completed',
        statusText: '已完成',
        progress: 100
    }
])

const editVisible = ref(false)
const deleteVisible = ref(false)
const editFormRef = ref()
const deleteActivityInfo = ref({ title: '' })

const editForm = reactive({
    id: undefined,
    title: '',
    type: '',
    description: '',
    timeRange: [],
    location: '',
    maxParticipants: 50,
    image: ''
})

const rules = {
    title: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
    type: [{ required: true, message: '请选择活动类型', trigger: 'change' }],
    description: [{ required: true, message: '请输入活动描述', trigger: 'blur' }],
    timeRange: [{ required: true, message: '请选择活动时间', trigger: 'change' }],
    location: [{ required: true, message: '请输入活动地点', trigger: 'blur' }],
    maxParticipants: [{ required: true, message: '请输入参与人数', trigger: 'blur' }]
}

function handleSearch() {
    window.$message?.info('执行搜索...')
    // 实际搜索逻辑
}

function resetSearch() {
    Object.assign(searchForm, { keyword: '', status: '', type: '' })
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

function openEdit(activity?: any) {
    if (activity) {
        Object.assign(editForm, {
            ...activity,
            timeRange: [activity.startTime, activity.endTime]
        })
    } else {
        Object.assign(editForm, {
            id: undefined,
            title: '',
            type: '',
            description: '',
            timeRange: [],
            location: '',
            maxParticipants: 50,
            image: ''
        })
    }
    editVisible.value = true
}

function saveActivity() {
    editFormRef.value?.validate((valid: boolean) => {
        if (!valid) return
        window.$message?.success(editForm.id ? '活动更新成功' : '活动发布成功')
        editVisible.value = false
        handleSearch()
    })
}

function deleteActivity(activity: any) {
    deleteActivityInfo.value = activity
    deleteVisible.value = true
}

function confirmDelete() {
    window.$message?.success('活动删除成功')
    deleteVisible.value = false
    handleSearch()
}

function beforeUpload(file: File) {
    const isImg = file.type.startsWith('image/')
    if (!isImg) {
        window.$message?.error('只能上传图片文件')
    }
    return isImg
}

function handleUploadSuccess(res: any) {
    editForm.image = res.url || '/default-activity.jpg'
}

onMounted(() => {
    pagination.total = activities.value.length
})
</script>

<style scoped>
.activity-manage-bg {
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

.search-section {
    background: rgba(255, 255, 255, 0.95);
    padding: 24px;
    border-radius: 16px;
    margin-bottom: 24px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.activity-list {
    margin-bottom: 32px;
}

.activity-card {
    background: white;
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 24px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
}

.activity-card:hover {
    transform: translateY(-6px);
}

.activity-image {
    position: relative;
    height: 200px;
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
    left: 12px;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    color: white;
    font-weight: 500;
}

.activity-status.upcoming {
    background: #f39c12;
}

.activity-status.ongoing {
    background: #3498db;
}

.activity-status.completed {
    background: #27ae60;
}

.activity-status.cancelled {
    background: #e74c3c;
}

.activity-actions {
    position: absolute;
    top: 12px;
    right: 12px;
    display: flex;
    gap: 8px;
    opacity: 0;
    transition: opacity 0.2s;
}

.activity-card:hover .activity-actions {
    opacity: 1;
}

.activity-content {
    padding: 20px;
}

.activity-title {
    color: #2c3e50;
    margin: 0 0 12px 0;
    font-size: 1.2rem;
    font-weight: bold;
}

.activity-desc {
    color: #7f8c8d;
    margin: 0 0 16px 0;
    font-size: 0.9rem;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.activity-meta {
    margin-bottom: 16px;
}

.meta-item {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 0.9rem;
    color: #95a5a6;
}

.activity-progress {
    margin-top: 16px;
}

.progress-text {
    font-size: 0.9rem;
    color: #7f8c8d;
    margin-bottom: 8px;
}

.pagination-section {
    display: flex;
    justify-content: center;
    background: rgba(255, 255, 255, 0.95);
    padding: 24px;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.activity-dialog .el-dialog__body {
    padding: 24px;
}

.activity-uploader .uploaded-image {
    width: 120px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
}

.uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    border: 1px dashed #d9d9d9;
    border-radius: 8px;
}

.delete-content {
    text-align: center;
    padding: 20px 0;
}

.delete-icon {
    font-size: 48px;
    color: #f39c12;
    margin-bottom: 16px;
}

.delete-tip {
    color: #7f8c8d;
    font-size: 0.9rem;
    margin-top: 8px;
}

@media (max-width: 768px) {
    .page-header {
        flex-direction: column;
        gap: 16px;
        text-align: center;
    }

    .activity-card {
        margin-bottom: 16px;
    }

    .activity-image {
        height: 160px;
    }

    .activity-content {
        padding: 16px;
    }
}
</style>