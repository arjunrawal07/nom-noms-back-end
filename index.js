const express = require("express");
const app = express();
const parser = require("body-parser");
const User = require("./models/User");
const Recipe = require("./models/Recipe");
const Favorite = require("./models/User");
// import { middleware as query } from "querymen";
var querymen = require("querymen");

app.use(parser.json());

app.get("/", (req, res) => {
  Recipe.find({}).then((recipes) => {
    res.json(recipes);
  });
});

app.delete("/user/:Username", (req, res) => {
  User.findOneAndDelete(
    { Username: req.params.Username }
    // { $pull: { Favorites: req.params.id } }
  ).then((user) => {
    console.log(user);
    res.json(user);
  });
});

app.put("/user/:Username/Favorites/FavoriteRecipes", (req, res) => {
  User.findOneAndUpdate({ Username: req.params.Username }, req.body, {
    new: true,
  }).then((updated) => {
    console.log(updated);
    res.json(updated);
  });
});

app.post("/user", (req, res) => {
  User.create(req.body).then((newAccount) => {
    console.log(newAccount);
    res.json(newAccount);
  });
});

app.get("/search/", (req, res) => {
  console.log("this route is getting called");
  console.log(req.query.q);
  //   JSON.parse(req.query.q);
  Recipe.find({ Ingredients: req.query.q }, function (err, data) {
    if (err) console.log(err);
    res.json(data);
  });
});

//   console.log(req.query);
//   res.json({ search: req.query });
//   // Recipe.find(req.querymen.q).then((search) => {
//   //   res.json(search);
// });

// }) (req, res) => {
//   let keyword = req.query;
//   Recipe.find({ Ingredients: req.params.id, Ingredients: keyword })
//     .then((recipes) => {
//       res.json(recipes);
//     })
//     .catch((err) => console.log(err));
// });

app.get("/alluseraccounts", (req, res) => {
  User.find({}).then((allaccounts) => {
    res.json(allaccounts);
  });
});

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
