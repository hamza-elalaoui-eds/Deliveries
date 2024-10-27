let cart = [];

// Function to update the cart display and total price
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear existing items
    let totalPrice = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <span>${item.name}</span>
            <div class="quantity-controls">
                <button class="quantity-btn minus" data-id="${item.id}"><i class="fas fa-minus"></i></button>
                <input type="number" value="${item.quantity}" min="1" data-id="${item.id}" class="quantity-input">
                <button class="quantity-btn plus" data-id="${item.id}"><i class="fas fa-plus"></i></button>
            </div>
            <span class="item-price">$${(item.price * item.quantity).toFixed(2)}</span>
            <button class="remove-btn" data-id="${item.id}"><i class="fas fa-trash-alt"></i></button>
        `;
        cartItemsContainer.appendChild(itemDiv);
        totalPrice += item.price * item.quantity; // Calculate total price
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// Add product to cart
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if already in cart
    } else {
        cart.push({ ...product, quantity: 1 }); // Add new item to cart
    }
    updateCart();
}

// Modify quantity in cart
function modifyQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            // Do not remove here to allow specific handling in removeItem function
            item.quantity = 0; // Set to 0 for input validation
        }
        updateCart();
    }
}

// Remove item from cart
function removeItem(id) {
    cart = cart.filter(item => item.id !== id); // Remove item from cart
    updateCart();
}

// Event Listeners for adding to cart
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const productElement = event.target.closest('.product');
        const product = {
            id: Number(productElement.getAttribute('data-id')),
            name: productElement.querySelector('h3').textContent,
            price: parseFloat(productElement.querySelector('.price').textContent.replace('$', ''))
        };
        addToCart(product);
    });
});

// Event Delegation for cart items
document.getElementById('cart-items').addEventListener('click', (event) => {
    const target = event.target.closest('.remove-btn, .minus, .plus'); // Check if clicked on button or icon
    if (target) {
        const id = Number(target.getAttribute('data-id'));
        if (target.classList.contains('remove-btn')) {
            removeItem(id); // Call removeItem function
        } else if (target.classList.contains('minus')) {
            modifyQuantity(id, -1); // Decrease quantity
        } else if (target.classList.contains('plus')) {
            modifyQuantity(id, 1); // Increase quantity
        }
    }
});

// Handle quantity input changes
document.getElementById('cart-items').addEventListener('input', (event) => {
    if (event.target.classList.contains('quantity-input')) {
        const id = Number(event.target.getAttribute('data-id'));
        const quantity = parseInt(event.target.value);
        if (quantity <= 0) {
            removeItem(id); // Remove item if quantity is 0
        } else {
            const existingItem = cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity = quantity; // Update quantity
            }
            updateCart();
        }
    }
});
