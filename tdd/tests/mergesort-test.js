import { assert } from 'chai';
// import { expect } from 'chai';
import splitArray from '../scripts/mergesort'

describe('the function splitArray as part of mergesort', () => {
  it('should be a function', () => {
    assert.isFunction(splitArray)
  })

  it('should be able to return a sorted array of numbers', () => {
    let sortedArray = splitArray([666, 13, -333, 99, -3.14])

    assert.deepEqual(sortedArray, [-333, -3.14, 13, 99, 666])
  })

  it('should be able to return a sorted array of letters', () => {
    let sortedArray = splitArray(['z', 'w', 'a', 'b', 'j', 'p'])

    assert.deepEqual(sortedArray, ['a', 'b', 'j', 'p', 'w', 'z'])
  })

  it('should be able to sort really big arrays', () => {
    let unsortedArray = [];
    let numElements = 20;
    let max  = 100;
    let min = 0;

    for (let i = 0; i < numElements; i++) {
      unsortedArray.push(Math.floor(Math.random() * (max - (min))) + (min))
    }
    let sortedArray = unsortedArray.sort();

    assert.deepEqual(splitArray(unsortedArray), sortedArray);
  })

})
