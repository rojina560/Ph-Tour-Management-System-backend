import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async(payload:Partial<IUser>)=>{
    const { name,email,password} = payload;
    const user = await User.create({
        email,
        name,
        password
    })
    return user
}
export const UserServices ={
    createUser
}