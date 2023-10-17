import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDb!");
}).catch((err)=>{
    console.log(err)
});

const app = express();

app.get("/", (req,res)=>{
    res.send("HI there")
});

app.listen(3000, ()=>{
    console.log("server is running on port 3000!");
});