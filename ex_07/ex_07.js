new Vue({
    el: '#app',
    data: {
        imageSrc: 'chuck-norris.png', // Replace with your Chuck Norris image URL
        imageStyle: {
            position: 'absolute',
            transition: 'left 0.5s, top 0.5s',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
        }
    },
    methods: {
        moveImage(event) {
            const offsetDistance = 100; // Distance to move the image away from the cursor

            // Get the dimensions of the image
            const imageWidth = 100; // Adjust if your image width is different
            const imageHeight = 100; // Adjust if your image height is different

            // Calculate the new position for the image, ensuring it stays within bounds
            let newLeft = event.clientX - imageWidth / 2 - offsetDistance; // Move left
            let newTop = event.clientY - imageHeight / 2 - offsetDistance; // Move up

            // Ensure the image stays within the viewport
            if (newLeft < 0) {
                newLeft = 0; // Prevent going off the left edge
            }
            if (newTop < 0) {
                newTop = 0; // Prevent going off the top edge
            }
            if (newLeft + imageWidth > window.innerWidth) {
                newLeft = window.innerWidth - imageWidth; // Prevent going off the right edge
            }
            if (newTop + imageHeight > window.innerHeight) {
                newTop = window.innerHeight - imageHeight; // Prevent going off the bottom edge
            }

            // Update the image style with the new position
            this.imageStyle.left = `${newLeft}px`;
            this.imageStyle.top = `${newTop}px`;
        }
    }
});
