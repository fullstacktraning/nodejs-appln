const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req,res)=>{
    try{
        const {name,email,password} = req.body;
        const existedUser = await User.findOne({email});
        if(existedUser){
            res.status(400).json({"message":"User Already Registered"});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const new_user = new User({
            name,
            email,
            password:hashedPassword
        })
        await new_user.save();
        res.status(200).json({"message":"Registration Success !!!"});
    }catch(err){
        res.status(500).json({"message":err.message});
    }
}

exports.login = async (req,res)=>{
    try{
        const {email,password} = req.body;
        const db_user = await User.findOne({email});
        if(!db_user){
            return res.status(400).json({"message":"invalid credentials"});
        }

        const flag = await bcrypt.compare(password,db_user.password);
        if(!flag){
            return res.status(400).json({"message":"invalid credentials"});
        }

        const token = await jwt.sign({_id:db_user._id},process.env.JWTSECRETE,{expiresIn:process.env.EXPIRES_IN});
        res.status(200).json({
            "message":"Login Success",
            token
        })

    }catch(err){
        return res.status(500).json({"message":"server side error"});
    }
}