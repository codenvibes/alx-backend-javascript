import { uploadPhoto, createUser } from './utils';

/**
 * Asynchronously uploads a photo and creates a user, then returns the responses.
 * @returns {Promise<{photo: any, user: any}>} An object containing the responses from uploadPhoto
   and createUser functions.
 */

async function asyncUploadUser() {
  try {
    // Use Promise.all() to simultaneously call uploadPhoto() and createUser()
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto(),
      createUser(),
    ]);

    // Return an object with the responses
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // Log any errors that occur during the asynchronous operations
    console.error('Error occurred during upload:', error);
    // Return an object with both properties set to null
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
