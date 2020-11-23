// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

const path = require('path');
const app = require("express").Router();

// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })

// define the home page route
app.get("/"), function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"))
}

app.get('/exercise', function (req, res) {
  console.log()
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
  // res.send('Birds home page')
})

app.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"))
})


// const router = express.Router();
// app.use(router);

// // Routes
// router.get("/exercise", function (req, res) {
//   console.log("exerciseRoute");
//   res.sendFile(express.static(__dirname, "/exercise.html"));

// });

module.exports = app;
