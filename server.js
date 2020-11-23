// Brings in required packages
const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");

// using 8080 because 3000 is being used by comparison test environment.
const PORT = process.env.PORT || 8080;

// Creates express server
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Creates MongoDB database connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness", {
    useNewURLParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

// routes
app.use(require("./routes/api-routes"))
app.use(require("./routes/html-routes"))

// When server starts listening, it indicates which port.
app.listen(PORT, () => {
    console.log(`Appp running on port ${PORT}!`)
})