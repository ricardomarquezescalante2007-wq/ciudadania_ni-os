/*================================
    CARGAR PROGRESO DEL JUGADOR
================================*/


let nivel =
Number(localStorage.getItem("nivel")) || 1;


let monedas =
Number(localStorage.getItem("monedas")) || 0;


let xp =
Number(localStorage.getItem("xp")) || 0;


let misiones =
Number(localStorage.getItem("misiones")) || 0;



let medallas =

JSON.parse(

localStorage.getItem("medallas")

)

|| [];





document.getElementById("nivel")
.innerHTML = nivel;



document.getElementById("monedas")
.innerHTML = monedas;



document.getElementById("misiones")
.innerHTML = misiones;



document.getElementById("medallas")
.innerHTML = medallas.length;




/* BARRA DE EXPERIENCIA */


let porcentaje = xp;



document.getElementById("xp")
.style.width = porcentaje + "%";



document.getElementById("textoXP")
.innerHTML =

xp + " / 100 XP";

// CARGAR DATOS


let nivel =
localStorage.getItem("nivel") || 1;


let monedas =
localStorage.getItem("monedas") || 0;



document.getElementById("nivel").innerHTML=nivel;


document.getElementById("monedas").innerHTML=monedas;





// MENSAJES DE BYTE


const mensajes=[

"🤖 ¡Prepárate para una misión!",

"🔐 Recuerda proteger tus datos.",

"⭐ Cada juego aumenta tu nivel.",

"🎮 Aprende mientras juegas."

];


let i=0;


setInterval(()=>{


document.getElementById("mensaje").innerHTML=
mensajes[i];


i++;


if(i>=mensajes.length){

i=0;

}


},4000);






// IR AL MAPA


function irMapa(){


window.location.href="mapa.html";


}

function irJuegoCamara(){

    window.location.href="juego_camara.html";

}

let monedas =
localStorage.getItem("monedas") || 0;