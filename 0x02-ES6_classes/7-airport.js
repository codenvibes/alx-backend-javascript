/**
 * Represents an airport.
 */
export default class Airport {
  /**
   * Creates an instance of the Airport class.
   * @param {string} name - The name of the airport.
   * @param {string} code - The code of the airport.
   */
  constructor(name, code) {
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
   * Converts the airport object to a string representation.
   * @return {string} The code of the airport.
   */
  toString() {
    return this._code;
  }

  /**
   * Gets the custom string tag for the airport object.
   * @return {string} The code of the airport.
   */
  get [Symbol.toStringTag]() {
    return this._code;
  }

  /**
   * Sets the code of the airport.
   * @param {string} airportCode - The new code for the airport.
   * @throws {TypeError} If the airportCode is not a string.
   */
  set code(airportCode) {
    if (typeof airportCode === 'string') {
      this._code = airportCode;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  /**
   * Sets the name of the airport.
   * @param {string} airportName - The new name for the airport.
   * @throws {TypeError} If the airportName is not a string.
   */
  set name(airportName) {
    if (typeof airportName === 'string') {
      this._name = airportName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }
}
