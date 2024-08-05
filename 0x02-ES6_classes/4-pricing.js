/**
 * Represents a pricing structure with an amount and currency.
 */
export default class Pricing {
  /**
   * Creates an instance of Pricing.
   * @param {number} amount - The amount of the price.
   * @param {Object} currency - The currency object with name and code.
   * @param {string} currency.name - The name of the currency.
   * @param {string} currency.code - The code of the currency.
   */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  /**
   * Displays the full price including the currency name and code.
   * @returns {string} The formatted price with currency.
   */
  displayFullPrice() {
    return `${this._amount} ${this.currency.name} (${this.currency.code})`;
  }

  /**
   * Converts the given amount using the specified conversion rate.
   * @param {number} amount - The amount to convert.
   * @param {number} conversionRate - The rate to use for conversion.
   * @returns {number} The converted amount.
   */
  static convertPrice(amount, conversionRate) {
    return (conversionRate * amount);
  }

  /**
   * Gets the amount.
   * @returns {number} The amount.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Sets the amount. Throws an error if the amount is not a number.
   * @param {number} amountSize - The new amount.
   * @throws {TypeError} If amountSize is not a number.
   */
  set amount(amountSize) {
    if (typeof amountSize === 'number') {
      this._amount = amountSize;
    } else {
      throw new TypeError('amount must be a number');
    }
  }

  /**
   * Gets the currency.
   * @returns {Object} The currency object with name and code.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Sets the currency. Throws an error if the currency is not a string.
   * @param {Object} currencyType - The new currency object.
   * @param {string} currencyType.name - The name of the currency.
   * @param {string} currencyType.code - The code of the currency.
   * @throws {TypeError} If currencyType is not an object with name and code as strings.
   */
  set currency(currencyType) {
    if (typeof currencyType === 'object' && 
        typeof currencyType.name === 'string' && 
        typeof currencyType.code === 'string') {
      this._currency = currencyType;
    } else {
      throw new TypeError('currency must be an object with name and code as strings');
    }
  }
}
