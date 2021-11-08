// ESERCIZIO 2

// Lista Sistema Solare

const solarSystem = [
    { name: "Sun", radius: 696340, surface: "star" },
    { name: "Mercury", radius: 2440, surface: "terrestrial" },
    { name: "Venus", radius: 6052, surface: "terrestrial" },
    { name: "Earth", radius: 6371, surface: "terrestrial" },
    { name: "Mars", radius: 3389, surface: "terrestrial" },
    { name: "Jupiter", radius: 69911, surface: "gas giant" },
    { name: "Saturn", radius: 58232, surface: "gas giant" },
    { name: "Uranus", radius: 25362, surface: "ice giant" },
    { name: "Neptune", radius: 24622, surface: "ice giant" },
];



// task 1 corretta 

const nameIta = ((solarSystem) => {
    switch (solarSystem.name) {
        case "Sun":
            solarSystem.name = "Sole";
            break;

        case "Mercury":
            solarSystem.name = "Mercurio";
            break;

        case "Venus":
            solarSystem.name = "Venere";
            break;

        case "Earth":
            solarSystem.name = "Terra";
            break;

        case "Mars":
            solarSystem.name = "Marte";
            break;


        case "Jupiter":
            solarSystem.name = "Giove";
            break;

        case "Saturn":
            solarSystem.name = "Saturno";
            break;

        case "Uranus":
            solarSystem.name = "Urano";
            break;

        case "Neptune":
            solarSystem.name = "Nettuno";
    }
    return solarSystem
});


const itaName = solarSystem.map(nameIta);

console.log(itaName);

// task 1  prova iniziale

// //    const nameIta = planets.name.replace( "Sole", "Mercurio", "Venere", "Terra", "Marte", "Giove", "Saturno", "Uranio", "Nettuno");
// const planetEng = [];
// const planetIta = ["Sole", "Mercurio", "Venere", "Terra", "Marte", "Giove", "Saturno", "Uranio", "Nettuno"];
// const namesPlanet = [];



// const ciao = () =>{

//     for (planets of solarSystem) {
//         const planetsName = planets.name;

//         planetEng.push(planets.name);

//     };

//     // const mapProva = planetEng.map(x => x.replace(planetEng[0], planetIta[0]));
//     for (let i=0; i < planetEng.length; i++) {
//         for (let j=0; j < planetIta.length; j++) {
//             const mapProva = planetEng.map(x => x.replace(planetEng[i], planetIta[j]));
//             namesPlanet.push(mapProva)
//         }

//     } 

// }

// ciao();
// console.log(namesPlanet)

