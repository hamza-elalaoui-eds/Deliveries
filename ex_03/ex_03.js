// Function to add a custom feature message
function addCustomFeature() {
    const description = document.getElementById('description');
    const featureMessage = document.createElement('p');

    featureMessage.textContent = "Now featuring a headphone jack!";
    description.appendChild(featureMessage);
}

window.onload = addCustomFeature;
