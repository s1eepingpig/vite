import {ConfigEnv} from "vite";
import vue from "@vitejs/plugin-vue";

export default function setupPlugin(isBuild: boolean, env: Record<string, string>) {
    return [vue()]
}
