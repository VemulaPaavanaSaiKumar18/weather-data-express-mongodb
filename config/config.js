let config = {
  dbname: "mongodb://localhost:27017/Weather_API",
  apiurl: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ea6e72aba7d75fbbf6be2aedc208af98&units=metric`,
};

module.exports = config;
