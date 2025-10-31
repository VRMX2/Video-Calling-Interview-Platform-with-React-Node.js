import express from "express";
import {ENV} from "./lib/env.js";

const app = express();




app.get("/health", (req, res) => {
    res.status(200).json({msg:"success from backend"});
});

app.listen(3000,()=>console.log(`server is running on port ${ENV.PORT}`));