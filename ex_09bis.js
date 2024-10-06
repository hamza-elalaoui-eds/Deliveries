function doOperation(operation) {
  let [firstNumber, operator, secondNumber] = splitOperation(operation);

  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    case '/':
      if (secondNumber === 0) {
        console.log("Can't divide by 0");
        return null;
      }
      return firstNumber / secondNumber;
    default:
      console.log("Unknown operator");
      return null;
  }
}