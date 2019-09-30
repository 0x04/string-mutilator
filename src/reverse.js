/**
 * Reverse a string
 * @param {string} string
 * @returns {string}
 */
const reverse = string =>
  string
    .split('')
    .reverse()
    .join('');

export default reverse;