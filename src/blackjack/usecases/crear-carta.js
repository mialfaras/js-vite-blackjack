
/**
 * 
 * @param {*} carta 
 * @param {*} turno 
 * @param {*} nuevaCartaJugadores 
 */
export const crearCarta = (carta, turno, nuevaCartaJugadores) => {
    const nuevoElementoImg  = document.createElement('img');
    nuevoElementoImg.src = `assets/cartas/${carta}.png`;
    nuevoElementoImg.classList.add('carta');
    nuevaCartaJugadores[turno].append(nuevoElementoImg);
}