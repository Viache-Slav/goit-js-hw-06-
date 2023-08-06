const textInput = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

function sizeControl() {
    span.style.fontSize = `${textInput.value}px`;
}

textInput.addEventListener("input", sizeControl);