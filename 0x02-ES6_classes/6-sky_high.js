import Building from './5-building';

/**
 * Represents a high-rise building with a specific number of floors.
 * @extends Building
 */
export default class SkyHighBuilding extends Building {
  /**
   * Creates an instance of SkyHighBuilding.
   * @param {number} sqft - The square footage of the building.
   * @param {number} floors - The number of floors in the building.
   */
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  /**
   * Gets the number of floors in the building.
   * @returns {number} The number of floors.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Sets the number of floors in the building.
   * @param {number} floorNumber - The new number of floors.
   * @throws {TypeError} Throws an error if floorNumber is not a number.
   */
  set floors(floorNumber) {
    if (typeof floorNumber === 'number') {
      this._floors = floorNumber;
    } else {
      throw new TypeError('floors must be a number');
    }
  }

  /**
   * Generates an evacuation warning message for the building.
   * @returns {string} The evacuation warning message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
