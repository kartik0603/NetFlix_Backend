const jwt = require("jsonwebtoken");
const User = require("../models/user.model.js");
const ENV_VAR = require("../config/envVAR.js");

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies["jwt-netflix"];
    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized No Token" });

    }
    const decoded = jwt.verify(token, ENV_VAR.JWT_SECRET);
    if(!decoded){
        return res.status(401).json({ success: false, message: "Unauthorized - Invalid Token" });
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
        return res.status(401).json({ success: false, message: "Unauthorized - User Not Found" });
    }

    req.user = user;

    next();

  } catch (error) {
    console.log("Error in protectRoute", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = protectRoute;