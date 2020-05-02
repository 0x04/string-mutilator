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
 * (U+D800 or U+DC00) to the required location.
 * @param {string} string The input string
 * @returns {string}
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
