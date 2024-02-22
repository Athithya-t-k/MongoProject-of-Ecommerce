const mongoose =require('mongoose')
const Schema=mongoose.Schema
const productSchema = new Schema({
    productName:{
        type:String,
        required:true
    },
    productDescription:{
        type:String,
    },
    productPrice:{
        type:Number,
        required:true
    },
    imageUrl:{
        type:String,
    }
});
const productModel = mongoose.model("productData", productSchema);
module.exports = productModel;