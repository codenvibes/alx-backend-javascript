/**
 * Represents an airport.
 */
export default class Airport {
  /**
   * Creates an instance of the Airport class.
   * @param {string} name - The name of the airport.
   * @param {string} code - The airport code.
   * @throws {Error} If name or code is not a string.
   */
  constructor(name, code) {
    if (typeof name !== 'string' || typeof code !== 'string') throw new Error('Name and code must be strings');
    this._name = name;
    this._code = code;
  }

  /**
   * Gets the name of the airport.
   * @return {string} The name of the airport.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of the airport.
   * @param {string} value - The new name of the airport.
   */
  set name(value) {
    this._name = value;
  }

  /**
   * Gets the code of the airport.
   * @return {string} The code of the airport.
   */
  get code() {
    return this._code;
  }

  /**
   * Sets the code of the airport.
   * @param {string} value - The new code of the airport.
   */
  set code(value) {
    this._code = value;
  }

  /**
   * Returns the airport code as the string representation of the object.
   * @return {string} The airport code.
   */
  get [Symbol.toStringTag]() {
    return this.code;
  }
}
