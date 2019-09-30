/**
 * Randomize the order of the characters in a string
 * @param {string} string
 * @returns {string}
 */
const scramble = string =>
  string
    .split('')
    .reverse()
    .sort(() => (Math.random() < 0.5) ? -1 : 1)
    .join('');

export default scramble;