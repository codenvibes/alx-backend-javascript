/**
 * Class representing a currency.
 */
export default class Currency {
  /**
   * Create a currency.
   * @param {string} code - The code of the currency.
   * @param {string} name - The name of the currency.
   * @throws {Error} If the code or name is not a string.
   */
  constructor(code, name) {
    if (typeof code !== 'string' || typeof name !== 'string') throw new Error();
    this.code = code;
    this.name = name;
  }

  /**
   * Get the code of the currency.
   * @return {string} The code of the currency.
   */
  get code() {
    return this._code;
  }

  /**
   * Set the code of the currency.
   * @param {string} val - The new code of the currency.
   */
  set code(val) {
    this._code = val;
  }

  /**
   * Get the name of the currency.
   * @return {string} The name of the currency.
   */
  get name() {
    return this._name;
  }

  /**
   * Set the name of the currency.
   * @param {string} val - The new name of the currency.
   */
  set name(val) {
    this._name = val;
  }

  /**
   * Display the full currency as a string.
   * @return {string} The full currency in the format "name (code)".
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
