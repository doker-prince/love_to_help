<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// 初始化应用
onMounted(() => {
    console.log('童伴桥应用已启动')
    console.log('当前登录状态:', !!localStorage.getItem('token'))
})
</script>

<style>
#app {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
}
</style>