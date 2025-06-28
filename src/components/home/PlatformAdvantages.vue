<template>
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">为什么选择我们的平台</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">我们致力于打造一个透明、高效、可信赖的帮扶平台，让爱心传递更加顺畅</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- 优势卡片 1 -->
                <div class="bg-blue-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div class="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                        <i class="fa fa-shield text-primary text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">严格审核，确保真实</h3>
                    <p class="text-gray-600">我们对每个留守儿童和帮扶机构都进行严格的信息审核，确保信息真实可靠，让您的爱心不被辜负。</p>
                </div>

                <!-- 优势卡片 2 -->
                <div class="bg-orange-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div class="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-5">
                        <i class="fa fa-eye text-secondary text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">全程透明，可追溯</h3>
                    <p class="text-gray-600">所有帮扶项目和资金流向完全透明，您可以随时查看资金使用情况和帮扶效果，确保每一分爱心都用到实处。</p>
                </div>

                <!-- 优势卡片 3 -->
                <div class="bg-green-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div class="w-14 h-14 bg-green-600/10 rounded-full flex items-center justify-center mb-5">
                        <i class="fa fa-heart text-green-600 text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">精准帮扶，高效对接</h3>
                    <p class="text-gray-600">通过大数据分析和智能匹配，我们将爱心人士与最需要帮助的留守儿童和项目进行精准对接，提高帮扶效率。</p>
                </div>

                <!-- 优势卡片 4 -->
                <div class="bg-purple-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div class="w-14 h-14 bg-purple-600/10 rounded-full flex items-center justify-center mb-5">
                        <i class="fa fa-comments text-purple-600 text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">持续关注，长期陪伴</h3>
                    <p class="text-gray-600">我们不仅提供物质帮助，更注重留守儿童的心理健康和长期发展，通过定期回访和心理辅导，给予他们持续的关怀。</p>
                </div>

                <!-- 优势卡片 5 -->
                <div class="bg-red-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div class="w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center mb-5">
                        <i class="fa fa-line-chart text-red-500 text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">效果评估，持续改进</h3>
                    <p class="text-gray-600">我们建立了完善的帮扶效果评估体系，定期对帮扶项目进行评估和反馈，不断改进我们的服务和项目设计。</p>
                </div>

                <!-- 优势卡片 6 -->
                <div class="bg-indigo-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div class="w-14 h-14 bg-indigo-600/10 rounded-full flex items-center justify-center mb-5">
                        <i class="fa fa-handshake-o text-indigo-600 text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">多方合作，资源整合</h3>
                    <p class="text-gray-600">我们与政府、企业、社会组织等多方合作，整合资源，形成合力，为留守儿童提供更全面、更优质的帮助。</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// 平台优势组件
</script>

<style scoped>
/* 组件样式 */
.text-primary {
    color: #2563eb;
}

.text-secondary {
    color: #f97316;
}

.bg-primary\/10 {
    background-color: rgba(37, 99, 235, 0.1);
}

.bg-secondary\/10 {
    background-color: rgba(249, 115, 22, 0.1);
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

.bg-red-50 {
    background-color: #fef2f2;
}

.bg-indigo-50 {
    background-color: #eef2ff;
}

.bg-green-600\/10 {
    background-color: rgba(22, 163, 74, 0.1);
}

.bg-purple-600\/10 {
    background-color: rgba(147, 51, 234, 0.1);
}

.bg-red-500\/10 {
    background-color: rgba(239, 68, 68, 0.1);
}

.bg-indigo-600\/10 {
    background-color: rgba(79, 70, 229, 0.1);
}
</style>