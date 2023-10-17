import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRouter from './routes/user_routes.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDb!");
}).catch((err)=>{
    console.log(err)
});

const app = express();

app.use("/api/user", UserRouter);

app.listen(3000, ()=>{
    console.log("server is running on port 3000!");
});