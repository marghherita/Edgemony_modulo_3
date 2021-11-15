/*  
  ESERCIZI SULLO SCOPE
  ATTENZIONE: provare a prima dare prima la risposta e solo dopo testare il codice!!
  Giustificatene il motivo con un commento, subito accanto a 'RISPOSTA:'.
*/

// Es. 1: Dato il seguente 'snippet' (piccolo programmino), qual'è il risultato dei console.log?
// RISPOSTA: in entrambi i casi il risultato sarà 3.14 poichè nel primo caso abbiamo dichiarato una costante e chiediamo di stamparla, 
//           nel secondo la condizione viene soddisfatta

const PI = 3.14;

console.log(PI);

if (PI >= 3) {
  console.log(PI);
}

// Es. 2: Dato il seguente, qual'è il risultato dei console.log?
// RISPOSTA: il risultato dei console.log è 'violet' e '12': nel primo caso perchè la variabile var da prendere in considerazione è quella all'interno 
//           delle parentesi graffe, se fosse stata var favColour = "blue"; in quel caso avrebbe stampato "blue" in quanto all'interno del local scope
//           della condizione if, gerarchicamente più forte


var favColour = "violet";
let monthsInAYear = 12;

if (true) {
  var favColour = "violet";
  console.log("Il mio colore preferito è:", favColour);
}

console.log("Ci sono", monthsInAYear, "mesi in un anno.");

// Es. 3: Dato il seguente, qual'è il risultato dei console.log?
// RISPOSTA: Il risultato del console.log sarà "Sugo di pomodoro freschissimo, rucola, prosciutto crudo e scaglie di grana.", questo perchè 
//           la variabile theSecond = "Sugo di pomodoro freschissimo" è stata dichiarata nel local scope della funzione, che non comunica con 
//           il local scope della condizione if, dando un errore di tipo ReferenceError, in quanto non può essere richiamata.

function makePizza(moreIngredients) {
  let theSecond = "Sugo di pomodoro freschissimo";
  // { ... }
  console.log(theSecond + ", " + moreIngredients);
  return true; // non fa niente in pratica! Ritorna solo true (ne riparleremo a lezione!)
}

if (true) {
  makePizza("rucola, prosciutto crudo e scaglie di grana.");
  console.log("Il secondo ingrediente necessario: ", theSecond);
}