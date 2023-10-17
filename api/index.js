import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRouter from './routes/user_routes.js';
import AuthRouter from './routes/auth_routes.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDb!");
}).catch((err)=>{
    console.log(err)
});

const app = express();

app.use(express.json());

app.use("/api/user", UserRouter);

app.use("/api/auth", AuthRouter);

app.listen(3000, ()=>{
    console.log("server is running on port 3000!");
});