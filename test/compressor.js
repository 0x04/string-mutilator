import test from 'ava';
import * as compressor from '../src/compressor';
import * as testData from './_testData';

let str = testData.string8bit
  .slice(1);

let pck = str
  .match(/[\s\S]{1,2}/g)
  .map(char =>
    String.fromCharCode(
      char.charCodeAt(0) << 8 | char.charCodeAt(1)
    )
  )
  .join('');

test('pack string 8bit', t =>
  t.is(compressor.pack(str), pck)
);

test('unpack', t =>
  t.is(compressor.unpack(pck), str)
);

test('signature function', t =>
  t.is(
    compressor.signature(pck),
    `unescape(escape("${pck}").replace(/u(..)/g, "$1%"));`
  )
);

test('signature function with argument `withEval`', t =>
  t.is(
    compressor.signature(pck, true),
    `eval(unescape(escape("${pck}").replace(/u(..)/g, "$1%")));`
  )
);

test('string 16bit', t =>
  t.throws(() => compressor.pack(testData.string16bit))
);

