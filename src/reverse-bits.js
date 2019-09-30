import reverse from './reverse';

/**
 * Reverse the character bits of a string
 * @param {string} string
 * @returns {string}
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
