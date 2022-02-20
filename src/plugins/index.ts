// 这是plugins的入口文件
import {App} from "vue";
import {setupTailwindcss} from "@/plugins/tailwindcss";

export function setupPlugins(app:App){
    setupTailwindcss()
}
