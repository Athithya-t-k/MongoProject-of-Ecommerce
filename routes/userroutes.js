const express=require("express")
const router=express.Router()
  

const {userHome, userPro, updatePro,products,updateprofile,updateform,updatedetails}=require("../controllers/userscontroller")


router.get('/userHome',userHome)
router.get('/userPro',userPro)
router.get("/updatePro",updatePro)
router.get('/userproductlist',products)
router.get('/userupdate',updateprofile)
router.get('/Update',updateform)
router.post('/updateprofile',updatedetails)

module.exports=router