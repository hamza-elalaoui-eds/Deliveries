function fillBus(peopleAtBusStops, busSeats) {
    if (!Array.isArray(peopleAtBusStops) || typeof busSeats !== 'number' || busSeats < 0) {
        console.error("Invalid input");
        return -1;
    }

    let currentLoad = 0;

    for (let i = 0; i < peopleAtBusStops.length; i++) {
        currentLoad += peopleAtBusStops[i];
        console.log(`Stop ${i}: People getting on = ${peopleAtBusStops[i]}, Current load = ${currentLoad}`); // Debugging output

        if (currentLoad >= busSeats) {
            console.log(`Bus full at stop ${i}.`); // Debugging output
            return i;
        }
    }

    console.log("Bus never became full.");
    return -1; 
}