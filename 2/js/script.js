// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

debugger;

let arrayNumeriUtente = [];

// definizione e assegnazione
let numeroUtente = parseInt(prompt("Inserire un numero"));

// Inserisco il numero dentro l'array
arrayNumeriUtente.push(numeroUtente);

if (numeroUtente < 50) {
    // Definizione e assegnazione
    let numeroUtente2 = parseInt(prompt("Inserire un numero"));

    // Inserisco il numero dentro l'array
    arrayNumeriUtente.push(numeroUtente2);

    let sommaNumeri = numeroUtente + numeroUtente2;

    if (sommaNumeri < 50) {
        // Definizione e assegnazione
        let numeroUtente3 =  parseInt(("Inserisci un numero"));

        // Inserisco il numero dentro l'array
        arrayNumeriUtente.push(numeroUtente3);

        let sommaNumeri = numeroUtente + numeroUtente2 + numeroUtente3;
    }
}



