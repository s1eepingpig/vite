import { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from './routes'
import layoutRoutes from "./autoload";
import guard from "@/routers/guard";

const router = createRouter({
    history:createWebHistory(), //History mode
    //把自动注册的和routes里的整合
    routes:[...routes, ...layoutRoutes]
})
// 以下为不同的两种导出方式：具名导出和任意导出
// 具名导出
export function setupRouter(app:App){
    guard(router)
app.use(router)

}

//默认导出（任意导出）
export default router;
