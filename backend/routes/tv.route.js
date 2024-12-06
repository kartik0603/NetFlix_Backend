const express = require("express");


const tvRoute = express.Router();
const {
    getTvsTrending,
    getTvsTrailers,
    getTvsDetails,
    getTvsSimilar,
    getTvsByCategory,
  } = require("../controllers/tv.controllers.js");

  const protectRoute = require("../middleware/protectRoute.js");

  tvRoute.use(protectRoute);

tvRoute.get("/trending", getTvsTrending);
tvRoute.get("/:id/trailers", getTvsTrailers);
tvRoute.get("/:id/details", getTvsDetails);
tvRoute.get("/:id/similar", getTvsSimilar);
tvRoute.get("/:category", getTvsByCategory);

module.exports = tvRoute;
