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
  // Create the promises for user signup and photo upload
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  // Wait for all promises to settle
  const results = await Promise.allSettled([signUpPromise, uploadPhotoPromise]);

  // Format the results into the specified structure
  return results.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason,
  }));
}
