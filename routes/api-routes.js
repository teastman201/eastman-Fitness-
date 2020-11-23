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

// app.get("/api/authors/:id", function (req, res) {
//   // Here we add an "include" property to our options in our findOne query
//   // We set the value to an array of the models we want to include in a left outer join
//   // In this case, just db.Post
//   db.Author.findOne({
//     where: {
//       id: req.params.id
//     },
//     include: [db.Post]
//   }).then(function (dbAuthor) {
//     res.json(dbAuthor);
//   });
// });

// app.post("/api/authors", function (req, res) {
//   db.Author.create(req.body).then(function (dbAuthor) {
//     res.json(dbAuthor);
//   });
// });

// app.delete("/api/authors/:id", function (req, res) {
//   db.Author.destroy({
//     where: {
//       id: req.params.id
//     }
//   }).then(function (dbAuthor) {
//     res.json(dbAuthor);
//   });
// });

module.exports = app 