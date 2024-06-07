/**
 * AUTH: bugsnvibes
 * Returns a string of all the set values that start with a specific string.
 *
 * @param {Set} set - The set of values to clean.
 * @param {string} startString - The string to match the start of values in the set.
 * @returns {string} A string containing all values of the set that start with the specified
   string, separated by '-'.
 */

export default function cleanSet(set, startString) {
  let result = '';
  for (const value of set) {
    if (value.startsWith(startString)) {
      result += `${value.substring(startString.length)}-`;
    }
  }
  // Remove the trailing '-' if there are any elements in the result
  if (result.length > 0) {
    result = result.slice(0, -1);
  }
  return result;
}
