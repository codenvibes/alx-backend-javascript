/**
 * AUTH: bugsnvibes
 * Updates unique items in a Map by replacing their values with 100 if they are currently set to 1.
 * @param {Map} map - The Map object to be updated.
 * @throws {Error} Throws an error if the input is not a Map.
 */

export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
