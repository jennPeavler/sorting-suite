import { assert } from 'chai';
import { expect } from 'chai';
import makeArray from '../scripts/makeArray'

describe('the function makeArray', () => {
  let unsortedArray = makeArray();

  it('should be a function', () => {
    assert.isFunction(makeArray);
  })

  it('should make an array', () => {
    expect(Array.isArray(makeArray()));
  })

  it('should make an array with the desired length', () => {
    expect(unsortedArray).to.have.lengthOf(10);
  })

  it('should return an array with elements above a min value', () => {
    unsortedArray.forEach( element => {
      assert(element > -100, true)
    })
  })

  it('should return an array with elements below a max value', () => {
    unsortedArray.forEach( element => {
      assert(element < 100, true)
    })
  })

  //write test to make sure there are some negative numbers
  //elements should include numbers < 0

  //wirte test to make sure there are some positive numbers
  //elements should include numbers > 0

})
