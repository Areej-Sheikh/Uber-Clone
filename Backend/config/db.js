const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(process.env.MONGODB)
    .then(() => {
      console.log("Connected to MongoDB!");
    })
    .catch((error) => {
      console.log("Error connecting to MongoDB:", error.message);
    });
}
module.exports = connectToDb;