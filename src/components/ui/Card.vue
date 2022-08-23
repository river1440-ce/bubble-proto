<template>
  <el-row>
    <el-col
      v-for="(item, index) in images"
      :key="index"
      :span="6"
      :offset="index%3 == 0 ? 0 : 1"
    >
      <div style="margin-bottom: 3rem">
        <img :src="item.url" alt="Avatar" style="border-radius: 1rem">
        <p style="font-weight: Bold; font-size: var(--el-font-size-large); margin: 0rem">{{ item.title }}</p>
        <scan style="font-size: var(--el-font-size-extra-small); margin: 0rem; line-height:0.5">{{ item.content }}</scan>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const currentDate = ref(new Date())
const CardNum = 20
function generate_seed(times){
  return Array.from({length: times}, () => Math.floor(Math.random() * 40));
}
const seeds = generate_seed(CardNum)
const images = []

seeds.forEach(function(seed) {
  const content = {
    url: "https://picsum.photos/id/"+ seed + "/250",
    title: lorem.generateWords(1),
    content: lorem.generateSentences(1)
  }
  images.push(content)
});

</script>

<style>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
