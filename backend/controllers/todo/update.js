const fs = require("fs");

const updateTodo = (req, res) => {

    // READ DB FILE
    fs.readFile(__dirname + "/../../db/data.json", (err, sData) => {

        if (err) throw err;

        // CONVERT DATA TO JSON
        let jData = JSON.parse(sData);

        // TJEK I ID EXISTS IN DB - IF NOT EXIT SCRIPT
        const isMatch = jData.todoes.find(todo => todo.id === req.params.id);
        if (!isMatch) {
            return res.status(400).send({ msg: "ERROR" })
        }

        // UPDATES OBJECT WITH MATHING ID
        jData.todoes = jData.todoes.map(todo => {
            if (todo.id === req.params.id) {
                return { ...todo, ...req.body, id: todo.id };
            }
            return todo;
        });

        // CONVERT JSON BACK TO STRING
        sData = JSON.stringify(jData, null, " "); // null, " " == pretty print
        // WRITE BACK TO DB (JSON FILE)
        fs.writeFileSync(__dirname + "/../../db/data.json", sData);

        res.status(200).send({ msg: "data was updated" })

    });


}


module.exports = updateTodo;