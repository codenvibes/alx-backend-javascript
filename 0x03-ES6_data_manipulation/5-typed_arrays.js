/**
 * Creates a new ArrayBuffer with an Int8 value at a specific position.
 * @param {number} length - The length of the ArrayBuffer.
 * @param {number} position - The position at which to set the Int8 value.
 * @param {number} value - The Int8 value to set.
 * @returns {DataView} - A DataView of the created ArrayBuffer.
 * @throws {Error} - If position is outside the range [0, length).
 */

export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);
  view[position] = value;

  return new DataView(buffer);
}
