"use strict";

const express = require("express");
let router = express.Router();

// CONTROLLERS
const getTodoes = require("../../controllers/todo/getAll");
const getTodo = require("../../controllers/todo/getOne");
const createTodo = require("../../controllers/todo/create-todo");
const updateTodo = require("../../controllers/todo/update");
const deleteTodo = require("../../controllers/todo/delete");

// Routes
router
    .get("/", getTodoes) // GET ALL TODOES
    .get("/:id", getTodo) // GET TODO BY ID
    .post("/", createTodo) // CREATE TODO
    .patch("/:id", updateTodo) // UPDATE TODO BY ID
    .delete("/:id", deleteTodo) // DELETE TODO BY ID

module.exports = router;