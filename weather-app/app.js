const request = require('request')

const url = 'https://api.darksky.net/forecast/4b24129feacca9b38aac8f2021b82534/37.8267,-122.4233'

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body)
  console.log(data.currently);
})