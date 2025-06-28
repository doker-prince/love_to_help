<template>
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">为什么选择童伴桥</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">我们致力于为留守儿童提供最优质的帮扶服务，让每一份爱心都能精准传递</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- 专业团队 -->
                <div
                    class="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-all duration-300">
                    <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fa fa-users text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">专业团队</h3>
                    <p class="text-gray-600">拥有专业的社工团队和心理咨询师，确保帮扶质量</p>
                </div>

                <!-- 透明公开 -->
                <div
                    class="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300">
                    <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fa fa-eye text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">透明公开</h3>
                    <p class="text-gray-600">所有帮扶项目资金流向透明，定期公布项目进展</p>
                </div>

                <!-- 精准帮扶 -->
                <div
                    class="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-violet-50 hover:shadow-lg transition-all duration-300">
                    <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fa fa-bullseye text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">精准帮扶</h3>
                    <p class="text-gray-600">根据每个孩子的具体需求，提供个性化的帮扶方案</p>
                </div>

                <!-- 持续关注 -->
                <div
                    class="text-center p-6 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-lg transition-all duration-300">
                    <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fa fa-heart text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">持续关注</h3>
                    <p class="text-gray-600">建立长期帮扶关系，持续关注孩子的成长发展</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// 组件逻辑
</script>

<style scoped>
/* 组件样式 */
.bg-primary {
    background-color: #2563eb;
}

.text-primary {
    color: #2563eb;
}

/* 渐变背景 */
.from-blue-50 {
    --tw-gradient-from: #eff6ff;
    --tw-gradient-to: rgba(239, 246, 255, 0);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.to-indigo-50 {
    --tw-gradient-to: #eef2ff;
}

.from-green-50 {
    --tw-gradient-from: #f0fdf4;
    --tw-gradient-to: rgba(240, 253, 244, 0);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.to-emerald-50 {
    --tw-gradient-to: #ecfdf5;
}

.from-purple-50 {
    --tw-gradient-from: #faf5ff;
    --tw-gradient-to: rgba(250, 245, 255, 0);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.to-violet-50 {
    --tw-gradient-to: #f5f3ff;
}

.from-orange-50 {
    --tw-gradient-from: #fff7ed;
    --tw-gradient-to: rgba(255, 247, 237, 0);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.to-red-50 {
    --tw-gradient-to: #fef2f2;
}
</style>