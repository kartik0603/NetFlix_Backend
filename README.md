# NetFlix_Backend

A robust backend for managing Netflix-like services, featuring user authentication, media search, and TV/movie management. Built using Node.js and Express.js, this project ensures secure and efficient operations with a focus on modular design and scalability.

---

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Introduction

This backend service is designed for a Netflix-like application. It includes user authentication, media search, and management functionalities. The project emphasizes security through JWT-based authentication and efficient data handling using MongoDB.

---

## Features

- **Secure User Authentication**:
  - User sign-up with email and password validation.
  - Password hashing using `bcrypt`.
  - JWT-based session management with token storage in cookies.

- **Media Management**:
  - Support for movies and TV series.
  - Media search functionality powered by TMDB API.

- **Robust Configuration**:
  - Environment variable management using `.env` files.
  - Modular design for scalability and maintainability.

---

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT and bcrypt
- **Utilities**: dotenv for environment variables

---

## Project Structure

```plaintext
NetFlix_Backend/
├── models/
│   └── user.model.js         # Mongoose schema for users
├── routes/
│   ├── auth.route.js         # User authentication routes
│   ├── movie.route.js        # Movie-related routes
│   ├── search.route.js       # Media search routes
│   ├── tv.route.js           # TV series routes
├── controllers/
│   ├── auth.controller.js    # Handles signup, login, and logout
│   ├── movie.controller.js   # Manages movie-related logic
│   ├── search.controller.js  # Handles search operations
│   ├── tv.controller.js      # Manages TV series logic
├── middleware/
│   └── ProtectRoute.js       # Authentication middleware
├── utils/
│   └── generateToken.js      # JWT generation utility
├── config/
│   ├── envVAR.js             # Environment variable configuration
│   ├── db.js                 # MongoDB connection setup
├── services/
│   └── tmdb.js               # TMDB API data fetching service
├── server.js                 # Application entry point
├── package.json              # Dependencies and scripts
├── .env                      # Environment variables (not committed)
└── README.md                 # Documentation
