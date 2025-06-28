<template>
  <div class="py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">用户中心</h1>
        <p class="mt-1 text-gray-600">欢迎回来，{{ user.username }}</p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- 侧边栏 -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            <div class="bg-primary p-6 text-white">
              <div class="flex items-center">
                <img 
                  src="https://picsum.photos/seed/user/100/100" 
                  alt="用户头像" 
                  class="w-16 h-16 rounded-full border-4 border-white/20 object-cover"
                >
                <div class="ml-4">
                  <h3 class="font-bold text-lg">{{ user.username }}</h3>
                  <p class="text-white/80 text-sm">{{ userRoleText }}</p>
                </div>
              </div>
            </div>
            
            <div class="p-4">
              <nav class="space-y-1">
                <a href="#" class="flex items-center px-4 py-3 text-primary bg-primary/5 rounded-lg">
                  <i class="fa fa-user-circle mr-3"></i>
                  <span>个人信息</span>
                </a>
                <a href="#" class="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                  <i class="fa fa-heart mr-3"></i>
                  <span>我的帮扶</span>
                </a>
                <a href="#" class="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                  <i class="fa fa-star mr-3"></i>
                  <span>收藏项目</span>
                </a>
                <a href="#" class="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                  <i class="fa fa-bell mr-3"></i>
                  <span>通知消息</span>
                </a>
                <a href="#" class="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                  <i class="fa fa-cog mr-3"></i>
                  <span>账户设置</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
        
        <!-- 主内容 -->
        <div class="lg:col-span-3">
          <!-- 数据概览 -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div class="bg-white rounded-xl shadow-sm p-6">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-gray-500 text-sm">帮扶次数</p>
                  <h3 class="text-3xl font-bold mt-1">12</h3>
                </div>
                <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                  <i class="fa fa-heart"></i>
                </div>
              </div>
              <div class="mt-4 flex items-center text-green-500 text-sm">
                <i class="fa fa-arrow-up mr-1"></i>
                <span>较上月增长 20%</span>
              </div>
            </div>
            
            <div class="bg-white rounded-xl shadow-sm p-6">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-gray-500 text-sm">帮扶金额</p>
                  <h3 class="text-3xl font-bold mt-1">¥3,600</h3>
                </div>
                <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <i class="fa fa-rmb"></i>
                </div>
              </div>
              <div class="mt-4 flex items-center text-green-500 text-sm">
                <i class="fa fa-arrow-up mr-1"></i>
                <span>较上月增长 15%</span>
              </div>
            </div>
            
            <div class="bg-white rounded-xl shadow-sm p-6">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-gray-500 text-sm">帮扶儿童</p>
                  <h3 class="text-3xl font-bold mt-1">8</h3>
                </div>
                <div class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <i class="fa fa-child"></i>
                </div>
              </div>
              <div class="mt-4 flex items-center text-gray-500 text-sm">
                <i class="fa fa-minus mr-1"></i>
                <span>与上月持平</span>
              </div>
            </div>
          </div>
          
          <!-- 最近帮扶记录 -->
          <div class="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
            <div class="px-6 py-4 border-b border-gray-100">
              <h3 class="font-bold text-lg">最近帮扶记录</h3>
            </div>
            <div class="p-6">
              <div class="space-y-4">
                <div class="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                  <img src="https://picsum.photos/seed/child1/60/60" alt="儿童照片" class="w-12 h-12 rounded-lg object-cover">
                  <div class="ml-4 flex-1">
                    <div class="flex items-center justify-between">
                      <h4 class="font-medium">李明</h4>
                      <span class="text-sm text-gray-500">2023-05-15</span>
                    </div>
                    <p class="text-sm text-gray-600">学习用品资助</p>
                  </div>
                  <div class="text-right">
                    <p class="font-bold text-primary">¥200</p>
                    <p class="text-xs text-gray-500">已完成</p>
                  </div>
                </div>
                
                <div class="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                  <img src="https://picsum.photos/seed/child2/60/60" alt="儿童照片" class="w-12 h-12 rounded-lg object-cover">
                  <div class="ml-4 flex-1">
                    <div class="flex items-center justify-between">
                      <h4 class="font-medium">王小花</h4>
                      <span class="text-sm text-gray-500">2023-05-10</span>
                    </div>
                    <p class="text-sm text-gray-600">生活费资助</p>
                  </div>
                  <div class="text-right">
                    <p class="font-bold text-primary">¥500</p>
                    <p class="text-xs text-gray-500">已完成</p>
                  </div>
                </div>
                
                <div class="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                  <img src="https://picsum.photos/seed/project1/60/60" alt="项目照片" class="w-12 h-12 rounded-lg object-cover">
                  <div class="ml-4 flex-1">
                    <div class="flex items-center justify-between">
                      <h4 class="font-medium">山区学校图书馆建设</h4>
                      <span class="text-sm text-gray-500">2023-05-05</span>
                    </div>
                    <p class="text-sm text-gray-600">项目捐赠</p>
                  </div>
                  <div class="text-right">
                    <p class="font-bold text-primary">¥1000</p>
                    <p class="text-xs text-gray-500">已完成</p>
                  </div>
                </div>
              </div>
              
              <div class="mt-6 text-center">
                <a href="#" class="text-primary hover:text-primary-dark text-sm font-medium">查看全部记录</a>
              </div>
            </div>
          </div>
          
          <!-- 帮扶数据统计 -->
          <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-100">
              <h3 class="font-bold text-lg">帮扶数据统计</h3>
            </div>
            <div class="p-6">
              <div class="h-80">
                <canvas id="donationChart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const user = computed(() => store.state.user);
const userRoleText = computed(() => {
  switch (user.value.role) {
    case 'user': return '普通用户';
    case 'organization': return '帮扶机构';
    case 'admin': return '管理员';
    default: return '未知角色';
  }
});

onMounted(() => {
  // 初始化图表
  const ctx = document.getElementById('donationChart').getContext('2d');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
      datasets: [{
        label: '帮扶金额(元)',
        data: [300, 500, 200, 800, 600, 700],
        borderColor: '#165DFF',
        backgroundColor: 'rgba(22, 93, 255, 0.1)',
        tension: 0.3,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          mode: 'index',
          intersect: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            drawBorder: false
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      }
    }
  });
});
</script>    