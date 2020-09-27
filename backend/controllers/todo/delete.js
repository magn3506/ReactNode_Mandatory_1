const fs = require("fs");

const deleteTodo = (req, res) => {

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

        // REMOVE TODO WITH ID MATCH
        let todoesArr = jData.todoes;
        todoesArr = todoesArr.filter(todo => todo.id !== req.params.id);
        jData.todoes = todoesArr;

        // CONVERT JSON BACK TO STRING
        sData = JSON.stringify(jData, null, " "); // null, " " == pretty print
        // WRITE BACK TO DB (JSON FILE)
        fs.writeFileSync(__dirname + "/../../db/data.json", sData);

        res.status(200).send({ msg: "data was deleted" })

    });


}


module.exports = deleteTodo;