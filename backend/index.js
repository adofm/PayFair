import express from "express"
import dotenv from "dotenv"

import userRouter from './routes/users.js';
import jobRouter from './routes/jobs.js';
import jobRelationsRouter from "./routes/jobRelations.js"

const app = express();

// Loading config file .env
dotenv.config()

app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Whatup");
})
app.use("/users",userRouter);
app.use("/jobs",jobRouter);
app.use("/jobRelations",jobRelationsRouter)

// Error handler
app.use((err,req,res,next)=>{
    console.log("An Error Occured")
    res.json({error:err})
})

app.get("*",(req,res)=>{
    res.status(404).json({
        message:"404 Page not found"
    })
})

app.listen(process.env.PORT,()=>{
    console.log(`Serving moves and servers on http://localhost:${process.env.PORT}`);
})