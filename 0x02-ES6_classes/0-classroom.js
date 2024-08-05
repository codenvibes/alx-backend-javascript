/**
 * Class representing a classroom.
 */
export default class ClassRoom {
  /**
   * Create a classroom.
   * @param {number} maxStudentsSize - The maximum number of students allowed in the classroom.
   */
  constructor(maxStudentsSize) {
    /**
     * @private
     * @type {number}
     */
    this._maxStudentsSize = maxStudentsSize;
  }
}
