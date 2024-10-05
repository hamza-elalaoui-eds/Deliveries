let type;
if (typeof input_var === 'string') {
	type = 'String';
} else if (typeof input_var === 'boolean') {
	type = 'Boolean';
} else if (Number.isInteger(input_var)) {
	type = 'Integer';
} else if (typeof input_var === 'number') {
	type = 'Float';
} else {
	type = 'Unkown';
}

let message = `The variable value is '${input_var}'. <br>Its type is '${type}'.`;

if (input_var == 42) {
	message += "<br>It is the meaning of life."
}

displayThisText(message);