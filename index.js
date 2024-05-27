

const express = require("express");
const app = express();

const port = 3001;

const { getJuegos, getJuegosById } = require("./controller/juegos-controller");

//-------------------------------------


app.get("/", getJuegos);

app.get("/:id", getJuegosById)



//-------------------------------------

app.listen(port, () => {
    console.log(`Conectado correctamenta al puerto ${port}`);
    console.log(`Puerto ${port} disponible`);
});