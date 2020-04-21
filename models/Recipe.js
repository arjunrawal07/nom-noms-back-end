const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  Name: { String },
  Ingredients: [String],
  URL: { String },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
