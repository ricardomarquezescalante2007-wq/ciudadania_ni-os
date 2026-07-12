/*=================================
        MAPA DE AVENTURAS
=================================*/



function entrarNivel(nivel){


if(nivel==="camara"){


localStorage.setItem(
"nivelActual",
"camara"
);



alert(
"📷 ¡Comenzamos la misión Cámara!\n\nByte te acompañará."
);



}


}





/* MENSAJE AUTOMÁTICO DE BYTE */


const mensajes=[

"🤖 ¡Vamos a proteger nuestros datos!",

"⭐ Cada misión te dará recompensas.",

"🔐 Nunca compartas información personal.",

"🎮 Aprende jugando conmigo."


];


let contador=0;



setInterval(()=>{


const caja=document.querySelector(".mensaje");


contador++;


if(contador>=mensajes.length){

contador=0;

}


caja.innerHTML=mensajes[contador];


},5000);

let aventura =
localStorage.getItem("aventura");


if(aventura==="iniciada"){


console.log(
"🚀 Aventura iniciada correctamente"
);


}