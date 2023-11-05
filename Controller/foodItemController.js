const User = require("../Model/fooditemsModel");

const addItem = async(req,res)=>{
  try {
    const {item_name, price, description} = req.body;
    // const email = req.user.email;
    // let user = await User.findOne({email : email});
    // console.log(user)
    // const adminUser = await User.findOne({restaurantName : req.body});
    // const userID = user._id;
    const Imagelink = "/image/" + req.fileName;
    const data = new User({
      item_name,
      price, 
      description, 
      Imagelink
    })
    await data.save();
    res.status(200).send("Item Added Successfully");
    console.log(data);

  } catch (err) {
    console.log(err);
    res.status(401).send(err);
  }
}

module.exports = { addItem };