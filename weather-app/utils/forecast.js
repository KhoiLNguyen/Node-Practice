const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/4b24129feacca9b38aac8f2021b82534/${latitude},${longitude}`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to the weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location!', undefined)
    } else {
      const { summary } = body.daily.data[0]
      const { temperature, precipProbability } = body.currently
      callback(
        undefined,
        `${summary} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain`
      );
    }
  });
}

module.exports = forecast


