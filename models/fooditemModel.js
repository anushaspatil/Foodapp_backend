const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodSchema = new Schema({
  item_name : {
    type : String,
    required : true,
  },
  price : {
    type : Number,
    required : true,
  },
  description : {
    type : String,
    required : true,
  },
  imageURL: {
    type: String,
  },
  category : {
    type : String
  }
})


const User = mongoose.model("fooditemModel",foodSchema);

User.createIndexes();

module.exports = User;

// git config --global user.email "you@example.com"
// git config --global user.name "Your Name"

// git status 
// git add .
// git status
// git commit -m "msg"
// git push origin master
