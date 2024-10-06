function createCity(country, cityName) {
    const city = [cityName, []];
    country.push(city);
}

function createHousing(country, cityName, housingName) {
    const city = getCityOfCountry(country, cityName);
    if (city === null) {
        console.log("Failure to create housing.");
        return null;
    }
    
    const housing = [housingName, []];
    city[1].push(housing);
}

function addCharacteristics(country, cityName, housingName, ...characteristics) {
    const housing = getCharacteristicsOfHousing(country, cityName, housingName);
    if (housing === null) {
        console.log("Failure to add characteristics.");
        return null;
    }
    
    housing.push(...characteristics);
}

function getCityOfCountry(country, cityName) {
    for (const city of country) {
        if (city[0].trim() === cityName.trim()) {
            return city;
        }
    }
    console.log("Failure to get city.");
    return null;
}

function getCharacteristicsOfHousing(country, cityName, housingName) {
    const city = getCityOfCountry(country, cityName);
    if (city === null) return null;

    for (const housing of city[1]) {
        if (housing[0].trim() === housingName.trim()) {
            return housing[1];
        }
    }
    console.log("Failure to get housing characteristics.");
    return null;
}