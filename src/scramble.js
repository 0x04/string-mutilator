/**
 * Randomize the order of the characters in a string.
 * @param {string} string The string to scramble.
 * @returns {string}
 * @example
 * stringMutilator.scramble('Hello World!');
 * // > 'WorH!llo led'
 */
const scramble = string =>
  string
    .split('')
    .reverse()
    .sort(() => (Math.random() < 0.5) ? -1 : 1)
    .join('');

export default scramble;