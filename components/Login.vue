<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-bold text-gray-900">
          登录到童伴桥
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          或 <router-link to="/register" class="font-medium text-primary hover:text-primary-dark">立即注册</router-link>
        </p>
      </div>
      
      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div class="rounded-md shadow-sm -space-y-px">
          <div class="mb-4">
            <label for="username" class="sr-only">用户名</label>
            <input 
              type="text" 
              id="username" 
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" 
              placeholder="用户名"
              v-model="form.username"
            >
          </div>
          
          <div class="mb-4">
            <label for="password" class="sr-only">密码</label>
            <input 
              type="password" 
              id="password" 
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" 
              placeholder="密码"
              v-model="form.password"
            >
          </div>
          
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-2">用户类型</label>
            <div class="grid grid-cols-3 gap-4">
              <div v-for="role in roles" :key="role.id" class="relative">
                <input 
                  type="radio" 
                  :id="'role-' + role.id" 
                  :value="role.value" 
                  v-model="form.role"
                  class="sr-only peer"
                >
                <label 
                  :for="'role-' + role.id" 
                  class="block p-3 border border-gray-300 rounded-lg cursor-pointer text-center peer-checked:border-primary peer-checked:bg-primary/5 transition-all"
                >
                  <i class="fa" :class="role.icon || 'fa-user'"></i>
                  <span class="block mt-1">{{ role.name }}</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input 
              id="remember-me" 
              name="remember-me" 
              type="checkbox" 
              class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            >
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              记住我
            </label>
          </div>
          
          <div class="text-sm">
            <a href="#" class="font-medium text-primary hover:text-primary-dark">
              忘记密码?
            </a>
          </div>
        </div>
        
        <div>
          <button 
            type="submit" 
            class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
            :disabled="loading"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <i class="fa fa-sign-in text-white"></i>
            </span>
            {{ loading ? '登录中...' : '登录' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { store } from '../store.js';

const router = useRouter();
const form = ref({
  username: '',
  password: '',
  role: 'user' // 默认普通用户
});
const loading = ref(false);
const error = ref(null);

// 角色选项
const roles = [
  { id: 0, name: '普通用户', value: 'user', icon: 'fa-user' },
  { id: 1, name: '帮扶机构', value: 'organization', icon: 'fa-building' },
  { id: 2, name: '管理员', value: 'admin', icon: 'fa-shield' }
];

const handleLogin = async () => {
  loading.value = true;
  error.value = null;
  
  try {
    // 调用登录API
    await store.actions.login({ commit: store.mutations }, form.value);
    
    // 根据角色重定向
    if (form.value.role === 'admin') {
      router.push('/admin');
    } else if (form.value.role === 'organization') {
      router.push('/org-center');
    } else {
      router.push('/user-center');
    }
  } catch (err) {
    error.value = err.message || '登录失败，请检查用户名和密码';
  } finally {
    loading.value = false;
  }
};
</script>    