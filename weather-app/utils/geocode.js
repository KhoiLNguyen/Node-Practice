const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?limit=1&access_token=pk.eyJ1IjoibWlzdXRpbmVrbyIsImEiOiJjanphajZ2NzQwMTVvM2J0aDg2MXZueTF3In0.pTNnGLqr6WvhFghmiiHJdA`
  
  request({ url: url, json: true}, (error, response) => {
    if (error) {
      callback('Unable to connect to location services!', undefined) // could set 2nd argument as undefined explicitly but it is fine without, since JS will automatically recognize it
    } else if (response.body.message || response.body.features.length === 0) {
      callback('Unable to find location. Try another search!', undefined)
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name
      })
    }
  })
}

module.exports = geocode