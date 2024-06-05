/**
 * Handles the response from an API promise.
 *
 * @param {Promise} promise - The promise from the API.
 * @returns {Promise<Object|Error>} - A promise that resolves to an object with status and body
   properties if the original promise resolves, or rejects with an Error object if the
   original promise rejects.
 */

export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => {
      console.log('Got a response from the API');
      return new Error();
    });
}
