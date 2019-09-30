import shift from './shift';

/**
 * Rotate the character bits of a string.
 * @param {string} string The input string.
 * @param {number} [n] Number of digits to rotate the character bit.
 *                     Positive for right rotation,
 *                     negative for left rotation.
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