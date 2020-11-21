const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness", {
    useNewURLParser: true,
    useFindAndModify: false
});

// routes
app.use(require("./routes/index"))

app.listen(PORT, () => {
    console.log(`Appp running on port ${PORT}!`)
})