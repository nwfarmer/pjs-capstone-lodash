const _ = {
  clamp: function (number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange: function (number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    let isInRange = ((start <= number) && (number < end));
    return isInRange;
  },
  words: function (string) {
    let words = string.split(' ');
    return words;
  },
  pad: function (string, length) {
    if (length <= string.length) {
      return string
    }
    let startPaddingLength = Math.floor((length - string.length) / 2);
    let endPaddingLength = (length - string.length) - startPaddingLength;
    let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    return paddedString
  },
  has: function (object, key) {
    let hasValue = (object[key] != undefined);
    return hasValue
  },
  invert: function (object) {
    let invertedObject = {}
    for (let key in object) {
      let originalValue = object[key];
      invertedObject.originalValue = key;
    }
    return invertedObject
  },
  findKey: function (object, predicate) {
    for (let key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return key
      }
    }
    return undefined
  },
  drop: function (array, n=1) {
    let droppedArray = array.slice(n)
    return droppedArray
  },
  dropWhile: function (array, predicate) {
    let dropNumber = array.findIndex(function (element, index) {return !predicate(element, index, array)});
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray
  },
  chunk: function (array, size=1) {
    let arrayChunks = []
    for (let i = 0; i < array.length; i = i + size) {
      let arrayChunk = array.slice(i, i + size)
      arrayChunks.push(arrayChunk)
    }
    return arrayChunks
  }
}




// Do not write or modify code below this line.
module.exports = _;
