/**
 * Reverse a string.
 * @param {string} string The input string.
 * @returns {string}
 * @example
 * stringMutilator.reverse('Hello World!');
 * // > '!dlroW olleH'
 */
const reverse = string =>
  string
    .split('')
    .reverse()
    .join('');

export default reverse;