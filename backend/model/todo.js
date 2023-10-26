const mongoose = require('mongoose');

const todoSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        status: { type: String, required: true },
    },
    {
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

exports.deleteFromList = async (id) => {
    let response = await todoModel.findByIdAndDelete(id)
    return response;
}

exports.updateList = async (filter, updateData) => {
    let response = await todoModel.findOneAndUpdate(filter, updateData)
    return response;
}