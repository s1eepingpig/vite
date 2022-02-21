
// @ts-ignore
import _ from "lodash";




export default new (class {
    // @ts-ignore
    public env = {} as ImportMetaEnv
    constructor() {
        this.env = this.getEnvs()
    }

    // @ts-ignore
    getEnvs():ImportMetaEnv{
        // @ts-ignore
        const envs: any = _.cloneDeep(import.meta.env)
        // @ts-ignore
        Object.entries(import.meta.env as Record<string, any>).forEach(([key, value]) => {
            if (value == "true" || value == "false") {
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

})()


// the way we used now is to create a caes for use, another better way is to export helper an helper.env.
// const helper = helper()
// const env = helper.env()
// export default helper
// export {env} from env
