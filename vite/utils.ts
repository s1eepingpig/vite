// @ts-ignore
import _ from 'lodash'
export function parseEnv(env:Record<string, string>){
const envs = _.cloneDeep(env)
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

