import { assert } from 'chai';
import bubblesort from '../scripts/bubblesort'
import makeArray from '../scripts/bubblesort'

describe('the function makeArray', () => {
  it('should be a function', () => {
    assert.isFunction(makeArray)
  })
})

describe('the function bubblesort', () => {
  it('should be a function', () => {
    assert.isFunction(bubblesort)
  })
})
