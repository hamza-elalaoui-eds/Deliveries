document.addEventListener("DOMContentLoaded", () => {
    // Handle plus and minus buttons for quantity adjustment
    document.querySelectorAll(".plus-btn").forEach(button => {
        button.addEventListener("click", () => {
            const input = button.nextElementSibling;
            let quantity = parseInt(input.value);
            input.value = quantity + 1;
        });
    });

    document.querySelectorAll(".minus-btn").forEach(button => {
        button.addEventListener("click", () => {
            const input = button.previousElementSibling;
            let quantity = parseInt(input.value);
            if (quantity > 1) {
                input.value = quantity - 1;
            }
        });
    });

    // Handle delete buttons for removing items
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", () => {
            const item = button.closest(".item");
            item.remove();
        });
    });

    // Handle like buttons for toggling heart animation
    document.querySelectorAll(".like-btn").forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle("is-active");
        });
    });
});
