// jsnack2
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const wordFirst = prompt('Inserisci una parola');
const wordSecond = prompt('Inserisci una parola');

if(wordFirst.length > wordSecond.length) {
    console.log( `La parola più lunga è ${wordFirst}, invece la parola più corta ${wordSecond}`);
} else if (wordFirst.length < wordSecond.length) {
    console.log(`La parola più lunga è ${wordSecond}, invece la parola più corta ${wordFirst}`);
} else if (wordFirst.length === wordSecond.length) {
    console.log(`Le parole hanno la stessa lunghezza`);
}
