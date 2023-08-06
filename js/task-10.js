function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxEl = document.getElementById("boxes");
const inputEl = document.querySelector("input");
createBtn.addEventListener("click", () => {
  for (let i = 0; i < inputEl.value; i++) {
    const newBox = document.createElement("div");
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.width = 30 + i * 10 + "px";
    newBox.style.height = 30 + i * 10 + "px";
    boxEl.append(newBox);
  }
});
destroyBtn.addEventListener("click", () => {
  for (let i = 0; i < inputEl.value; i++) {
    boxEl.removeChild(boxEl. lastElementChild) }
});