/// <reference types="vite/client" />

//metaenv声明文件,必须放到 **.d.ts内
interface ViteEnv {

  VITE_API_KEY:number
  VITE_ROUTE_AUTOLOAD:boolean
  VITE_API_URL:string
}

interface ImportMetaEnv extends ViteEnv{
}
interface ImportMeta{
  readonly env:ImportMetaEnv
}

declare module '*.vue' {
  // @ts-ignore
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
