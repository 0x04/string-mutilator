/**
 * Convert A-Z to **M**athematical **A**lpha**n**umeric **S**ymbols.
 *
 * List of `type` values:
 *
 * | `type` | Unicode name |
 * | --- | --- |
 * | 0 | Mathematical Bold * |
 * | 1 | Mathematical Italic * |
 * | 2 | Mathematical Bold Italic * |
 * | 3 | Mathematical Script Capital * |
 * | 4 | Mathematical Bold Script * |
 * | 5 | Mathematical Fraktur * |
 * | 6 | Mathematical Double-Struck * |
 * | 7 | Mathematical Bold Fraktur * |
 * | 8 | Mathematical Sans-Serif * |
 * | 9 | Mathematical Sans-Serif Bold * |
 * | 10 | Mathematical Sans-Serif Italic * |
 * | 11 | Mathematical Sans-Serif Bold Italic * |
 * | 12 | Mathematical Monospace * |
 *
 * @param {string} string The input string.
 * @param {number} [type=0] A number between 0 and 12.
 * @returns {string}
 * @see https://unicode-table.com/en/blocks/mathematical-alphanumeric-symbols
 * @example
 * stringMutilator.toMANS('Hello World!', 1);
 * // > '𝐻𝑒𝑙𝑙𝑜 𝑊𝑜𝑟𝑙𝑑.'
 */
const toMANS = (string, type = 0) =>
  string.replace(
    /[a-z]/gi,
    char => String.fromCodePoint(
      119808
      + type * 52
      + char.charCodeAt(0)
      - (char.charCodeAt() < 97 ? 65 : 71)
    )
  );

export default toMANS;