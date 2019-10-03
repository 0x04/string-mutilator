import test from 'ava';
import rockdotize from '../src/rockdotize';
import * as testData from './_testData';

const checkDiaeresis = (regExp, input, output) =>
{
  const regExpOutput = new RegExp(`${regExp.source}\u0308`, regExp.flags);

  return (input.match(regExp).length === output.match(regExpOutput).length);
}

const defaultRegExp = /\w/ig;
const allRegExp = /[\s\S]/g;

test('string 8bit, default argument `regexp`', t =>
  t.true(
    checkDiaeresis(
      defaultRegExp,
      testData.string8bit,
      rockdotize(testData.string8bit)
    )
  )
);

test('string short, default argument `regexp`', t =>
  t.true(
    checkDiaeresis(
      defaultRegExp,
      testData.stringShort,
      rockdotize(testData.stringShort)
    )
  )
);

test('string long, default argument `regexp`', t =>
  t.true(
    checkDiaeresis(
      defaultRegExp,
      testData.stringLong,
      rockdotize(testData.stringLong)
    )
  )
);

test('string 8bit, argument `regexp=/\\[\\s\\s]/g`', t =>
  t.true(
    checkDiaeresis(
      allRegExp,
      testData.string8bit,
      rockdotize(testData.string8bit, allRegExp)
    )
  )
);

test('string 16bit, argument `regexp=/\\[\\s\\S]/g`', t =>
  t.true(
    checkDiaeresis(
      allRegExp,
      testData.string16bit,
      rockdotize(testData.string16bit, allRegExp)
    )
  )
);
