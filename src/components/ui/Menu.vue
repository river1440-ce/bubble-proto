<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">LOGO</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">找機會</el-menu-item>
    <el-sub-menu index="2">
      <template #title>我的儀表板</template>
      <el-menu-item index="2-1">專案</el-menu-item>
      <el-menu-item index="2-2">活動</el-menu-item>
      <el-menu-item index="2-3">職缺</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>組織</template>
        <el-menu-item index="2-4-1">清華創業日</el-menu-item>
        <el-menu-item index="2-4-2">載物輕時</el-menu-item>
        <el-menu-item index="2-4-3">清華綠點點</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
