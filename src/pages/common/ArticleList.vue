<template>
    <div class="article-list-bg">
        <div class="article-list-title">最新文章</div>
        <el-row :gutter="24" class="article-list-row">
            <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="item in articles" :key="item.id">
                <el-card class="article-card" shadow="hover" @click="goDetail(item)">
                    <img :src="item.cover || defaultImg" class="article-img" />
                    <div class="article-content">
                        <div class="article-title">{{ item.title }}</div>
                        <div class="article-desc">{{ item.desc }}</div>
                        <div class="article-meta">
                            <span>作者：{{ item.author }}</span>
                            <span>{{ item.createTime }}</span>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <div class="article-pagination">
            <el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize"
                :current-page="currentPage" @current-change="val => { currentPage = val; fetchList() }" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const articles = ref<any[]>([])
const total = ref(0)
const pageSize = ref(8)
const currentPage = ref(1)
const defaultImg = '/default-article.jpg'
function fetchList() {
    articles.value = [
        { id: 1, title: '关爱留守儿童，从心开始', desc: '让每一个孩子都能感受到温暖和希望。', author: '管理员', createTime: '2024-06-01', cover: '/cover1.jpg' },
        { id: 2, title: '帮扶机构在行动', desc: '多家机构联合开展帮扶活动。', author: '志愿者', createTime: '2024-06-02', cover: '/cover2.jpg' },
        { id: 3, title: '留守儿童的故事', desc: '他们的坚强与梦想。', author: '记者', createTime: '2024-06-03', cover: '/cover3.jpg' },
        { id: 4, title: '社会各界的关注', desc: '更多人加入帮扶行列。', author: '编辑', createTime: '2024-06-04', cover: '' }
    ]
    total.value = 16
}
function goDetail(item: any) {
    router.push(`/article/${item.id}`)
}
onMounted(fetchList)
</script>
<style scoped>
.article-list-bg {
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f6fa 60%, #e0eafc 100%);
    padding: 32px 0 48px 0;
}

.article-list-title {
    font-size: 2rem;
    font-weight: bold;
    color: #2193b0;
    text-align: center;
    margin-bottom: 32px;
    letter-spacing: 2px;
}

.article-list-row {
    max-width: 1200px;
    margin: 0 auto;
}

.article-card {
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 32px;
    cursor: pointer;
    transition: transform 0.2s;
}

.article-card:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 8px 32px 0 rgba(33, 147, 176, 0.12);
}

.article-img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 16px 16px 0 0;
    background: #e0eafc;
}

.article-content {
    padding: 18px 14px 10px 14px;
}

.article-title {
    font-size: 1.2rem;
    font-weight: bold;
    color: #2193b0;
    margin-bottom: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.article-desc {
    color: #666;
    font-size: 1rem;
    margin-bottom: 12px;
    min-height: 36px;
}

.article-meta {
    display: flex;
    justify-content: space-between;
    color: #aaa;
    font-size: 0.95rem;
}

.article-pagination {
    margin: 32px auto 0 auto;
    display: flex;
    justify-content: center;
}
</style>