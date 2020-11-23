const path = require('path');
const app = require("express").Router();

// route for home page
app.get("/"), function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"))
}

// route for new workout
app.get('/exercise', function (req, res) {
  console.log()
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
})

// route for dashboard
app.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"))
})

module.exports = app;
