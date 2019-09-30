/**
 * Convert A-Z to Mathematical Alphanumeric Symbols
 * @param {string} string
 * @param {number} type
 * @returns {string}
 */
const toMANS = (string, type = 0) =>
  string.replace(
    /[a-z]/gi,
    char => String.fromCodePoint(
      119808
      + type * 52
      + char.charCodeAt(0)
      - (char.charCodeAt() < 97 ? 65 : 71)
    )
  );

export default toMANS;