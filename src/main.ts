import { createApp } from 'vue'
import App from './App.vue'

import router, {setupRouter} from '@/routers'



const app = createApp(App)
//具名导出方式如下
setupRouter(app)

//use的挂载方式对应默认导出
app.use(router)
app.mount('#app')

//另外一种异步挂载的方式

async function boot() {
    //创建app
    const app = createApp(App)
    //挂载router
    app.use(router)
    //异步等待挂载成功
    await router.isReady()
    //执行下一步
    app.mount('#app')
}
