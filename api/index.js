import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRouter from './routes/user_routes.js';
import AuthRouter from './routes/auth_routes.js';
import ListingRouter from './routes/listing_routes.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDb!");
}).catch((err)=>{
    console.log(err)
});

const app = express();

app.use(cors());

app.use(express.json());
app.use(cookieParser())

app.get("/", (req,res) => {
    res.send("App is running");
});

app.use("/api/user", UserRouter);
app.use("/api/auth", AuthRouter);
app.use("/api/listing", ListingRouter);

//Middleware to handle error
app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
});

app.listen(3000, ()=>{
    console.log("server is running on port 3000!");
});