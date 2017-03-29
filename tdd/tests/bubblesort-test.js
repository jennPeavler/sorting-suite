import { assert } from 'chai';
import { expect } from 'chai';
import bubblesort from '../scripts/bubblesort'

describe('the function bubblesort', () => {
  it('should be a function', () => {
    assert.isFunction(bubblesort)
  })

  it('should be able to return a sorted array of numbers', () => {
    let sortedArray = bubblesort([666, 13, -333, 99, -3.14])

    assert.deepEqual(sortedArray, [-333, -3.14, 13, 99, 666])
  })
})
