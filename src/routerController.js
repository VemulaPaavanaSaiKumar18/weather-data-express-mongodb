const request = require("request");
const WeatherData = require("../dbconfig/model/WeatherDataSchema");
const createWeatherData = (req, res) => {
  let city = req.body.cityname;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ea6e72aba7d75fbbf6be2aedc208af98&units=metric`;
  request(url, async (err, responce, body) => {
    let data = JSON.parse(body);
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
      const data = await wether.save();
      res.json({
        Status: 200,
        Empt: data,
      });
    } catch (err) {
      res.json({
        Status: 500,
        error: "server error" + err,
      });
    }
  });
};

const getAllWeatherData = async (req, res) => {
  try {
    const WeatherAll = await WeatherData.find();
    res.json({
      Status: 200,
      Employee: WeatherAll,
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
