let currentRotation = 0;

function rotateCircle(step) {
    if (step === 0) {
        currentRotation = 0;
    } else {
        currentRotation += step;
    }
    document.getElementById("circle").style.transform = `rotate(${currentRotation}deg)`;
}

document.getElementById("rotate-add-90").addEventListener("click", () => rotateCircle(90));
document.getElementById("rotate-add-45").addEventListener("click", () => rotateCircle(45));
document.getElementById("rotate-reset").addEventListener("click", () => rotateCircle(0));
document.getElementById("rotate-sub-45").addEventListener("click", () => rotateCircle(-45));
document.getElementById("rotate-sub-90").addEventListener("click", () => rotateCircle(-90));
