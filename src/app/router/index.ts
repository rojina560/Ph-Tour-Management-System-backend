import { Router } from "express";
import { useRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";

 export const router = Router()
const modulesRoutes =[
    {
        path:'/user',
        route:useRoutes
    },

    {
        path:'/auth',
        route:AuthRoutes
    }
]
modulesRoutes.forEach((route)=>{
    router.use(route.path,route.route)
})