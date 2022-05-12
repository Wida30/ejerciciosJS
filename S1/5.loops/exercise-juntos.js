//Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

for (let i = 0; i <= 9; i++) {
    console.log(i);
}

//Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo cuando el resto del numero dividido entre 2 sea 0.

for (let y = 0; y <= 9; y++) {
    if (y%2 === 0) {
        console.log(y)
    }
}

//Crea un bucle para conseguir dormir contando ovejas. Este bucle empieza en 0 y termina en 10. 
//Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle y 
//cambia el mensaje en la última vuelta a 'Dormido!'.

for (let x = 0; x < 10; x++) {
    if (x < 10){
        console.log("intentando dormir");
    }
    
}
console.log("dormido")

