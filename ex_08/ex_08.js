async function updateProductDetails() {
    try {
        const response = await fetch('Samsung.txt');
        const descriptionText = await response.text();

        const productName = document.getElementById("productName");
        productName.textContent = "Samsung 22";

        const price = document.getElementById("price");
        price.textContent = "890 €";

        const description = document.getElementById("description");
        description.innerHTML = descriptionText.split('\n').map(line => `<p>${line}</p>`).join('');

        const img = document.querySelector("img");
        img.src = "Samsung22.png";
    } catch (error) {
        console.error("Error fetching the text file:", error);
    }

    const addToCartDiv = document.getElementById('addToCart');
    addToCartDiv.innerHTML += `<p id="inCart" style="font-weight: bold">In cart: 0</p>`;

    const addToCartButton = document.querySelector('.cart-btn');
    addToCartButton.textContent = 'ADD TO CART';

    let inCartCount = 0;
    addToCartButton.addEventListener('click', () => {
        inCartCount++;
        const inCartElement = document.getElementById('inCart');
        inCartElement.textContent = `In cart: ${inCartCount}`;
    });
}

window.onload = updateProductDetails;
