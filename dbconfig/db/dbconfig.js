let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Weather_API", (err, res) => {
  if (err) {
    console.log("getting error in db" + err);
  } else {
    console.log("connected to DB");
  }
});
