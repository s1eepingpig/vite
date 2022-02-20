import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
// @ts-ignore
import alias from "./vite/alias";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置别名,用@代替路径
    // alias:{'@':path.resolve(__dirname, 'src')}
alias

  }
})
