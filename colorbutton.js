function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

function changeColor() {
  const color = generateRandomColor();
  document.body.style.backgroundColor = color;
}

const button = document.getElementById('colorButton');
button.addEventListener('click', changeColor);