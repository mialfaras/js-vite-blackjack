
import { pedirCarta, acumularPuntos, crearCarta } from "./";


/**
 * Recibe la baraja, le pide carta y evalua como queda la partida
 * @param {Number} minimoPuntosComputadora puntos mínimos que necesita Computadora
 * @param {Array<String>} deck baraja de cartas actual
 * @param {Array<Numbre>} puntosJugadores Array con puntuación de todos los jugadores
 * @param {HTMLElement} textoGanador texto que se imprimirá al finalizar la partida
 * @param {HTMLElement} nuevaCartaJugadores
 * @returns <Boolean> true si ya se ha acabado el juego
 */
export const jugarComputadora = (minimoPuntosComputadora, deck = [], puntosJugadores, textoGanador, puntosPantalla, nuevaCartaJugadores) => {

    if (!minimoPuntosComputadora) throw new Error("minimoPuntosComputadora obligatorio");
    
    const carta = pedirCarta(deck);

    acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosPantalla);
    crearCarta(carta, nuevaCartaJugadores.length - 1, nuevaCartaJugadores);

    if (puntosJugadores[1] > 21) {
        textoGanador.innerHTML = 'Se pasó Computadora. Ganó el jugador';
        return false;
    } else {
        if (puntosJugadores[1] === 21) {
            (puntosJugadores[0] === 21) ? textoGanador.innerHTML = 'Empate!'
                                : textoGanador.innerHTML = 'Blackjack!. Ganó Computadora';
            return false;
        } else {
            if (puntosJugadores[1] > puntosJugadores[0] 
                && puntosJugadores[1] >= minimoPuntosComputadora) {
                    textoGanador.innerHTML = 'Ganó Computadora';
                return false;
            } else {
                if (puntosJugadores[1] === puntosJugadores[0] 
                    && puntosJugadores[1] >= minimoPuntosComputadora) {
                    textoGanador.innerHTML = 'Empate!';
                    return false;
                }
            }
        }
    }
    return true;
}