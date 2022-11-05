const axios = require("axios");
const WeatherData = require("../dbconfig/model/WeatherDataSchema");
const config = require("../config/config");
const createWeatherData = async (req, res) => {
  let city = req.body.cityName;
  try {
    const response = await axios.get(config.apiurl);
    if ("data" in response) {
      let data = response.data;
      const wether = new WeatherData({
        id: data.id,
        city: data.name,
        temp: data.main.temp,
        lat: data.coord.lat,
        lon: data.coord.lon,
        timezone: data.timezone,
      });
      console.log(wether);
      try {
        const postdata = await wether.save();
        res.json({
          Status: 200,
          data: postdata,
        });
      } catch (err) {
        res.json({
          Status: 500,
          error: "server error" + err,
        });
      }
    } else {
      res.json({
        Status: 404,
        error: "responce doesn't has property",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(404).send(err);
  }
};

const getAllWeatherData = async (req, res) => {
  try {
    const WeatherAll = await WeatherData.find();
    res.json({
      Status: 200,
      data: WeatherAll,
    });
  } catch (err) {
    res.json({
      Status: 500,
      error: "server error" + err,
    });
  }
};
exports.createWeatherData = createWeatherData;
exports.getAllWeatherData = getAllWeatherData;
