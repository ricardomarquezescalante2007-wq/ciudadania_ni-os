/*========================================
        SISTEMA DE PROGRESO BYTE
========================================*/


// Crear datos del jugador si no existen

function iniciarJugador(){


    if(!localStorage.getItem("nivel")){

        localStorage.setItem("nivel",1);

    }


    if(!localStorage.getItem("xp")){

        localStorage.setItem("xp",0);

    }


    if(!localStorage.getItem("monedas")){

        localStorage.setItem("monedas",0);

    }


    if(!localStorage.getItem("medallas")){

        localStorage.setItem(
            "medallas",
            JSON.stringify([])
        );

    }


    if(!localStorage.getItem("misiones")){

        localStorage.setItem("misiones",0);

    }


}





// ================================
// OBTENER DATOS
// ================================


function obtenerDatos(){


    return {


        nivel:
        Number(localStorage.getItem("nivel")) || 1,


        xp:
        Number(localStorage.getItem("xp")) || 0,


        monedas:
        Number(localStorage.getItem("monedas")) || 0,


        misiones:
        Number(localStorage.getItem("misiones")) || 0,


        medallas:
        JSON.parse(
        localStorage.getItem("medallas")
        ) || []


    };


}







// ================================
// GANAR EXPERIENCIA
// ================================


function ganarXP(cantidad){


    let xp =
    Number(localStorage.getItem("xp")) || 0;



    let nivel =
    Number(localStorage.getItem("nivel")) || 1;



    xp += cantidad;



    // Cada 100 XP sube nivel

    if(xp >=100){


        xp = xp - 100;


        nivel++;


        alert(

        "🎉 ¡Felicidades!\nSubiste al nivel "+nivel

        );


    }



    localStorage.setItem(
        "xp",
        xp
    );


    localStorage.setItem(
        "nivel",
        nivel
    );


}







// ================================
// GANAR MONEDAS
// ================================


function ganarMonedas(cantidad){


    let monedas =

    Number(
    localStorage.getItem("monedas")
    ) || 0;



    monedas += cantidad;



    localStorage.setItem(

        "monedas",

        monedas

    );


}








// ================================
// COMPLETAR MISIÓN
// ================================


function completarMision(){


    let misiones =

    Number(
    localStorage.getItem("misiones")
    )
    ||0;



    misiones++;



    localStorage.setItem(

        "misiones",

        misiones

    );


}








// ================================
// AGREGAR MEDALLA
// ================================


function agregarMedalla(nombre){


    let medallas =

    JSON.parse(

    localStorage.getItem("medallas")

    )
    || [];



    if(!medallas.includes(nombre)){


        medallas.push(nombre);


    }



    localStorage.setItem(

        "medallas",

        JSON.stringify(medallas)

    );



}







// Inicializar

iniciarJugador();