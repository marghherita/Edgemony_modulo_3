
//   ATTENZIONE: Create un nuova pagina html, un nuovo file di stile e uno script js. Non usare lo stesso della lezione.

// Riprendendo la pagina web creata a lezione, voglio che il bottone che rinomina l'elemento H1 aggiunga un testo inserito dall'utente, tramite prompt.

// Opzionale: create un elemento <input> e fate aggiungere il testo all'utente non più tramite il prompt ma tramite quel campo di input. TIP: anche <input> è un elemento, e presenta delle chiavi... tra queste ne trovate una anche per il testo in esso inserito...

// Creare un elemento unordered list <ul> e un <button> all'interno del vostro HTML. Il click sul button andrà a creare un figlio <li> all'interno del padre <ul>. Non importa la quantità di li nè il valore che essi contengono. Ne basta anche uno.

// AVANZATO: Sulla base dell'esercizio 2. andate a gestire anche il contenuto (si intende il testo) del li e fate si che l'utente possa inserirne tutti quelli che vuole. Il funzionamento dovrà simulare in tutto quello di un dizionario/rubrica gestendo il flusso con i nuovi concetti di Parent / Children (padre / figlio) visti oggi.


// ESERCIZIO 1 - OPZIONALE

const h1Element = document.querySelector("h1");
const h1RenameBtn = document.querySelector(".button-rename")
const renameTitle = document.querySelector(".input-rename")


const newTitle = () => {
    h1Element.textContent = renameTitle.value;
    renameTitle.value="";
}

h1RenameBtn.addEventListener( "click", newTitle);

renameTitle.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        newTitle()
    }
});

// ESECIZIO 2 - AVANZATO

//     addElement.addEventListener("click", () => {
//     const liAdd = document.createElement('li');
//     list.appendChild(liAdd);
//     liAdd.textContent = inputAdd.value;
    
// })

const addElement = document.querySelector(".button-add");
const list = document.querySelector('ul');
const inputAdd = document.querySelector(".add-element")

// AGGIUNGI ELEMENTI ALLA LISTA 

const addList = () =>  {
    const liAdd = document.createElement('li');
    list.appendChild(liAdd);
    liAdd.textContent = inputAdd.value;
    inputAdd.value="";
};

// AGGIUNGI TRAMITE INVIO 

inputAdd.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addList()
    }
});

// AGGIUNGI TRAMITE CLICK

addElement.addEventListener("click", addList);
