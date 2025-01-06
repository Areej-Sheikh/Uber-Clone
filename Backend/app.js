const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");

// Connect to MongoDB
const connectToDb = require("./config/db");
connectToDb();

// Enable CORS
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Routes
const userRoutes = require("./routes/user.route");
app.use("/users", userRoutes);
module.exports = app;
