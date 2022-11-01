var express = require("express");
var router = express.Router();

const constrol = require("../src/routerController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/all", async (req, res) => {
  constrol.getAllWeatherData(req, res);
});

router.post("/", function (req, res, next) {
  constrol.createWeatherData(req, res);
});

module.exports = router;
