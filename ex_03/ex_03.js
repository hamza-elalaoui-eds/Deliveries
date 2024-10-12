function addCarToAgent(agent, brand, model, color, power) {
    if (typeof agent !== 'object' || !agent.firstName || !agent.lastName) {
        console.error("Error: Agent object must have firstName and lastName properties.");
        return null;
    }

    if (!brand || !model || !color || !power) {
        console.error("Error: Missing car property. Make sure brand, model, color, and power are provided.");
        return null;
    }
    
    agent.car = {
        brand: brand,
        model: model,
        color: color,
        power: power
    };

    return agent;
}

let agent = {
    firstName: "James",
    lastName: "Bond",
    code: "007",
    age: 57
};

let updatedAgent = addCarToAgent(agent, "Aston Martin", "DB5", "Grey", "285bhp");
if (updatedAgent) {
    shareThatBeauty(updatedAgent);
}
