var express = require("express");
var router = express.Router();

const constrol = require("../src/routerController");

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});
router.get("/all", (req, res, next) => {
  constrol.getAllWeatherData(req, res);
});

router.post("/", (req, res, next) => {
  constrol.createWeatherData(req, res);
});

module.exports = router;
