import {ConfigEnv, defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import alias from "./vite/alias";
import {parseEnv} from "./vite/utils";
import setupPlugin from "./vite/plugins";
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     // 配置别名,用@代替路径
//     // alias:{'@':path.resolve(__dirname, 'src')}
// alias
//   }
// })

//这里的command是比如serve，build这种，mode是指dev还是prod


export default ({command, mode}:ConfigEnv)=>{
  const isBuild = command=="build"
  const root = process.cwd()
  const env = parseEnv(loadEnv(mode, root))
  // parseEnv({command, mode})
  return{
    // plugins:[vue()],
    plugins:setupPlugin(isBuild, env),
    resolve:{
      alias
    }
  }
}
