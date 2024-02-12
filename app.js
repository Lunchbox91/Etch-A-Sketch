const container = document.getElementById("container");

function createGrid(rows, cols) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const square = document.createElement("div");
      square.className = "square";
      container.appendChild(square);
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = getRandomRGBColor();
      });
    }
  }
}

function getRandomRGBColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

createGrid(16, 16);
