const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Username: String,
  Password: String,
  Favorites: [String],
});

const User = mongoose.model("User", userSchema);

module.exports = User;