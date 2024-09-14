// import { shuffle  } from 'underscore'; // Con esto ya funcionaria pq es lo único que usamos del underscore
import _ from 'underscore'; //Pero lo hacemos así para tener todas las funcionalidades

import { crearDeck, pedirCarta, jugarComputadora, acumularPuntos, crearCarta  } from "./usecases/index";


// patrón módulo. Función que se autoejecurá. Hara que no se puedan ver 
// por ejemplo variables en la cónsola
const miModulo = (() => {
    'use strict'  //para validar código fuente. Por ejemplo falta definir variables

    let deck             = [],
        puntosJugadores  = [];
    const tipos      = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'],
          minimoPuntosComputadora = 16;

    //Referencias HTML
    const btnPedir              = document.querySelector('#btnPedir'),
          btnNuevo              = document.querySelector('#btnNuevo'),
          btnDetener            = document.querySelector('#btnDetener'),
          puntosPantalla        = document.querySelectorAll('small'),
          nuevaCartaJugadores   = document.querySelectorAll('.divCartas'),
          textoGanador          = document.querySelector('#ganador');

    // FUNCIONES

    // Repartimos 2 cartas a jugador y 2 a computdora
    const inicializarPartida = (numJugadores) => {
        deck = crearDeck(tipos, especiales);

        puntosJugadores = [];
        for (let j = 0; j < numJugadores; j++) {
            puntosJugadores.push(0);
        }
        for (let i = 0; i < 2; i++) {
            const carta = pedirCarta(deck);
            crearCarta(carta, 0, nuevaCartaJugadores);
            acumularPuntos( carta, 0, puntosJugadores, puntosPantalla);
        }
    }


    //Eventos
    btnNuevo.addEventListener('click', () => {
        location.reload();
        inicializarPartida();
    });

    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta(deck);

        acumularPuntos(carta, 0, puntosJugadores, puntosPantalla);
        crearCarta(carta, 0, nuevaCartaJugadores);
        
        if (puntosJugadores[0] > 21) {
            textoGanador.innerHTML = 'Se pasó jugador. Ganó computadora';
            btnPedir.disabled = true;
            btnDetener.disabled = true;
        } else {
            if (puntosJugadores[0] === 21) {
                btnPedir.disabled = true;
                btnDetener.disabled = true;
                do {
                } while (jugarComputadora(minimoPuntosComputadora, deck, puntosJugadores, textoGanador, puntosPantalla, nuevaCartaJugadores));
            }
        }
    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        do {
        } while (jugarComputadora(minimoPuntosComputadora, deck, puntosJugadores, textoGanador, puntosPantalla, nuevaCartaJugadores));
    });

    inicializarPartida(2);

    // Esto es lo único que va a ser visible desde fuera de mi módulo
    return {
        nuevoJuego: inicializarPartida
    };
})();