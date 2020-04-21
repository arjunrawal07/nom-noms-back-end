const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  Favorite: Boolean,
  FavoriteRecipes: [String],
});

const userSchema = new Schema({
  Username: String,
  Password: String,
  Favorites: favoriteSchema,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
