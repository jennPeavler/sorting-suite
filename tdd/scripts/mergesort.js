import makeArray from '../scripts/makeArray'

let splitArray = (unsortedArray) => {
  if (unsortedArray.length < 2) {
    return unsortedArray;

  }
  else {
    let slice1 = unsortedArray.slice(0, unsortedArray.length/2);
    let slice2 = unsortedArray.slice(unsortedArray.length/2);
    return mergesort(splitArray(slice1), splitArray(slice2));
  }
};

let mergesort = (slice1, slice2) => {
  let sortedArray = [];
  while (slice1.length && slice2.length) {
      sortedArray.push(slice1[0] < slice2[0] ? slice1.shift() : slice2.shift());
  }
  return sortedArray.concat(slice1.length ? slice1 : slice2);
};


let unsortedArray = makeArray();

splitArray(unsortedArray);

module.exports = splitArray;
