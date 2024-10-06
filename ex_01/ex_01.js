function setPriceToZero() {
    const priceElement = document.getElementById('price');
    if (priceElement) {
        priceElement.textContent = '0 €';
    }
}

window.onload = setPriceToZero;