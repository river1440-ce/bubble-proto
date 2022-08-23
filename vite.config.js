import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
// ref: https://jason06286.medium.com/vite-%E5%9F%BA%E6%9C%AC%E7%92%B0%E5%A2%83%E9%85%8D%E7%BD%AE-3cfa804f8702
export default defineConfig({
   base: '/pigMap/dist/',//gh-pages 設定路徑
   plugins: [vue()],
   resolve: {
     alias: {'@/': `${path.resolve(__dirname, 'src')}/`}}
})