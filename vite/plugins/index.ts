import {ConfigEnv} from "vite";
import vue from "@vitejs/plugin-vue";
import {setupMockPlugin} from "./mock";
import {ViteEnv} from "../../vite/utils"

export default function setupPlugin(isBuild: boolean, env: ViteEnv) {
    return [vue(), setupMockPlugin(isBuild)]
}
