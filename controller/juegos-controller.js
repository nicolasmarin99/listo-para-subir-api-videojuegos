const { request, response } = require("express");
const { Juegos, juegos } = require("../juegos");

const getJuegos = (req = request, res = response) => {
    return res.json({
        ok: true,
        statusCode: 200,
        juegos
    });
}

const getJuegosById = (req = request, res = response) => {

    let id = req.params.id;

    let JuegosABuscar = "";

    JuegosABuscar = juegos.find((juego) => {
        return juego.id === id;
    });

    if (JuegosABuscar) {
        return res.json({
            ok: true,
            statusCode: 200,
            JuegosABuscar
        });
    } else {
        return res.json({
            ok: false,
            statusCode: 404,
            msg: "No hay un juego con ese id"
        });
    }
}

module.exports = {
    getJuegos,
    getJuegosById
}