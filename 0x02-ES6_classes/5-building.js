/**
 * Represents a building.
 */
export default class Building {
  /**
   * Creates an instance of a Building.
   * @param {number} sqft - The square footage of the building.
   */
  constructor(sqft) {
    this._sqft = sqft;
  }

  /**
   * Method to be overridden by classes extending Building.
   * Throws an error if not overridden.
   * @throws {Error} If called directly on Building class.
   */
  evacuationWarningMessage() {
    if (this.constructor !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  /**
   * Gets the square footage of the building.
   * @return {number} The square footage of the building.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Sets the square footage of the building.
   * @param {number} sqftSize - The new square footage of the building.
   * @throws {TypeError} If sqftSize is not a number.
   */
  set sqft(sqftSize) {
    if (typeof sqftSize === 'number') {
      this._sqft = sqftSize;
    } else {
      throw new TypeError('sqft must be a number');
    }
  }
}
