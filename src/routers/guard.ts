import {RouteLocationNormalized, RouteLocationNormalizedLoaded, Router} from "vue-router";
import router from "@/routers/index";
import store from "@/utils/store";

class guard {
    constructor(private router: Router) {
    }

    public run() {
        console.log(router)
        console.log("guard...")
        const token = store.get('token')
        this.router.beforeEach((to, from) => {
            console.log(to)
            if (this.isLogin(to, token) === false) {
                return {name: 'auth.login'}
            }
            if (this.isGuest(to, token) === false) {
                return from
            }
        })

    }


    private isGuest(route: RouteLocationNormalizedLoaded, token: any) {
        return (!route.meta.guest) || (route.meta.guest && !token)
    }


    private isLogin(route: RouteLocationNormalized, token: any) {
        // if(route.name ==="admin.user")
        return !route.meta.auth || (route.meta.auth && token);
    }
}

export default (router: Router) => {
    new guard(router).run()
}
