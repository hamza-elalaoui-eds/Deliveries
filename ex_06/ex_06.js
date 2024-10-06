// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Show an alert when the window is resized
    window.addEventListener('resize', function() {
        alert("Size matters");
    });

    // Get the phone image element
    const phoneImage = document.querySelector('img[src="../Iphone22.png"]');

    // Show an alert when the mouse hovers over the phone image
    if (phoneImage) {
        phoneImage.addEventListener('mouseover', function() {
            alert("Pretty, isn't it?");
        });
    }
});
