const express = require('express') // express is a function

const app = express()

// app.com
app.get('', (req, res) => {
  res.send('<h1>Weather</h1>')
})

// app.com/help
app.get('/help', (req, res) => {
  res.send('Help Section')
})

// app.com/about
app.get('/about', (req, res) => {
  res.send('About Section')
})
 // app.com/weather
app.get('/weather', (req, res) => {
  res.send('Weather Section')
})


app.listen(3000, () => {
  console.log('Server is up on port 3000!')
}) // 3000 common dev port