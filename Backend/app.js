const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");

// Connect to MongoDB
const connectToDb = require('./config/db')
connectToDb()

// Enable CORS
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
module.exports = app;
