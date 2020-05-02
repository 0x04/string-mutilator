import shift from './shift';

/**
 * Rotate the character bits of a string. The 16 character bits of `'A'` are
 * `00000000 01000001` - if we shift the bits by -4 `n` digits they look like
 * this `00010000 00000100`. This means that `'A'` (`U+0041`) becomes `'င'`
 * (`U+1004`).
 * @param {string} string The input string.
 * @param {number} [n=1] Number of digits to rotate the character bit.
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
