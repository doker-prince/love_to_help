<template>
    <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <div class="w-full max-w-2xl bg-white rounded-lg shadow p-8">
            <h2 class="text-2xl font-bold mb-6">添加儿童</h2>
            <form @submit.prevent="handleSubmit">
                <!-- 基础信息分组 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label class="block text-gray-700 mb-2">姓名 <span class="text-red-500">*</span></label>
                        <input v-model="form.name" class="w-full border rounded px-3 py-2" placeholder="请输入儿童姓名" />
                        <p v-if="errors.name" class="text-red-500 text-xs mt-1">{{ errors.name }}</p>
                    </div>
                    <div>
                        <label class="block text-gray-700 mb-2">年龄 <span class="text-red-500">*</span></label>
                        <input v-model="form.age" type="number" min="1" class="w-full border rounded px-3 py-2"
                            placeholder="请输入年龄" />
                        <p v-if="errors.age" class="text-red-500 text-xs mt-1">{{ errors.age }}</p>
                    </div>
                    <div>
                        <label class="block text-gray-700 mb-2">性别 <span class="text-red-500">*</span></label>
                        <select v-model="form.gender" class="w-full border rounded px-3 py-2">
                            <option value="">请选择</option>
                            <option value="male">男</option>
                            <option value="female">女</option>
                        </select>
                        <p v-if="errors.gender" class="text-red-500 text-xs mt-1">{{ errors.gender }}</p>
                    </div>
                    <div>
                        <label class="block text-gray-700 mb-2">地区 <span class="text-red-500">*</span></label>
                        <input v-model="form.region" class="w-full border rounded px-3 py-2" placeholder="请输入地区" />
                        <p v-if="errors.region" class="text-red-500 text-xs mt-1">{{ errors.region }}</p>
                    </div>
                </div>
                <!-- 头像上传 -->
                <div class="mb-6">
                    <label class="block text-gray-700 mb-2">头像</label>
                    <div class="flex items-center gap-4">
                        <img v-if="form.avatarUrl" :src="form.avatarUrl"
                            class="w-20 h-20 rounded-full object-cover border" />
                        <div v-else
                            class="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 border">
                            <span class="text-3xl">+</span>
                        </div>
                        <input type="file" accept="image/*" @change="onAvatarChange" class="ml-4" />
                    </div>
                    <p v-if="errors.avatar" class="text-red-500 text-xs mt-1">{{ errors.avatar }}</p>
                </div>
                <!-- 健康状况分组 -->
                <div class="mb-6">
                    <label class="block text-gray-700 mb-2">健康状况</label>
                    <input v-model="form.health" class="w-full border rounded px-3 py-2" placeholder="如：身体健康/有慢性病等" />
                </div>
                <!-- 家庭情况分组 -->
                <div class="mb-6">
                    <label class="block text-gray-700 mb-2">家庭情况</label>
                    <textarea v-model="form.family" class="w-full border rounded px-3 py-2"
                        placeholder="如：单亲/留守/低保/孤儿等"></textarea>
                </div>
                <!-- 简介 -->
                <div class="mb-6">
                    <label class="block text-gray-700 mb-2">简介</label>
                    <textarea v-model="form.description" class="w-full border rounded px-3 py-2"
                        placeholder="请输入简介"></textarea>
                </div>
                <button type="submit" :disabled="loading"
                    class="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 disabled:opacity-50">{{
                        loading ? '提交中...' : '提交' }}</button>
            </form>
            <router-link to="/organization/children"
                class="block mt-6 text-indigo-600 hover:underline text-center">返回儿童管理</router-link>
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
    age: '',
    gender: '',
    region: '',
    avatarUrl: '',
    health: '',
    family: '',
    description: ''
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

function onAvatarChange(e: Event) {
    const file = (e.target as HTMLInputElement).files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) {
        errors.value.avatar = '请上传图片文件'
        return
    }
    const reader = new FileReader()
    reader.onload = (ev) => {
        form.value.avatarUrl = ev.target?.result as string
        errors.value.avatar = ''
    }
    reader.readAsDataURL(file)
}

function validate() {
    errors.value = {}
    if (!form.value.name) errors.value.name = '姓名不能为空'
    if (!form.value.age) errors.value.age = '年龄不能为空'
    if (!form.value.gender) errors.value.gender = '性别不能为空'
    if (!form.value.region) errors.value.region = '地区不能为空'
    // 头像不是必填
    return Object.keys(errors.value).length === 0
}

async function handleSubmit() {
    if (!validate()) return
    loading.value = true
    try {
        // 模拟API
        await new Promise(r => setTimeout(r, 1200))
        showToast('添加成功', 'success')
        setTimeout(() => router.push('/children'), 1200)
    } catch (e) {
        showToast('添加失败', 'error')
    } finally {
        loading.value = false
    }
}
</script>