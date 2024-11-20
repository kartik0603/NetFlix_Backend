"# NetFlix_Backend" 
.
├── models/
│   └── user.model.js         # Mongoose schema for users
├── routes/
│   └
    └── auth.route.js         # User-related routes
    |── movie.route.js
    |──search.route.js
    |── tv.route.js
├── controllers/
   └── auth.controller.js    # Signup, login, and logout logic
    |──  movie.conroller.js
    |──  search.routcontroller.js
    |──  tv.controller.js
    
├── middleware/
│   └──ProtectRoute.js    # Authentication middleware (optional)
├── utils/
│   └── generateToken.js      # JWT token generation utility
├── config/
│   └── envVAR.js             # Environment variable configuration and database connection 
    |── db.js 
├── server.js                  # Entry point of the application
├── package.json              # Dependencies and scripts
├── README.md                 # Documentation
└── .env                      # Environment variables (not committed)
├── services
    ├──tmdb.js                # API Fetching Data


    .ENV file
    MONGO_URI=your-mongodb-connection-string
    JWT_SECRET=your-jwt-secret
    NODE_ENV=development
    PORT=5000



    User Authentication API
This project is a User Authentication API built with Node.js and Express.js, featuring secure user sign-up, login, and logout functionalities. The application uses bcrypt for password hashing and JWT (JSON Web Tokens) for user authentication, storing the token in cookies.

Features

Secure User Sign-Up:
Validates email, password, and username.
Hashes passwords using bcrypt.
Assigns a random profile picture during registration.

JWT Authentication:
Generates a JWT for authenticated users.
Stores the token in cookies with secure settings.

User Login:
Verifies credentials using hashed passwords.
Issues a new JWT upon successful login.

User Logout:
Clears the authentication cookie.

Validation:
Ensures all fields are provided.
Verifies email format and password length.


Tech Stack
Node.js
Express.js
MongoDB with Mongoose
bcrypt for password hashing
JWT for authentication
dotenv for environment variable management.


