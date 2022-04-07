const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String
  },
  address: {
    type: String
  },
  employeeFlag:{
    type: Boolean,
    required: true
  }
});

let Owner = (module.exports = mongoose.model("User", userSchema,"users"));
