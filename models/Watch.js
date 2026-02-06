const mongoose = require("mongoose");
const watchSchema = new mongoose.Schema({
    pid:{type:String,required:true},
    pname:{type:String,required:true},
    pcost:{type:Number},
    qty:{type:Number,required:true},
    pimg:{type:String,required:true}
})
module.exports=mongoose.model("Watch",watchSchema);