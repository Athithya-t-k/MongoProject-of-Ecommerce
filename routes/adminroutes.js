const express = require("express");
const router = express.Router();
const admincontroller = require('../controllers/admincontroller');
const multer = require('../middleware/multer')




router.get('/adminhome',admincontroller.adminhome)
router.get("/adminside/userslist",admincontroller.userslist)
router.post("/deleteuser/:id",admincontroller.deleteuser)
router.get('/adminside/product',admincontroller.productform)
router.post('/submit_product',multer.single('image'),admincontroller.addproduct)
router.get('/adminside/productlist',admincontroller.productlist)
router.get('/admin/products/:id/edit',admincontroller.editform)
router.post('/admin/postEditPro/:id',admincontroller.updateproduct)
router.post('/admin/deleteProduct/:id',admincontroller.deleteproduct)



module.exports = router;
