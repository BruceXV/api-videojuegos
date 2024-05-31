

//paso 1
const express = require("express");
const app = express();
const puerto = 2006;


//paso 3 llamar a cord de la pagina package.json
const cors = require("cors");

/*paso 4 ahora este codigo del const de {videojuegos} va a pasar al videojuegos.controllers.js
const { videojuegos } = require ("./videojuegos");*/

//----------------------------------------------------
//paso 3------->
//paso 5 
const {getVideojuegos, getVideojuegoById} = require("./controllers/videojuegos.controllers")

app.use(cors());

app.get("/", getVideojuegos )
//paso 6 tengo que cambiar la id bruce del futuro minuto 23:57
app.get("/:id", getVideojuegoById)


//ahora crearemos los controladores del paso 5
//<-----paso 3
//----------------------------------------------------



//paso 2 levantar el servidor/puerto
app.listen( puerto , ()=> {
    console.log(`hola, el servidor de videojuegos esta bien`);
    console.log(`Servidor arriba ok en el puerto de los videojuegos ${puerto}`);
});
