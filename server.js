const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth",require("./routes/authRoutes"));
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connection Success");
    app.listen(process.env.PORT,()=>{
        console.log("Server Started");
    })
}).catch((err)=>console.log("Connection Failed"));