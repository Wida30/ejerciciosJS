//Dado el siguiente html usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".

const data$$ = document.querySelectorAll('[data-function="testMe"]');

for (const dat of data$$) {
    console.log(dat.innerHTML)
}
