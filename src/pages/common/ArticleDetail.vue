<template>
    <div class="min-h-screen bg-gray-50">
        <!-- 导航栏 -->
        <nav class="bg-white shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <router-link to="/" class="text-xl font-bold text-indigo-600">
                            童伴桥
                        </router-link>
                    </div>
                    <div class="flex items-center space-x-4">
                        <router-link to="/articles" class="text-gray-600 hover:text-gray-900">
                            返回文章列表
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>

        <!-- 文章内容 -->
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div v-if="loading" class="text-center py-12">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
                <p class="mt-4 text-gray-600">加载中...</p>
            </div>

            <div v-else-if="article" class="bg-white rounded-lg shadow-sm overflow-hidden">
                <!-- 文章头部 -->
                <div class="relative h-64 bg-gradient-to-r from-indigo-500 to-purple-600">
                    <img v-if="article.coverImage" :src="article.coverImage" :alt="article.title"
                        class="w-full h-full object-cover" />
                    <div class="absolute inset-0 bg-black bg-opacity-40"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h1 class="text-3xl font-bold mb-2">{{ article.title }}</h1>
                        <div class="flex items-center space-x-4 text-sm">
                            <span>作者：{{ article.author }}</span>
                            <span>分类：{{ article.category }}</span>
                            <span>阅读：{{ article.viewCount }}</span>
                            <span>{{ formatDate(article.createdAt) }}</span>
                        </div>
                    </div>
                </div>

                <!-- 文章标签 -->
                <div class="px-6 py-4 border-b">
                    <div class="flex flex-wrap gap-2">
                        <span v-for="tag in article.tags" :key="tag"
                            class="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">
                            {{ tag }}
                        </span>
                    </div>
                </div>

                <!-- 文章摘要 -->
                <div class="px-6 py-4 bg-gray-50">
                    <p class="text-gray-700 leading-relaxed">{{ article.summary }}</p>
                </div>

                <!-- 文章正文 -->
                <div class="px-6 py-8">
                    <div class="prose prose-lg max-w-none" v-html="article.content"></div>
                </div>

                <!-- 文章底部 -->
                <div class="px-6 py-4 border-t bg-gray-50">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center space-x-4 text-sm text-gray-600">
                            <span>更新时间：{{ formatDate(article.updatedAt) }}</span>
                        </div>
                        <div class="flex space-x-2">
                            <button class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                                分享
                            </button>
                            <button class="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                                收藏
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else class="text-center py-12">
                <div class="text-gray-500">
                    <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h3 class="mt-2 text-sm font-medium text-gray-900">文章不存在</h3>
                    <p class="mt-1 text-sm text-gray-500">抱歉，您访问的文章不存在或已被删除。</p>
                    <div class="mt-6">
                        <router-link to="/articles"
                            class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                            返回文章列表
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { Article } from '@/types'
import { fetchArticleDetail } from '@/api/article'

const route = useRoute()
const article = ref<Article | null>(null)
const loading = ref(true)

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

const loadArticle = async () => {
    try {
        loading.value = true
        const articleId = parseInt(route.params.id as string)
        const response = await fetchArticleDetail(articleId)
        article.value = response.data.data
    } catch (error) {
        console.error('加载文章失败:', error)
        article.value = null
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    loadArticle()
})
</script>

<style scoped>
.prose {
    line-height: 1.8;
}

.prose h1,
.prose h2,
.prose h3,
.prose h4,
.prose h5,
.prose h6 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
    color: #1f2937;
}

.prose p {
    margin-bottom: 1.5rem;
    color: #374151;
}

.prose img {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin: 1.5rem 0;
}

.prose blockquote {
    border-left: 4px solid #e5e7eb;
    padding-left: 1rem;
    margin: 1.5rem 0;
    font-style: italic;
    color: #6b7280;
}
</style>