const express = require("express");
const mongoose = require("mongoose");
const Port = 8886;
const app = express();
const cors = require("cors");


app.use(cors());

const DBname =  "Healthy_Meals";
const URLdb = "mongodb://127.0.0.1:27017/" + DBname;

mongoose.connect(URLdb, 
  // {useNewUrlParser : true ,useUnifiedTopology : true}
  ).then(()=>{
    console.log("DataBase Conntected Successfully");
   }).catch((err)=>{
    console.log("Error in DB")
   })

const userRoute = require("./Router/UserRoute");
const restuarantRoute = require("./Router/restuarantRoute");
const fooditemRoute = require("./Router/fooditemRouter");

app.use("/image", express.static(__dirname + "/content"));


app.use(express.json())
app.use("/user", userRoute);
app.use("/restuarant", restuarantRoute);
app.use("/fooditem", fooditemRoute);



app.listen(Port, ()=>{
  console.log(`Server is on ${Port}`);
})