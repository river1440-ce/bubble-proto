<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <router-link :to="{ name: 'Job' }">
      <el-menu-item index="1">職缺</el-menu-item>
    </router-link>
    <router-link :to="{ name: 'Activity' }">
      <el-menu-item index="2">活動</el-menu-item>
    </router-link>
    <router-link :to="{ name: 'Project' }">
      <el-menu-item index="3">專案</el-menu-item>
    </router-link>
  </el-menu>
    <router-view />
</template>

<script lang="ts" setup>
import Menu from './Menu.vue'
import Input from './Input.vue'
import Card from './Card.vue'

import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
