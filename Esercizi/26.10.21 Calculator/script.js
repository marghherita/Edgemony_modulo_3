
/* 
    Sulla base di quanto detto a lezione, creare una calcolatrice capace di svolgere diverse operazioni
    (più ne mettete meglio è!).
    La scelta dell'operazione da effettuare (per esempio somma)
    e la scelta dei numeri, deve essere specificata dell'utente.
    A tal fine, potrete utilizzare la funzione 'prompt()' per catturarne i dati.
    
    ATTENZIONE:
    L'utilizzo delle callbacks, delle arrow function e dello spread operator
    sono elementi fondamentali di questa esercitazione, mi raccomando.
    Potete chiaramete controllare il codice scritto a lezione, ma cercate di non copiare.
*/

/* Esercizio avanzato:
    Oltre alle classici funzioni somma, moltiplicazione, ecc... provate ad implementare
    l'operazione potenza e l'operazione radice quadrata.
    SUGGERIMENTO: esistono delle funzioni della libreria Math (vista a lezione).
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/


/*  
    creare una calcolatriuce che permette all'utente di selezionare un'operazione 
    e dati più di un numero (altrimenti restitutisce lo stesso) ritorni la corrispettiva 
    operazione. 

    PSEUDO
    1. L'utente sceglie l'operazione e i numeri
    2. Se il numero scelto :
        - è uno solo, ritorna lo stesso numero
        - se è inesistente, ritorna un errore
        - se più di uno, ne ritorna l'operazione
    3. Stampa a video il risultato dell'operazione
*/

const sum = (numOne, numTwo) => numOne + numTwo;

const min = (numOne, numTwo) => numOne - numTwo;

const mult = (numOne, numTwo) => numOne * numTwo;

const div = (numOne, numTwo) => numOne / numTwo;

const pow = (numOne, numTwo) => Math.pow(numOne, numTwo);

const sqrt = (numOne, numTwo) => Math.sqrt(numOne) + Math.sqrt(numTwo);


function calculator(operation, numbers) {
    let totOperation = 0;
    totOperation = operation(...numbers);
    return totOperation;
}


let operationChoice = prompt(`Inserisci operazione: somma => +
                                                    sottrazione => -
                                                    moltiplicazione = *
                                                    divisione => /
                                                    potenza => primo numero (base), secondo numero(potenza)
                                                    radice qudrata => primo numero + secondo numero = numero da mettere sotto radice`);
let numbersChoice = prompt('Inserisci numeri: ');

const numbers = numbersChoice.split(",");


const parsedNumbers = [];

for (x of numbers) {                                    
    if (isNaN(x)) {                                     // qui verifico che nel caso in cui il valore
                                                        // inserito è una stringa mi resituire l'alert "not a number"
        alert("Not a number");
    } else if (typeof numbers[1] === "undefined") {     // qui faccio in modo che se inserisco un solo numero
            console.log(numbers[0])                     // la calcolatrice mi restituisce il numero stesso
        }

        parsedNumbers.push(parseInt(x))
        
    }



switch (operationChoice){

    case"+":
        calculator(sum, parsedNumbers)
    break;

    case"-":
        calculator(min, parsedNumbers)
    break;

    case"*":
        calculator(mult, parsedNumbers)
    break;

    case"/":
        calculator(div, parsedNumbers)
    break;

    case"pow":
        calculator(pow, parsedNumbers)
    break;

    case"rad":
        calculator(sqrt, parsedNumbers)
    break;

    default:
        ('Operation not found');

}