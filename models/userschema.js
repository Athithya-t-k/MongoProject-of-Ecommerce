const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true
  },
  
  email: {
    type: String,
    required: true,
  }, 
  password: {
    type: String,
    required: true
  }, 
  role: {
    type: String,
    default: 'user',
    required: true
  }
});

const userModel = new mongoose.model("userdetails", userSchema);
module.exports = userModel;