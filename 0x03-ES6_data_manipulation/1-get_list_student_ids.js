/**
 * AUTH: bugsnvibes
 * Function to extract an array of student ids from an array of student objects.
 * @param {Array} arr - The array of student objects.
 * @returns {Array} - An array of student ids. If the input is not an array, returns an empty array.
 */

export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.map((student) => student.id);
}
