const modal = document.querySelector(".modal");
const acceptBtn = document.querySelector("#btn-accept");
//const denyBtn = document.querySelector("#btn-deny");


// ESERCIZIO 1

setTimeout(() => {
    modal.style.display = 'flex';
}, 10000);

acceptBtn.addEventListener("click", () => {
    document.body.removeChild(modal);
});

