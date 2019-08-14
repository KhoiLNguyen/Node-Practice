const geocode = require('./utils/geocode.js')

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

geocode('Boston', (error, data) => {
  console.log('Error',error)
  console.log('Data', data)
})