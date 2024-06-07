/**
 * AUTH: bugsnvibes
 * Calculates the sum of all student IDs.
 * @param {Array<Object>} students - List of student objects.
 * @returns {number} - Sum of all student IDs.
 */

import { reduce } from 'lodash';

export default function getStudentIdsSum(students) {
  return reduce(students, (sum, student) => sum + student.id, 0);
}
