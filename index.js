const express = require("express");
const app = express();
const parser = require("body-parser");
const User = require("./models/User");
const Recipe = require("./models/Recipe");
app.use(parser.json());

//RETURNS ALL RECIPES IN DATABASE
app.get("/", (req, res) => {
  Recipe.find({}).then((recipes) => {
    res.json(recipes);
  });
});

//DELETES A USER ACCOUNT
app.delete("/user/:Username", (req, res) => {
  User.findOneAndDelete({ Username: req.params.Username }).then((user) => {
    console.log(user);
    res.json(user);
  });
});

//UPDATES FAVORITE RECIPES OF A SPECIFIC USER
app.put("/user/:Username/Favorites/FavoriteRecipes", (req, res) => {
  User.findOneAndUpdate({ Username: req.params.Username }, req.body, {
    new: true,
  }).then((updated) => {
    console.log(updated);
    res.json(updated);
  });
});

//CREATE USER PROFILE
app.post("/user", (req, res) => {
  res.redirect("/user/:Username");
  User.create(req.body).then((newAccount) => {
    console.log(newAccount);
    res.json(newAccount);
  });
});

//FIND A USER PROFILE
app.get("/user/:Username", (req, res) => {
  res.redirect("/user/:Username");
  User.findOne({ Username: req.params.Username }).then((foundUser) => {
    console.log(foundUser);
    res.json(foundUser);
  });
});

//READ: RETURNS RECIPES BASED ON A KEYWORD SEARCH
app.get("/search", (req, res) => {
  console.log("this route is getting called");
  let ingredient = req.query.ingredient;
  let reconstructed = "";

  Recipe.find({ Ingredients: { $regex: ingredient, $options: "i" } }, function (
    err,
    docs
  ) {}).then((recipes) => {
    console.log(recipes);
    res.json(recipes);
  });
});

//RETURNS ALL USER ACCOUNTS
app.get("/alluseraccounts", (req, res) => {
  User.find({}).then((allaccounts) => {
    res.json(allaccounts);
  });
});

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
