<template>
    <section class="py-12 bg-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div class="p-6 rounded-lg bg-blue-50">
                    <i class="fa fa-child text-3xl text-primary mb-3"></i>
                    <h3 class="text-3xl font-bold text-primary mb-1">1200+</h3>
                    <p class="text-gray-600">留守儿童</p>
                </div>
                <div class="p-6 rounded-lg bg-orange-50">
                    <i class="fa fa-building text-3xl text-secondary mb-3"></i>
                    <h3 class="text-3xl font-bold text-secondary mb-1">56+</h3>
                    <p class="text-gray-600">帮扶机构</p>
                </div>
                <div class="p-6 rounded-lg bg-green-50">
                    <i class="fa fa-users text-3xl text-green-600 mb-3"></i>
                    <h3 class="text-3xl font-bold text-green-600 mb-1">3200+</h3>
                    <p class="text-gray-600">爱心人士</p>
                </div>
                <div class="p-6 rounded-lg bg-purple-50">
                    <i class="fa fa-heart text-3xl text-purple-600 mb-3"></i>
                    <h3 class="text-3xl font-bold text-purple-600 mb-1">890+</h3>
                    <p class="text-gray-600">帮扶项目</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// 统计数据组件
</script>

<style scoped>
/* 组件样式 */
.text-primary {
    color: #2563eb;
}

.text-secondary {
    color: #f97316;
}

.bg-blue-50 {
    background-color: #eff6ff;
}

.bg-orange-50 {
    background-color: #fff7ed;
}

.bg-green-50 {
    background-color: #f0fdf4;
}

.bg-purple-50 {
    background-color: #faf5ff;
}
</style>