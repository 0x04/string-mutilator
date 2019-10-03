import test from 'ava';
import * as charCase from '../src/char-case';
import * as testData from './_testData';

test('invert: string lower, without argument `every`', t =>
  t.is(
    charCase.invert(testData.stringLower),
    testData.stringUpper
  )
);

test('invert: string upper, without argument `every`', t =>
  t.is(
    charCase.invert(testData.stringUpper),
    testData.stringLower
  )
);

test('invert: string lower, with argument `every: 2`', t =>
  t.is(
    charCase.invert(testData.stringLower, 2),
    'HeLlO WoRlD!'
  )
);

test('invert: string upper, with argument `every: 2`', t =>
  t.is(
    charCase.invert(testData.stringUpper, 2),
    'hElLo wOrLd!'
  )
);

test('invert: string lower, with argument `every: 3`', t =>
  t.is(
    charCase.invert(testData.stringLower, 3),
    'HelLo WorLd!'
  )
);

test('invert: string upper, with argument `every: 3`', t =>
  t.is(
    charCase.invert(testData.stringUpper, 3),
    'hELlO wORlD!'
  )
);

test('invert: negative argument `every: -3`', t =>
  t.is(
    charCase.invert(testData.stringUpper, -3), 'hELlO wORlD!')
);

test('invert: undefined argument `every`', t =>
  t.is(
    charCase.invert(testData.stringUpper, undefined),
    'hello world!'
  )
);

test('invert: undefined argument `string`', t =>
  t.throws(
    () => charCase.invert(undefined)
  )
);
