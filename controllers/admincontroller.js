const userData=require("../models/userschema")
const productSchema=require("../models/productschema")
const bcrypt = require("bcrypt");
const { post } = require("../routes/commonrouter");


let obj ={
  adminhome:(req,res)=>{
    if(req.session.email){
   res.render('adminside/adminhome') 
    }
    else{
      res.redirect('/login')
    }
  },




  userslist:async(req,res)=>{
    if(req.session.email){
    const users = await userData.find()
    res.render('adminside/userslist',{users})
    }
    else{
      res.redirect('/login')
    }
  },





  deleteuser:async(req,res)=>{
    if(req.session.email){
    const userid = req.params.id
    await userData.findByIdAndDelete(userid)
    res.redirect('/adminside/userslist')
    }
    else{
      res.redirect('/login')
    }
  },





  productform:(req,res)=>{
    if(req.session.email){
    res.render('adminside/product')
    }
    else{
      res.redirect('/login')
    }
  },




  addproduct:async(req,res)=>{
    if(req.session.email){
    const imageUrl = req.file ? `/uploads/${req.file.filename}`: "/default-image.jpg";
    const newProduct = new productSchema({
      productName: req.body.productName,
      productDescription: req.body.productDescription,
      productPrice: req.body.productPrice,
      imageUrl,
  });
  try{
    await newProduct.save()
    res.redirect('/adminside/productlist')
  }
  catch{
    res.status(500)
  }
}
else{
  res.redirect('/login')
}
  },







  productlist:async(req,res)=>{
    if(req.session.email){
    const products = await productSchema.find()
    res.render('adminside/productlist',{products})
    }
    else{
      res.redirect('/login')
    }
  },





 editform : async (req, res) => {
  if(req.session.email){
    try {
        const productid = req.params.id;
        const product = await productSchema.findById(productid);

        if (!product) {
            return res.status(404).send('Product not found');
        }

        
        res.render('adminside/productedit', { product });
    } catch (error) {
        console.error('Error in editform:', error);
        res.status(500).send('Internal Server Error');
    }
  }
  else{
    res.redirect('/login')
  }

},




updateproduct:async(req,res)=>{
  if(req.session.email){
  const productid = req.params.id;
  const {productName,productDescription,productPrice }= req.body
  await productSchema.updateOne(
    { _id:productid},
    {$set:{productName,productDescription,productPrice }}
  )
  res.redirect('/adminside/productlist')
  }
  else{
res.redirect('/login')
  }
},





deleteproduct:async(req,res)=>{
  if(req.session.email){
  const productid = req.params.id;
  await productSchema.findByIdAndDelete(productid)
  res.redirect('/adminside/productlist')
  }
  else{
    res.redirect('/login')
  }
  
}
}




module.exports = obj