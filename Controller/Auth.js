const jwt = require("jsonwebtoken");

const secret = "My_Food_App";

//////////// USER-AUTHENTICATION ////////////
const userAuth = (req,res,next) => {
  let token =  req.headers.authorization;
  if(token){
    token = token.split(" ")[1];
    console.log(token)
  try {
    const user = jwt.verify(token,secret);
    req.user = user;
    // console.log(req.user);
    next();
  }
  catch (err) {
    console.log(err);
    res.send(err)
  }
}
else {
  res.status(401).send("You are not authenticated as no token found.");
}
}



//////////// ADMIN-AUTHENTICATION ///////////////
const admingAuth = (req,res,next) => {
  let token = req.headers.authorization;
  if(token){
    token = token.split(" ")[1];
    console.log(token);
  try {
    const user = jwt.verify(token, secret);
    req.user = user;
    if(user.role === "admin"){
      next();
    }
    else{
      res.status(401).send("You are not authorized to perform this action.");
    }
    
  } catch (err) {
    res.status(500).send("Internal server error");
    console.log(err);
  }
} else{
  res.status(401).send("You are not authenticated as no token found.");
}
}




module.exports = {userAuth, admingAuth}