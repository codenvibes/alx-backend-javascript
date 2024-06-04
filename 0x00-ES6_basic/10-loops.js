/**
* AUTH: bugsnvibes
* TASK: Rewrite the function appendToEachArrayValue to use ES6’s
        for...of operator. And don’t forget that var is not 
        ES6-friendly.
*/

export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    const idx = array.indexOf(value);
    array[idx] = appendString + value;
  }

  return array;
}
