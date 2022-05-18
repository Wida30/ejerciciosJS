//Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const creaDiv$$ = document.createElement("div");

for (let i = 0; i < 6; i++) {
    const creaP$$ = document.createElement("p");
    creaP$$.innerText = "p creado en bucle"
    creaDiv$$.appendChild(creaP$$);
}

document.body.appendChild(creaDiv$$);