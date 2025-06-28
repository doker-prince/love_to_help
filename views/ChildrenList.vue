<template>
  <div class="py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">留守儿童列表</h1>
          <p class="mt-1 text-gray-600">我们关注的 {{ children.length }} 名留守儿童，等待您的帮助</p>
        </div>
        <div class="mt-4 md:mt-0 flex items-center space-x-4">
          <div class="relative">
            <input 
              type="text" 
              placeholder="搜索儿童..." 
              class="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              v-model="searchQuery"
            >
            <i class="fa fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
          <button class="flex items-center text-primary hover:text-primary-dark">
            <i class="fa fa-filter mr-2"></i>
            <span>筛选</span>
          </button>
        </div>
      </div>
      
      <!-- 筛选条件 -->
      <div class="bg-white rounded-lg shadow-sm p-4 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">年龄范围</label>
            <select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50">
              <option value="">不限</option>
              <option value="0-6">0-6岁</option>
              <option value="7-12">7-12岁</option>
              <option value="13-18">13-18岁</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">所在地区</label>
            <select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50">
              <option value="">不限</option>
              <option value="华东">华东</option>
              <option value="华北">华北</option>
              <option value="华南">华南</option>
              <option value="西南">西南</option>
              <option value="西北">西北</option>
              <option value="东北">东北</option>
              <option value="华中">华中</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">帮扶状态</label>
            <select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50">
              <option value="">不限</option>
              <option value="0">待帮扶</option>
              <option value="1">部分帮扶</option>
              <option value="2">已帮扶</option>
            </select>
          </div>
        </div>
        <div class="mt-4 flex justify-end">
          <button class="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">
            应用筛选
          </button>
          <button class="ml-2 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
            重置
          </button>
        </div>
      </div>
      
      <!-- 儿童列表 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <ChildCard 
          v-for="child in filteredChildren" 
          :key="child.id" 
          :child="child" 
          @view-detail="viewChildDetail(child.id)"
        />
      </div>
      
      <!-- 分页 -->
      <div class="mt-12 flex justify-center">
        <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span class="sr-only">上一页</span>
            <i class="fa fa-chevron-left"></i>
          </a>
          <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-primary text-sm font-medium text-white">
            1
          </a>
          <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            2
          </a>
          <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            3
          </a>
          <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
            ...
          </span>
          <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            8
          </a>
          <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            9
          </a>
          <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span class="sr-only">下一页</span>
            <i class="fa fa-chevron-right"></i>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getChildrenList } from '@/api/child';
import ChildCard from '@/components/ChildCard.vue';

const router = useRouter();
const children = ref([]);
const searchQuery = ref('');
const loading = ref(false);
const error = ref(null);

// 获取过滤后的儿童列表
const filteredChildren = computed(() => {
  if (!searchQuery.value.trim()) return children.value;
  
  const query = searchQuery.value.toLowerCase().trim();
  return children.value.filter(child => 
    child.name.toLowerCase().includes(query) || 
    child.address.toLowerCase().includes(query) || 
    (child.age && child.age.toString().includes(query))
  );
});

// 获取儿童列表数据
const fetchChildren = async () => {
  loading.value = true;
  error.value = null;
  
  try {
    const response = await getChildrenList();
    children.value = response.data;
  } catch (err) {
    error.value = err.message || '获取儿童列表失败';
  } finally {
    loading.value = false;
  }
};

// 查看儿童详情
const viewChildDetail = (childId) => {
  router.push(`/children/${childId}`);
};

onMounted(fetchChildren);
</script>    