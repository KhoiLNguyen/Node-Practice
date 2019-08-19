const path = require('path')
const express = require("express"); // express is a function
const hbs = require('hbs')

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public/');
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars engine and views location
app.set('view engine' , 'hbs') // The 'view engine' just makes it so that whenever we call res.render(), we don't have to include the extension:
app.set('views', viewsPath) // The 'views' is just the path to where your templates are so res.render() knows where to look for the files.
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// app.com
app.get("", (req, res) => {
  res.render('index', {
    title: 'Weather App!',
    name: 'Khoi Nguyen'
  })
});

// app.com/about
app.get("/about", (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Khoi Nguyen'
  })
});

// app.com/help
app.get("/help", (req, res) => {
  res.render('help', {
    helpText: 'This is some helpful text',
    title: 'Help',
    name: 'Khoi Nguyen'
  })
});

// app.com/weather
app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address"
    })
  }
  res.send({
    forecast: "Weather is nice",
    location: "Arlington",
    address: req.query.address
  });
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term'
    })
  }

  console.log(req.query.search)
  res.send({
    products: []
  })
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Khoi Nguyen',
    errorMessage: 'HELP ARTICLE NOT FOUND'
  })
})

// any other path will lead to 404 page not found
app.get('*', (req, res) => { // if doesn't match above routes => 404 page not found
  res.render('404', {
    title: '404',
    name: 'Khoi Nguyen',
    errorMessage: 'Page Not Found'
  })
})

app.listen(3000, () => {
  console.log("Server is up on port 3000!");
}); // 3000 common dev port
