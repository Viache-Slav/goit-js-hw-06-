function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnClik = document.querySelector(".change-color");
const backgroundBody = document.querySelector(".color");

btnClik.addEventListener("click", () => {
  backgroundBody.innerHTML = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
});