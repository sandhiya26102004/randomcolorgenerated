const button = document.getElementById("button");
const bgContainer = document.getElementById("bgContainer");

const colors = ["#4e73df", "#fb5acf", "#81ecef", "#55c24d", "#efc84d"];

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  bgContainer.style.backgroundColor = colors[randomIndex];
});
