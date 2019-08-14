const request = require("request");

// const url =
//   "https://api.darksky.net/forecast/4b24129feacca9b38aac8f2021b82534/37.8267,-122.4233";
// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to the weather service!');
//   } else if (response.body.error) {
//     console.log('Unable to find location!')
//   } else {
//     console.log(
//       `${response.body.daily.data[0].summary} It is currently ${
//         response.body.currently.temperature
//       } degrees out. There is a ${
//         response.body.currently.precipProbability
//       }% chance of rain`
//     );
//   }
// });
console.log([].length)
const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?limit=1&access_token=pk.eyJ1IjoibWlzdXRpbmVrbyIsImEiOiJjanphajZ2NzQwMTVvM2J0aDg2MXZueTF3In0.pTNnGLqr6WvhFghmiiHJdA'
request({ url: geocodeUrl, json: true }, (error, response) => {
  if(error) {
    console.log('Unable to connect to the location services!')
  } else if (response.body.message) {
    console.log('Unable to complete request: ' + response.body.message)
  } else if (response.body.features.length === 0) {
    console.log('Invalid Location/ Location doesn\'t match')
  } else {
    const { center } = response.body.features[0];
    const latitude = center[0]
    const longitude = center[1]
    console.log(latitude, longitude);
  }
})
