import { NextFunction, Request, Response, Router } from "express";
import { userControllers } from "./user.controller";
import { ZodObject } from "zod";
import { createUserZodSchema } from "./user.validation";

 
const validateRequest = (zodSchema: ZodObject) =>async(req:Request,res:Response,next:NextFunction)=>{
    try {
        console.log('old body',req.body);
        req.body = await zodSchema.parseAsync(req.body)
        console.log('new body',req.body);
        next()

    
    } catch (error) {
        next(error)
        
    }

    
}
const router = Router()
router.post('/register',
    validateRequest(createUserZodSchema) ,
    userControllers.createUser
);
   
    
router.get('/all-users', userControllers.getAllUsers)

export const useRoutes = router