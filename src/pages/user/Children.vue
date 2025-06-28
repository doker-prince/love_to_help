<template>
    <div class="children-bg">
        <div class="children-title">
            我的儿童信息
            <el-button type="primary" size="large" @click="openEdit()" style="margin-left:16px;">+ 新增儿童</el-button>
        </div>
        <el-row :gutter="24" class="children-row">
            <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="item in children" :key="item.id">
                <el-card class="child-card" shadow="hover">
                    <img :src="item.imgUrl || defaultImg" class="child-img" />
                    <div class="child-info">
                        <div class="child-name">{{ item.name }} <span class="child-gender"
                                :class="item.gender === 1 ? 'boy' : 'girl'">{{ item.gender === 1 ? '男' : '女' }}</span>
                        </div>
                        <div class="child-meta">年龄：{{ item.age }} 岁 | 学校：{{ item.schoolName }}</div>
                        <div class="child-desc">{{ item.desc || '暂无简介' }}</div>
                        <div class="child-actions">
                            <el-button size="small" @click="openEdit(item)">编辑</el-button>
                            <el-button size="small" type="danger" @click="onDelete(item)">删除</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <!-- 编辑弹窗 -->
        <el-dialog v-model="editVisible" :title="editForm.id ? '编辑儿童' : '新增儿童'" width="400px"
            :close-on-click-modal="false" class="child-dialog">
            <el-form :model="editForm" :rules="rules" ref="editFormRef" label-width="80px">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="editForm.name" />
                </el-form-item>
                <el-form-item label="性别" prop="gender">
                    <el-radio-group v-model="editForm.gender">
                        <el-radio :label="1">男</el-radio>
                        <el-radio :label="2">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input-number v-model="editForm.age" :min="1" :max="18" />
                </el-form-item>
                <el-form-item label="学校" prop="schoolName">
                    <el-input v-model="editForm.schoolName" />
                </el-form-item>
                <el-form-item label="简介" prop="desc">
                    <el-input v-model="editForm.desc" type="textarea" :rows="2" />
                </el-form-item>
                <el-form-item label="照片" prop="imgUrl">
                    <el-upload class="avatar-uploader" :show-file-list="false" :before-upload="beforeUpload"
                        :on-success="handleUploadSuccess" action="#">
                        <img v-if="editForm.imgUrl" :src="editForm.imgUrl" class="avatar" />
                        <el-icon v-else class="avatar-uploader-icon">
                            <Plus />
                        </el-icon>
                    </el-upload>
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button @click="editVisible = false">取消</el-button>
                <el-button type="primary" @click="onSave">保存</el-button>
            </template>
        </el-dialog>
        <!-- 删除确认弹窗 -->
        <el-dialog v-model="confirmVisible" title="提示" width="300px" :close-on-click-modal="false" class="child-dialog">
            <div>确定要删除该儿童信息吗？</div>
            <template #footer>
                <el-button @click="confirmVisible = false">取消</el-button>
                <el-button type="danger" @click="doDelete">确定</el-button>
            </template>
        </el-dialog>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { Plus } from '@element-plus/icons-vue'
const children = ref<any[]>([])
const defaultImg = '/default-child.jpg'
const editVisible = ref(false)
const confirmVisible = ref(false)
const editForm = reactive({ id: undefined, name: '', gender: 1, age: 1, schoolName: '', desc: '', imgUrl: '' })
const editFormRef = ref()
const rules = {
    name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
    gender: [{ required: true, message: '请选择性别', trigger: 'change' }],
    age: [{ required: true, message: '请输入年龄', trigger: 'blur' }],
    schoolName: [{ required: true, message: '请输入学校', trigger: 'blur' }],
}
const deleteId = ref()
function fetchList() {
    children.value = [
        { id: 1, name: '小明', gender: 1, age: 10, schoolName: '希望小学', desc: '喜欢画画，性格开朗', imgUrl: '/child1.jpg' },
        { id: 2, name: '小红', gender: 2, age: 12, schoolName: '阳光中学', desc: '爱好唱歌，乐于助人', imgUrl: '/child2.jpg' }
    ]
}
function openEdit(row?: any) {
    if (row) Object.assign(editForm, row)
    else Object.assign(editForm, { id: undefined, name: '', gender: 1, age: 1, schoolName: '', desc: '', imgUrl: '' })
    editVisible.value = true
}
function onSave() {
    editFormRef.value.validate((valid: boolean) => {
        if (!valid) return
        editVisible.value = false
        fetchList()
    })
}
function onDelete(row: any) {
    deleteId.value = row.id
    confirmVisible.value = true
}
function doDelete() {
    confirmVisible.value = false
    fetchList()
}
function beforeUpload(file: File) {
    const isImg = file.type.startsWith('image/')
    if (!isImg) {
        window.$message?.error('只能上传图片文件')
    }
    return isImg
}
function handleUploadSuccess(res: any) {
    editForm.imgUrl = res.url || defaultImg
}
onMounted(fetchList)
</script>
<style scoped>
.children-bg {
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f6fa 60%, #e0eafc 100%);
    padding: 32px 0 48px 0;
}

.children-title {
    font-size: 1.6rem;
    font-weight: bold;
    color: #2193b0;
    text-align: center;
    margin-bottom: 32px;
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.children-row {
    max-width: 1200px;
    margin: 0 auto;
}

.child-card {
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 32px;
    cursor: pointer;
    transition: transform 0.2s;
    min-height: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.child-card:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 8px 32px 0 rgba(33, 147, 176, 0.12);
}

.child-img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 16px 16px 0 0;
    background: #e0eafc;
}

.child-info {
    padding: 18px 14px 10px 14px;
    width: 100%;
}

.child-name {
    font-size: 1.1rem;
    font-weight: bold;
    color: #2193b0;
    margin-bottom: 4px;
}

.child-gender {
    font-size: 0.95rem;
    margin-left: 8px;
    padding: 2px 8px;
    border-radius: 8px;
    color: #fff;
}

.child-gender.boy {
    background: #6dd5ed;
}

.child-gender.girl {
    background: #fa709a;
}

.child-meta {
    color: #888;
    font-size: 0.98rem;
    margin-bottom: 8px;
}

.child-desc {
    color: #666;
    font-size: 1rem;
    margin-bottom: 12px;
    min-height: 36px;
}

.child-actions {
    display: flex;
    gap: 8px;
}

.child-dialog .el-dialog__body {
    padding-top: 18px;
    padding-bottom: 8px;
}

.avatar-uploader .avatar {
    width: 80px;
    height: 80px;
    display: block;
    border-radius: 8px;
    margin-bottom: 8px;
}

.avatar-uploader-icon {
    font-size: 32px;
    color: #aaa;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed #d9d9d9;
    border-radius: 8px;
}
</style>