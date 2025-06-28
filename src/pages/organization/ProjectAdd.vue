<template>
    <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <div class="w-full max-w-md bg-white rounded-lg shadow p-8">
            <h2 class="text-2xl font-bold mb-6">创建项目</h2>
            <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2">项目名称 <span class="text-red-500">*</span></label>
                    <input v-model="form.name" class="w-full border rounded px-3 py-2" placeholder="请输入项目名称" />
                    <p v-if="errors.name" class="text-red-500 text-xs mt-1">{{ errors.name }}</p>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2">目标金额 <span class="text-red-500">*</span></label>
                    <input v-model="form.targetAmount" type="number" min="1" class="w-full border rounded px-3 py-2"
                        placeholder="请输入目标金额" />
                    <p v-if="errors.targetAmount" class="text-red-500 text-xs mt-1">{{ errors.targetAmount }}</p>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2">项目描述 <span class="text-red-500">*</span></label>
                    <textarea v-model="form.description" class="w-full border rounded px-3 py-2"
                        placeholder="请输入项目描述"></textarea>
                    <p v-if="errors.description" class="text-red-500 text-xs mt-1">{{ errors.description }}</p>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2">开始时间 <span class="text-red-500">*</span></label>
                    <input v-model="form.startDate" type="date" class="w-full border rounded px-3 py-2" />
                    <p v-if="errors.startDate" class="text-red-500 text-xs mt-1">{{ errors.startDate }}</p>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2">结束时间</label>
                    <input v-model="form.endDate" type="date" class="w-full border rounded px-3 py-2" />
                </div>
                <button type="submit" :disabled="loading"
                    class="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 disabled:opacity-50">{{
                        loading ? '提交中...' : '提交' }}</button>
            </form>
            <router-link to="/organization/projects"
                class="block mt-6 text-indigo-600 hover:underline text-center">返回项目管理</router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const loading = ref(false)
const form = ref({
    name: '',
    targetAmount: '',
    description: '',
    startDate: '',
    endDate: ''
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
    if (!form.value.name) errors.value.name = '项目名称不能为空'
    if (!form.value.targetAmount) errors.value.targetAmount = '目标金额不能为空'
    if (!form.value.description) errors.value.description = '项目描述不能为空'
    if (!form.value.startDate) errors.value.startDate = '开始时间不能为空'
    return Object.keys(errors.value).length === 0
}

async function handleSubmit() {
    if (!validate()) return
    loading.value = true
    try {
        // 模拟API
        await new Promise(r => setTimeout(r, 1200))
        showToast('创建成功', 'success')
        setTimeout(() => router.push('/organization/projects'), 1200)
    } catch (e) {
        showToast('创建失败', 'error')
    } finally {
        loading.value = false
    }
}
</script>