function getFruitNameFromIndex(index) {
  if (index === -1) {
    return fruits[fruits.length - 1]; 
  }
  if (index < 0 || index >= fruits.length) {
    return null; 
  }
  return fruits[index]; 
}