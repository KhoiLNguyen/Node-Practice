const path = require('path')
const express = require("express"); // express is a function

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public/');

// path to public folder which has index, about, and help htmls
app.use(express.static(publicDirectoryPath))

// // app.com
// app.get("", (req, res) => {
//   res.send('<h1>fjlaejf</h1>');
// });

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
