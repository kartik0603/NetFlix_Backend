const mongoose = require("mongoose");
const ENV_VAR= require("../config/envVAR.js");

const  connectDB = async () => {
    try {
       const conn = await mongoose.connect(ENV_VAR.MONGO_URI)
       console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch (error) {
        console.log(`Error in Connection With DB ${error}`);    
        process.exit(1);
        
    }
}

module.exports = connectDB;
