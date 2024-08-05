/**
 * Represents a Holberton course.
 */
export default class HolbertonCourse {
  /**
   * Creates a new HolbertonCourse.
   * @param {string} name - The name of the course.
   * @param {number} length - The length of the course.
   * @param {string[]} students - The students enrolled in the course.
   */
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * Gets the name of the course.
   * @return {string} The name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Gets the length of the course.
   * @return {number} The length of the course.
   */
  get length() {
    return this._length;
  }

  /**
   * Gets the students enrolled in the course.
   * @return {string[]} The students enrolled in the course.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the name of the course.
   * @param {string} courseName - The new name of the course.
   * @throws {TypeError} If the name is not a string.
   */
  set name(courseName) {
    if (typeof courseName === 'string') {
      this._name = courseName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  /**
   * Sets the length of the course.
   * @param {number} courseLength - The new length of the course.
   * @throws {TypeError} If the length is not a number.
   */
  set length(courseLength) {
    if (typeof courseLength === 'number') {
      this._length = courseLength;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  /**
   * Sets the students enrolled in the course.
   * @param {string[]} value - The new list of students.
   * @throws {TypeError} If the students are not an array of strings.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
