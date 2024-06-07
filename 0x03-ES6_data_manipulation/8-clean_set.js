/**
 * AUTH: bugsnvibes
 * Removes the specified startString from each string value in the set and returns a concatenated
   string of the remaining parts separated by '-'.
 * @param {Set} set - The set to clean.
 * @param {string} startString - The string prefix to remove from values in the set.
 * @returns {string} - The cleaned string.
 */

export default function cleanSet(set, startString) {
  const parts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
