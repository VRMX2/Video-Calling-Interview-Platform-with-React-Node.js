import express from "express";
import cors from "cors";
import path from 'path';


import {ENV} from "./lib/env.js";
import {connectDB} from "./lib/db.js";


const app = express();

const __dirname = path.resolve();

app.use(express.json());
app.use(cors({origin:ENV.CLIENT_URL,credentials: true}));
app.use(clerkMiddleware());


app.get("/health", (req, res) => {
    res.status(200).json({msg:"success from backend"});
});

if(ENV.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));

    app.get("/{*any}",(req,res)=>{
        app.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
    });
}

const startServer = async()=>{
    try{
        await connectDB();
		app.listen(ENV.PORT, () => conoel.log("Server is running on port :", ENV.PORT));
    }catch(error){
        console.error("💥 Error starting the server",error);
    }
};

startServer();