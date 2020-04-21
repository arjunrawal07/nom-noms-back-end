const mongoose = require("mongoose");

module.exports = mongoose;
mongoose.set("useFindAndModify", false);
mongoose.set("useNewUrlParser", true);

let mongoURI = "";
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/countries";
}

mongoose.connect(mongoURI), { useNewUrlParser: true };
