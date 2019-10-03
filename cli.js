#!/usr/bin/env node

const stringMutilator = require('./lib');

let exitCode = 0;

const [,, fnString, ...args] = process.argv;
const usageString = `
  Functions for mutilating strings.

  Usage
    $ string-mutilator <function> <string> [argument]...
    
  Functions
    charCase.invert
    compressor.pack
    compressor.unpack
    compressor.signature
    flipBits
    jumble
    reverse
    reverseBits
    rockdotize
    rot13
    scramble
    shift
    shiftBits
    toMANS
    
  Examples
    $ string-mutilator shift "Hello World!" 6
    $ string-mutilator charCase.invert "Hello World!"
    $ string-mutilator toMANS "Hello World!" 4
`;
const errorString = '\n✖ Invalid input. Please check the help below:\n';
const resolveFn = (object, dotString) => dotString
  .split('.')
  .reduce((o, c) => o[c], object);

try
{
  if (/^(-h|--help)$/.test(fnString))
  {
    console.info(usageString);
    process.exit(exitCode);
  }

  if (!fnString || args.length === 0)
  {
    throw new Error('Invalid arguments!')
  }

  const fn = resolveFn(stringMutilator, fnString)
  const fnArgs = args.map((v, i) => (i === 0) ? v : parseInt(v));

  console.log(fn.apply(this, fnArgs));
}
catch (e)
{
  console.error(errorString, usageString);
  exitCode = 1;
}

process.exit(exitCode);
