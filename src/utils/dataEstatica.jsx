

import beer from "../assets/beer.json"
export const DataNivelesverdadbebida =[
  {
    text:"Normal",
    color1:"#00A0FF",
    color2:"#01C4FE"
  },
  {
    text:"Fiesta",
 color1:"#FFC000",
    color2:"#FF8D00"
   
  },
  {
    text:"Puerco",

 color1:"#FF0067",
    color2:"#FC0027"
   
  },
  {
    text:"Intimo",
    color1:"#E800C6",
    color2:"#C000FB"
  }
]

export const DataPreguntas = [
  {
    pregunta: "🌞",
    descripcion: "light",
   
  },
  {
    pregunta: "🌚",
    descripcion: "dark",
    
  },
];


export const TemasData = [
  {
    icono: "🌞",
    descripcion: "light",
   
  },
  {
    icono: "🌚",
    descripcion: "dark",
    
  },
];

//data configuracion
export const DataModulosConfiguracion =[
  {
    title:"Verdad o bebida - admin",
    subtitle:"registra tus preguntas",
    icono:"https://i.ibb.co/nwJc9yJ/pngwing-com-75.png",
    link:"/configuracion/verdadobebida",
    animacion:beer,
    modo:"admin",
    target:"_self"
   
  },


]
export const DataModulosJugador =[
  {
    title:"Verdad o bebida-jugador",
    subtitle:"prueba tus juegos",
    icono:"https://i.ibb.co/nwJc9yJ/pngwing-com-75.png",
    link:"https://verdad-o-bebida.web.app/",
    animacion:beer,
    modo:"jugador",
    target:"_blank"
   
  },


]

