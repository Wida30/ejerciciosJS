//Basandote en el siguiente html, añade un evento 'focus' que ejecute un console.log con el valor del input.

const inputHtml$$ = document.querySelector("input");

const ponerFoco = () => {

    console.log(inputHtml$$.value);
}

inputHtml$$.addEventListener("focus", ponerFoco)