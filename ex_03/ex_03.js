// Initialize Tippy.js
tippy('.tutorial-item', {
    animation: 'fade', // Tooltip animation
    duration: 200, // Animation duration
    trigger: 'click', // Show tooltip on click
    onShow(instance) {
        // Close the tooltip when clicking outside
        document.addEventListener('click', (event) => {
            if (!instance.reference.contains(event.target)) {
                instance.hide();
            }
        }, { once: true });
    }
});
