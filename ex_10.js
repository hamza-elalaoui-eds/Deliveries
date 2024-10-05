// Calculate the number of sandwiches that can be made
const maxHamSandwiches = Math.min(Math.floor(breadCount / 2), hamCount);
const maxTunaSandwiches = Math.min(Math.floor(breadCount / 2), tunaCount, Math.floor(saladCount / 2));
const maxVegetarianSandwiches = Math.min(Math.floor(breadCount / 2), saladCount, Math.floor(tomatoCount / 2));

// Display the results
displayThisText("Number of ham sandwich(es): " + maxHamSandwiches);
displayThisText("Number of tuna sandwich(es): " + maxTunaSandwiches);
displayThisText("Number of vegetarian sandwich(es): " + maxVegetarianSandwiches);

// Calculate remaining ingredients after making sandwiches
let remainingBread = Math.max(breadCount - (maxHamSandwiches * 2 + maxTunaSandwiches * 2 + maxVegetarianSandwiches * 2),0);
let remainingHam = Math.max(hamCount - maxHamSandwiches,0);
let remainingTuna = Math.max(tunaCount - maxTunaSandwiches,0);
let remainingSalad = Math.max(saladCount - (maxTunaSandwiches * 2 + maxVegetarianSandwiches),0);
let remainingTomato = Math.max(tomatoCount - (maxVegetarianSandwiches * 2),0);

breadCount = remainingBread;
hamCount = remainingHam;
tunaCount = remainingTuna;
saladCount = remainingSalad;
tomatoCount = remainingTomato;

displayIngredients();