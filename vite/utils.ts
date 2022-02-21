// @ts-ignore
import _ from 'lodash'



export interface ViteEnv {

    VITE_API_KEY:number
    VITE_ROUTE_AUTOLOAD:boolean
    VITE_API_URL:string
}


export function parseEnv(env:Record<string, string>):ViteEnv{
const envs:any = _.cloneDeep(env)
    Object.entries(env).forEach(([key,value])=>{
        if(value =="true"||value=="false"){
            // @ts-ignore
            envs[key]=value=='true'?true:false
        }
        if(/^\d+$/.test(value)){
            // @ts-ignore
            envs[key]=parseInt(value)
        }
    })
return envs
}

