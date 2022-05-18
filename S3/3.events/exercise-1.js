//Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

const clickEvent = (event) => {
    console.log(event)
}

document.addEventListener("click", clickEvent)