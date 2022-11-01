let mongooes = require("mongoose");
let schema = mongooes.Schema;

const WeatherData = new schema({
  id: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  temp: {
    type: Object,
  },
  lat: {
    type: Number,
  },
  lon: {
    type: Number,
  },
  timezone: {
    type: Number,
  },
});

module.exports = mongooes.model("WeatherData", WeatherData);
