function map(elements, modifier) {
    const result = [];
    for (let i = 0; i < elements.length; i++) {
        result.push(modifier(elements[i]));
    }
    return result;
}
