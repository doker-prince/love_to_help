<template>
    <div class="help-process-bg">
        <div class="help-process-title">
            帮扶对接流程
        </div>
        <div class="help-process-container">
            <div class="process-steps">
                <div class="step-item" v-for="(step, index) in steps" :key="index"
                    :class="{ active: currentStep >= index }">
                    <div class="step-icon">
                        <el-icon v-if="currentStep > index">
                            <Check />
                        </el-icon>
                        <span v-else>{{ index + 1 }}</span>
                    </div>
                    <div class="step-content">
                        <div class="step-title">{{ step.title }}</div>
                        <div class="step-desc">{{ step.desc }}</div>
                        <div class="step-time" v-if="step.time">{{ step.time }}</div>
                    </div>
                </div>
            </div>
            <div class="process-detail">
                <div class="detail-card">
                    <div class="detail-title">当前状态：{{ currentStepInfo.title }}</div>
                    <div class="detail-content">
                        <div class="detail-item">
                            <span class="label">申请时间：</span>
                            <span class="value">{{ helpInfo.applyTime }}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">申请编号：</span>
                            <span class="value">{{ helpInfo.applyNo }}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">帮扶类型：</span>
                            <span class="value">{{ helpInfo.helpType }}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">对接机构：</span>
                            <span class="value">{{ helpInfo.orgName }}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">预计完成：</span>
                            <span class="value">{{ helpInfo.expectedTime }}</span>
                        </div>
                    </div>
                    <div class="detail-actions">
                        <el-button type="primary" @click="viewDetail">查看详情</el-button>
                        <el-button @click="contactOrg">联系机构</el-button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 详情弹窗 -->
        <el-dialog v-model="detailVisible" title="帮扶详情" width="600px" :close-on-click-modal="false" class="help-dialog">
            <div class="detail-form">
                <el-descriptions :column="2" border>
                    <el-descriptions-item label="申请编号">{{ helpInfo.applyNo }}</el-descriptions-item>
                    <el-descriptions-item label="申请时间">{{ helpInfo.applyTime }}</el-descriptions-item>
                    <el-descriptions-item label="帮扶类型">{{ helpInfo.helpType }}</el-descriptions-item>
                    <el-descriptions-item label="对接机构">{{ helpInfo.orgName }}</el-descriptions-item>
                    <el-descriptions-item label="申请状态">{{ currentStepInfo.title }}</el-descriptions-item>
                    <el-descriptions-item label="预计完成">{{ helpInfo.expectedTime }}</el-descriptions-item>
                    <el-descriptions-item label="申请描述" :span="2">{{ helpInfo.description }}</el-descriptions-item>
                    <el-descriptions-item label="备注信息" :span="2">{{ helpInfo.remark || '暂无' }}</el-descriptions-item>
                </el-descriptions>
            </div>
            <template #footer>
                <el-button @click="detailVisible = false">关闭</el-button>
            </template>
        </el-dialog>
    </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { Check } from '@element-plus/icons-vue'
const currentStep = ref(2)
const detailVisible = ref(false)
const steps = [
    { title: '提交申请', desc: '填写帮扶申请信息', time: '2024-01-15 10:30' },
    { title: '审核中', desc: '机构审核申请材料', time: '2024-01-16 14:20' },
    { title: '对接中', desc: '与帮扶机构对接', time: '2024-01-18 09:15' },
    { title: '帮扶进行', desc: '开始帮扶活动', time: '2024-01-20 16:00' },
    { title: '完成', desc: '帮扶活动完成', time: '' }
]
const helpInfo = ref({
    applyNo: 'HP202401150001',
    applyTime: '2024-01-15 10:30:00',
    helpType: '教育帮扶',
    orgName: '阳光助学基金会',
    expectedTime: '2024-02-15',
    description: '孩子需要教育方面的帮助，希望能获得学习辅导和书籍支持。',
    remark: '已安排志愿者进行一对一辅导'
})
const currentStepInfo = computed(() => steps[currentStep.value])
function viewDetail() {
    detailVisible.value = true
}
function contactOrg() {
    window.$message?.info('正在连接机构联系方式...')
}
onMounted(() => {
    // 模拟数据加载
})
</script>
<style scoped>
.help-process-bg {
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 32px 0 48px 0;
}

.help-process-title {
    font-size: 1.8rem;
    font-weight: bold;
    color: #fff;
    text-align: center;
    margin-bottom: 48px;
    letter-spacing: 3px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.help-process-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 48px;
    padding: 0 24px;
}

.process-steps {
    flex: 1;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 32px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.step-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 32px;
    position: relative;
}

.step-item:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 20px;
    top: 50px;
    width: 2px;
    height: 40px;
    background: #e0e0e0;
    z-index: 1;
}

.step-item.active:not(:last-child)::after {
    background: #667eea;
}

.step-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    font-weight: bold;
    color: #999;
    z-index: 2;
    position: relative;
}

.step-item.active .step-icon {
    background: #667eea;
    color: #fff;
}

.step-content {
    flex: 1;
    padding-top: 4px;
}

.step-title {
    font-size: 1.1rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 4px;
}

.step-desc {
    color: #666;
    font-size: 0.95rem;
    margin-bottom: 4px;
}

.step-time {
    color: #999;
    font-size: 0.9rem;
}

.process-detail {
    flex: 1;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 32px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.detail-title {
    font-size: 1.3rem;
    font-weight: bold;
    color: #667eea;
    margin-bottom: 24px;
    text-align: center;
}

.detail-content {
    margin-bottom: 24px;
}

.detail-item {
    display: flex;
    margin-bottom: 12px;
    padding: 8px 0;
    border-bottom: 1px solid #f0f0f0;
}

.detail-item:last-child {
    border-bottom: none;
}

.detail-item .label {
    width: 100px;
    color: #666;
    font-weight: 500;
}

.detail-item .value {
    flex: 1;
    color: #333;
}

.detail-actions {
    display: flex;
    gap: 12px;
    justify-content: center;
}

.help-dialog .el-dialog__body {
    padding: 24px;
}

.detail-form {
    margin-bottom: 16px;
}

@media (max-width: 768px) {
    .help-process-container {
        flex-direction: column;
        gap: 24px;
    }

    .process-steps,
    .process-detail {
        padding: 24px;
    }
}
</style>