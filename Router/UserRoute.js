const express = require("express");

const router = express.Router();

const {Signup, Login, deleteAccount, updateUser} = require("../Controller/userController");
const {userAuth, admingAuth} = require("../Controller/Auth");

router.post("/signup", Signup);
router.post("/login",(req,res,next)=>{console.log("userLogin"); next()}, Login);
router.delete("/delete",userAuth, deleteAccount);
router.put("/update",userAuth,updateUser);


module.exports = router;