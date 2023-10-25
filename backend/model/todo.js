const mongoose = require('mongoose');

const todoSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
    },
    {
        timestamps: true,
        collection: "todo"
    },
)

const todoModel = mongoose.model('todo', todoSchema);

exports.getAllTodo = async () => {
    let response = await todoModel.find();
    return response;
}

exports.insertTodo = async (data) => {
    let response = await todoModel.create(data)
    return response;
}