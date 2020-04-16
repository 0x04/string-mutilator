/**
 * Functions for compressing (pack/unpack etc.) strings.
 * @module stringMutilator/compressor
 */

/**
 * Pack all characters of a 8-bit string.
 * @param {string} string A 8-bit string to pack.
 * @returns {string}
 * @example
 * stringMutilator.compressor.pack('Hello World!');
 * // > '䡥汬漠坯牬搡'
 */
const pack = string =>
  String.fromCharCode(
    ...(string.match(/[\S\s]{1,2}/g) || [])
      .map(e => {
        const cc0 = e.charCodeAt(0);
        const cc1 = e.charCodeAt(1);

        if (cc0 > 0xFF || cc1 > 0xFF) {
          throw new TypeError(
            `Non ASCII character ${cc0 + ', ' + cc1} detected!`
          );
        }

        return cc0 << 8 | cc1;
      })
  );

/**
 * Unpack a packed string.
 * @param {string} string The packed string to unpack.
 * @returns {string}
 * @example
 * stringMutilator.compressor.unpack('䡥汬漠坯牬搡');
 * // > 'Hello World!'
 */
const unpack = string =>
  unescape(
    escape(string)
      .replace(/u(..)/g, '$1%')
  );

/**
 * Return the given, packed string with the unpack signature.
 * @param {string} string The packed string to signature.
 * @param {boolean} [withEval=false] Determine if the result includes
 *                  a `eval` command for executing code.
 * @returns {string}
 * @example
 * stringMutilator.compressor.signature('䡥汬漠坯牬搡');
 * // > 'unescape(escape("䡥汬漠坯牬搡").replace(/u(..)/g, "$1%");'
 */
const signature = (string, withEval = false) =>
  (withEval ? 'eval(%s);' : '%s;')
    .replace(
      '%s',
      `unescape(escape("${string}").replace(/u(..)/g, "$1%"))`
    );

export default
{
  pack,
  unpack,
  signature
};

export
{
  pack,
  unpack,
  signature
};
