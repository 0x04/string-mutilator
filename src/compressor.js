/**
 * Pack ASCII string
 * @param {string} string
 * @returns {string}
 */
export const pack = string =>
  String.fromCharCode(
    ...string.match(/[\S\s]{1,2}/g)
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
 * Unpack packed string
 * @param string
 * @returns {string}
 */
export const unpack = string =>
  unescape(
    escape(string)
      .replace(/u(..)/g, '$1%')
  );

/**
 * Return the given, packed string with the unpack signature
 * @param {string} string
 * @param {boolean} withEval
 * @returns {string}
 */
export const signature = (string, withEval = false) =>
  (withEval ? 'eval(%s);' : '%s;')
    .replace(
      '%s',
      `unescape(escape("${string}").replace(/u(..)/g, "$1%")`
    );
