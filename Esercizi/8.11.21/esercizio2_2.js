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


// con planets.diameter creo unua nuova chiave agli oggetti 

const planetDiameter = (planets) => planets.diameter = planets.radius * 2;

const rad = solarSystem.map(planetDiameter)

console.log(rad)

const newRad = (planets) => {
    planetDiameter(planets)
    return planets
}

console.log(solarSystem.map(newRad))