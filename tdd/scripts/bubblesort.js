import makeArray from '../scripts/makeArray'

let bubblesort = sortedArray => {
  for (let i = 0; i < sortedArray.length - 1; i++) {
    if(sortedArray[i] > sortedArray[i+1]) {
      let temp = sortedArray[i+1];
      sortedArray[i+1] = sortedArray[i]
      sortedArray[i] = temp;
      i-=2;
    }
  }
  return sortedArray;
}

let unsortedArray = makeArray();
bubblesort(unsortedArray);

module.exports = bubblesort;
