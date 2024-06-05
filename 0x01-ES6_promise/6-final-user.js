import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * AUTH: bugsnvibes
 * Handles user profile signup by calling signUpUser and uploadPhoto functions.
 *
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} fileName - The file name of the user's photo to be uploaded.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of objects representing
   the results of the signUpUser and uploadPhoto promises.
 */

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => (
      res.map((o) => ({
        status: o.status,
        value: o.status === 'fulfilled' ? o.value : String(o.reason),
      }))
    ));
}
