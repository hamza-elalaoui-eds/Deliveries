const robot = document.getElementById("robot");
const speechBubble = document.getElementById("speech-bubble");
const screenText = document.getElementById("screen-text");
const inputField = document.getElementById("robot-input");
const eyeLeft = document.querySelector(".eye-left-iris");
const eyeRight = document.querySelector(".eye-right-iris");

let eyeClickCount = 0;

robot.addEventListener("click", () => {
  speechBubble.textContent = "Ouch, that hurts!";
  setTimeout(() => {
    speechBubble.textContent = "Hello !";
  }, 2000);
});

robot.addEventListener("mousemove", (event) => {
  const { offsetX, offsetY } = event;
  screenText.textContent = `X: ${offsetX}, Y: ${offsetY}`;
});

inputField.addEventListener("input", () => {
  screenText.textContent = "Don’t worry, I’ll take care of it!";
  setTimeout(() => {
    screenText.textContent = "Bip bip bip !";
  }, 2000);
});

function changeEyeColor() {
  const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  eyeLeft.style.fill = randomColor();
  eyeRight.style.fill = randomColor();
}

[eyeLeft, eyeRight].forEach(eye => {
  eye.addEventListener("click", () => {
    eyeClickCount++;
    if (eyeClickCount >= 10) {
      changeEyeColor();
      eyeClickCount = 0;
    }
  });
});
