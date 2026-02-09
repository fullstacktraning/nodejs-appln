const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authMiddleware = require("./middleware/authMiddleware");
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/auth",require("./routes/authRoutes"));
app.use("/api",[authMiddleware],require("./routes/laptopRoutes"));
app.use("/api",[authMiddleware],require("./routes/mobileRoutes"));
app.use("/api",[authMiddleware],require("./routes/watchRoutes"));
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connection Success");
    app.listen(process.env.PORT,'0.0.0.0',()=>{
        console.log("Server Started");
    })
}).catch((err)=>console.log("Connection Failed"));