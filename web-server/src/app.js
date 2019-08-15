const path = require('path')
const express = require("express"); // express is a function

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public/');

app.set('view engine' , 'hbs')
// path to public folder which has index, about, and help htmls
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
    title: 'Help',
    name: 'Khoi Nguyen'
  })
});

// app.com/weather
app.get("/weather", (req, res) => {
  res.send({
    forecast: "Weather is nice",
    location: "ARlington, TX"
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000!");
}); // 3000 common dev port
