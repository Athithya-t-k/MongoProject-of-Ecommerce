const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const userModel = require('../models/userschema')
const bcrypt = require('bcrypt');



const signup = (req,res)=>{
    res.render('signup')
}
const login = (req,res)=>{
    res.render('login')
} 

const postsignup = async (req, res) => {
    try {
      const { Username, email, Password, Passwords } = req.body;     
      // Find user already have an account
      const existUser = await userModel.findOne({ email:email});
  
      // If user have an account then throw an error
      if (existUser ) {
        req.session.errs = "Username already exists. Choose another Username.";
        res.redirect("/signup")
      } else {
        // If user doesn't have an account create a new account if the password and confirm password matches
        if (Password !== Passwords) {
            req.session.errs = "Confirm password does not match";
             res.redirect("/signup");
        }
            
            // encrypt the password using bcrypt package 
            const hashedPassword = await bcrypt.hash(Password, 10);                     
            const newUser = {
                Username,
                email,
                password: hashedPassword,
            };
            const userdata = new userModel(newUser)
            await userdata.save();
            req.session.email=email
            res.redirect('/user/userHome')
        } 
         
        
      
    } catch (error) {
      console.log("Something went wrong",error);
      res.status(500).send("Internal Server Error");

    }
  };



  // {email, password} =req.body
  // find person with that email from database, if he doesn't have an account throw error
  // else compare hashed password with the input password using that package u used to hash the password
  
  // if password !== actualpassword , throw error 
  // else if check that user is an admin or user 
  // if that is admin 'user home' else 'user home'
  
  const postlogin = async (req, res) => {
    const { Username, Password } = req.body;
    try {
      // Find user by email
      const user = await userModel.findOne({ Username });

      if (!user) {
        req.session.message = "Invalid email or password";
        return res.redirect("/login");
      }
      // Compare hashed password
      const isPasswordMatch = await bcrypt.compare(Password, user.password);

      if (!isPasswordMatch) {
        req.session.message = "Invalid email or password";
        return res.redirect("/login");
      }

      // Check user type
      if (user.role === "admin") {
        req.session.isAdmin = true;
        req.session.email = user.email;
        return res.redirect("/adminhome"); // Redirect to admin home page
      } else {
        req.session.isAdmin = false;
        req.session.email = user.email;
        res.redirect('/user/userHome') // Redirect to regular user home page
      }
    } catch (error) {
      res.status(500).send(`Error during login: ${error.message}`);
    }
  }


//controller for logout (get)
const Logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      res.sendStatus(500);
    } else {
      res.redirect("/login");
    }
  });
};
  

module.exports={
signup,
login,
postsignup,
postlogin,
Logout
}

 