//progress is progress bar ...
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
//multiple circle elements selected ... 4 circles
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

//CLICK ON NEXT BUTTON WILL INCREASE currentActive and call update function
next.addEventListener("click", () => {
  currentActive++;

  currentActive > circles.length ? (currentActive = circles.length) : "";
  update();
  console.log(currentActive);
});
//CLICK ON PREV BTTN DECREASES currentActive and calls update function
prev.addEventListener("click", () => {
  currentActive--;
  currentActive < 1 ? (currentActive = 1) : "";
  update();
  console.log(currentActive);
});

console.log(circles.length);

//CHECKS CURRENT ACTIVE AND ADDS OR REMOVES ACTIVE CLASS FROM THE CIRCLE ELEMENT
function update() {
  circles.forEach((circle, idx) => {
    idx < currentActive
      ? circle.classList.add("active")
      : circle.classList.remove("active");
  });

  const actives = document.querySelectorAll(".active");

  currentActive === 1 ? (prev.disabled = true) : (prev.disabled = false);
  currentActive === 4 ? (next.disabled = true) : (next.disabled = false);
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
}
