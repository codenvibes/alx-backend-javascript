/**
 * AUTH: bugsnvibes
 * Divides the given numerator by the denominator.
 *
 * @param {number} numerator - The number to be divided.
 * @param {number} denominator - The number by which to divide.
 * @returns {number} The result of the division.
 * @throws {Error} Throws an error if the denominator is zero.
*/

export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  return numerator / denominator;
}
