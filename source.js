let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

const flashlight = document.getElementById("flashlight");

const isTouch = (() => {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
})();

function updateMousePosition(e) {
  mouseX = !isTouch ? e.pageX : e.touches[0].pageX;
  mouseY = !isTouch ? e.pageY : e.touches[0].pageY;
}

function animateFlashlight() {
  if (!flashlight) return;

  // Smooth interpolation
  currentX += (mouseX - currentX) * 0.22;
  currentY += (mouseY - currentY) * 0.22;

  flashlight.style.setProperty("--Xpos", `${currentX}px`);
  flashlight.style.setProperty("--Ypos", `${currentY}px`);

  requestAnimationFrame(animateFlashlight);
}

document.addEventListener("mousemove", updateMousePosition);
document.addEventListener("touchmove", updateMousePosition);

animateFlashlight(); // Start the loop
