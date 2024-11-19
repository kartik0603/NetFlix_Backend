const User = require("../models/user.model.js");
const bcryptjs = require("bcryptjs");
const generateTokenAndSetCookie = require("../utils/generateToken.js");

const signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    const emailRegix = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegix.test(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Email is not valid" });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }

    const existingUserEmail = await User.findOne({ emaill: email });
    if (existingUserEmail) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const existingUserbyUserName = await User.findOne({ username: username });
    if (existingUserbyUserName) {
      return res
        .status(400)
        .json({ success: false, message: "Username already exists" });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];

    const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];
    const newUser = new User({
      email,
      password: hashPassword,
      username,
      image,
    });
{
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      // password Remove
      res.status(201).json({
        success: true,
        user: {
          ...newUser._doc,
          password: "",
        },
      });
    }
    
  } catch (error) {
    console.log("Error in signup", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if(!email || !password){
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const user = await User.findOne({ email : email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Credentials" });
    }

    const isPasswordMastched = await bcryptjs.compare(password, user.password);
    if (!isPasswordMastched) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Credentials" });
    }
    
    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      success: true,
      user: {
        ...user._doc,
        password: "",
      },
    });
    
  } catch (error) {
    console.log("Error in login", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

const logout = async (req, res) => {
 try {
    res.clearCookie("netflix");
    res.status(200).json({ success: true, message: "Logout Successfully" });

    
 } catch (error) {
    console.log("Error in logout", error.message);
    res.status(500).json({ success: false, message: error.message });
 }
};

module.exports = {
  signup,
  login,
  logout,
};
