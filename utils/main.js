export function generateRandomGradient() {
  var startColor = getRandomColor();
  var endColor = getRandomColor();
  return `linear-gradient(to right, ${startColor}, ${endColor})`;
}

export function getRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
