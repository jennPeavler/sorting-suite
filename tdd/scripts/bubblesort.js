

let makeArray = () => {
  let unsortedArray = [];
  let numElements = 10;
  let max  = 100;
  let min = -100;
    for (let i = 0; i < numElements; i++) {
      unsortedArray.push(Math.floor(Math.random() * (max - (min))) + (min))
    }

  console.log(unsortedArray);
  return unsortedArray;
}

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

module.exports = bubblesort, makeArray;
