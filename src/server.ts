/* eslint-disable no-console */
 
 import {Server} from 'http'

import app from './app';
import mongoose from 'mongoose';
import { envVars } from './app/config/env';
let server: Server;

const startServer = async ()=>{
   try {
     await mongoose.connect(envVars.DB_URL);
     server = app.listen(envVars.PORT,()=>{
        console.log(`server is listening to port ${envVars.PORT} `);
    })
   } catch (error) {
    console.log(error);
   }
}
startServer()

process.on('SIGTERM', ()=>{
    console.log("SIGTERM signal recievd... server shutting down..");
    if(server){
        server.close(()=>{
            process.exit(1)
        })
    }
})
process.on('SIGINT', ()=>{
    console.log("SIGINT signal recievd... server shutting down..");
    if(server){
        server.close(()=>{
            process.exit(1)
        })
        process.exit(1)
    }
})
process.on("unhandledRejection",(err)=>{
    console.log('Unhandled Rejection detected... server shutting down..',err);
    if(server){
        server.close(()=>{
            process.exit(1)
        })
    }
      process.exit(1)
})

process.on("uncaughtException",()=>{
    if(server){
        server.close(()=>{
            process.exit(1)
        });
    }
    process.exit(1)
})  


 // unhandled rejection error
// Promise.reject(new Error('I forgot to catch this promise'))
// uncougth expection error
// throw new Error("I forgot to handle this local error")



/***\
 * unhandled rejection error 
 * uncought rejection error
 */
