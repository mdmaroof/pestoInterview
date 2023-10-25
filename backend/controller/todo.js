const { insertTodo, getAllTodo } = require("../model/todo");

exports.postTodo = async (req, res) => {
    const { body } = req;
    let response;
    try {
        response = await insertTodo(body);
    }
    catch (err) {
        console.log(err)
        return
    }
    res.status(201).send({ message: 'Succefully Created Todo List', payload: response });
}


exports.getList = async (req, res) => {
    let response;
    try {
        response = await getAllTodo();
    }
    catch (err) {
        console.log(err)
        return
    }
    res.status(200).send({ payload: response });
}