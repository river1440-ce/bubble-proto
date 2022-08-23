<template>
  <el-row>
    <el-col :span="12" :offset="3">
      <el-input
        v-model="input3"
        placeholder="找職缺"
        class="input-with-select"
      >
        <template #prepend>
          <el-button :icon="Search" />
        </template>
      </el-input>
    </el-col>
    <el-col :span="3">
      <el-select v-model="job" placeholder="職缺" style="width: 115px">
        <el-option label="設計師" value="1" />
        <el-option label="軟體工程師" value="2" />
        <el-option label="專案經理" value="3" />
      </el-select>
    </el-col>
    <el-col :span="3">
      <el-select v-model="org" placeholder="提案單位" style="width: 115px">
        <el-option label="載物書院" value="1" />
        <el-option label="厚德書院" value="2" />
        <el-option label="區域創新中心" value="3" />
      </el-select>
    </el-col>
    <el-col :span="3">
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input3 = ref('')
const job = ref('')
const org = ref('')
</script>

<style>
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
</style>
