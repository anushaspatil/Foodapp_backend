const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  restaurantName : {
    type : String,
    required : true,
  },
  restuarantAddress : {
    type : String,
    required : true,
  },
  openHours : {
    type : String,
  },
  closeHours: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },

})


const User = mongoose.model("restuarantModel",restaurantSchema);

User.createIndexes();

module.exports = User;
