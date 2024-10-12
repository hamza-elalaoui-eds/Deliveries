const car = {
    color: "grey",
    brand: "Aston Martin",
    model: "DB5",

    logInfo() {
        console.log(`Car information: ${this.color}, ${this.model}, ${this.brand}`);
    }
};

const agent = {
    firstName: "James",
    lastName: "Bond",
    code: "007",
    age: 57,
    car: car,

    logInfo() {
        console.log(`Agent information: ${this.firstName} ${this.lastName}, ${this.code}, ${this.age}`);
        console.log(`${this.firstName} ${this.lastName}'s Car information: ${this.car.color}, ${this.car.model}, ${this.car.brand}`);
        this.car.logInfo();
    }
};

agent.logInfo();
