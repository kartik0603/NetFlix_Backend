const ENV_VAR = require("../config/envVAR.js");
const axios = require("axios");

//   fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(err => console.error(err));

const fetchFromTMDB = async (url) => {
  const options = {
   
    headers: {
      accept: "application/json",
      Authorization: "Bearer" + ENV_VAR.TMDB_API_KEY,
    },
  };
  const response = await axios.get(url, options);
  if (response.status !== 200) {
    throw new Error("Failed to fetch data from TMDB" + response.statusText);
  }
  return response.data;
};

module.exports =  fetchFromTMDB ;