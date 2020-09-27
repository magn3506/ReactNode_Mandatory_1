"use strict";
const fs = require('fs');

// GET TODOS
const getTodoes = (req, res) => {

    // READFILE ASYNC
    fs.readFile(__dirname + "/../../db/data.json", (err, data) => {
        if (err) throw err;
        let todoes = JSON.parse(data);
        // SEND RESPONSE
        res.send(todoes);

    });

};


module.exports = getTodoes;