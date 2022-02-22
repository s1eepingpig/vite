import axios, {AxiosRequestConfig} from "axios";

class Axios {
    private instance

    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config)
        this.interceptors()
    }

    request<T>(config:AxiosRequestConfig) {
       return  this.instance.request<T>(config)
    }

    private interceptors() {
        this.interceptorsRequest()
        this.interceptorsResponse()
    }

    private interceptorsRequest() {
        this.instance.interceptors.request.use(
            config => {
                return config
            },
            error => {
                return Promise.reject(error)
            }
        )
    }

    private interceptorsResponse() {
        this.instance.interceptors.response.use(function (response) {
            // 2xx 范围内的状态码都会触发该函数。
            // 对响应数据做点什么
            return response;
        }, error => {
            // 超出 2xx 范围的状态码都会触发该函数。
            // 对响应错误做点什么
            return Promise.reject(error);
        });

    }
}

export default Axios
