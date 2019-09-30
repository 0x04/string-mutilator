import scramble from './scramble';

/**
 * Jumble the letters in a word string
 * @param {string} word
 * @returns {string}
 */
const jumbleWord = word =>
  word.slice(0, 1)
  + scramble(word.slice(1, -1))
  + word.slice(-1);

/**
 * Jumble the letters of all words in a string
 * Except the first and last one, to keep it readable
 * @param {string} string
 * @param {number} runs
 * @returns {string}
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