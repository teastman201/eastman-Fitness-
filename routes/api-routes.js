const app = require("express").Router();
// the below code throws an error, it is unclear why.
var db = require("../models");


app.get("/api/workouts", function (req, res) {
  // query to find all workouts in the Workout database
  db.Workout.find({})
    .then(function (dbWorkout) {
      res.json(dbWorkout);
    });
});

app.post("/api/workouts", function (req, res) {
  // query to create a workout in the Workout database
  db.Workout.create({})
    .then(function (dbWorkout) {
      res.json(dbWorkout);
    })
})

app.put("/api/workouts/:id", function (req, res) {
  // query to find a workout in the Workout database by id
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
  // query to find all workouts in the Workout database
  db.Workout.find({})
    .then(function (dbWorkout) {
      res.json(dbWorkout);
    });
});

module.exports = app 