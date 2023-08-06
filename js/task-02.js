const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

ingredients.forEach(function (e) {
  let li = document.createElement("li");
  li.textContent = e;
  li.classList.add("item");
  list.append(li);
});