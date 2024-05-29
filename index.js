const express = require('express');
const app = express();
const port = 3001;

const { getJuegos } = require('./controller/get-Juegos.js');
const { getJuegosID } = require('./controller/get.juegosById.js');

app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/juegos', getJuegos)

app.get('/byId/:id', getJuegosID)

app.listen(port, () => {
    console.log('Server running on port', port);
})