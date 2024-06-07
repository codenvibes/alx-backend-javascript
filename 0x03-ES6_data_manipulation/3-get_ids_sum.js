/**
 * AUTH: bugsnvibes
 * Takes an object representing students and calculates the sum of their IDs.
 *
 * @param {Object} studentObj - An object where the keys are student identifiers and the values are objects containing student details, including an 'id' property.
 * @returns {number} - The sum of all student IDs.
 */

export default function (studentObj) {
  const idList = Object.values(studentObj).map((o) => o.id);
  return idList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
