const express = require("express");
const searchRoute = express.Router();

const{searchMovie,searchPerson,searchTv}=require("../controllers/search.controller.js")


searchRoute.get("/person/:query",searchPerson)
searchRoute.get("/movie/:query",searchMovie)
searchRoute.get("/tv/:query",searchTv)

module.exports = searchRoute;