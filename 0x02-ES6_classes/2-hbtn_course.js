/**
 * Represents a Holberton course.
 */
export default class HolbertonCourse {
  /**
   * Creates an instance of HolbertonCourse.
   * @param {string} name - The name of the course.
   * @param {number} length - The length of the course in hours.
   * @param {Array<string>} students - An array of student names.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Gets the name of the course.
   * @return {string} The name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of the course.
   * @param {string} val - The name of the course.
   * @throws {TypeError} If val is not a string.
   */
  set name(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = val;
  }

  /**
   * Gets the length of the course.
   * @return {number} The length of the course in hours.
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the length of the course.
   * @param {number} val - The length of the course in hours.
   * @throws {TypeError} If val is not a number.
   */
  set length(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = val;
  }

  /**
   * Gets the array of students.
   * @return {Array<string>} An array of student names.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the array of students.
   * @param {Array<string>} val - An array of student names.
   * @throws {TypeError} If val is not an array or contains non-string elements.
   */
  set students(val) {
    if (!Array.isArray(val)) {
      throw new TypeError('Students must be an array');
    }
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < val.length; i++) {
      if (typeof val[i] !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    }
    this._students = val;
  }
}
