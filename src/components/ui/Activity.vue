<template>
  <br>
  <Input />
  <br >
  <el-row>
    <el-col :span="3">
    </el-col>
    <Form />
    <el-col :span="3">
    </el-col>
    <el-col :span="6">
      <Progress />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import Input from './Input.vue'
import Form from './Form.vue'
import Progress from './Progress.vue'

import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
