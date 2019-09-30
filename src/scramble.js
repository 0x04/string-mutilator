/**
 * Randomize the order of the characters in a string
 * @param {string} string
 * @returns {string}
 */
const scramble = string =>
  string
    .split('')
    .reverse()
    .sort(() => Math.round(Math.random()))
    .join('');

export default scramble;