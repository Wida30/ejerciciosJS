//Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here


const deEsto$$ = document.querySelectorAll(".fn-insert-here");

for (let i = 0; i < deEsto$$.length; i++) {


    const dentro$$ = document.createElement("p");
    dentro$$.innerText = "Voy dentro!";
    deEsto$$[i].appendChild(dentro$$);
}



