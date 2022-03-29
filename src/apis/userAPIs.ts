import {http} from "@/Axios";

function info() {
    return http.request({
        url: `info`,
    })
}

async function login(value:any){
    return http.request({
        url: `info`
    })
}

export default {info, login}
