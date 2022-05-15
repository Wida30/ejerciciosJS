var dieHardArray = [1, 2, "Simon", "John McClane", "Zeus Carver"];

var dieHardObj = {
  name: "John",
  surname: "McClane",
  age: 37,
};

// Iterar un Array
for (value of dieHardArray) {
  console.log(value);
}

for (key in dieHardArray) {
  console.log(key);
}

// Iterar un Objeto

for (key in dieHardObj) {
  console.log(key);
}

for (value of dieHardObj) {
  console.log(value);
}

/*Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

*/
const animals = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

let index = " ";

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes(text)) {
      index = array.indexOf(text);
      console.log(index);
    }
  }
}
findArrayIndex(animals, "Salamandra");
