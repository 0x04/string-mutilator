/**
 * Rotate the characters of a string by 13 digits
 * @see https://en.wikipedia.org/wiki/ROT13
 * @param {string} string
 * @returns {string}
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