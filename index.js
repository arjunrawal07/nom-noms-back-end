const express = require("express");
// var cors = require("cors");
const app = express();
const parser = require("body-parser");
// app.use(cors());
// app.get("/products/:id", function (req, res, next) {
//   res.json({ msg: "This is CORS-enabled for all origins!" });
// });
// app.listen(3000, function () {
//   console.log("CORS-enabled web server listening on port 3000");
// });

app.listen(4000, console.log("listening on 4000"));
