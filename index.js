

//paso 1
const express = require("express");
const app = express();
const puerto = 2006;


//paso 3 llamar a cord de la pagina package.json
const cors = require("cors");

//paso 4 16:56
const { videojuegos } = require ("./videojuegos");

//----------------------------------------------------
//paso 3------->
app.use(cors());

app.get("/", (req, res ) => {

})
//<-----paso 3
//----------------------------------------------------



//paso 2 levantar el servidor/puerto
app.listen( puerto , ()=> {
    console.log(`hola, el servidor de videojuegos esta bien`);
    console.log(`Servidor arriba ok en el puerto de los videojuegos ${puerto}`);
});
