/**
 * AUTH: bugsnvibes
 * Updates the grades of students for a specific city.
 * @param {Array} students - List of students.
 * @param {String} city - The city name for which grades are to be updated.
 * @param {Array} newGrades - Array of new grades for students in the format:
   { studentId: number, grade: number }.
 * @returns {Array} - An array of updated student objects with their grades
   updated or 'N/A' if not available.
 */

export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const foundGrade = newGrades.find((grade) => grade.studentId === student.id);
      if (foundGrade) {
        return { ...student, grade: foundGrade.grade };
      }
      return { ...student, grade: 'N/A' };
    });
}
