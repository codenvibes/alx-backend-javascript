// Create a new WeakMap to track the number of times each endpoint is queried
export const weakMap = new WeakMap();

/**
 * AUTH: bugsnvibes
 * Function to query an API endpoint
 * @param {Object} endpoint - The endpoint to be queried
 * @throws {Error} Throws an error if the endpoint has been queried 4 or more times
*/

export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const nQuery = weakMap.get(endpoint);
    if (nQuery >= 4) throw Error('Endpoint load is high');
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  } else { weakMap.set(endpoint, 1); }
}
