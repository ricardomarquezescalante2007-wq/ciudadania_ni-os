/*====================================================
        GUARDIANES DIGITALES
        app.js
====================================================*/

/*==========================================
            MENSAJE DE BIENVENIDA
==========================================*/

window.addEventListener("load", () => {

    setTimeout(() => {

        alert("🤖 ¡Hola! Soy Byte.\n\n¡Bienvenido a Guardianes Digitales!\nHoy aprenderemos a proteger nuestra información mientras jugamos.");

    }, 800);

});


/*==========================================
        ANIMACIÓN AL HACER SCROLL
==========================================*/

const elementos = document.querySelectorAll(".card, .robot, .hero-text");

const mostrarElementos = () => {

    const altura = window.innerHeight;

    elementos.forEach((elemento) => {

        const posicion = elemento.getBoundingClientRect().top;

        if (posicion < altura - 100) {

            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0px)";

        }

    });

};

elementos.forEach((elemento)=>{

    elemento.style.opacity="0";
    elemento.style.transform="translateY(80px)";
    elemento.style.transition="1s";

});

window.addEventListener("scroll", mostrarElementos);

mostrarElementos();


/*==========================================
            EFECTO EN TARJETAS
==========================================*/

const tarjetas = document.querySelectorAll(".card");

tarjetas.forEach((card)=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-15px) scale(1.05)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px) scale(1)";

    });

});


/*==========================================
            BOTÓN PRINCIPAL
==========================================*/

const boton = document.querySelector(".btn");

if(boton){

boton.addEventListener("click",(e)=>{

    e.preventDefault();

    alert("🚀 Muy pronto comenzarás tu primera misión junto a Byte.");

});

}


/*==========================================
        ROBOT INTERACTIVO
==========================================*/

const robot = document.querySelector(".hero-image img");

if(robot){

robot.addEventListener("mouseenter",()=>{

    robot.style.transform="scale(1.1) rotate(5deg)";

});

robot.addEventListener("mouseleave",()=>{

    robot.style.transform="scale(1) rotate(0deg)";

});

}


/*==========================================
            CAMBIO DE TÍTULO
==========================================*/

const titulos = [

"🛡️ Guardianes Digitales",

"🤖 ¡Byte te espera!",

"🎮 Aprende jugando",

"🔐 Protege tu información"

];

let indice=0;

setInterval(()=>{

indice++;

if(indice>=titulos.length){

indice=0;

}

document.title=titulos[indice];

},3000);


/*==========================================
        BURBUJAS DE FONDO
==========================================*/

function crearBurbuja(){

    const burbuja=document.createElement("div");

    burbuja.classList.add("burbuja");

    burbuja.style.left=Math.random()*100+"vw";

    burbuja.style.width=(20+Math.random()*40)+"px";

    burbuja.style.height=burbuja.style.width;

    burbuja.style.animationDuration=(6+Math.random()*6)+"s";

    document.body.appendChild(burbuja);

    setTimeout(()=>{

        burbuja.remove();

    },12000);

}

setInterval(crearBurbuja,700);


/*==========================================
            ESTRELLAS
==========================================*/

function crearEstrella(){

    const estrella=document.createElement("div");

    estrella.innerHTML="⭐";

    estrella.classList.add("estrella");

    estrella.style.left=Math.random()*100+"vw";

    estrella.style.top=Math.random()*100+"vh";

    estrella.style.fontSize=(15+Math.random()*20)+"px";

    document.body.appendChild(estrella);

    setTimeout(()=>{

        estrella.remove();

    },5000);

}

setInterval(crearEstrella,1200);


/*==========================================
        EFECTO DE ESCRITURA
==========================================*/

const texto=document.querySelector(".hero-text h1");

if(texto){

const contenido=texto.innerText;

texto.innerHTML="";

let i=0;

function escribir(){

    if(i<contenido.length){

        texto.innerHTML+=contenido.charAt(i);

        i++;

        setTimeout(escribir,40);

    }

}

escribir();

}


/*==========================================
        REPRODUCIR SONIDO
==========================================*/

function sonidoClick(){

    const audio=new Audio("audio/click.mp3");

    audio.volume=0.4;

    audio.play();

}

document.querySelectorAll("button,.btn,.card").forEach((objeto)=>{

objeto.addEventListener("click",sonidoClick);

});


/*==========================================
            CONSOLA
==========================================*/

console.log("Guardianes Digitales iniciado correctamente.");

/*=====================================
            BYTE
======================================*/

const mensajes = [

"¡Hola! Soy Byte 🤖",

"¡Nunca compartas tu contraseña! 🔐",

"Pregunta a un adulto antes de aceptar permisos 👨‍👩‍👧",

"¡Protege tu cámara! 📷",

"¡Tu ubicación también es importante! 📍",

"¡Diviértete aprendiendo! 🎮"

];

const speech = document.getElementById("speech");

let indice = 0;

setInterval(() => {

    indice++;

    if(indice >= mensajes.length){

        indice = 0;

    }

    speech.innerHTML = mensajes[indice];

},5000);


/*=====================================
      OJOS SIGUEN EL CURSOR
======================================*/

document.addEventListener("mousemove",(e)=>{

    const ojos=document.querySelectorAll(".eye");

    ojos.forEach((ojo)=>{

        const rect=ojo.getBoundingClientRect();

        const x=e.clientX-rect.left-14;

        const y=e.clientY-rect.top-14;

        const angulo=Math.atan2(y,x);

        const moverX=Math.cos(angulo)*4;

        const moverY=Math.sin(angulo)*4;

        ojo.style.transform=`translate(${moverX}px,${moverY}px)`;

    });

});


/*=====================================
      SALUDO
======================================*/

const robot=document.getElementById("robot");

robot.addEventListener("mouseenter",()=>{

    speech.innerHTML="😊 ¡Qué gusto verte!";

});

robot.addEventListener("mouseleave",()=>{

    speech.innerHTML="🤖 ¡Sigamos aprendiendo!";

});


/*=====================================
      BRAZO SALUDANDO
======================================*/

const brazo=document.querySelector(".right-arm");

setInterval(()=>{

    brazo.animate([

        {transform:"rotate(0deg)"},

        {transform:"rotate(-40deg)"},

        {transform:"rotate(0deg)"}

    ],{

        duration:900

    });

},4000);


/*=====================================
      VOZ DEL ROBOT
======================================*/

window.addEventListener("load",()=>{

    if("speechSynthesis" in window){

        const voz=new SpeechSynthesisUtterance(

        "Hola. Soy Byte. Bienvenido a Guardianes Digitales."

        );

        voz.lang="es-MX";

        voz.rate=1;

        setTimeout(()=>{

            speechSynthesis.speak(voz);

        },1500);

    }

});

/*====================================
      INICIAR AVENTURA
====================================*/

function iniciarAventura(){


const audio = new Audio("audio/click.mp3");


audio.volume=0.5;


audio.play();



localStorage.setItem(
"aventura",
"iniciada"
);



}