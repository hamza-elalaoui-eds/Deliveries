function displayAgentInfo(obj) {

    const message = `My name is ${obj.lastName}, ${obj.firstName} ${obj.lastName}! I'm the agent ${obj.code} and I'm ${obj.age} years old.`;

    const container = document.querySelector("#container p");

    container.textContent = message;
}

const agent = {
    age: 57,
    code: "007",
    firstName: "James",
    lastName: "Bond"
};

displayAgentInfo(agent);
