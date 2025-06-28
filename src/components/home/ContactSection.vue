<template>
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">联系我们</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">如果您有任何问题或建议，欢迎随时联系我们，我们将尽快回复您</p>
            </div>

            <div class="flex flex-col md:flex-row gap-8">
                <div class="md:w-1/3">
                    <div class="bg-blue-50 rounded-xl p-6 h-full">
                        <h3 class="text-xl font-bold mb-6">联系方式</h3>
                        <div class="space-y-4">
                            <div class="flex items-start">
                                <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                                    <i class="fa fa-map-marker text-primary"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium mb-1">地址</h4>
                                    <p class="text-gray-600">北京市朝阳区建国路88号</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                                    <i class="fa fa-phone text-primary"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium mb-1">电话</h4>
                                    <p class="text-gray-600">010-12345678</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                                    <i class="fa fa-envelope text-primary"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium mb-1">邮箱</h4>
                                    <p class="text-gray-600">contact@tongbanqiao.org</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                                    <i class="fa fa-weixin text-primary"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium mb-1">微信公众号</h4>
                                    <p class="text-gray-600">童伴桥</p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-8">
                            <h4 class="font-medium mb-3">关注我们</h4>
                            <div class="flex space-x-4">
                                <a href="#"
                                    class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                                    <i class="fa fa-weibo"></i>
                                </a>
                                <a href="#"
                                    class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                                    <i class="fa fa-weixin"></i>
                                </a>
                                <a href="#"
                                    class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                                    <i class="fa fa-qq"></i>
                                </a>
                                <a href="#"
                                    class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                                    <i class="fa fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md:w-2/3">
                    <div class="bg-white rounded-xl border border-gray-200 p-6">
                        <h3 class="text-xl font-bold mb-6">发送消息</h3>
                        <form>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label for="name" class="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                                    <input type="text" id="name"
                                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                                        placeholder="请输入您的姓名">
                                </div>
                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
                                    <input type="email" id="email"
                                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                                        placeholder="请输入您的邮箱">
                                </div>
                            </div>
                            <div class="mb-6">
                                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">主题</label>
                                <input type="text" id="subject"
                                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                                    placeholder="请输入消息主题">
                            </div>
                            <div class="mb-6">
                                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">消息内容</label>
                                <textarea id="message" rows="5"
                                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                                    placeholder="请输入您的消息内容"></textarea>
                            </div>
                            <div class="text-center mt-8">
                                <router-link to="/contact"
                                    class="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors">
                                    联系我们
                                    <i class="fa fa-envelope ml-2"></i>
                                </router-link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// 联系我们组件
</script>

<style scoped>
/* 组件样式 */
.text-primary {
    color: #2563eb;
}

.bg-primary {
    background-color: #2563eb;
}

.bg-primary\/10 {
    background-color: rgba(37, 99, 235, 0.1);
}

.bg-blue-50 {
    background-color: #eff6ff;
}

.hover\:bg-primary:hover {
    background-color: #1d4ed8;
}

.hover\:bg-primary\/90:hover {
    background-color: rgba(37, 99, 235, 0.9);
}

.focus\:ring-primary\/50:focus {
    --tw-ring-color: rgba(37, 99, 235, 0.5);
}

.focus\:border-primary:focus {
    border-color: #2563eb;
}
</style>