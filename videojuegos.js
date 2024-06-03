//esto es la api

const videojuegos = [
    {
        "id":1,
        "nombre":"Shadow of war",
        "Género":"Acción",
        "año de lanzamiento":"21 de noviembre de 2014",
        "descripcion":"La Tierra Media: Sombras de guerra, al igual que su predecesor, es un videojuego de rol de acción en tercera persona con elementos de mundo abierto. El jugador toma el control de Talion, un montaraz de Gondor que posee varias habilidades atléticas y de combate.",
       "Clasificación": "M",
       "precio":"$49.99 ",
       "imagen": "https://image.api.playstation.com/cdn/UP1018/CUSA12438_00/Wg1UPGkZwPKhKAAe5rzWlSEZiRo8SnjR.png"  // Añade la ruta de la imagen aquí
       
    },
    {
        "id":2,
        "nombre":"The Escapists",
        "Género":"Acción",
        "año de lanzamiento":"20 de agosto de 2014",
        "descripcion":"The Escapists es una galardonada simulación sobre la fuga de una prisión que permite a los jugadores hacerse una idea de cómo es la vida cotidiana en una cárcel de un modo desenfadado. Domina las rutinas, planea tu estrategia y lleva a cabo tu huida. Esta descripción ha sido proporcionada por el autor del programa.",
       "Clasificación": "M",
       "precio":"$17.99.",
       "imagen": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/298630/header.jpg?t=1668604330",
    },
    {
        "id":3,
        "nombre":"Lethal Company",
        "Género":" aventura de acción cooperativa y supervivencia",
        "año de lanzamiento":"octubre de 2023 ",
        "descripcion":"Lethal Company es una aventura de acción cooperativa y supervivencia a cargo de Zeekerss para PC. Eres un trabajador contratado por la Compañía. Tu trabajo consiste en recolectar chatarra de lunas industrializadas abandonadas para cumplir con la cuota de ganancias de la Compañía.",
       "Clasificación": "M",
       "precio":"$9.99",
       "imagen": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1966720/capsule_616x353.jpg?t=1700231592"
    }
    ,
    {
        "id":4,
        "nombre":"Undertale",
        "Género":" Juego de rol",
        "año de lanzamiento":"15 de septiembre de 2015",
        "descripcion":"Undertale es un videojuego de rol en 2D de 2015 creado por el desarrollador independiente estadounidense Toby Fox. El jugador controla a un niño que ha caído al subsuelo: una gran región aislada bajo la superficie de la Tierra, separada por una barrera mágica.",
       "Clasificación": "M",
       "precio":"$17.99.",
       "imagen": "https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/F6UDMINW3FDFXJ6LZISNCAIEE4.png",
    }
    ,
    {
        "id":5,
        "nombre":"Dragon ball Xenoverse",
        "Género":" Juego de rol",
        "año de lanzamiento":"15 de septiembre de 2015",
        "descripcion":"Dragon Ball Xenoverse es un videojuego basado en la franquicia de los medios de comunicación de Dragon Ball. Está disponible para PlayStation 3, PlayStation 4, Xbox 360, Xbox One y Microsoft Windows.",
       "Clasificación": "M",
       "precio":"$27.900",
       "imagen": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Dragon_Ball_Xenoverse_cover_art.jpg/220px-Dragon_Ball_Xenoverse_cover_art.jpg"
    }
    ,
    {
        "id":6,
        "nombre":"Content Warning",
        "Género":"cooperativo de terror y supervivencia ",
        "año de lanzamiento":"1 de abril de 2024",
        "descripcion":"",
       "Clasificación": "M",
       "precio":"7,79 €",
       "imagen": "ruta/a/la/imagen1.jpg"
    }
    ,
    {
        "id":7,
        "nombre":"Left 4 Dead 2",
        "Género":"disparos en primera persona cooperativo de tipo videojuego de terror ",
        "año de lanzamiento":"17 de noviembre de 2009",
        "descripcion":"Advertencia de contenido es un videojuego cooperativo de terror y supervivencia de 2024 publicado por Landfall Publishing. ",
       "Clasificación": "M",
       "precio":"$5.00",
       "imagen": "https://www.digitec.ch/im/Files/7/5/7/7/0/8/1/7/content-warning21.png?impolicy=ProductTileImage&resizeWidth=1136&resizeHeight=568&cropWidth=1136&cropHeight=568"
    }
    ,
    {
        "id":8,
        "nombre":"Call Of Duty Warzone",
        "Género":" disparos en primera persona5",
        "año de lanzamiento":"10 de marzo de 2020",
        "descripcion":"Call of Duty: Warzone fue un videojuego de disparos en primera persona, perteneciente al género Battle royale gratuito",
       "Clasificación": "M",
       "precio":"$24.990",
       "imagen": "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/wz/overview/WZPLP_Hero.webp"
    }
    ,
    {
        "id":9,
        "nombre":"Star Wars Battlefront Classic Collection",
        "Género":" JAcción, disparos en primera persona, disparos en tercera persona",
        "año de lanzamiento":"14 de marzo de 2024",
        "descripcion":"Star Wars Battlefront Classic Collection, which sees the beloved Star Wars Battlefront (2004) and Star Wars Battlefront II (2005)",
       "Clasificación": "M",
       "precio":"$42.98*",
       "imagen": "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000067943/76a8eddbf6b51dd322b20d920f06488fcd9992943d12154ddc7f85e595acf986"
    }
];

module.exports = {
    videojuegos
}