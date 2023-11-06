const express = require("express");

const router = express.Router();

const { SignupRestuarant, updateRestuarant } = require("../Controller/restuarantController");
const { admingAuth } = require("../Controller/Auth");


router.post("/signup", admingAuth, SignupRestuarant);
router.put("/update", admingAuth, updateRestuarant);


module.exports = router;