const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const secret = "My_Food_App";
const jwt = require("jsonwebtoken");

////////////// Sign-Up API ////////////////
const Signup = async (req,res) => {
  try {
  const{username, email, PhoneNumber,role, password} = req.body;
  const hashPassword = await bcrypt.hash(password, 10)

  const user = new User({
    username ,
    email,
    PhoneNumber,
    role,
    password : hashPassword,
  });

  console.log(user)
  const data = await user.save();
  console.log(data);
  res.status(201).send("user created successfully");

} catch (error) {
  res.send(error);
  console.log(error);  
}
}

//////////// Login-User //////////////////
const Login = async(req,res) => {
const {email, password} = req.body;
try {
  const user = await User.findOne({email : email});
  if(user){
    const passMatch =await bcrypt.compare(password, user.password)
    // console.log(pas/sMatch);
    if(passMatch){
      const token = jwt.sign({email, role : user.role}, secret);
      console.log({email, password})
      res.send(token); 
    }else{
      res.send('Incorrect Password');
    }
  }
  else{
    res.status(404).send("user doesn't exist");
  }
} catch (err) {
  res.send(err);
  console.log(err);
}
}

const updateUser = async(req,res)=>{
  try {
    let user = await User.findOne({email : req.body.email});
    if(user){
      const compareNumber = await User.find({PhoneNumber : user.PhoneNumber});
      user = await User.findOneAndUpdate({email : req.body.email}, { PhoneNumber : req.body.newphoneNumber })
      await user.save()
      res.send("Updated successfully");
    }
  } catch (err) {
    res.send(err);
    console.log(err)
  }
}

const deleteAccount = async(req,res)=>{
 try {
  const user = await User.findOne({email : req.body.email});
  if(user){
     await User.findOneAndDelete();
     res.send("User Deleted Successfully");
  }
 } catch (err) {
  res.send(err);
 }
}

module.exports = {Signup, Login, deleteAccount, updateUser}













// "username" : "anu",
//     "email" : "anu@gmail.com",
//     "PhoneNumber": "90080144228",
//     "password" : "anu123@"

// "username" : "Shiva",
// "email" : "Shiva@gmail.com",
// "PhoneNumber": "789456231",
// "role" : "admin",
// "password" : "shiva123@"

// "username" : "Krishna",
//     "email" : "Krishna@gmail.com",
//     "PhoneNumber": "369369369",
//     "role" : "admin",
//     "password" : "Krishna369@"