import makeArray from '../scripts/makeArray'

let insertionsort0 = sortedArray => {
  for (let i = 1; i < sortedArray.length; i++) {
    for (let j = 0; j < i; j++) {
      if (sortedArray[i] < sortedArray[j]) {
        let temp = sortedArray[i];

        sortedArray[i] = sortedArray[j];
        sortedArray[j] = temp;
      }
    }
  }
  return sortedArray;
}

let unsortedArray = makeArray();

insertionsort0(unsortedArray);

module.exports = insertionsort0;
