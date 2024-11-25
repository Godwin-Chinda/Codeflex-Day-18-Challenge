function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.getElementById("backgroundBtn").addEventListener("click", function () {
  // Change the body's background color to a random color
  document.body.style.backgroundColor = randomColor();
});
