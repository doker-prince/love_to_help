<template>
    <div class="min-h-screen bg-gray-50 p-8">
        <div class="max-w-4xl mx-auto">
            <div class="flex justify-between items-center mb-8">
                <h2 class="text-2xl font-bold text-gray-900">选择帮扶儿童</h2>
                <router-link to="/organization/children" class="text-indigo-600 hover:underline">返回帮扶儿童列表</router-link>
            </div>
            <div class="bg-white rounded-lg shadow-sm p-6">
                <div class="mb-6 flex gap-4">
                    <input v-model="search" class="flex-1 border rounded px-3 py-2" placeholder="搜索儿童姓名..." />
                    <button @click="searchChildren"
                        class="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">搜索</button>
                </div>
                <div v-if="loading" class="text-center py-12">
                    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
                    <p class="mt-4 text-gray-600">加载中...</p>
                </div>
                <div v-else-if="filteredChildren.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div v-for="child in filteredChildren" :key="child.id"
                        class="border border-gray-200 rounded-lg p-6 flex gap-4 items-center">
                        <img :src="child.avatarUrl || defaultAvatar"
                            class="w-16 h-16 rounded-full object-cover border" />
                        <div class="flex-1">
                            <h4 class="text-lg font-semibold text-gray-900">{{ child.name }}</h4>
                            <p class="text-sm text-gray-500">年龄：{{ child.age }} 岁 | 性别：{{ child.gender === 'male' ? '男'
                                : '女' }}</p>
                            <p class="text-sm text-gray-500">地区：{{ child.region }}</p>
                            <p class="text-xs text-gray-400 mt-1">{{ child.description }}</p>
                        </div>
                        <button @click="addToOrg(child)" :disabled="child.added || addingId === child.id"
                            class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50">
                            {{ child.added ? '已添加' : (addingId === child.id ? '添加中...' : '添加到本机构') }}
                        </button>
                    </div>
                </div>
                <div v-else class="text-center py-12 text-gray-500">暂无可添加的儿童</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const loading = ref(false)
const addingId = ref<number | null>(null)
const search = ref('')
const defaultAvatar = 'https://cdn.jsdelivr.net/gh/baimingxuan/media-host@master/child-avatar.png'

// 假数据：所有待帮扶儿童
const allChildren = ref(Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `待帮扶儿童${i + 1}`,
    age: 7 + (i % 6),
    gender: i % 2 === 0 ? 'male' : 'female',
    region: ['四川', '云南', '贵州', '广西', '湖南'][i % 5] + '省',
    avatarUrl: '',
    description: `这是第${i + 1}个待帮扶儿童的简介。`,
    added: false
})))

const filteredChildren = computed(() => {
    if (!search.value) return allChildren.value
    return allChildren.value.filter(c => c.name.includes(search.value))
})

function searchChildren() {
    // 假搜索，实际已响应式
}

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

async function addToOrg(child: any) {
    addingId.value = child.id
    try {
        // 模拟API
        await new Promise(r => setTimeout(r, 1000))
        child.added = true
        showToast('添加成功', 'success')
    } catch (e) {
        showToast('添加失败', 'error')
    } finally {
        addingId.value = null
    }
}
</script>