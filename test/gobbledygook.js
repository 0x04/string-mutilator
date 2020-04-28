import test from 'ava';
import gobbledygook from '../src/gobbledygook'
import * as testData from './_testData';

test('string 8bit', t =>
  t.not(
    testData.string8bit,
    gobbledygook(testData.string8bit)
  )
);

test('string short', t =>
  t.not(
    testData.stringShort,
    gobbledygook(testData.stringShort)
  )
);

test('string long', t =>
  t.not(
    testData.stringLong,
    gobbledygook(testData.stringLong)
  )
);
