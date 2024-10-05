function calculator() {
	if (action === "add"){
  	return addition(a, b);
  } else if (action === "sub"){
  	return subtraction(a, b);
  } else {
  	return "Invalid action";
  }
}