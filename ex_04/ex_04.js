// Function to remove the EXCLUSIVE label
function removeExclusiveLabel() {
    const exclusiveLabel = document.getElementById('tag'); // Get the EXCLUSIVE label by its ID
    if (exclusiveLabel) {
        exclusiveLabel.remove(); // Remove the element from the DOM
    }
}

// Run the function when the page loads
window.onload = removeExclusiveLabel;