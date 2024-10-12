function addCar(agentString, car) {
    let agentObj = JSON.parse(agentString);

    agentObj.car = car;

    return agentObj;
}

let agent = '{"firstName": "James", "lastName": "Bond", "code": "007"}';
let carBrand = "Aston Martin";

let updatedAgent = addCar(agent, carBrand);
console.log(updatedAgent); 