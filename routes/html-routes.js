// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

const path = require('path');
const router = express.Router();

// Routes
// =============================================================
module.exports = function (router) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../exercise.html"));
  });

  // router.get("/api/transaction", (req, res) => {
  //   Transaction.find({})
  //     .sort({ date: -1 })
  //     .then(dbTransaction => {
  //       res.json(dbTransaction);
  //     })
  //     .catch(err => {
  //       res.status(400).json(err);
  //     });
  // });

  module.exports = router;

  // // cms route loads cms.html
  // app.get("/cms", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/cms.html"));
  // });

  // // blog route loads blog.html
  // app.get("/blog", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/blog.html"));
  // });

  // // authors route loads author-manager.html
  // app.get("/authors", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  // });

};
