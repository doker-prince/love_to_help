<template>
  <div class="py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">帮扶项目列表</h1>
          <p class="mt-1 text-gray-600">正在进行的 {{ activeProjects.length }} 个帮扶项目，期待您的参与</p>
        </div>
        <div class="mt-4 md:mt-0 flex items-center space-x-4">
          <div class="relative">
            <input 
              type="text" 
              placeholder="搜索项目..." 
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
      
      <!-- 项目分类标签 -->
      <div class="flex flex-wrap gap-2 mb-8">
        <button class="px-4 py-2 bg-primary text-white rounded-full text-sm">全部项目</button>
        <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors">教育支持</button>
        <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors">生活改善</button>
        <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors">心理关怀</button>
        <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors">医疗救助</button>
        <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors">技能培训</button>
      </div>
      
      <!-- 项目列表 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          v-for="project in filteredProjects" 
          :key="project.id" 
          :project="project" 
          @view-detail="viewProjectDetail(project.id)"
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
            6
          </a>
          <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            7
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
import { getProjectsList } from '@/api/project';
import ProjectCard from '@/components/ProjectCard.vue';

const router = useRouter();
const projects = ref([]);
const searchQuery = ref('');
const loading = ref(false);
const error = ref(null);

// 获取活跃项目
const activeProjects = computed(() => 
  projects.value.filter(p => p.status === 1) // 1表示进行中
);

// 获取过滤后的项目列表
const filteredProjects = computed(() => {
  if (!searchQuery.value.trim()) return activeProjects.value;
  
  const query = searchQuery.value.toLowerCase().trim();
  return activeProjects.value.filter(project => 
    project.title.toLowerCase().includes(query) || 
    project.organization.name.toLowerCase().includes(query) || 
    project.description.toLowerCase().includes(query)
  );
});

// 获取项目列表数据
const fetchProjects = async () => {
  loading.value = true;
  error.value = null;
  
  try {
    const response = await getProjectsList();
    projects.value = response.data;
  } catch (err) {
    error.value = err.message || '获取项目列表失败';
  } finally {
    loading.value = false;
  }
};

// 查看项目详情
const viewProjectDetail = (projectId) => {
  router.push(`/projects/${projectId}`);
};

onMounted(fetchProjects);
</script>    