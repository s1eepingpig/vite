import {http} from "@/Axios";

function info() {
    return http.request({
        url: `info`,
    })
}

function login(){

}

export default {info, login}
