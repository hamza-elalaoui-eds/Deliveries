const titleElement = document.querySelector('h1');
const originalWords = titleElement.textContent.split(' ');
let shuffleInterval;
let isFrozen = false;
let alertTimeout;

function shuffleWords() {
    if (isFrozen) return;
    const shuffledWords = originalWords.sort(() => Math.random() - 0.5);
    titleElement.textContent = shuffledWords.join(' ');
}

shuffleInterval = setInterval(shuffleWords, 2000);

titleElement.addEventListener('mouseover', () => {
    isFrozen = true;
});

titleElement.addEventListener('mouseout', () => {
    isFrozen = false;
});

titleElement.addEventListener('click', () => {
    navigator.clipboard.writeText(titleElement.textContent)
        .then(() => {
            console.log('Text copied to clipboard:', titleElement.textContent);
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
    clearInterval(shuffleInterval);
});

document.addEventListener('click', (event) => {
    if (!titleElement.contains(event.target)) {
        isFrozen = false; 
        shuffleInterval = setInterval(shuffleWords, 2000); 
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '!') {
        alertTimeout = setTimeout(() => {
            alert('42!');
        }, 42000);
        console.log("Alert will show in 42 seconds!");
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key !== '!') { 
        if (alertTimeout) {
            clearTimeout(alertTimeout);
            alertTimeout = null; 
            console.log("Alert cancelled.");
        }
    }
});
