export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  toString() {
    return this._code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }

  set code(airportCode) {
    if (typeof airportCode === 'string') {
      this._code = airportCode;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  set name(airportName) {
    if (typeof airportName === 'string') {
      this._name = airportName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }
}
