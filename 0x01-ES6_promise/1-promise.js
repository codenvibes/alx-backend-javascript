/**
 * AUTH: bugsnvibes
 * A Function that returns a promise based on a boolean parameter.
 *
 * @param {boolean} success - The boolean parameter that determines if the promise resolves or
   rejects.
 * @returns {Promise<object>} A promise that resolves with an object containing `status` and `body`
   attributes if `success` is true, or rejects with an error object if `success` is false.
*/

export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
