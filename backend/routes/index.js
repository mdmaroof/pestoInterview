const express = require('express');
const { postTodo } = require('../controller/todo');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welocome to pesto fullstack interview!');
})

router.post('/', postTodo)

router.put('/:id', (req, res) => {
    res.send('Welocome to pesto fullstack interview!');
})

router.delete('/:id', (req, res) => {
    res.send('Welocome to pesto fullstack interview!');
})

module.exports = router;