import Car from './10-car';

/**
 * Represents an electric vehicle (EV) car.
 * @extends Car
 */
export default class EVCar extends Car {
  /**
   * Creates an instance of EVCar.
   * @param {string} brand - The brand of the car.
   * @param {string} motor - The motor type of the car.
   * @param {string} color - The color of the car.
   * @param {number} range - The range of the electric vehicle in kilometers.
   */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    /** 
     * @private
     * @type {number}
     */
    this._range = range;
  }

  /**
   * Creates a clone of the EVCar. 
   * Note: This method creates a new Car instance rather than an EVCar.
   * @returns {Car} - A new instance of the Car class.
   */
  // eslint-disable-next-line class-methods-use-this
  cloneCar() {
    return new Car();
  }
}
