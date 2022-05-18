//Basandote en el siguiente html, añade un evento 'input' que ejecute un console.log con el valor del input.

const enInput$$ = document.querySelector("input");

const daValor = () => {

    console.log(enInput$$.value);
}

enInput$$.addEventListener("input", daValor)