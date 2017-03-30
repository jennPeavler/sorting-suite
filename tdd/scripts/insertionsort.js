import makeArray from '../scripts/makeArray'

let insertionsort = sortedArray => {
  for (let i = 1; i < sortedArray.length; i++) {
    let temp = sortedArray[i];

    for (var j = i - 1; sortedArray[j] > temp; j--) {
      sortedArray[j + 1] = sortedArray[j];
    }
    sortedArray[j + 1] = temp;
  }
  return sortedArray;
}

let unsortedArray = makeArray();

insertionsort(unsortedArray);

module.exports = insertionsort;
