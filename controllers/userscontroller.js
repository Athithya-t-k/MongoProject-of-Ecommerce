const userData=require("../models/userschema")
const productSchema=require("../models/productschema")
const profileSchema = require('../models/profileschema')
const mongoose = require('mongoose')
const bcrypt = require("bcrypt");
let obj={
  userHome:(req,res)=>{
    if(req.session.email){
    res.render('userside/userhome')
    }
    else{
      res.redirect('/login')
    }
  },



  userPro:(req,res)=>{
    if(req.session.email){
    res.render('userside/product')
    }
    else{
      res.redirect('/login')
    }
  },



  updatePro:(req,res)=>{
    if(req.session.email){
    res.render('userside/profileupdate')
    }
    else{
      res.redirect('/login')
    }
  },



  products: async (req,res)=>{
    if(req.session.email){
    const products = await productSchema.find()
    res.render('userside/product',{products})
    }
    else{
      res.redirect('/login')
    }
  },




  updateprofile: async (req, res) => {
    if(req.session.email){
    const email = req.session.email;

    try {
        // fetch user profile from profile collection
        const profile = await userData.aggregate([
          {$match:{
            email : email
          }},
          {$lookup:{
            from:'profiledatas',
            localField:'_id',
            foreignField:'userId',
            as:'datas'
          }}

        ])
        console.log(profile);
        if (profile) {
            res.render('userside/profileupdate',{profile: profile[0]});
        } else {
            // Handle the case where the user is not found
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.error('Error retrieving user:', error);
        res.status(500).send('Internal Server Error');
    }
  }
  else{
    res.redirect('/login')
  }
},





updateform:async(req,res)=>{
  if(req.session.email){
  const email = req.session.email;
  const user = await userData.findOne({ email: email });

  const profiledetails = await userData.aggregate([
    {
      $match: {
        _id:user._id
      }
    },
    {$lookup:{
      from:'profiledatas',
      localField:'_id',
      foreignField:'userId',
      as:'datas'
    }}
  ]);
  // console.log(profile);
  res.render('userside/updateform',{user,profiledetails})
}
else{
  res.redirect('/login')
}
},





updatedetails:async(req,res)=>{
  if(req.session.email){
  const {Address,age,phoneNumber}= req.body
  const Username = req.session.email;
  const user = await userData.findOne({ Username: Username });
  const userId=user._id
  await profileSchema.updateOne(
    {userId:user._id},
    {$set:{userId,Address,age,phoneNumber}},
    {upsert:true}

  )
  res.redirect('/userupdate')
  }
  else{
    res.redirect('/login')

  }
}


}
  


module.exports=obj
  