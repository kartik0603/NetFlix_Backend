const ENV_VAR = require("../config/envVAR.js");
const axios = require("axios");


const fetchFromTMDB = async (url) => {
    const options = {
      method: 'GET',
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + ENV_VAR.TMDB_API_KEY, // Ensure there's a space after "Bearer"
      },
    };
  
    try {
      console.log("Fetching from TMDB with URL:", url); 
      const response = await axios.get(url, options);
  
      if (response.status !== 200) {
        throw new Error("TMDB API Error: " + response.statusText);
      }
  
      return response.data;
    } catch (error) {
      console.error("Error in fetchFromTMDB:");
      if (error.response) {
        console.error("Response Status:", error.response.status);
        console.error("Response Data:", error.response.data);
      } else {
        console.error("Error Message:", error.message);
      }
      throw new Error(error.response?.data?.status_message || "Unknown TMDB Error");
    }
  };
  
  

module.exports =  fetchFromTMDB ;