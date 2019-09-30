/**
 * Rotate the character indexes of a string by 13 digits.
 * @param {string} string The input string.
 * @returns {string}
 * @see https://en.wikipedia.org/wiki/ROT13
 * @example
 * stringMutilator.rot13('Hello World!');
 * // > 'Uryyb Jbeyq!'
 */
const rot13 = string =>
  string.replace(
    /[a-z]/ig,
    char => String.fromCharCode(
      char.charCodeAt(0) + 13 - 26 * /[n-z]/i.test(char)
    )
  );

export default rot13

// TODO: Maybe replace it with `rotN`