const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({
        error: 'Page not found',
        name: 'Todo App v1.0'
    });
});

app.listen(5000);

module.exports.app = app;