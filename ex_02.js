function findHousing(housingToFind, housingList) {
  let index = 0;
  let result = null;
  
  let search = housingToFind.toLowerCase();
  
  while (index < housingList.length) {
    if (housingList[index].toLowerCase() === search) {
      result = [index, housingList[index]];
      break;
    }
    index++;
  }
  
  return result;
}