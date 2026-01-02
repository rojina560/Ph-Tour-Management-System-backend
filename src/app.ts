/* eslint-disable @typescript-eslint/no-explicit-any */
import express,{ Request,Response} from 'express';
import cors from 'cors'
import { router } from './app/router';
import { globalerrorHandler } from './app/middlewares/globalErrorHandler';
const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/v1', router)
app.get('/',(req:Request,res:Response)=>{
    res.status(200).json({
        message:"Welcome To Tour Managment System"
    })
}) 
export default app
app.use(globalerrorHandler)