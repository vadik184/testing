import { mainData } from "../data/gradientData.js";
console.log(mainData);
const mainDiv = document.querySelector(".gradient-main-container");
const list = document.createElement("ul");
list.className = "gradient-list";

mainData.forEach((item) => {
  const li = document.createElement("li");
  li.className = "gradient-list-item";

  const title = document.createElement("h3");
  title.className = "gradient-name";
  title.textContent = item.name;

  const box = document.createElement("div");
  box.className = "gradient-box";

  const colorValues = item.colors.map((c) => `#${c}`);

  box.style.background = ` linear-gradient(135deg, ${colorValues.join(", ")})`;
  item.colors.forEach((color) => {
    const colorText = document.createElement("h3");
    colorText.className = "gradient-text";
    colorText.textContent = `#${color.toUpperCase()}`;
    box.appendChild(colorText);
  });

  li.appendChild(title);
  li.appendChild(box);
  list.appendChild(li);
  mainDiv.appendChild(list);
});
