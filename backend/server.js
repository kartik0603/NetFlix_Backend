const express = require("express");
const authRoute = require("./routes/auth.route.js");
const movieRoute = require("./routes/movie.route.js");
const tvRoute = require("./routes/tv.route.js");
const searchRoute = require("./routes/search.route.js");

const ENV_VAR = require("./config/envVAR.js");
// const { connect } = require("mongoose");
const connectDB = require("./config/db.js");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const protectRoute = require("./middleware/protectRoute.js");

const app = express();

const PORT = ENV_VAR.PORT;
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api/v1/auth", authRoute);
app.use("api/v1/movie", protectRoute, movieRoute);
app.use("/api/v1/tv", protectRoute, tvRoute);
app.use("/api/v1/search", protectRoute, searchRoute);

app.use(express.json());

app.listen(PORT, () => {
  console.log("Server is running on port + " + PORT);
  connectDB();
});
