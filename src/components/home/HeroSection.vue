<template>
    <section id="home" class="hero-gradient text-white py-20 md:py-32">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-10 md:mb-0">
                    <h1 class="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight mb-4">
                        让每个留守儿童<br>都感受到温暖
                    </h1>
                    <p class="text-lg md:text-xl opacity-90 mb-8">
                        童伴桥是连接留守儿童与爱心帮扶机构的桥梁，
                        我们致力于为留守儿童提供更多的关爱与支持。
                    </p>
                    <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <router-link to="/projects"
                            class="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors text-center">
                            我要帮扶
                        </router-link>
                        <router-link to="/register"
                            class="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-colors text-center">
                            加入我们
                        </router-link>
                    </div>
                    <div class="mt-10 flex items-center space-x-6">
                        <div class="flex -space-x-2">
                            <img src="https://picsum.photos/seed/user1/40/40" alt="用户头像"
                                class="w-10 h-10 rounded-full border-2 border-white">
                            <img src="https://picsum.photos/seed/user2/40/40" alt="用户头像"
                                class="w-10 h-10 rounded-full border-2 border-white">
                            <img src="https://picsum.photos/seed/user3/40/40" alt="用户头像"
                                class="w-10 h-10 rounded-full border-2 border-white">
                            <img src="https://picsum.photos/seed/user4/40/40" alt="用户头像"
                                class="w-10 h-10 rounded-full border-2 border-white">
                        </div>
                        <p class="text-sm opacity-90">已有 <span class="font-bold">1200+</span> 爱心人士加入</p>
                    </div>
                </div>
                <div class="md:w-1/2 relative">
                    <img src="https://picsum.photos/seed/children/600/400" alt="留守儿童与志愿者互动"
                        class="rounded-lg shadow-2xl w-full">
                    <div
                        class="absolute -bottom-6 -left-6 bg-white text-primary p-4 rounded-lg shadow-lg hidden md:block">
                        <p class="font-bold text-xl">320+</p>
                        <p class="text-sm">留守儿童已获得帮助</p>
                    </div>
                    <div
                        class="absolute -top-6 -right-6 bg-secondary text-white p-4 rounded-lg shadow-lg hidden md:block">
                        <p class="font-bold text-xl">56+</p>
                        <p class="text-sm">合作帮扶机构</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// 英雄区域组件
</script>

<style scoped>
.hero-gradient {
    background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
    color: white;
}

.text-primary {
    color: #2563eb;
}

.bg-secondary {
    background-color: #f97316;
}

.hover\:bg-white\/10:hover {
    background-color: rgba(255, 255, 255, 0.1);
}
</style>