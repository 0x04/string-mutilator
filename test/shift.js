import test from 'ava';
import shift from '../src/shift';
import * as testData from './_testData';

const testFn = (input, n) =>
{
  let result = [];

  for (let i = n % input.length; Math.abs(i) <= input.length; i = (i + n))
  {
    result.push(input.slice(i) + input.slice(0, i));
  }

  return result;
}

test('string 8bit, argument `n=1`', t =>
  t.deepEqual(
    Array(testData.string8bit.length)
      .fill('')
      .map((_, i) => shift(testData.string8bit, i + 1)),
    testFn(testData.string8bit, 1)
  )
);

test('string 16bit, argument `n=-3`', t =>
  t.deepEqual(
    Array(testData.string16bit.length / 3)
      .fill('')
      .map((_, i) => shift(testData.string16bit, (i + 1) * -3)),
    testFn(testData.string16bit, -3)
  )
);

test('string short, argument `n=1`', t =>
  t.deepEqual(
    Array(testData.stringShort.length)
      .fill('')
      .map((_, i) => shift(testData.stringShort, i + 1)),
    testFn(testData.stringShort, 1)
  )
);

test('string long, argument `n=-1`', t =>
  t.deepEqual(
    Array(testData.stringLong.length)
      .fill('')
      .map((_, i) => shift(testData.stringLong, -(i + 1))),
    testFn(testData.stringLong, -1)
  )
);

test('string short, argument `n=2`', t =>
  t.deepEqual(
    Array(testData.stringShort.length / 2)
      .fill('')
      .map((_, i) => shift(testData.stringShort, (i + 1) * 2)),
    testFn(testData.stringShort, 2)
  )
);

test('string long, argument `n=-2`', t =>
  t.deepEqual(
    Array(testData.stringLong.length / 2)
      .fill('')
      .map((_, i) => shift(testData.stringLong, (i + 1) * -2)),
    testFn(testData.stringLong, -2)
  )
);
