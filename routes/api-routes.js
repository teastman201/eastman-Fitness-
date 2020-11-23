const app = require("express").Router();
// the below code throws an error, it is unclear why.
var db = require("../models");


app.get("/api/workouts", function (req, res) {
  // Here we add an "include" property to our options in our findAll query
  // We set the value to an array of the models we want to include in a left outer join
  // In this case, just db.Post
  db.Workout.find({})
    .then(function (dbWorkout) {
      res.json(dbWorkout);
    });
});

app.post("/api/workouts", function (req, res) {
  db.Workout.create({})
    .then(function (dbWorkout) {
      res.json(dbWorkout);
    })
})

app.put("/api/workouts/:id", function (req, res) {
  db.Workout.findByIdAndUpdate(
    req.params.id,
    {
      $push:
      {
        exercises: req.body
      }
    },
    {
      new: true
    }
  ).then(function (dbWorkout) {
    res.json(dbWorkout);
  });
});

app.get("/api/workouts/range", function (req, res) {
  db.Workout.find({})
    .then(function (dbWorkout) {
      res.json(dbWorkout);
    });
});

module.exports = app 