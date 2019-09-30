/**
 * Rotate the characters of a string by `n` digits
 * @param {string }string
 * @param {number} n
 * @returns {string}
 */
const shift = (string, n = 1) =>
{
  let e = string.split('');
  e.unshift(...e.splice(n % string.length));
  return e.join('');
}

export default shift;