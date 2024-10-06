document.addEventListener('DOMContentLoaded', () => {
    let weight = 1;
    const footerDiv = document.querySelector('.ex_09');
    const weightDisplay = footerDiv.querySelector('div:nth-child(2)');

    const square = document.createElement('div');
    square.style.width = '50px';
    square.style.height = '50px';
    square.style.backgroundColor = 'yellow';
    square.style.position = 'absolute';
    square.style.top = '360px';
    square.style.left = '350px';
    footerDiv.appendChild(square);

    function updateSquarePosition() {
        const newPosition = 360 + (weight - 1) * 20;
        square.style.top = `${newPosition}px`;
    }

    square.addEventListener('click', () => {
        weight++;
        weightDisplay.textContent = `${weight} kg`;
        updateSquarePosition();
    });

    updateSquarePosition();
});
