// jsnack4
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array

let array = [];

for (i = 1; i <= 6; i++){
    
    let number = parseInt(prompt('Inserisci un numero'))
    if(number % 2 == 1 ){
        array.push(number);
    }
}

console.log(array)