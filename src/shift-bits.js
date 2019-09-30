import shift from './shift';

/**
 * Rotate the character bits of a string
 * @param {string} string
 * @param {number} n
 * @returns {string}
 */
const shiftBits = (string, n = 1) =>
  string.replace(
    /./g,
    m => String.fromCodePoint(
      parseInt(
        shift(
          m.charCodeAt(0)
            .toString(2)
            .padStart(16, '0'),
          n
        ),
        2
      )
    )
  );

export default shiftBits;