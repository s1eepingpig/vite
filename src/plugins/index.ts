// 这是plugins的入口文件
import {App} from "vue";
import {setupTailwindcss} from "@/plugins/tailwindcss";
import {keys} from "lodash";

export function setupPlugins(app:App){
    setupTailwindcss()
    autoLoadComponents(app)
}


function autoLoadComponents(app:App){
    const components = import.meta.globEager('../components/**/*.vue');
    Object.keys(components).forEach((key)=>{
        const name = key.split("/").pop()?.split('.').shift() as string
        // console.log(components[key].default)
        //装载注册全局组件
        app.component(name, components[key].default)
    })

}
