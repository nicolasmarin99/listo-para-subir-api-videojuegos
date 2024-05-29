const juegos = require("../juegos.js")
const { request, response } = require("express")

const getJuegosByID = (req = require, res = response) => {
    let id = (req.params.id)

    let juego = juegos.find((juego) => {
        return juego.id === id
    })

    if (juego) {
        return res.json({
            ok: true,
            statusCode: 200,
            juego
        })

    } else {
        return res.json({
            ok: false,
            statusCode: 404,
            msg: "No hay juegos con ese ID"
        })
    }
}

module.exports = {
    getJuegosByID
}