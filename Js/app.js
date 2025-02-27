// jsnack1
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.
/*
const numOne = prompt('Inserisci un numero');
const numTwo = prompt('Inserisci un numero');

if(numOne > numTwo) {
    console.log( `Il numero maggiore è ${numOne}`);
} else if (numOne < numTwo) {
    console.log(`Il numero maggiore è ${numTwo}`);
} else if (numOne === numTwo) {
    console.log(`I numeri sono uguali ${numOne}`);
}

*/

// jsnack2
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.
/*
const wordFirst = prompt('Inserisci una parola');
const wordSecond = prompt('Inserisci una parola');

if(wordFirst.length > wordSecond.length) {
    console.log( `La parola più lunga è ${wordFirst}`);
} else if (wordFirst.length < wordSecond.length) {
    console.log(`La parola più lunga è ${wordSecond}`);
} else if (wordFirst.length === wordSecond.length) {
    console.log(`Le parole hanno la stessa lunghezza`);
}

*/

// jsnack3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
let sum = 0;
for (i = 1; i <= 10; i++){
    sum += parseInt(prompt('Inserisci un numero per la somma'));
    
}
console.log(sum);