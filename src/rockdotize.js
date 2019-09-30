/**
 * Create a heavy metal like rockdot string.
 * @param {string} string The string to rockdotize.
 * @param {RegExp} [regexp] A RegExp to select every character that should get rockdotized.
 * @returns {string}
 * @see https://en.wikipedia.org/wiki/Metal_umlaut
 * @see https://github.com/bullgit/rockdotizer
 * @example
 * stringMutilator.rockdotize('Hello World!');
 * // > 'Ḧël̈l̈ö Ẅör̈l̈d̈!'
 */
const rockdotize = (string, regexp = /\w/ig) =>
  string.replace(
    regexp,
    '$&\u0308'
  );

export default rockdotize;