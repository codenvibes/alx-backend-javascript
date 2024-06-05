/**
 * AUTH: bugsnvibes
 * Handles profile signup process by uploading photo and creating user.
 * Logs the body, first name, and last name of the user to the console.
 * Logs 'Signup system offline' in case of an error.
 */

import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
}
