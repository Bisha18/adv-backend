import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async()=>{
    try {
        const connectit= await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`)
         console.log(`db connected ${connectit.connection.host}`)
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default connectDB;