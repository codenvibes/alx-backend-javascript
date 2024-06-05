/**
 * Signs up a new user.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @returns {Promise<object>} A promise that resolves with an object containing the
   user's first and last names.
 */

export default function signUpUser(firstName, lastName) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    resolve({
      firstName,
      lastName,
    });
  });
}
