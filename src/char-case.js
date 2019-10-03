/**
 * Functions for manipulating the letter case of strings.
 * @module stringMutilator/charCase
 */

/**
 * Invert the case of letters in a string.
 * @param {string} string The string to be case inverted.
 * @param {number} [every=0] Only invert every `n` letter.
 * @returns {string}
 * @example
 * stringMutilator.charCase.invert('Hello World!');
 * // > 'hELLO wORLD!'
 */
export const invert = (string, every = 0) => string.replace(
  /[a-z]/ig,
  (char, index) => String.fromCharCode(
    char.charCodeAt() ^ 32 * +(!every || index % every === 0)
  )
);

// TODO:
// * SCREAMING_SNAKE_CASE
// * snake_case
// * camelCase
// * kebab-case
// * dot.case
// * PascalCase
// * Capitalize
