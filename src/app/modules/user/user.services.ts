
import { StatusCodes } from "http-status-codes";
import appError from "../../errorHelpers/appError";
import { IAuthProvider, IUser } from "./user.interface";
import { User } from "./user.model";
import bcryptjs from 'bcryptjs'

const createUser = async(payload:Partial<IUser>)=>{
    const { email,password,...rest} = payload;
    const isUserExsist = await User.findOne({email})
    if(isUserExsist){
        throw new appError(StatusCodes.BAD_REQUEST,'user already exist')
       
    }
    const hashedPassword = await bcryptjs.hash(password as string, 10)
   
    
     const authProvider:IAuthProvider ={provider: "credintials",providerId:email as string}
    const user = await User.create({
        email,
        password:hashedPassword,
        auths:[authProvider],
        ...rest
    })
    return user
}
const getAllUsers = async()=>{
    const users = await User.find({})
    return users
}
export const UserServices ={
    createUser,
    getAllUsers
}