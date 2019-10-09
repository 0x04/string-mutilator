import test from 'ava';
import toMANS from '../src/to-mans';

const startCodePoint = 0x1D400;
const abcString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

for (let i = 0; i < 13; i++)
{
  let testString = Array(52)
    .fill('')
    .map((_, j) =>
      String.fromCodePoint(
        startCodePoint
        + i * 52
        + j
      )
    )
    .join('');

  test(
    `abcString with argument \`type=${i}\``,
      t => t.is(toMANS(abcString, i), testString)
  );
}
