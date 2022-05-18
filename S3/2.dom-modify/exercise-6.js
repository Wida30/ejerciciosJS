//Basandote en el siguiente array crea una lista ul > li con los textos del array.


const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];


const creaUl$$ = document.createElement("ul");

for (let i = 0; i < apps.length; i++) {
    
    const creaLi$$ = document.createElement("li");
    creaLi$$.innerText = apps[i];
    creaUl$$.appendChild(creaLi$$);
}


document.body.appendChild(creaUl$$)
