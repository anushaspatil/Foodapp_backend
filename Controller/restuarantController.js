const User = require("../models/resturantModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secret = "my_food";

///////// Restuarant Signup/RESGISTRATION ////////////
const SignupRestuarant = async(req,res) => {
  try{
    const{restaurantName, restuarantAddress, openHours, closeHours, password } = req.body;
    const hashPassword = await bcrypt.hash(password,10);
    const adminOwner = new User({
      restaurantName,
      restuarantAddress,
      openHours,
      closeHours,
      password : hashPassword,
    })
    await adminOwner.save()
    res.status(200).send("Restaurant Registered/Signed-up Successfully");
    console.log(adminOwner);
  }
  catch(err){
    res.status(401).send(err);
  }
}

////////// Restuarant Update //////////// 
const updateRestuarant = async(req,res)=>{
  try {
    let restuarant = await User.findOne({restaurantName : req.body.restaurantName});
    if(restuarant){
      const compareNumber = await User.find({restuarantAddress : restuarant.restuarantAddress});
      restuarant = await User.findOneAndUpdate({restuarant : req.body.restuarant}, { restuarantAddress : req.body.newrestuarantAddress })
      await restuarant.save()
      res.send("Updated Restuarant information successfully");
    }
  } catch (err) {
    res.send(err);
    console.log(err)
  }
}

module.exports = { SignupRestuarant, updateRestuarant }











// "restaurantName": "Sri Udupi Food Hub",
//     "restuarantAddress": "Whiefield, Bangalore",
//     "openHours": "7:00 AM",
//     "closeHours": "10:30 PM",
//     "password": "udupi1234@"

// "restaurantName": "Empire Restaurant",
//     "restuarantAddress": "Brookefield, Bangalore",
//     "openHours": "7:00 AM",
//     "closeHours": "10:30 PM",
//     "password": "Empire1234@"