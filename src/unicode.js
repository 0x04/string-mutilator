/**
 * Functions for handle unicode stuff.
 * @module stringMutilator/unicode
 */

/**
 * Checks if the given `char` is a high surrogate (U+D800 - U+DBFF).
 * @private
 * @param {string} char
 * @returns {boolean}
 */
const isHighSurrogate = char => (/^[\uD800-\uDBFF]$/.test(char));

/**
 * Checks if the given `char` is a low surrogate (U+DC00 - U+DFFF).
 * @private
 * @param {string} char
 * @returns {boolean}
 */
const isLowSurrogate = char => (/^[\uDC00-\uDFFF]$/.test(char));

/**
 * Fix unpaired high/low surrogates by adding a blank high/low surrogate
 * (`U+D800` or `U+DC00`) to the designated location. An unpaired surrogate can
 * lead to problems, for example by copying it to the clipboard could result in
 * a Replacement Character � (`U+FFFD`). For example if the string is
 * `'\uD801'` it will be altered to `'\uD801\uDC00'` (`'𐐀'`) or `'\uDE80'` to
 * `'\uD800\uDE80'` (`'𐊀'`).
 * @param {string} string The input string
 * @returns {string}
 * @see https://en.wikipedia.org/wiki/UTF-16#U+D800_to_U+DFFF
 * @example
 * stringMutilator.unicode.fixSurrogates('Test: \uD801 \uDE80');
 * // > 'Test: 𐐀 𐊀'
 */
const fixSurrogates = string =>
{
  let result = string;

  for (let i = 0; i < result.length; i++)
  {
    if (isHighSurrogate(result[i])
      && (i + 1 === result.length || !isLowSurrogate(result[i + 1])))
    {
      result = result.slice(0, i + 1)
        + String.fromCharCode(0xDC00)
        + result.slice(i + 1);
      i++;
    }
    else if (isLowSurrogate(result[i])
      && (i === 0 || !isHighSurrogate(result[i - 1])))
    {
      result = result.slice(0, i)
        + String.fromCharCode(0xD800)
        + result.slice(i);
      i++;
    }
  }

  return result;
};

/**
 * Remove the by `fixSurrogates` added blank high/low surrogates.
 * @param {string} string The input string
 * @returns {string}
 * @example
 * stringMutilator.unfixSurrogates('Test: 𐐀 𐊀');
 * // > 'Test: \uD801 \uDE80'
 */
const unfixSurrogates = string =>
  string.replace(/([\uD800|\uDC00])/g, '');

export default {
  fixSurrogates,
  unfixSurrogates
};

export {
  fixSurrogates,
  unfixSurrogates
};
