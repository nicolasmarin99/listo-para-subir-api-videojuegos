
const express = require("express");
const app = express();
const port = 3001;

const { getJuegos, getJuegosById } = require("./controller/juegos-controller");

app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});

//-------------------------------------


app.get("/juegos", getJuegos);

app.get("/:id", getJuegosById)



//-------------------------------------

app.listen(port, () => {
    console.log(`Conectado correctamenta al puerto ${port}`);
    console.log(`Puerto ${port} disponible`);
});