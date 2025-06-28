<template>
    <footer class="bg-dark text-white py-12">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                <div>
                    <div class="flex items-center mb-4">
                        <i class="fa fa-heart text-primary text-2xl mr-2"></i>
                        <span class="text-xl font-bold">童伴桥</span>
                    </div>
                    <p class="text-gray-400 mb-4">连接留守儿童与爱心帮扶机构的桥梁，让每个孩子都能感受到温暖。</p>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-primary transition-colors">
                            <i class="fa fa-weibo"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-primary transition-colors">
                            <i class="fa fa-weixin"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-primary transition-colors">
                            <i class="fa fa-qq"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-primary transition-colors">
                            <i class="fa fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4">快速链接</h3>
                    <ul class="space-y-2">
                        <li><router-link to="/projects"
                                class="text-gray-300 hover:text-white transition-colors">帮扶项目</router-link></li>
                        <li><router-link to="/children"
                                class="text-gray-300 hover:text-white transition-colors">留守儿童</router-link></li>
                        <li><router-link to="/organizations"
                                class="text-gray-300 hover:text-white transition-colors">支持机构</router-link></li>
                        <li><router-link to="/about"
                                class="text-gray-300 hover:text-white transition-colors">关于我们</router-link></li>
                        <li><router-link to="/news"
                                class="text-gray-300 hover:text-white transition-colors">新闻动态</router-link></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4">帮助中心</h3>
                    <ul class="space-y-2">
                        <li><router-link to="/help"
                                class="text-gray-300 hover:text-white transition-colors">常见问题</router-link></li>
                        <li><router-link to="/guide"
                                class="text-gray-300 hover:text-white transition-colors">使用指南</router-link></li>
                        <li><router-link to="/volunteer"
                                class="text-gray-300 hover:text-white transition-colors">志愿者招募</router-link></li>
                        <li><router-link to="/donation"
                                class="text-gray-300 hover:text-white transition-colors">捐赠方式</router-link></li>
                        <li><router-link to="/feedback"
                                class="text-gray-300 hover:text-white transition-colors">意见反馈</router-link></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4">联系我们</h3>
                    <div class="space-y-2 text-gray-300">
                        <p><i class="fa fa-map-marker mr-2"></i>北京市朝阳区建国门外大街1号</p>
                        <p><i class="fa fa-phone mr-2"></i>400-123-4567</p>
                        <p><i class="fa fa-envelope mr-2"></i>contact@tongbanqiao.org</p>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-700 pt-6 mt-8">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <p class="text-gray-400 text-sm">
                        © 2024 童伴桥. 保留所有权利.
                    </p>
                    <div class="flex space-x-6 mt-4 md:mt-0">
                        <router-link to="/privacy"
                            class="text-gray-400 hover:text-white text-sm transition-colors">隐私政策</router-link>
                        <router-link to="/terms"
                            class="text-gray-400 hover:text-white text-sm transition-colors">服务条款</router-link>
                        <router-link to="/sitemap"
                            class="text-gray-400 hover:text-white text-sm transition-colors">网站地图</router-link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
// 页脚组件
</script>

<style scoped>
/* 组件样式 */
.bg-dark {
    background-color: #1f2937;
}

.text-primary {
    color: #2563eb;
}

.text-gray-400 {
    color: #9ca3af;
}

.border-gray-800 {
    border-color: #1f2937;
}
</style>