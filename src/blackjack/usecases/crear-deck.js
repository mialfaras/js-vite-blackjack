import _ from 'underscore';

/**
 * Esta función genera una nueva baraja
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} retorna una nuevo deck
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if ( !tiposDeCarta || !tiposDeCarta.length>0) 
        throw new Error('tiposDeCarta es obligatorio como un arreglo de string');
    
    if ( !tiposEspeciales || !tiposEspeciales.length>0) 
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

        let deck = [];
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tiposDeCarta) {
                deck.push(i + tipo);   
                if (i === 2) {
                    for (let especial of tiposEspeciales) {
                        deck.push(especial + tipo);
                    }
                }
            }
        }
        
        deck = _.shuffle(deck); // libreria underscore. Para barajar un array
        return deck;
    }