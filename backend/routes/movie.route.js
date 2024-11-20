const express = require("express");
const movieRoute = express.Router();
const  {
	getMovieDetails,
	getMoviesByCategory,
	getMovieTrailers,
	getSimilarMovies,
	getTrendingMovie,
} = require("../controllers/movie.controller.js");


// movieRoute.get("/trending", getTrendingMovie );

movieRoute.get("/trending", getTrendingMovie);
movieRoute.get("/:id/trailers", getMovieTrailers);
movieRoute.get("/:id/details", getMovieDetails);
movieRoute.get("/:id/similar", getSimilarMovies);
movieRoute.get("/:category", getMoviesByCategory);

module.exports = movieRoute;