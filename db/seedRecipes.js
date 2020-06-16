const Recipe = require("../models/Recipe");
const data = require("./recipeData.json");

const recipeEntries = data.hits.map((recipe) => {
  const result = {};
  result.Name = recipe.recipe.label;
  result.Ingredients = recipe.recipe.ingredientLines;
  result.URL = recipe.recipe.url;
  result.Favorite = recipe.recipe.favorite;
  result.Rating = recipe.recipe.rating;
  return result;
});

Recipe.deleteMany({}).then(() => {
  Recipe.create(recipeEntries)
    .then((entries) => {
      console.log(entries);
    })
    .catch((err) => {
      console.log(err);
    });
});
