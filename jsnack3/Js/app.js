// jsnack3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
let sum = 0;
for (i = 1; i <= 10; i++){
    sum += parseInt(prompt('Inserisci un numero per la somma'));
    
}
console.log(sum);
