import _ from 'lodash'

const envs: any = _.cloneDeep(import.meta.env)

// @ts-ignore
Object.entries(import.meta.env as Record<String, any>).forEach(([key, value]) => {
    if (value == 'true' || value == 'false') {
        envs[key] = value == 'true' ? true : false
    } else // @ts-ignore
        if (/^\d+$/.test(value)) envs[key] = Number(value)
            else if (value == 'null') envs[key] = null
            else if(value == 'undefined') envs[key] = undefined

})

export default envs as ViteEnv
