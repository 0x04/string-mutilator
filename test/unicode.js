import test from 'ava';
import unicode from '../src/unicode.js';

let highSurrogates = Array.from({ length: 1024 }, (v, i) => i + 0xD800);
let lowSurrogates = Array.from({ length: 1024 }, (v, i) => i + 0xDC00);

let hs = highSurrogates
  // Exclude U+D800 because we use it as filler
  .slice(1)
  .map(code => String.fromCodePoint(code))
  .join('');

let ls = lowSurrogates
  // Exclude U+DC00 because we use it as filler
  .slice(1)
  .map(code => String.fromCodePoint(code))
  .join('');

let hsf = unicode.fixSurrogates(hs);
let hsu = unicode.unfixSurrogates(hsf);

test(
  `High surrogates fixed length `,
  t => t.is(hsf.length, hs.length * 2)
);

test(
  `High surrogates unfixed length`,
  t => t.is(hsu.length, hs.length)
);

let lsf = unicode.fixSurrogates(ls);
let lsu = unicode.unfixSurrogates(lsf);

test(
  `Low surrogates fixed length`,
  t => t.is(lsf.length, ls.length * 2)
);

test(
  `Low surrogates unfixed length`,
  t => t.is(lsu.length, ls.length)
);

// TODO: Add more detailed tests if necessary
