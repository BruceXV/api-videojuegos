//paso 6 despues del getvideojuegosById minuto 21:40 para mi yo del fituro para cambiar la id
const {request , response} = require("express");

//paso 5
const { videojuegos } = require ("../videojuegos");

const getVideojuegos = (req, res ) => {
    //paso 4
    return res.json({
        ok:true,
        statusCode:200,
        videojuegos
    });
}
//vamos a crear una igual pero que busque por la ID de videojuegos.js
//paso 6 despues del getvideojuegosById minuto 21:40 para mi yo del fituro para cambiar la id a otra cosa para el videojuego
const getVideojuegoById = (req = request , res = response) => {
    //paso 7
    let id = parseInt(req.params.id);

    let videojuegoAbuscar = "";

    videojuegoAbuscar = videojuegos.find((videojuego)=> {
        return videojuego.id === id;
    });

    if(videojuegoAbuscar){
        return res.json({
            ok:true,
            statusCode:200,
            videojuegoAbuscar
        });
    }else{
        return res.json({
            ok:true,
            statusCode:404,
            msg:"No hay videojuegos con ese id"
        });
    }
    
}

module.exports = {
    getVideojuegos,
    getVideojuegoById
}