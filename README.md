# nom-noms-back-end

## Description:
The nom-noms API hosts recipe information and data utilized by the nom-noms application. 
The application enables users to create/delete their accounts, search for recipes with a keyword, and update their accounts by selecting which recipes are their favorites.

## Technologies Used:
* Back-End:
    * MongoDB
    * Express
    * Node.js
    * Mongoose

## API Documentation
The documentation for the API, including routes, can be found here [https://app.swaggerhub.com/apis/arjunrawal07/Nom-Noms-API-Documentation/1.0.0]

## API Breakdown:

### Recipe Data:
The data model for recipe is structured like the example below:
```js
  Name: String,
  Ingredients: [String],
  URL: String,
  ```
 The data model for user accounts is structured like the example below:
 ```js
  Username: String,
  Password: String,
  Favorites: [favoriteSchema],
 ```
## Challenges:
Challeneges in building this application focused on accessing the data needed for the application, or the data a user might request through the front-end.  We used the Edamam API for Recipe Search [https://developer.edamam.com/] to source data for the nom-noms API. 

Implementing the keyword-search in the routes was the biggest challenege on the back-end.  We solved this problem by using $regex.

According to the MongoDB documentation: $regex provides regular expression capabilities for pattern matching strings in queries. You can learn more about $regex here [https://docs.mongodb.com/manual/reference/operator/query/regex/].

To retrieve recipe data based on a keyword search, our route needed to be structred like so:
```js
app.get("/search", (req, res) => {
  console.log("this route is getting called");
  let ingredient = req.query.ingredient;

  Recipe.find({ Ingredients: { $regex: ingredient, $options: "i" } }, function (
    err,
    docs
  ) {}).then((recipes) => {
    console.log(recipes);
    res.json(recipes);
  });
});
```
