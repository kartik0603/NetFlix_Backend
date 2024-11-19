const express = require("express");
const { signup, login, logout } = require("../controllers/auth.controller.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from the server");
});

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

module.exports = router;

