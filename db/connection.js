const mongoose = require("mongoose");

module.exports = mongoose;
mongoose.set("useFindAndModify", false);
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);

let mongoURI = "";
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/nomnoms";
}

mongoose.connect(mongoURI), { useNewUrlParser: true };
