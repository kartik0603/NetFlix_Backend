const jwt = require("jsonwebtoken");
const ENV_VAR = require("../config/envVAR.js");

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, ENV_VAR.JWT_SECRET, { expiresIn: "15d" });
  res.cookie("jwt-netflix", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: ENV_VAR.NODE_ENV !== "development",
  });

  return token;
};

module.exports = generateTokenAndSetCookie;