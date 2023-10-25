const express = require('express');
const { postTodo, getList, deleteTodo, updateTodo } = require('../controller/todo');

const router = express.Router();

router.get('/', getList);
router.post('/', postTodo);
router.put('/:id', updateTodo)
router.delete('/:id', deleteTodo)

module.exports = router;