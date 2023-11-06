const User = require("../models/fooditemModel");

const addItem = async(req,res)=>{
  try {
    const {item_name, price, description,category} = req.body;
    // const email = req.user.email;
    // let user = await User.findOne({email : email});
    // console.log(user)
    // const adminUser = await User.findOne({restaurantName : req.body});
    // const userID = user._id;
    const imageID = "/image/" + req.file.fileName;
    const data = new User({
      item_name,
      price, 
      description, 
      imageID,
      category,
    })
    await data.save();
    res.status(200).send("Item Added Successfully");
    console.log(data);

  } catch (err) {
    console.log(err);
    res.status(401).send(err);
  }
}

////////////////// UPDATE FOODITEM ///////////////////////
const updateFooditem = async(req,res)=>{
  try {
    let foodList = await User.findOne({item_name : req.body.item_name});
    if(foodList){
      const compareNumber = await User.find({price : foodList.price});
      foodList = await User.findOneAndUpdate({foodList : req.body.foodList}, { price : req.body.newPrice })
      await foodList.save()
      res.send("Updated Restuarant information successfully");
    }
  } catch (err) {
    res.send(err);
    console.log(err)
  }
}

module.exports = { addItem, updateFooditem };