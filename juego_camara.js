let puntos = 0;


function respuesta(correcta){


const mensaje =
document.querySelector(".mensaje");



if(correcta){


puntos +=10;


mensaje.innerHTML=
"🎉 ¡Muy bien!<br>La cámara solo debe permitirse si confías en la aplicación.";



}else{


mensaje.innerHTML=
"🤔 Cuidado.<br>No siempre debemos aceptar permisos.";


}



document.getElementById("puntos").innerHTML=puntos;



if(puntos>=30){


terminarJuego();


}



}




function terminarJuego(){


let monedas =
Number(localStorage.getItem("monedas")) || 0;



ganarMonedas(50);

ganarXP(30);

completarMision();


agregarMedalla(
"🏅 Guardián de la Cámara"
);



localStorage.setItem(
"camaraCompletada",
"true"
);



setTimeout(()=>{


alert(
"🏆 Misión completada\nGanaste 50 monedas"
);



window.location.href="casa.html";



},2000);



}