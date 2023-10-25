const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routes');

const app = express();
const mongodbCore = require('./server/mongo');

mongodbCore.initialize();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send('Welocome to pesto fullstack interview!');
})

app.use('/todo', router);

app.listen(5000, function () {
    console.log('Example app listening on port 5000!')
});