// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Get the ADD TO CART button
    const addToCartButton = document.querySelector('.cart-btn');

    // Change the button text to CHANGE COLOR
    if (addToCartButton) {
        addToCartButton.textContent = "CHANGE COLOR";

        // Add click event listener to change background color
        addToCartButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default action of the link

            // Generate a random color
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

            // Set the background color of the body
            document.body.style.backgroundColor = randomColor;
        });
    }
});
