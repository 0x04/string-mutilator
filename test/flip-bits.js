import test from 'ava';
import flipBits from '../src/flip-bits';
import * as testData from './_testData';

const compareBits = (strA, strB) =>
{
  if (strA.length !== strB.length)
  {
    return false;
  }

  for (let i = 0; i < strA.length; i++)
  {
    const merged = (strA[i].charCodeAt(0) | strB[i].charCodeAt(0))
      .toString(2);

    if (!/^1+$/.test(merged))
    {
      return false;
    }
  }

  return true;
}

test('flip string 8bit', t =>
  t.true(
    compareBits(testData.string8bit, flipBits(testData.string8bit))
  )
);

test('flip of 16bit chars', t =>
  t.true(
    compareBits(testData.string16bit, flipBits(testData.string16bit))
  )
);

test('number argument `string`', t =>
  t.throws(
    () => flipBits(12345)
  )
);

test('undefined argument `string`', t =>
  t.throws(
    () => flipBits(undefined)
  )
);
