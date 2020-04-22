const fetch = require("node-fetch");
const fs = require("fs");

const apiURL = "https://api.edamam.com/search?q=&from=0&to=50";
const apiId = "&app_id=72de889b";
const apiKey = "&app_key=a589f24078d846c9bdba02ecd2fab13f";
const apiLabel = "&diet=high-protein";

const url = `${apiURL}${apiId}${apiKey}${apiLabel}`;

fetch(url)
  .then((res) => res.json())
  .then((res) => {
    let recipes = JSON.stringify(res);
    fs.writeFile("./db/recipeData.json", recipes, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("data is converted");
      }
    });
  });
