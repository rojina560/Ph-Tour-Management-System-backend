/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from 'express'
import httpStatus, { StatusCodes } from 'http-status-codes'
import { UserServices } from './user.services'
import { catchAsync } from '../../utils/catchAsync'
import { regex, success } from 'zod'
import sendResponse from '../../utils/sendResponse'


const createUser = catchAsync(async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  
    const user = await UserServices.createUser(req.body)
sendResponse(res,{
      success:true,
        statusCode: httpStatus.CREATED,
        message:" create all user successfully",
        data:user
     })}
  )

const getAllUsers = catchAsync(async (
  req: Request,
  res: Response,
  next: NextFunction
) =>{
      const users = await UserServices.getAllUsers()
     sendResponse(res,{
      success:true,
        statusCode: httpStatus.CREATED,
        message:"All Users get successfully",
        data:users,
        meta:{
          total:users.length
        }
     })

})

export const userControllers = {
  createUser, getAllUsers
}
