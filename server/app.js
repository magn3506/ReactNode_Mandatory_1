"use strict";

const express = require("express");
const app = express();
const PORT = process.env.PORT || 9000;

// REQUIRE ROUTES
const todo = require("./routes/todo/todo");

// MIDDLEWARE
app.use(express.urlencoded({ extended: true })); // ??
app.use(express.json()); // ??


// ROUTING
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