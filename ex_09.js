function addHousing(housingList, newHouse, quantity) {
    if (typeof newHouse !== "string" || typeof quantity !== "number" || quantity < 0) {
        console.error("Invalid input: newHouse should be a string and quantity should be a non-negative integer.");
        return;
    }

    if (housingList.has(newHouse.trim())) {
        let existingQuantity = housingList.get(newHouse.trim());
        housingList.set(newHouse.trim(), existingQuantity + quantity);
    } else {
        housingList.set(newHouse.trim(), quantity);
    }
}