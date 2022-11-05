let mongoose = require("mongoose");
const config = require("../../config/config");

mongoose.connect(config.dbname, (err, res) => {
  if (err) {
    console.log("getting error in db" + err);
  } else {
    console.log("connected to DB");
  }
});
