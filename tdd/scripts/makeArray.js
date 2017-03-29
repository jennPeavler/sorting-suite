let makeArray = () => {
  let unsortedArray = [];
  let numElements = 10;
  let max  = 100;
  let min = -100;
    for (let i = 0; i < numElements; i++) {
      unsortedArray.push(Math.floor(Math.random() * (max - (min))) + (min))
    }
  return unsortedArray;
}

module.exports = makeArray;
