const User = require("../models/User");

const userData = require("./userData.json");
const favoriteData = require("./favoriteData.json");

const userAccounts = userData.map((userAccount) => {
  const account = {};
  account.Username = userAccount.Username;
  account.Password = userAccount.Password;
  account.Favorites = userAccount.Favorites;
  account.RecipeHistory = userAccount.RecipeHistory;
  account.IngredientsToAvoid = userAccount.IngredientsToAvoid;
  return account;
});

User.deleteMany({}).then(() => {
  User.create(userAccounts)
    .then((accounts) => {
      console.log(accounts);
    })
    .catch((err) => {
      console.log(err);
    });
});
