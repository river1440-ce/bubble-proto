<template>
  <br>
  <Input />
  <br >
  <el-row>
    <el-col>
      <Calender />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import Menu from './Menu.vue'
import Input from './Input.vue'
import Calender from './Calender.vue'

import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
