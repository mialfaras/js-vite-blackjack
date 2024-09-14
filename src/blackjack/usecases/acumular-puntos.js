import { valorCarta } from "./";

/**
 * 
 * @param {*} carta 
 * @param {*} turno 
 * @param {*} puntosJugadores 
 * @param {*} puntosPantalla 
 * @returns 
 */
export const acumularPuntos = ( carta, turno, puntosJugadores, puntosPantalla ) => {
    
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
    puntosPantalla[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}