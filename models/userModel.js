const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username : {
    type : String,
    required : true,
  },
  email : {
    type : String,
    required : true,
  },
  PhoneNumber : {
    type : Number,
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  password: {
    type: String,
    required: true,
  },

})


const User = mongoose.model("userModel",userSchema);

User.createIndexes();

module.exports = User;
