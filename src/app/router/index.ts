import { Router } from "express";
import { useRoutes } from "../modules/user/user.route";

 export const router = Router()
const modulesRoutes =[
    {
        path:'/user',
        route:useRoutes
    }
]
modulesRoutes.forEach((route)=>{
    router.use(route.path,route.route)
})