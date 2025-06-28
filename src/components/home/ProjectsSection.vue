<template>
    <section id="projects" class="py-16 bg-neutral">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">正在进行的帮扶项目</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">我们与多家爱心机构合作，开展了多个帮扶项目，致力于改善留守儿童的生活和学习条件</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- 项目卡片 1 -->
                <div class="bg-white rounded-xl overflow-hidden card-shadow hover:shadow-xl transition-shadow">
                    <div class="relative">
                        <img src="https://picsum.photos/seed/project1/600/400" alt="图书角建设项目"
                            class="w-full h-48 object-cover">
                        <div
                            class="absolute top-4 right-4 bg-orange-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                            教育支持
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">乡村小学图书角建设</h3>
                        <p class="text-gray-600 mb-4">为乡村小学建设图书角，提供优质图书资源，培养孩子们的阅读习惯和学习兴趣。</p>
                        <div class="mb-4">
                            <div class="flex justify-between text-sm mb-1">
                                <span class="font-medium">已筹：¥12,580</span>
                                <span class="text-gray-500">目标：¥20,000</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-primary h-2 rounded-full" style="width: 63%"></div>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500">剩余时间：15天</span>
                            <router-link to="/projects/1"
                                class="text-primary font-medium hover:underline">了解详情</router-link>
                        </div>
                    </div>
                </div>

                <!-- 项目卡片 2 -->
                <div class="bg-white rounded-xl overflow-hidden card-shadow hover:shadow-xl transition-shadow">
                    <div class="relative">
                        <img src="https://picsum.photos/seed/project2/600/400" alt="心理健康关怀项目"
                            class="w-full h-48 object-cover">
                        <div
                            class="absolute top-4 right-4 bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                            心理健康
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">留守儿童心理健康关怀</h3>
                        <p class="text-gray-600 mb-4">为留守儿童提供心理咨询和心理辅导服务，帮助他们解决情感问题和心理压力。</p>
                        <div class="mb-4">
                            <div class="flex justify-between text-sm mb-1">
                                <span class="font-medium">已筹：¥8,350</span>
                                <span class="text-gray-500">目标：¥15,000</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-primary h-2 rounded-full" style="width: 56%"></div>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500">剩余时间：22天</span>
                            <router-link to="/projects/2"
                                class="text-primary font-medium hover:underline">了解详情</router-link>
                        </div>
                    </div>
                </div>

                <!-- 项目卡片 3 -->
                <div class="bg-white rounded-xl overflow-hidden card-shadow hover:shadow-xl transition-shadow">
                    <div class="relative">
                        <img src="https://picsum.photos/seed/project3/600/400" alt="温暖过冬项目"
                            class="w-full h-48 object-cover">
                        <div
                            class="absolute top-4 right-4 bg-red-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                            生活保障
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">温暖过冬计划</h3>
                        <p class="text-gray-600 mb-4">为偏远地区的留守儿童提供冬季保暖衣物和生活用品，让他们度过一个温暖的冬天。</p>
                        <div class="mb-4">
                            <div class="flex justify-between text-sm mb-1">
                                <span class="font-medium">已筹：¥25,680</span>
                                <span class="text-gray-500">目标：¥30,000</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-primary h-2 rounded-full" style="width: 86%"></div>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500">剩余时间：8天</span>
                            <router-link to="/projects/3"
                                class="text-primary font-medium hover:underline">了解详情</router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-10">
                <router-link to="/projects"
                    class="inline-flex items-center px-5 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white transition-colors">
                    查看更多项目
                    <i class="fa fa-arrow-right ml-2"></i>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// 帮扶项目组件
</script>

<style scoped>
/* 组件样式 */
.bg-neutral {
    background-color: #f3f4f6;
}

.text-primary {
    color: #2563eb;
}

.text-secondary {
    color: #f97316;
}

.bg-primary {
    background-color: #2563eb;
}

.bg-orange-500 {
    background-color: #f97316;
}

.card-shadow {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hover\:bg-primary:hover {
    background-color: #2563eb;
}

.hover\:text-white:hover {
    color: white;
}
</style>