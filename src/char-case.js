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
const invert = (string, every = 0) =>
  string
    .replace(
      /[a-z]/ig,
      (char, index) => String.fromCharCode(
        char.charCodeAt() ^ 32 * +(!every || index % every === 0)
      )
    );

const punctuationRegExp = /([-_. ])([a-z])/ig;

/**
 * Replacement helper function for `snakeCase`, `kebabCase` and `dotCase`.
 * @private
 * @param {string} string
 * @param {string} char
 * @return {string}
 */
const casePunctuationReplace = (string, char) =>
  string
    .replace(punctuationRegExp, `${char}$2`)
    .replace(/([a-z])([A-Z])/g, `$1${char}$2`)
    .replace(/([A-Z])([A-Z])/g, `$1${char}$2`);

/**
 * Change the case of given string to "Snake Case".
 * @param {string} string
 * @return {string}
 * @example
 * stringMutilator.charCase.snakeCase('Hello World');
 * // > 'hello_world'
 */
const snakeCase = string =>
  casePunctuationReplace(string, '_')
    .toLowerCase();

/**
 * Change the case of the given string to "Camel Case".
 * @param {string} string
 * @return {string}
 * @example
 * stringMutilator.charCase.camelCase('Hello World');
 * // > 'helloWorld'
 */
const camelCase = string =>
  string
    .replace(punctuationRegExp, (m, a, b) => b.toUpperCase())
    .replace(/^([A-Z])/, (m, a) => a.toLowerCase());

/**
 * Change the case of the given string to "Kebap Case".
 * @param {string} string
 * @return {string}
 * @example
 * stringMutilator.charCase.kebabCase('Hello World');
 * // > 'hello-world'
 */
const kebabCase = string =>
  casePunctuationReplace(string, '-')
    .toLowerCase();

/**
 * Change the case of the given string to "Dot Case".
 * @param {string} string
 * @return {string}
 * @example
 * stringMutilator.charCase.dotCase('Hello World');
 * // > 'hello.world'
 */
const dotCase = string =>
  casePunctuationReplace(string, '.')
    .toLowerCase();

/**
 * Change the case of the given string to "Pascal Case".
 * @param {string} string
 * @return {string}
 * @example
 * stringMutilator.charCase.pascalCase('Hello World');
 * // > 'HelloWorld'
 */
const pascalCase = string =>
  string
    .replace(punctuationRegExp, (m, a, b) => b.toUpperCase())
    .replace(/^([A-Z])/, (m, a) => a.toUpperCase());

/**
 * Change the case of the given string to "Capitalized".
 * @param {string} string
 * @return {string}
 * @example
 * stringMutilator.charCase.capitalize('hello world');
 * // > 'Hello World'
 */
const capitalize = string =>
  string
    .replace(punctuationRegExp, (m, a, b) => `${a}${b.toUpperCase()}`)
    .replace(/^([a-z])/, (m, a) => a.toUpperCase());

export default
{
  invert,
  snakeCase,
  camelCase,
  kebabCase,
  dotCase,
  pascalCase,
  capitalize
};

export
{
  invert,
  snakeCase,
  camelCase,
  kebabCase,
  dotCase,
  pascalCase,
  capitalize
};
