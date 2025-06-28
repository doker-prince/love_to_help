<template>
    <section id="children" class="py-16 bg-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">需要帮助的留守儿童</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">每一个孩子都有自己的故事和梦想，您的一份爱心可能改变他们的一生</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- 儿童卡片 1 -->
                <div
                    class="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all shadow-md">
                    <div class="relative">
                        <img src="https://picsum.photos/seed/child1/400/300" alt="小明的照片"
                            class="w-full h-56 object-cover">
                        <div
                            class="absolute top-4 right-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                            小学四年级
                        </div>
                    </div>
                    <div class="p-5">
                        <div class="flex justify-between items-center mb-3">
                            <h3 class="text-lg font-bold">小明 <span class="text-gray-500 text-sm font-normal">10岁</span>
                            </h3>
                            <span class="text-orange-500 font-medium">已帮扶：50%</span>
                        </div>
                        <p class="text-gray-600 text-sm mb-4">父母常年在外打工，与爷爷奶奶一起生活。小明学习成绩优异，尤其喜欢数学和科学。</p>
                        <div class="flex justify-between items-center">
                            <span class="text-xs text-gray-500">湖北省黄冈市</span>
                            <router-link to="/children/1"
                                class="text-primary text-sm font-medium hover:underline">帮助他</router-link>
                        </div>
                    </div>
                </div>

                <!-- 儿童卡片 2 -->
                <div
                    class="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all shadow-md">
                    <div class="relative">
                        <img src="https://picsum.photos/seed/child2/400/300" alt="小花的照片"
                            class="w-full h-56 object-cover">
                        <div
                            class="absolute top-4 right-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                            小学二年级
                        </div>
                    </div>
                    <div class="p-5">
                        <div class="flex justify-between items-center mb-3">
                            <h3 class="text-lg font-bold">小花 <span class="text-gray-500 text-sm font-normal">8岁</span>
                            </h3>
                            <span class="text-orange-500 font-medium">已帮扶：30%</span>
                        </div>
                        <p class="text-gray-600 text-sm mb-4">母亲在小花很小的时候就离开了家，父亲外出打工，她和年迈的奶奶相依为命。小花喜欢画画。</p>
                        <div class="flex justify-between items-center">
                            <span class="text-xs text-gray-500">云南省丽江市</span>
                            <router-link to="/children/2"
                                class="text-primary text-sm font-medium hover:underline">帮助她</router-link>
                        </div>
                    </div>
                </div>

                <!-- 儿童卡片 3 -->
                <div
                    class="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all shadow-md">
                    <div class="relative">
                        <img src="https://picsum.photos/seed/child3/400/300" alt="小刚的照片"
                            class="w-full h-56 object-cover">
                        <div
                            class="absolute top-4 right-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                            初中一年级
                        </div>
                    </div>
                    <div class="p-5">
                        <div class="flex justify-between items-center mb-3">
                            <h3 class="text-lg font-bold">小刚 <span class="text-gray-500 text-sm font-normal">13岁</span>
                            </h3>
                            <span class="text-orange-500 font-medium">已帮扶：70%</span>
                        </div>
                        <p class="text-gray-600 text-sm mb-4">父母在小刚很小的时候就去城市打工，他由爷爷奶奶照顾。小刚是学校篮球队的主力队员。</p>
                        <div class="flex justify-between items-center">
                            <span class="text-xs text-gray-500">四川省南充市</span>
                            <router-link to="/children/3"
                                class="text-primary text-sm font-medium hover:underline">帮助他</router-link>
                        </div>
                    </div>
                </div>

                <!-- 儿童卡片 4 -->
                <div
                    class="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all shadow-md">
                    <div class="relative">
                        <img src="https://picsum.photos/seed/child4/400/300" alt="小雨的照片"
                            class="w-full h-56 object-cover">
                        <div
                            class="absolute top-4 right-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                            小学五年级
                        </div>
                    </div>
                    <div class="p-5">
                        <div class="flex justify-between items-center mb-3">
                            <h3 class="text-lg font-bold">小雨 <span class="text-gray-500 text-sm font-normal">11岁</span>
                            </h3>
                            <span class="text-orange-500 font-medium">已帮扶：20%</span>
                        </div>
                        <p class="text-gray-600 text-sm mb-4">父亲因工伤失去劳动能力，母亲不得不外出打工养家。小雨需要照顾父亲和年幼的妹妹。</p>
                        <div class="flex justify-between items-center">
                            <span class="text-xs text-gray-500">贵州省黔东南州</span>
                            <router-link to="/children/4"
                                class="text-primary text-sm font-medium hover:underline">帮助她</router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-10">
                <router-link to="/children"
                    class="inline-flex items-center px-5 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white transition-colors">
                    查看更多儿童
                    <i class="fa fa-arrow-right ml-2"></i>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// 留守儿童组件
</script>

<style scoped>
/* 组件样式 */
.text-primary {
    color: #2563eb;
}

.bg-primary {
    background-color: #2563eb;
}

.text-orange-500 {
    color: #f97316;
}

.hover\:border-primary\/30:hover {
    border-color: rgba(37, 99, 235, 0.3);
}

.hover\:bg-primary:hover {
    background-color: #2563eb;
}

.hover\:text-white:hover {
    color: white;
}
</style>