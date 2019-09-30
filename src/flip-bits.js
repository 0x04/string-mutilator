/**
 * Flip the character bits of a string
 * @param {string} string
 * @return {string}
 */
const flipBits = string =>
  string
    .split('')
    .map(
      char => String.fromCodePoint(
        parseInt(
          char
            .charCodeAt()
            .toString(2)
            .padStart(16, 0)
            .replace(/./g, bit => bit === '0' ? '1' : '0'),
          2
        )
      )
    )
    .join('');

export default flipBits;