const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodSchema = new Schema({

})


const User = mongoose.model("userModel",userSchema);

User.createIndexes();


module.exports = User;