import test from 'ava';
import shiftBits from '../src/shift-bits';

const testBits = Array(16)
  .fill('0'.repeat(16))
  .map((v, i) => {
    return v.slice(0, 16 - i - 1)
      + '1'
      + v.slice(16 - i, 16);
  });
const testStrings = testBits.map(v => String.fromCodePoint(parseInt(v, 2)));

test('shifted characters', t =>
  t.deepEqual(
    Array(16)
    .fill('')
    .map((_, i) => shiftBits('\u0001', i)),
    testStrings
  )
);

test('shifted characters bits', t =>
  t.deepEqual(
    Array(16)
      .fill('')
      .map((_, i) => shiftBits('\u0001', i)
        .charCodeAt(0)
        .toString(2)
        .padStart(16, '0')
      ),
    testBits
  )
);
