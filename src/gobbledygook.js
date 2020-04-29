import toMANS from './to-mans';

/**
 * Returns a random `type` for `toMANS` (0-12).
 * @private
 * @param {array} [exclude=[]] Exclude specific `type`
 * @returns {number}
 */
const getRandomType = (exclude = []) => {
  let result = 0;

  do
  {
    result = Math.round(Math.random() * 12);
  }
  while (exclude.includes(result));

  return result;
}

/**
 * Applies `toMANS` to all characters with a random `type`.
 * For example `Hello World` turns into `𝐇𝖾𝓵𝗹𝘰 𝔚𝗈𝒓𝔩𝔡`.
 * @param {string} string The input string
 * @param {array} [exclude=[ 1, 2 ]] Exclude specific `type` of `toMANS`
 * @returns {string}
 * @example
 * stringMutilator.gobbledygook('Hello World');
 * // > 𝐇𝖾𝓵𝗹𝘰 𝔚𝗈𝒓𝔩𝔡
 */
const gobbledygook = (string, exclude = [ 1, 3 ]) =>
  string.replace(
    /[a-z]/gi,
    char => toMANS(char, getRandomType(exclude))
  );

export default gobbledygook;
