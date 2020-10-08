const fs = require("fs");
const uuid = require("uuid"); // CREATIND RANDOM GENERATED ID

const createTodo = (req, res) => {

    const body = req.body;

    // TJEK IF BODY IS EMPTY
    const isEmpty = Object.keys(body).length === 0 && body.constructor === Object;

    // EXIT SCRIPT IF BODY IS EMPTY
    if (isEmpty) {
        return res.status(400).send({
            msg: "Body is empty",
        });
    }

    // READ DB FILE
    fs.readFile(__dirname + "/../../db/data.json", (err, sData) => {

        if (err) throw err;

        // CONVERT DATA TO JSON
        let jData = JSON.parse(sData);

        const { todo, icon } = req.body
        // CREATE NEW OBJ FROM POST
        const newTodo = {
            id: uuid.v4(),
            todo,
            icon,
        }

        // PUSH TO jData.todoes
        jData.todoes.push(newTodo);
        // CONVERT JSON BACK TO STRING
        sData = JSON.stringify(jData, null, " "); // null, " " == pretty print
        // WRITE BACK TO DB (JSON FILE)
        fs.writeFileSync(__dirname + "/../../db/data.json", sData);
        // SEND RESPONSE

        return res.status(200).send({ msg: "Todo Was created", status: 200 });

    });
}


module.exports = createTodo;