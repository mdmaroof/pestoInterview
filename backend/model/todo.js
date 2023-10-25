const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    todo: { type: String, required: true },
    created_at: { type: Number, required: true },
    updated_at: { type: Number, required: true },
})

const todoModal = mongoose.model('todo', todoSchema);

exports.getAllTodo = async () => {
    let response = await todoModal.find();
    return response;
}