const modal = document.querySelector(".modal");
const modalTwo = document.querySelector(".monkeys-modal");
const acceptBtn = document.querySelector("#btn-accept");
const denyBtn = document.querySelector("#btn-deny");


// ESERCIZIO 1

setTimeout(() => {
    modal.style.display = 'flex';
}, 1000);

acceptBtn.addEventListener("click", () => {
    document.body.removeChild(modal);
});

// AVANZATO

// La lista delle scimmie assassine:
const monkeysEquipe = [
    { name: "John", aka: "lo spaventa passeri", surname: "Ross" },
    { name: "Ector", aka: "il corsaro", surname: "Mauss" },
    { name: "Franco", aka: "ciccio bello", surname: "La croix" },
    { name: "Mika", aka: "la regina del male", surname: "Peretti" },
    { name: "Lucy", aka: "il male", surname: "sconosciuto" },
];

// 
denyBtn.addEventListener("click", () => {
    document.body.innerHTML = "";
    setTimeout(() => {
        document.body.style.background = 'black';
        modalTwo.style.display = 'flex';
        document.body.appendChild(modalTwo)
    }, 1000);

    setTimeout(() => {
        modalTwo.style.display = 'none';
    }, 6000);
    
})

const printMonkeys = ((container, items) => {
    const elements = items.map((element) => `<h2>${element.name} ${element.surname} aka <br> <strong>${element.aka}</strong> </h2>`);
    const content = elements.join('');
    container.innerHTML = content;
});


setTimeout(() => {
    modalTwo.style.display = 'flex';
    printMonkeys(monkey, monkeysEquipe)
}, 10000);

const monkey = document.querySelector('.div-monkey');
// const showMonkey = document.querySelector('.show-monkey');
