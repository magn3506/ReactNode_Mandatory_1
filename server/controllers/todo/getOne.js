const fs = require("fs");



const getTodo = (req, res) => {
    // READ JSON FILE ASYNC
    fs.readFile(__dirname + "/../../db/data.json", (err, sData) => {
        if (err) throw err;
        // CONVERT DATA TO JSON
        let jData = JSON.parse(sData);


        // FIND SINGLE TODO OBJ FROM PARAM.ID
        const jTodo = jData.todoes.find(todo => todo.id === req.params.id);
        const todo = jTodo;

        // RETURN SINGLE OBJ IF MATCH ELSE NO MATCH
        if (jTodo) { return res.send({ id: jTodo.id, todo: jTodo.todo, icon: jTodo.icon }) };
        return res.status(400).send({ msg: "NO MATCH" });


    });

}

module.exports = getTodo;