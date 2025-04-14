const splitLeft = document.getElementById("split-left");
const splitRight = document.getElementById("split-rigth");

// Split Left
splitLeft.addEventListener("mouseenter", () => {
  splitLeft.style.width = "75%";
  splitRight.style.width = "25%";
});
splitLeft.addEventListener("mouseleave", () => {
  splitLeft.style.width = "50%";
  splitRight.style.width = "50%";
});

// Split Right
splitRight.addEventListener("mouseenter", () => {
  splitRight.style.width = "75%";
  splitLeft.style.width = "25%";
});
splitRight.addEventListener("mouseleave", () => {
  splitRight.style.width = "50%";
  splitLeft.style.width = "50%";
});
