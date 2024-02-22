const express = require('express')
const Router = express.Router();
const {
    signup,
    login,
    postsignup,
    postlogin,
    Logout



} =require('../controllers/commoncontroller')

Router.get('/signup',signup)
Router.get('/login',login)

Router.post('/signup',postsignup)
Router.post('/login',postlogin)
Router.get ('/Logout',Logout)






module.exports = Router;