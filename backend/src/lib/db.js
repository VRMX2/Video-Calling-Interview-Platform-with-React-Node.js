import mongoose from 'mongoose';

import {ENV} from './env.js';

export const connectDB = async()=>{
	try{
        if(!ENV.DB_URL){
			throw new Error("DB_URL is not defined in environment variables");
        }
    }
    catch(error){
        console.error("❌ Error connecting to MongoDB", error);
        process.exit(1);
    }
}