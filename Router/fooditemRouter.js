const express = require("express");

const router = express.Router();

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./content");
  },
  filename: function (req, file, cb) {
    // to use file name as a name --> file.originalName
    // to use date as a name --> Date.now()
    let fileName = Date.now().toString() + "." + file.originalname.split(".")[1];
    req.fileName = fileName;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

const { addItem, updateFooditem } = require("../Controller/foodItemController");
const { admingAuth } = require("../Controller/Auth");


router.post( "/additem",admingAuth,upload.single("image"),addItem);
router.put( "/update",admingAuth,updateFooditem);


module.exports = router;

