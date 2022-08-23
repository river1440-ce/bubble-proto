<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Menu from './components/ui/Menu.vue'
import Submenu from './components/ui/Submenu.vue'

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Menu />
      </el-header>
      <el-main>
        <Submenu />
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>