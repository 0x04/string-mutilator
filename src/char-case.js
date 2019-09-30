/**
 * Swaps the case of every character in a string
 * @param {string} string
 * @param {number} every
 * @returns {string}
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
