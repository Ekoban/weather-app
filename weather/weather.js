const request = require('request');

const getWeather = (lat, long, callback) =>
 request({
  url: `https://api.darksky.net/forecast/3703b148e531723635e1289127689736/${lat},${long}`,
  json: true
}, (error, response, body) => {
  if (error) {
    callback('Unable to connect to Forecast.io server.')
  } else if (response.statusCode === 400) {
    callback('Unable to fetch weather.');
  } else if (response.statusCode === 200) {
    callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
    })

  }
});

module.exports = {
    getWeather,
}