/**
 * AUTH: bugnvibes
 * Returns an array of student objects.
 * Each object contains the following attributes:
 * - id (Number): The student's ID.
 * - firstName (String): The student's first name.
 * - location (String): The student's location.
 *
 * @returns {Array<Object>} The array of student objects.
 */

export default function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}
