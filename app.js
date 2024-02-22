const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const session = require('express-session');
const commonrouter = require('./routes/commonrouter')
const adminrouter = require('./routes/adminroutes')
const userRout=require("./routes/userroutes")
const mongoose = require('./config/config')
const dotenv = require("dotenv");
dotenv.config();
mongoose()



app.use(session({
    secret: 'your-secret-key', // Use a secure random string for this
    resave: false,
    saveUninitialized: true,
  }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.set('view engine','ejs')
const port = 8001
app.use('/',commonrouter)
app.use('/',adminrouter)
app.use("/user",userRout)
app.use('/',userRout)


app.use('/public', express.static('public'));
app.use('/uploads', express.static('public/uploads'))
 

app.listen(port,() => console.log('server started on the port ', port))