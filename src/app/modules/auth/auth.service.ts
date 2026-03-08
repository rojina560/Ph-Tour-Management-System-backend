import  httpStatus  from 'http-status-codes';
import appError from "../../errorHelpers/appError";
import { IUser } from "../user/user.interface"
import { User } from "../user/user.model"
import  bcryptjs from 'bcryptjs'

const credentialsLogin = async (payload:Partial<IUser>) =>{
    const {email,password} = payload;
  const isUserExist = await User.findOne({email})
  if(!isUserExist){
    throw new appError(httpStatus.BAD_REQUEST,'email does not exist')
    
  }
  const isPasswordMatched = await bcryptjs.compare(password as string, isUserExist.password as string)
  if(!isPasswordMatched){
    throw new appError(httpStatus.BAD_REQUEST,'incorrect password')
  }
  return{
    email:isUserExist.email
  }
}
export const AuthServices = {
    credentialsLogin
}