import reverse from './reverse';

/**
 * Reverse the character bits of a string. The 16 character bits of 'A' are
 * `00000000 01000001` - if we reverse the bits they look like this
 * `1111111 10111110`. This means that 'A' (0x41) becomes '舀' (0x8200).
 * @param {string} string The input string.
 * @returns {string}
 * @example
 * stringMutilator.reverseBits('Hello World!');
 * // > 'ሀꘀ㘀㘀Ѐ一㘀☀萀'
 */
const reverseBits = string =>
  string
    .split('')
    .map(char =>
      String.fromCodePoint(
        parseInt(
          reverse(
            char
              .charCodeAt()
              .toString(2)
              .padStart(16, '0')
          ),
          2
        )
      )
    )
    .join('');

export default reverseBits;
