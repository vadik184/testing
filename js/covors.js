function getDominantColor(imgElement, callback) {
  // Створюємо тимчасове полотно
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  // Встановлюємо розмір полотна відповідно до розміру зображення
  canvas.width = imgElement.width;
  canvas.height = imgElement.height;

  // Малюємо зображення на полотні
  context.drawImage(imgElement, 0, 0, canvas.width, canvas.height);

  // Отримуємо дані пікселів
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  // Змінна для підрахунку кольорів
  const colorCounts = {};
  let dominantColor = { color: "", count: 0 };

  // Проходимося по кожному пікселю
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const color = `rgb(${r},${g},${b})`;

    // Рахуємо частоту кожного кольору
    colorCounts[color] = (colorCounts[color] || 0) + 1;

    // Зберігаємо найбільш частий колір
    if (colorCounts[color] > dominantColor.count) {
      dominantColor = { color: color, count: colorCounts[color] };
    }
  }

  // Повертаємо домінуючий колір через callback
  callback(dominantColor.color);
}

// Функція, що застосовує домінуючий колір як фон
function applyDominantColor() {
  const imgElement = document.getElementById("image");

  imgElement.onload = () => {
    getDominantColor(imgElement, (dominantColor) => {
      document.querySelector(".color-container").style.backgroundColor =
        dominantColor;
    });
  };

  // Якщо зображення вже завантажено
  if (imgElement.complete) {
    imgElement.onload();
  }
}

// Виклик функції
applyDominantColor();
