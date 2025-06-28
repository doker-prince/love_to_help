<template>
    <section id="organizations" class="py-16 bg-neutral">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">爱心帮扶机构</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">感谢这些爱心机构的支持与合作，共同为留守儿童创造更好的生活条件</p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <!-- 机构卡片 1 -->
                <div class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fa fa-heart text-primary text-3xl"></i>
                    </div>
                    <h3 class="text-lg font-bold mb-2">中国儿童少年基金会</h3>
                    <p class="text-gray-600 text-sm mb-4">致力于促进儿童少年教育、健康、文化等事业的发展</p>
                    <router-link to="/organizations/1"
                        class="text-primary text-sm font-medium hover:underline">查看详情</router-link>
                </div>

                <!-- 机构卡片 2 -->
                <div class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fa fa-leaf text-green-600 text-3xl"></i>
                    </div>
                    <h3 class="text-lg font-bold mb-2">绿色未来公益组织</h3>
                    <p class="text-gray-600 text-sm mb-4">关注农村教育和环境保护，为留守儿童提供学习资源和环境教育</p>
                    <router-link to="/organizations/2"
                        class="text-primary text-sm font-medium hover:underline">查看详情</router-link>
                </div>

                <!-- 机构卡片 3 -->
                <div class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <div class="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fa fa-book text-purple-600 text-3xl"></i>
                    </div>
                    <h3 class="text-lg font-bold mb-2">阅读点亮童年</h3>
                    <p class="text-gray-600 text-sm mb-4">专注于为偏远地区儿童提供优质阅读资源，培养阅读习惯</p>
                    <router-link to="/organizations/3"
                        class="text-primary text-sm font-medium hover:underline">查看详情</router-link>
                </div>

                <!-- 机构卡片 4 -->
                <div class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <div class="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fa fa-medkit text-red-500 text-3xl"></i>
                    </div>
                    <h3 class="text-lg font-bold mb-2">健康护航公益联盟</h3>
                    <p class="text-gray-600 text-sm mb-4">为农村地区儿童提供健康检查和医疗救助服务</p>
                    <router-link to="/organizations/4"
                        class="text-primary text-sm font-medium hover:underline">查看详情</router-link>
                </div>

                <!-- 机构卡片 5 -->
                <div class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <div class="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fa fa-graduation-cap text-yellow-600 text-3xl"></i>
                    </div>
                    <h3 class="text-lg font-bold mb-2">知识改变命运基金会</h3>
                    <p class="text-gray-600 text-sm mb-4">资助贫困地区学生完成学业，提供教育资源和奖学金</p>
                    <router-link to="/organizations/5"
                        class="text-primary text-sm font-medium hover:underline">查看详情</router-link>
                </div>

                <!-- 机构卡片 6 -->
                <div class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <div class="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fa fa-home text-indigo-600 text-3xl"></i>
                    </div>
                    <h3 class="text-lg font-bold mb-2">温馨家园</h3>
                    <p class="text-gray-600 text-sm mb-4">为留守儿童提供心理辅导和生活关怀，创建温馨的成长环境</p>
                    <router-link to="/organizations/6"
                        class="text-primary text-sm font-medium hover:underline">查看详情</router-link>
                </div>

                <!-- 机构卡片 7 -->
                <div class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <div class="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fa fa-music text-pink-500 text-3xl"></i>
                    </div>
                    <h3 class="text-lg font-bold mb-2">艺术梦想</h3>
                    <p class="text-gray-600 text-sm mb-4">为农村儿童提供艺术教育和培训，发掘他们的艺术天赋</p>
                    <router-link to="/organizations/7"
                        class="text-primary text-sm font-medium hover:underline">查看详情</router-link>
                </div>

                <!-- 机构卡片 8 -->
                <div class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <div class="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fa fa-users text-teal-600 text-3xl"></i>
                    </div>
                    <h3 class="text-lg font-bold mb-2">志愿者联盟</h3>
                    <p class="text-gray-600 text-sm mb-4">组织志愿者参与留守儿童关爱活动，提供陪伴和帮助</p>
                    <router-link to="/organizations/8"
                        class="text-primary text-sm font-medium hover:underline">查看详情</router-link>
                </div>
            </div>

            <div class="text-center mt-10">
                <router-link to="/organizations"
                    class="inline-flex items-center px-5 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white transition-colors">
                    查看更多机构
                    <i class="fa fa-arrow-right ml-2"></i>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// 帮扶机构组件
</script>

<style scoped>
/* 组件样式 */
.bg-neutral {
    background-color: #f3f4f6;
}

.text-primary {
    color: #2563eb;
}

.bg-primary {
    background-color: #2563eb;
}

.bg-blue-100 {
    background-color: #dbeafe;
}

.bg-green-100 {
    background-color: #dcfce7;
}

.bg-purple-100 {
    background-color: #f3e8ff;
}

.bg-red-100 {
    background-color: #fee2e2;
}

.bg-yellow-100 {
    background-color: #fef3c7;
}

.bg-indigo-100 {
    background-color: #e0e7ff;
}

.bg-pink-100 {
    background-color: #fce7f3;
}

.bg-teal-100 {
    background-color: #ccfbf1;
}

.hover\:bg-primary:hover {
    background-color: #2563eb;
}

.hover\:text-white:hover {
    color: white;
}
</style>