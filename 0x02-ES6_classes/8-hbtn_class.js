/**
 * Represents a HolbertonClass.
 * @class
 */
export default class HolbertonClass {
  /**
   * Creates an instance of HolbertonClass.
   * @param {number} size - The size of the class.
   * @param {string} location - The location of the class.
   * @throws {Error} If size is not a number or location is not a string.
   */
  constructor(size, location) {
    if (typeof size !== 'number' || typeof location !== 'string') throw new Error();
    this._size = size;
    this._location = location;
  }

  /**
   * Custom method to convert the object to a primitive value.
   * @param {string} hint - The hint for the desired primitive type ('string' or 'number').
   * @returns {string|number|HolbertonClass} The primitive value or the class instance itself.
   */
  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return this._location;
    }
    if (hint === 'number') {
      return this._size;
    }
    return this;
  }
}
