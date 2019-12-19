const Utils = {
  deepFlattenArray (inputArr) {
    // Input must be Array. Alternatively, handle and
    // throw if it is null or undefined or what have you
    if (!Array.isArray(inputArr)) {
      return null;
    }
    const result = inputArr.slice();

    let i = 0;
    while (i < result.length) {
      const isSubarray = Array.isArray(result[i]);
      if (isSubarray) {
        result.splice(i, 1, ...result[i]); // spread operator inserts the next values in right before the loop hits it
      }
      else {
        i++;
      }
    }

    return result;
  }
}

module.exports = Utils;