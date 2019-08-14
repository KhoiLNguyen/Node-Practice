const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if(!address) {
  console.log("Please try again! Make sure you specify it in this format")
  console.log("node filename.js \'name of location\'")
} else {
  geocode(address, (error, data) => {
    if (error) {
      return console.log(error)
    }
  
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error)
      }
  
      console.log(data.location)
      console.log(forecastData)
    })
  })
}