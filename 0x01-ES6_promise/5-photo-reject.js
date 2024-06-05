/**
 * AUTH: bugsnvibes
 * Uploads a photo with the given file name.
 *
 * @param {string} fileName - The name of the file to upload.
 * @returns {Promise<Error>} A Promise that rejects with an Error indicating that the file
   cannot be processed.
 */

export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    reject(new Error(`${fileName} cannot be processed`));
  });
}
