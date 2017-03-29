import makeArray from '../scripts/makeArray'

let bubblesort0 = sortedArray => {
  let numElements = sortedArray.length;
  for (let i=0; i < numElements; i++) {
    for (let j=0, exitPoint=numElements-i; j < exitPoint; j++) {
      if(sortedArray[j] > sortedArray[j+1]) {
        let temp = sortedArray[j];
        sortedArray[j] = sortedArray[j+1];
        sortedArray[j+1] = temp;
      }
    }
  }
  return sortedArray;
}

let unsortedArray = makeArray();
bubblesort0(unsortedArray);

module.exports = bubblesort0;
