const mongoose =require('mongoose')
const Schema=mongoose.Schema
const profileSchema = new Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    Address :{
        type:String,
    },
    age:{
        type:Number,
        required:true
    },
    phoneNumber:{
        type:Number,
    }
});
const profileModel = mongoose.model("profileData", profileSchema);
module.exports = profileModel;