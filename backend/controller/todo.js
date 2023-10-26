const { insertTodo, getAllTodo, deleteFromList, updateList } = require("../model/todo");

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
    res.status(201).send({ message: 'Succefully Created Todo List', response });
}

exports.deleteTodo = async (req, res) => {
    const { params } = req;
    const { id } = params;
    let response;
    try {
        response = await deleteFromList(id);
    }
    catch (err) {
        console.log(err)
        return
    }
    res.status(200).send({ message: 'Deleted Todo List' });
}

exports.updateTodo = async (req, res) => {
    const { params } = req;
    const { id } = params;
    const { body } = req;
    const filter = { _id: id };

    let response;
    try {
        response = await updateList(filter, body);
    }
    catch (err) {
        console.log(err)
        return
    }
    res.status(200).send({ message: 'Updated Todo List' });
}

