const fetch = require("node-fetch");
const fs = require("fs");

const apiURL = "https://api.edamam.com/search?q=recipe";
const apiKey = "&app_key=a589f24078d846c9bdba02ecd2fab13f";
const apiId = "&app_id=72de889b";

const url = `${apiURL}${apiId}${apiKey}`;

fetch(url)
  .then((res) => res.json())
  .then((res) => {
    let recipes = JSON.stringify(res);

    fs.writeFile("./db/data.json", recipes, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("data is converted");
      }
    });
  });
