
//
//Añade 2 elementos al array: "Morty" y "Summer".
// Muestra en consola el último personaje del array
//


const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

const add = rickAndMortyCharacters.push("Morty", "summer");

console.log(rickAndMortyCharacters);

const ultimo = rickAndMortyCharacters[rickAndMortyCharacters.length - 1];

console.log(ultimo);
 