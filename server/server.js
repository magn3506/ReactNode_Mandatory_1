"use strict";

const express = require("express");
const path = require('path');
const app = express();
// const cors = require("cors");
const PORT = process.env.PORT || 9000;

// REQUIRE ROUTES
const todo = require("./routes/todo/todo");

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// MIDDLEWARE
// app.use(cors()); // ALLOW CORS FROM ALL *

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PATCH, POST, GET, DELETE');
    next();
});

app.use(express.urlencoded({ extended: true })); // ??
app.use(express.json()); // ??


// ROUTINGc
app.use("/api/todo", todo);

// ROOT INDEX
app.get("/", (req, res) => {
    // handle root
    res.send("Hello");
})


// LISTEN
app.listen(PORT, err => {
    if (err) {
        return console.log("ERROR", err);
    }
    console.log(`Listening on port ${PORT}`)
})