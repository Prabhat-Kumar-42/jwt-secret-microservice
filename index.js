// index.js
const express = require("express");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Create an express app
const app = express();

// Define the port number
const PORT = process.env.PORT || 3000;

// Define the route for JWT secret
app.get("/jwt-secret", (req, res) => {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    return res.status(500).send("JWT_SECRET not set");
  }
  res.json({ jwtSecret });
});

// Start the server
app.listen(PORT, () => {
  console.log(`JWT Secret service listening at http://localhost:${PORT}`);
});

module.exports = { app };
