import { assert } from 'chai';
import { expect } from 'chai';
import makeArray from '../scripts/makeArray'

describe('the function makeArray', () => {
  it('should be a function', () => {
    assert.isFunction(makeArray)
  })

  it.skip('should make an array', () => {
    expect(Array.isArray(makeArray()));
  })

  it.skip('should make an array with the desired length', () => {
    let unsortedArray = makeArray();

    // console.log(unsortedArray);
    expect(unsortedArray).to.have.lengthOf(10);
  })
})
