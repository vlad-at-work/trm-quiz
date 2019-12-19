const Utils = require('../main.js')

const testFlatArray = { given: [ 1, 2, 3, 4, 'five' ]};
const testMultiArray = {
  given: [ 1, [ 2, [ 3 ] ], [ 4, 5, [ 6, [ 10, 1 ] ] ], 7, [ 8, 9 ], [] ],
  result: [ 1, 2, 3, 4, 5, 6, 10, 1, 7, 8, 9 ]
}

const Flatten = Utils.deepFlattenArray;

describe('Utility: Array flattening test suite', () => {
  it('Asserts a flat array remains a flat array', () => {
    expect(Flatten(testFlatArray.given)).toEqual(testFlatArray.given); // toBe here would be a mistake because [] doesn't strict or otherwise equal []
  });
  it('Makes sure the original multi-dimensional array is flattened appropriately', () => {
    expect(Flatten(testMultiArray.given)).toEqual(testMultiArray.result);
  });

  it('Handles empty array input', () => {
    expect(Flatten([])).toEqual([]);
  });

  it('Handles inappropriate input as `null`', () => {
    expect(Flatten(null)).toEqual(null);
  });

  it('Handles inappropriate input as `undefined`', () => {
    expect(Flatten(undefined)).toEqual(null);
  });
});

console.log(Utils)