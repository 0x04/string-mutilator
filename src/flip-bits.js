/**
 * Flip the character bits of a string. The 16 character bits of 'A' are
 * `00000000 01000001` - if we flip the bits (so every 0 becomes 1 and vice
 * versa) they look like this `11111111 10111110`. This means that 'A' (0x41)
 * becomes 'ﾾ' (0xFFBE).
 * @param {string} string The input string.
 * @return {string}
 * @example
 * stringMutilator.flipBits('Hello World!');
 * // > 'ﾷﾚﾓﾓﾐ￟ﾨﾐﾍﾓﾛ￞'
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