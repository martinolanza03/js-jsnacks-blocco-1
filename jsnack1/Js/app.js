// jsnack1
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.


const numOne = prompt('Inserisci un numero');
const numTwo = prompt('Inserisci un numero');

if(numOne > numTwo) {
    console.log( `Il numero maggiore è ${numOne}`);
} else if (numOne < numTwo) {
    console.log(`Il numero maggiore è ${numTwo}`);
} else if (numOne === numTwo) {
    console.log(`I numeri sono uguali ${numOne}`);
}