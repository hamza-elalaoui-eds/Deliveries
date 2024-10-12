const cars = [
    {
        brand: "Ford Consul",
        manufacturer: "Ford UK",
        color: "Black",
        licensePlate: "E7194",
        image: "https://lh3.googleusercontent.com/proxy/xwILQINSWqYO6V1QuZBGIooYcENYO5d5l6hZRgO7yzr0IVsDQCVFjbQaoNwNczYwvdUXExAXpKdY-bxl_B0__6u-fg" 
    },
    {
        brand: "Ford Anglia",
        manufacturer: "Ford UK",
        color: "LightBlue",
        licensePlate: "No license plate",
        image: "https://wedrivit.s3.eu-west-3.amazonaws.com/uploads/1695993519125uW7s12lX4rbJ8RPMqtz2EaJ2L.jpg" 
    },
    {
        brand: "Ford Ranch Wagon",
        manufacturer: "Ford UK",
        color: "White",
        licensePlate: "KT.74089, 37-1515",
        image: "https://m.media-amazon.com/images/I/51kRLXMvUBL.jpg"
    },
    {
        brand: "Ford Mustang",
        manufacturer: "Ford UK",
        color: "Red",
        licensePlate: "BRR-1234",
        image: "https://richmonds.com.au/wp-content/uploads/2023/09/Ford-Mustang-Red-22.jpg"
    }
];

function isMatching(car, key, value) {
    return car[key].toLowerCase().includes(value.toLowerCase());
}

function searchCars(cars, key, value) {
    return cars.filter(car => isMatching(car, key, value));
}

function displayCars(cars) {
    const carResultsContainer = document.getElementById('car-results');
    carResultsContainer.innerHTML = '';

    if (cars.length === 0) {
        carResultsContainer.innerHTML = '<p>No matching cars found.</p>';
        return;
    }

    cars.forEach(car => {
        const carItem = document.createElement('div');
        carItem.classList.add('car-item');

        carItem.innerHTML = `
            <img src="${car.image}" alt="${car.brand}">
            <div class="car-details">
                <h2>${car.brand}</h2>
                <p>Manufacturer: ${car.manufacturer}</p>
                <p>Color: ${car.color} <span class="color-display" style="background-color: ${car.color.toLowerCase()}"></span></p>
                <p>License plate(s): ${car.licensePlate}</p>
            </div>
        `;

        carResultsContainer.appendChild(carItem);
    });
}

document.getElementById('search-btn').addEventListener('click', () => {
    const key = document.getElementById('search-key').value;
    const value = document.getElementById('search-value').value;

    const matchingCars = searchCars(cars, key, value);
    displayCars(matchingCars);
});
