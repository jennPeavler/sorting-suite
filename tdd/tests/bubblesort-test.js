import { assert } from 'chai';
// import { expect } from 'chai';
import bubblesort from '../scripts/bubblesort'

describe('the function bubblesort', () => {
  it('should be a function', () => {
    assert.isFunction(bubblesort)
  })

  it('should be able to return a sorted array of numbers', () => {
    let sortedArray = bubblesort([666, 13, -333, 99, -3.14])

    assert.deepEqual(sortedArray, [-333, -3.14, 13, 99, 666])
  })

  it('should be able to return a sorted array of letters', () => {
    let sortedArray = bubblesort(['z', 'w', 'a', 'b', 'j', 'p'])

    assert.deepEqual(sortedArray, ['a', 'b', 'j', 'p', 'w', 'z'])
  })

  it('should be able to sort really big arrays', () => {
    let unsortedArray = [];
    let numElements = 22222;
    let max  = 100;
    let min = -100;

    for (let i = 0; i < numElements; i++) {
      unsortedArray.push(Math.floor(Math.random() * (max - (min))) + (min))
    }
    let sortedArray = unsortedArray.sort();

    assert.deepEqual(bubblesort(unsortedArray), sortedArray);
  })

})
