const express = require('express');
const { postTodo, getList } = require('../controller/todo');

const router = express.Router();

router.get('/', getList);
router.post('/', postTodo);

router.put('/:id', (req, res) => {
    res.send('Welocome to pesto fullstack interview!');
})

router.delete('/:id', (req, res) => {
    res.send('Welocome to pesto fullstack interview!');
})

module.exports = router;