let mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.dbname, (err, res) => {
  if (err) {
    console.log("getting error in db" + err);
  } else {
    console.log("connected to DB");
  }
});
