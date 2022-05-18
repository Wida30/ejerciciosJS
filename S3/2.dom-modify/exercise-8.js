//Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const div$$ = document.querySelector("div")
const newText$$ = document.createElement("p");
newText$$.innerText = "Voy en medio!";

document.body.insertBefore(newText$$, div$$[1]);