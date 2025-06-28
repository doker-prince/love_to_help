<template>
    <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <div class="w-full max-w-md bg-white rounded-lg shadow p-8">
            <h2 class="text-2xl font-bold mb-6">发布文章</h2>
            <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2">标题 <span class="text-red-500">*</span></label>
                    <input v-model="form.title" class="w-full border rounded px-3 py-2" placeholder="请输入文章标题" />
                    <p v-if="errors.title" class="text-red-500 text-xs mt-1">{{ errors.title }}</p>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2">摘要 <span class="text-red-500">*</span></label>
                    <input v-model="form.summary" class="w-full border rounded px-3 py-2" placeholder="请输入摘要" />
                    <p v-if="errors.summary" class="text-red-500 text-xs mt-1">{{ errors.summary }}</p>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2">内容 <span class="text-red-500">*</span></label>
                    <textarea v-model="form.content" class="w-full border rounded px-3 py-2"
                        placeholder="请输入文章内容"></textarea>
                    <p v-if="errors.content" class="text-red-500 text-xs mt-1">{{ errors.content }}</p>
                </div>
                <button type="submit" :disabled="loading"
                    class="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 disabled:opacity-50">{{
                        loading ? '提交中...' : '提交' }}</button>
            </form>
            <router-link to="/organization/articles"
                class="block mt-6 text-indigo-600 hover:underline text-center">返回文章管理</router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const loading = ref(false)
const form = ref({
    title: '',
    summary: '',
    content: ''
})
const errors = ref({} as Record<string, string>)

function showToast(msg: string, type: 'success' | 'error' = 'success') {
    const toast = document.createElement('div')
    toast.innerText = msg
    toast.style.position = 'fixed'
    toast.style.top = '30px'
    toast.style.left = '50%'
    toast.style.transform = 'translateX(-50%)'
    toast.style.background = type === 'success' ? '#22c55e' : '#ef4444'
    toast.style.color = '#fff'
    toast.style.padding = '10px 24px'
    toast.style.borderRadius = '6px'
    toast.style.fontSize = '16px'
    toast.style.zIndex = '9999'
    toast.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)'
    document.body.appendChild(toast)
    setTimeout(() => { toast.remove() }, 1800)
}

function validate() {
    errors.value = {}
    if (!form.value.title) errors.value.title = '标题不能为空'
    if (!form.value.summary) errors.value.summary = '摘要不能为空'
    if (!form.value.content) errors.value.content = '内容不能为空'
    return Object.keys(errors.value).length === 0
}

async function handleSubmit() {
    if (!validate()) return
    loading.value = true
    try {
        // 模拟API
        await new Promise(r => setTimeout(r, 1200))
        showToast('发布成功', 'success')
        setTimeout(() => router.push('/organization/articles'), 1200)
    } catch (e) {
        showToast('发布失败', 'error')
    } finally {
        loading.value = false
    }
}
</script>