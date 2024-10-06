document.addEventListener("DOMContentLoaded", function() {
    // Function to show the thank you message
    function showThankYouMessage() {
        alert("Thanks!"); // Show a pop-up alert with the message
    }

    // Get the ADD TO CART button
    const addToCartButton = document.querySelector('.cart-btn');

    // Add a click event listener to the button
    if (addToCartButton) {
        addToCartButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default anchor action
            showThankYouMessage(); // Call the function to show the message
        });
    }
});
