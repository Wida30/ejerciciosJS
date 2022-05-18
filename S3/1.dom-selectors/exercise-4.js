//Dado el siguiente html usa querySelector para mostrar por consola todos los elementos con la clase .pokemon
const pokemon$$ = document.querySelectorAll(".pokemon");

for (const poke of pokemon$$) {
    console.log(poke.innerHTML)
}
