//Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const creaP$$ = document.createElement("p");

creaP$$.innerText = "soy dinámico"

document.body.appendChild(creaP$$)