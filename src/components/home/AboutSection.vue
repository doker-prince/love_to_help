<template>
    <section id="about" class="py-16 bg-neutral">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row items-center gap-12">
                <div class="md:w-1/2">
                    <img src="https://picsum.photos/seed/about/600/400" alt="关于我们" class="rounded-lg shadow-lg w-full">
                </div>
                <div class="md:w-1/2">
                    <h2 class="text-3xl md:text-4xl font-bold mb-6">关于童伴桥</h2>
                    <p class="text-gray-600 mb-6">
                        童伴桥是一个致力于连接留守儿童与爱心帮扶机构的第三方公益平台。我们成立于2020年，由一群关注儿童福利的志愿者发起，旨在通过互联网技术，打破地域限制，为留守儿童提供更多的关爱和帮助。
                    </p>
                    <p class="text-gray-600 mb-6">
                        我们的使命是让每个留守儿童都能感受到社会的关爱，拥有平等的成长机会。通过我们的平台，爱心人士可以直接了解留守儿童的需求，提供精准的帮助；帮扶机构可以发布项目，招募志愿者和筹集资源；政府部门可以监督和指导，确保帮扶工作规范、有序开展。
                    </p>
                    <div class="grid grid-cols-2 gap-4 mb-6">
                        <div class="flex items-center">
                            <i class="fa fa-check-circle text-primary mr-3"></i>
                            <span>500+ 志愿者团队</span>
                        </div>
                        <div class="flex items-center">
                            <i class="fa fa-check-circle text-primary mr-3"></i>
                            <span>覆盖20个省份</span>
                        </div>
                        <div class="flex items-center">
                            <i class="fa fa-check-circle text-primary mr-3"></i>
                            <span>100% 资金透明</span>
                        </div>
                        <div class="flex items-center">
                            <i class="fa fa-check-circle text-primary mr-3"></i>
                            <span>50+ 合作企业</span>
                        </div>
                    </div>
                    <div class="text-center mt-8">
                        <router-link to="/about"
                            class="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors">
                            了解更多
                            <i class="fa fa-arrow-right ml-2"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// 关于我们组件
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

.hover\:bg-primary\/90:hover {
    background-color: rgba(37, 99, 235, 0.9);
}
</style>