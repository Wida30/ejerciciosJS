//Inserta dinamicamente en un html un div que contenga una p con javascript.

const creaDiv$$ = document.createElement("div");
const creaP$$ = document.createElement("p");

creaP$$.innerText = "P dendro de div";

creaDiv$$.appendChild(creaP$$);
document.body.appendChild(creaDiv$$);