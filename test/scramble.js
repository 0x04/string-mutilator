import test from 'ava';
import scramble from '../src/scramble';
import * as testData from './_testData';

test('string 8bit', t =>
  t.not(
    testData.string8bit,
    scramble(testData.string8bit)
  )
);

test('string 16bit', t =>
  t.not(
    testData.string16bit,
    scramble(testData.string16bit)
  )
);

test('string short', t =>
  t.not(
    testData.stringShort,
    scramble(testData.stringShort)
  )
);

test('string long', t =>
  t.not(
    testData.stringLong,
    scramble(testData.stringLong)
  )
);
