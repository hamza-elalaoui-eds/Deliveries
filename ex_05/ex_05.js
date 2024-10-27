function findClosestResult(functionsObj, inputNumber, outputNumber) {
    let closestKey = null;
    let closestDiff = Infinity;

    for (const key in functionsObj) {
        if (typeof functionsObj[key] === 'function') {
            const result = functionsObj[key](inputNumber);
            const diff = Math.abs(result - outputNumber);

            if (diff < closestDiff) {
                closestDiff = diff;
                closestKey = key;
            }
        }
    }

    return closestKey;
}
