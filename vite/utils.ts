// @ts-ignore
import _ from 'lodash'


export interface ViteEnv {

    VITE_API_KEY: number
    VITE_ROUTE_AUTOLOAD: boolean
    VITE_API_URL: string
}


export function parseEnv(env: Record<string, string>): ViteEnv {
    const envs: any = _.cloneDeep(env)
    Object.entries(env).forEach(([key, value]) => {
        if (value == "true" || value == "false") {
            // @ts-ignore
            envs[key] = value == 'true' ? true : false
        } else if (/^\d+$/.test(value)) {
            envs[key] = parseInt(value)
        } else if (value == 'null') {
            envs[key] = null
        } else if (value == "undefined") {
            envs[key] = undefined
        }else {
            envs[key] = value
        }
    })
    return envs
}

