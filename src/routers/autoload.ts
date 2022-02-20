// 自动注册组件

import { RouteRecordRaw } from "vue-router"



const layoutRoutes = [] as RouteRecordRaw[]
// meta是vite提供的注册组件
const layouts = import.meta.globEager("../layouts/*.vue")
//遍历子目录
const views = import.meta.globEager("../views/**/*.vue")


function getRoutes(){
    const layoutRoutes = [] as RouteRecordRaw[]
    Object.entries(layouts).forEach(([file, module])=>{
        //获取父路由
        const route = getRouteByModule(file, module)
        //获取子路由
        route.children = getChildrenRoutes(route)
        // console.log(route)
        layoutRoutes.push(route)
    })
    return layoutRoutes
}

//父路由方法
function getRouteByModule(file:string, module:{[key:string]:any}){
    // const name = key.split('/').pop()?.split('.')[0]
    const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, '')
    const route = {
        path:`/${name}`,
        name:name.replace('/', '.'),
        component:module.default
    } as RouteRecordRaw

    return Object.assign(route, module.default?.route)
}

//获取布局路由的子路由
function getChildrenRoutes(layoutRoutes:RouteRecordRaw){
    // console.log(layoutRoutes)
    const routes = [] as RouteRecordRaw[]
    Object.entries(views).forEach(([file, module])=>{
        if(file.includes(`../views/${layoutRoutes.name as string}`)){
            const route = getRouteByModule(file, module)
            routes.push(route)
            // console.log(file)
        }
    })
    // console.log(routes)
    return routes
}

// console.log(layouts)
// Object.entries(layouts).forEach(([file, module])=>{
//     const name = file.split('/').pop()?.split('.')[0]
//     const route = {
//         path:`/${name}`,
//         component:module.default
//     } as RouteRecordRaw
//     console.log(route)
//     return route
// })

// const name = function getRouteByModule(file:string, module:{[key: string] : any}){

//         if(file){
//             return console.log(file.split('/').pop()?.split('.')[0])
//         }

// }

export default getRoutes()
