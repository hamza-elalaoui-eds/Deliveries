const agentPrototype = {
    isMatching(key, value) {
        return this.car[key] === value;
    }
};

function searchCars(agents, key, value) {
    return agents
        .filter(agent => agent.isMatching(key, value)) 
        .map(agent => agent.car);
}

const agent1 = {
    firstName: "James",
    lastName: "Bond",
    car: {
        color: "grey",
        brand: "Aston Martin",
        model: "DB5"
    },
    __proto__: agentPrototype
};

const agent2 = {
    firstName: "Ethan",
    lastName: "Hunt",
    car: {
        color: "black",
        brand: "BMW",
        model: "M5"
    },
    __proto__: agentPrototype 
};

const agent3 = {
    firstName: "Jason",
    lastName: "Bourne",
    car: {
        color: "grey",
        brand: "Audi",
        model: "R8"
    },
    __proto__: agentPrototype 
};

const agents = [agent1, agent2, agent3];

const matchingCars = searchCars(agents, "color", "grey");
console.log(matchingCars);
