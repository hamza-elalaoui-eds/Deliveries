function getFruit(parameter) {
  if (typeof parameter === 'string') {
    let index = fruits.indexOf(parameter);
    return index !== -1 ? index : null;
  } else if (typeof parameter === 'number') {
    if (parameter === -1) {
      return fruits[fruits.length - 1];
    }
    return fruits[parameter] || null;
  }
  return null;
}