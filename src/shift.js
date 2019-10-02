/**
 * Shift the characters of a string by `n` digits.
 * @param {string} string The string to shift.
 * @param {number} [n=1] Number of digits to rotate the characters.
 *                     Positive for right rotation,
 *                     negative for left rotation.
 * @returns {string}
 * @example
 * stringMutilator.shift('Hello World!', 3);
 * // > 'lo World!Hel'
 */
const shift = (string, n = 1) =>
{
  let e = string.split('');
  e.unshift(...e.splice(n % string.length));
  return e.join('');
}

export default shift;