<template>
    <el-container style="height: 100vh">
        <el-aside width="200px">
            <el-menu :default-active="$route.path" router>
                <el-menu-item index="/org/dashboard">仪表盘</el-menu-item>
                <el-menu-item index="/org/children">对接管理</el-menu-item>
                <el-menu-item index="/org/help">帮扶申请</el-menu-item>
                <el-menu-item index="/org/articles">文章管理</el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header style="background:#fff;box-shadow:0 1px 4px #eee;">机构后台</el-header>
            <el-main style="background:#f5f6fa;">
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>
<script setup lang="ts"></script>