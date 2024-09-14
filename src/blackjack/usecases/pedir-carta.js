
/**
 * Esta función permite cojer la última carta de la baraja
 * @param {Array<String>} deck 
 * @returns {String} retorna la última carta de la baraja
 */
export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
}