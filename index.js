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

// app.post("/user", (req, res) => {
//   console.log(req.body);
//   User.create({
//     Username: req.body.Username,
//     Password: req.body.Password,
//   }).then((newUser) => {
//     console.log("Successfully, created", newUser);
//     res.json(newUser);
//   });
// });

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

app.get(
  "/",
  querymen.middleware({
    q: {
      type: String,
      paths: ["Ingredients"],
    },
  }),
  function (req, res) {
    console.log(req.querymen.query);
    Recipe.find(req.querymen.query, function (err, data) {
      if (err) console.log(err);
      res.json(data);
    });
  }
);
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

app.listen(4000, console.log("listening on 4000"));
