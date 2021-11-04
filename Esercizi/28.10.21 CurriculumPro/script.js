/* Sulla base del vostro esercizio di ieri, andate ad aggiungere queste funzionalità. (per chi non ha completato l'esercizio, continui oggi, aggiungendo almeno i due punti sotto:

Creare una funzione che chieda all'utente di inserire 2 numeri tramite prompt e che faccia il console.log della somma soltanto dopo 10 secondi. // ATTENZIONE: Questa funzione non 'renderizza' alcunchè all'interno della pagina HTML, eccetto il prompt che chiede i numeri all'utente. Scegliete saggiamente tra setInterval e setTimeout!

Inserire un cerchio all'interno della vostra pagina html, che cambia colore ogni 5 secondi. Utilizzate un elemento già presente all'interno del documento HTML e usate il DOM per manipolarlo. Alla pressione del tasto Enter il listener viene rimosso e il cerchio smetterà di cambiare colore. TIP: removeEventListener!

AVANZATO: Creare una funzione che chieda all'utente di inserire quanti numeri egli voglia (quindi almeno uno, altrimenti ritorna non hai inserito alcun numero) e che ne stampi la somma totale. Es. se i numeri fossero 2 - 4 - 6 la somma equivarrebbe a 12. Il risultato finale non viene stampato come console.log ma va inserito come testo di un elemento H2 già esistente nella pagina!

Esercizio AVANZATO!!

Un bottone centrale che una volta premuto faccia comparire una immagine (prendetela pure da qui: https://picsum.photos/500/300) la immagine deve essere incorniciata (scegliete quindi un bel effetto cornice (css!))

Se il bottone non viene cliccato l'immagine non verrà visualizzata

Il comportamento dovrà essere di tipo toggle!

PICCOLO TIP: vi ricordo che potete nascondere un elemento HTML applicando la proprietà CSS display: none; */


// DARK MODE

const darkModeBtn = document.querySelector(".btnDarkMode");
darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("darkMode");
}

);


// PARAGRAPH COUNTER

window.addEventListener("click", () => {
    let paragraph = document.getElementsByTagName("p");
    console.log(paragraph)
},
    { once: true }

);


// LIGHT MODE

const lightMode = document.querySelector(".btnLight");
const contTwo = document.querySelector(".containerTwo");

lightMode.addEventListener("click", () => {
    contTwo.className = "btnLightEnable";
}
);


// DINAMIC SECTION

const dinamic = document.getElementById("test");

dinamic.addEventListener("mouseover", (event) => {
    event.target.style.color = "cadetblue";

    setTimeout(function () {
        event.target.style.color = "";
    }, 400);
}

);



// SOMMA DI DUE NUMERI 

    const somma = document.querySelector(".sum");

    somma.addEventListener("click", (event) => {
    let input = prompt('Inserisci qui due numeri separati da una virgola:');
    const numbs = input.split(","); // due stringhe

    const putNumb = [];

    for (x of numbs) {
        putNumb.push(parseInt(x))
    }

    const sum = (numOne, numTwo) => numOne + numTwo;

    function calculator(operation) {
        let totSum = 0;
        totSum = operation(...putNumb)
        return totSum;
    }

    calculator(sum)

    setTimeout(() => { console.log(calculator(sum)) }, 10000);

});


// CIRCLE

let intColor;

const changeColor = () => {
    if (!intColor) {
        intColor = setInterval(flashColor, 5000);
    }
};

const flashColor = () => {
    const circle = document.querySelector("#circle");
    if (circle.className === "colorOne") {
        circle.className = "colorTwo";
    } else {
        circle.className = "colorOne";
    }
};

changeColor();

document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        clearInterval(intColor);
    }
})

