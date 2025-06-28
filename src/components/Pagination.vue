<template>
    <el-pagination background layout="total, sizes, prev, pager, next, jumper" :total="total" :page-size="pageSize"
        :current-page="currentPage" :page-sizes="pageSizes" @size-change="$emit('update:pageSize', $event)"
        @current-change="$emit('update:currentPage', $event)" />
</template>
<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
withDefaults(defineProps<{
    total: number
    pageSize: number
    currentPage: number
    pageSizes?: number[]
}>(), {
    pageSizes: () => [10, 20, 50, 100]
})
</script>