import express from "express";
import cors from "cors";
import { ConnectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";



//app config
const app = express()
const port = 4000;

//middleware
app.use(express.json())
app.use(cors())

//db connection
ConnectDB();

//api endpoint
app.use("/api/food",foodRouter);

app.get("/" , (req,res)=>{
    res.send("API Working")
})

app.listen(port,()=> {
    console.log(`Sever Started on http://localhost:${port}`)
})
