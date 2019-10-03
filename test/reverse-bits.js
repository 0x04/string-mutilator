import test from 'ava';
import reverseBits from '../src/reverse-bits';
import * as testData from './_testData';

const compareBits = (input, output) =>
{
  const getBits = char => char.charCodeAt(0).toString(2).padStart(16, '0');
  const reverseBits = bits => bits.split('').reverse().join('');
  const inputBits = input.split('').map(getBits);
  const outputBits = output.split('').map(getBits);

  return inputBits.length === outputBits.length
    && outputBits.reduce((a, b, i) =>
      (b === reverseBits(inputBits[i]) && a),
      true
    );
}

test('string short', t =>
  t.true(
    compareBits(
      testData.stringShort,
      reverseBits(testData.stringShort)
    )
  )
);

test('string long', t =>
  t.true(
    compareBits(
      testData.stringLong,
      reverseBits(testData.stringLong)
    )
  )
);

test('string 8bit', t =>
  t.true(
    compareBits(
      testData.string8bit,
      reverseBits(testData.string8bit)
    )
  )
);

test('string 16bit', t =>
  t.true(
    compareBits(
      testData.string16bit,
      reverseBits(testData.string16bit)
    )
  )
);
