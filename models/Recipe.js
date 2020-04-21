const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  label: { String },
  url: { String },
  ingredientLines: [String],
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
