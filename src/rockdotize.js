/**
 * Create heavy metal like rockdot string
 * @see https://en.wikipedia.org/wiki/Metal_umlaut
 * @see https://github.com/bullgit/rockdotizer
 * @example "T̈ḧïs̈ ïs̈ ä r̈öc̈k̈d̈öẗïz̈ëd̈ s̈ẗr̈ïn̈g̈!"
 * @param {string} string
 * @param {RegExp} regexp
 * @returns {string}
 */
const rockdotize = (string, regexp = /\w/ig) =>
  string.replace(
    regexp,
    '$&\u0308'
  );

export default rockdotize;