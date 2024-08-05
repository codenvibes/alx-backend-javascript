/**
 * Represents a car.
 */
export default class Car {
  /**
   * Creates an instance of a Car.
   * @param {string} brand - The brand of the car.
   * @param {string} motor - The motor type of the car.
   * @param {string} color - The color of the car.
   */
  constructor(brand, motor, color) {
    /** @private */
    this._brand = brand;
    /** @private */
    this._motor = motor;
    /** @private */
    this._color = color;
  }

  /**
   * Creates a clone of the current car instance.
   * @returns {Car} A new instance of the Car class with the same properties.
   */
  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
