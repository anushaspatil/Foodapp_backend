const User = require("../Model/resturantModel");
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

////////// Restuarant Login //////////// 
// const LoginRestuarant = async(req,res) => {
//   try {
//     const user = await User.findOne({email : req.body.email});
//     console.log(user)
//     if(user){
//       const passMatch = await bcrypt.compare(password, user.password);
//       console.log(passMatch);
//       if(passMatch){
//         const token = jwt.sign({restaurantName, password}, secret)
//         console.log(token);
        
//       }
//     }
//   } catch (error) {
    
//   }
// }

module.exports = { SignupRestuarant }











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