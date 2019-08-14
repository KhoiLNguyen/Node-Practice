const request = require('request')

const url = 'https://api.darksky.net/forecast/4b24129feacca9b38aac8f2021b82534/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
  console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain`)
})