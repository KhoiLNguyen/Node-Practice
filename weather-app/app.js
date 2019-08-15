const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if(!address) {
  console.log("Please try again! Make sure you specify it in this format")
  console.log("node filename.js \'name of location\'")
} else {
  geocode(address, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log(error)
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error)
      }
  
      console.log(location)
      console.log(forecastData)
    })
  })
}