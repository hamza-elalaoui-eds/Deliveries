function updateLicensePlates(agent, plates) {
    if (!agent.car) {
        console.error("Error: The agent object doesn't have a car property.");
        return null;
    }

    agent.car.licensePlates = plates;

    return agent;
}

function showLicensePlates(agent) {
    if (!agent.car || !agent.car.licensePlates) {
        console.error("Error: The agent's car has no license plates to display.");
        return;
    }

    const plates = agent.car.licensePlates;
    const container = document.querySelector(".plates-container");

    container.innerHTML = "";

    plates.forEach((plate) => {
        const li = document.createElement("li");
        li.textContent = plate;
        container.appendChild(li);
    });
}
let agent = {
    firstName: "James",
    lastName: "Bond",
    code: "007",
    age: 57,
    car: {
        brand: "Aston Martin",
        model: "DB5",
        color: "Silver",
        power: "285bhp"
    }
};

let plates = ["LU 6789", "4711-EA-62", "BMT 216A"];
updateLicensePlates(agent, plates);
showLicensePlates(agent);
