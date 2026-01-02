/* eslint-disable no-console */
import { Request, Response } from 'express'
import  httpstatus from'http-status-codes'
import { UserServices } from './user.services';


const createUser = async(req:Request,res:Response)=>{
    try {
        const user = await UserServices.createUser(req.body)
        res.status(httpstatus.CREATED).json({
            message:'user created succsessfully',
            user
        })
    } catch (err:any) {
        console.log(err);
        next(err)
    }
}
 export const userControllers = {
    createUser
}

// route matching -> controller -> service ->model ->