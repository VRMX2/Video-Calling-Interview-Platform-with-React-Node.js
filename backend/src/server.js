import express from "express";
import "dotenv/config";

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/",(req,res)=>{
    res.status(200).json({msg:"success from backend"});
});

app.listen(3000,()=>console.log(`server is running on port ${PORT}`));