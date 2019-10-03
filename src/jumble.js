import scramble from './scramble';

/**
 * Jumble the letters in a word string.
 * @private
 * @param {string} word A word string to scramble.
 * @returns {string}
 */
const jumbleWord = word =>
  word.slice(0, 1)
  + scramble(word.slice(1, -1))
  + word.slice(-1);

/**
 * Jumble the letters of all words in a string,
 * except the first and last one, to keep it readable.
 * @param {string} string The input string.
 * @param {number} [runs=3] The number of attempts to get a real randomized
 *                        word string.
 * @returns {string}
 * @see https://www.mnn.com/lifestyle/arts-culture/stories/why-your-brain-can-read-jumbled-letters
 * @example
 * stringMutilator.jumble('Hello World!');
 * // > 'Hlelo Wrlod!'
 */
const jumble = (string, runs = 3) =>
  string.replace(
    /\w{4,}/gi,
    (word) => [ ...Array(runs) ]
      .map(_ => jumbleWord(word))
      .find(e => e !== word)
    || word
  );

export default jumble;