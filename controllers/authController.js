const User = require("../models/User");
const bcrypt = require("bcryptjs");
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