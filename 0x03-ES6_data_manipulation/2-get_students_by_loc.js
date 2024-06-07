/**
 * AUTH: bugsnvibes
 * Filters a list of students by a specified city.
 * @param {Array} students - The array of student objects.
 * @param {string} city - The city to filter students by.
 * @returns {Array} An array of student objects who are located in the specified city.
 */

export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}
