// require('dotenv').config();
import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB();














// import  express  from "express";
// const app = express();




// (async()=>{
//     try {
//       await  mongoose.connect(`${process.env.DATABASE_UR}/${DB_NAME}`)
//       app.on("error",()=>{
//         console.log("error");
//         throw error;
//       });

//       app.listen(process.env.PORT,()=>{
//         console.log("app is listening");
//       })
//     } catch (error) {
//         console.log(error);
//         process.exit();
//     }
// })()