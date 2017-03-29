

let makeArray = () => {
  let array = [];
  let length = 5000;
  let max  = 100;
  let min = -100;
    for (let i = 0; i < length; i++) {
      array.push(Math.floor(Math.random() * (max - (min))) + (min))
    }
  return array;
}

let bubblesort = array => {
  for (let i = 0; i < array.length - 1; i++) {
    console.log(array);
    if(array[i] > array[i+1]) {
      let temp = array[i+1];
      array[i+1] = array[i]
      array[i] = temp;
      i-=2;
    }
  }
  return array;
}

var array = makeArray();
bubblesort(array);

export default bubblesort;
export default makeArray;
