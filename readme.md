# string-mutilator

A JavaScript library for mutilate strings.

[![MIT license][license-badge]][license]


## Motivation background

Most of the code from this project was created during a personal codegolf
competition to distort the appearance of strings as much as possible but
without actually destroying their contents.

So the name [`mutilator`][mutilator] come into my mind.

> mutilator (plural mutilators)
> 1. Agent noun of mutilate; one who mutilates.

This sounds unnecessarily brutal for now, but I assure you that no strings
will be harmed permanently, as long as the functions are used correctly. :smirk:

So I decided to combine these "strange" functions into one library.
More or less just for fun.


## Demo

A [comprehensive demo][pseudo-cipherer-demo] of all functions can be found in
the demonstration of this library/package in the demo project
[`pseudeo-chiperer`][pseudo-cipherer-repo].


## Table of content

1. [Modules](#user-content-module)
2. [Functions](#user-content-functions)
3. [Involutory functions](#user-content-involutory-functions)
4. [Using the CLI](#user-content-using-the-cli)


## Modules

<dl>
<dt><a href="#module_stringMutilator/charCase">stringMutilator/charCase</a></dt>
<dd><p>Functions for manipulating the letter case of strings.</p>
</dd>
<dt><a href="#module_stringMutilator/compressor">stringMutilator/compressor</a></dt>
<dd><p>Functions for compressing (pack/unpack etc.) strings.</p>
</dd>
<dt><a href="#module_stringMutilator">stringMutilator</a></dt>
<dd><p>Functions for mutilating strings.</p>
</dd>
<dt><a href="#module_stringMutilator/unicode">stringMutilator/unicode</a></dt>
<dd><p>Functions for handle unicode stuff.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#flipBits">flipBits(string)</a> ⇒ <code>string</code></dt>
<dd><p>Flip the character bits of a string. The 16 character bits of <code>&#39;A&#39;</code> are
<code>00000000 01000001</code> - if we flip the bits (so every 0 becomes 1 and vice
versa) they look like this <code>11111111 10111110</code>. This means that <code>&#39;A&#39;</code>
(<code>U+0041</code>) becomes <code>&#39;ﾾ&#39;</code> (<code>U+FFBE</code>).</p>
</dd>
<dt><a href="#gobbledygook">gobbledygook(string, [exclude])</a> ⇒ <code>string</code></dt>
<dd><p>Applies <code>toMANS</code> to all characters with a random <code>type</code>.
For example <code>&#39;Hello World&#39;</code> turns into <code>&#39;𝐇𝖾𝓵𝗹𝘰 𝔚𝗈𝒓𝔩𝔡&#39;</code>.</p>
</dd>
<dt><a href="#jumble">jumble(string, [runs])</a> ⇒ <code>string</code></dt>
<dd><p>Jumble the letters of all words in a string,
except the first and last one, to keep it readable.</p>
</dd>
<dt><a href="#reverseBits">reverseBits(string)</a> ⇒ <code>string</code></dt>
<dd><p>Reverse the character bits of a string. The 16 character bits of <code>&#39;A&#39;</code> are
<code>00000000 01000001</code> - if we reverse the bits they look like this
<code>10000010 00000000</code>. This means that <code>&#39;A&#39;</code> (<code>U+0041</code>) becomes <code>&#39;舀&#39;</code>
(<code>U+8200</code>).</p>
</dd>
<dt><a href="#reverse">reverse(string)</a> ⇒ <code>string</code></dt>
<dd><p>Reverse a string.</p>
</dd>
<dt><a href="#rockdotize">rockdotize(string, [regexp])</a> ⇒ <code>string</code></dt>
<dd><p>Create a heavy metal like rockdot string.</p>
</dd>
<dt><a href="#rot13">rot13(string)</a> ⇒ <code>string</code></dt>
<dd><p>Rotate the character indexes of a string by 13 digits.</p>
</dd>
<dt><a href="#scramble">scramble(string)</a> ⇒ <code>string</code></dt>
<dd><p>Randomize the order of the characters in a string.</p>
</dd>
<dt><a href="#shiftBits">shiftBits(string, [n])</a> ⇒ <code>string</code></dt>
<dd><p>Rotate the character bits of a string. The 16 character bits of <code>&#39;A&#39;</code> are
<code>00000000 01000001</code> - if we shift the bits by -4 <code>n</code> digits they look like
this <code>00010000 00000100</code>. This means that <code>&#39;A&#39;</code> (<code>U+0041</code>) becomes <code>&#39;င&#39;</code>
(<code>U+1004</code>).</p>
</dd>
<dt><a href="#shift">shift(string, [n])</a> ⇒ <code>string</code></dt>
<dd><p>Shift the characters of a string by <code>n</code> digits.</p>
</dd>
<dt><a href="#toMANS">toMANS(string, [type])</a> ⇒ <code>string</code></dt>
<dd><p>Convert A-Z to <strong>M</strong>athematical <strong>A</strong>lpha<strong>n</strong>umeric <strong>S</strong>ymbols.</p>
<p>List of <code>type</code> values:</p>
<table>
<thead>
<tr>
<th><code>type</code></th>
<th>Unicode name</th>
</tr>
</thead>
<tbody><tr>
<td>0</td>
<td>Mathematical Bold *</td>
</tr>
<tr>
<td>1</td>
<td>Mathematical Italic *</td>
</tr>
<tr>
<td>2</td>
<td>Mathematical Bold Italic *</td>
</tr>
<tr>
<td>3</td>
<td>Mathematical Script Capital *</td>
</tr>
<tr>
<td>4</td>
<td>Mathematical Bold Script *</td>
</tr>
<tr>
<td>5</td>
<td>Mathematical Fraktur *</td>
</tr>
<tr>
<td>6</td>
<td>Mathematical Double-Struck *</td>
</tr>
<tr>
<td>7</td>
<td>Mathematical Bold Fraktur *</td>
</tr>
<tr>
<td>8</td>
<td>Mathematical Sans-Serif *</td>
</tr>
<tr>
<td>9</td>
<td>Mathematical Sans-Serif Bold *</td>
</tr>
<tr>
<td>10</td>
<td>Mathematical Sans-Serif Italic *</td>
</tr>
<tr>
<td>11</td>
<td>Mathematical Sans-Serif Bold Italic *</td>
</tr>
<tr>
<td>12</td>
<td>Mathematical Monospace *</td>
</tr>
</tbody></table>
</dd>
</dl>

<a name="module_stringMutilator/charCase"></a>

## stringMutilator/charCase
Functions for manipulating the letter case of strings.


* [stringMutilator/charCase](#module_stringMutilator/charCase)
    * [~invert(string, [every])](#module_stringMutilator/charCase..invert) ⇒ <code>string</code>
    * [~snakeCase(string)](#module_stringMutilator/charCase..snakeCase) ⇒ <code>string</code>
    * [~camelCase(string)](#module_stringMutilator/charCase..camelCase) ⇒ <code>string</code>
    * [~kebabCase(string)](#module_stringMutilator/charCase..kebabCase) ⇒ <code>string</code>
    * [~dotCase(string)](#module_stringMutilator/charCase..dotCase) ⇒ <code>string</code>
    * [~pascalCase(string)](#module_stringMutilator/charCase..pascalCase) ⇒ <code>string</code>
    * [~capitalize(string)](#module_stringMutilator/charCase..capitalize) ⇒ <code>string</code>

<a name="module_stringMutilator/charCase..invert"></a>

### stringMutilator/charCase~invert(string, [every]) ⇒ <code>string</code>
Invert the case of letters in a string.

**Kind**: inner method of [<code>stringMutilator/charCase</code>](#module_stringMutilator/charCase)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | The string to be case inverted. |
| [every] | <code>number</code> | <code>0</code> | Only invert every `n` letter. |

**Example**  
```js
stringMutilator.charCase.invert('Hello World!');
// > 'hELLO wORLD!'
```
<a name="module_stringMutilator/charCase..snakeCase"></a>

### stringMutilator/charCase~snakeCase(string) ⇒ <code>string</code>
Change the case of given string to "Snake Case".

**Kind**: inner method of [<code>stringMutilator/charCase</code>](#module_stringMutilator/charCase)  

| Param | Type |
| --- | --- |
| string | <code>string</code> | 

**Example**  
```js
stringMutilator.charCase.snakeCase('Hello World');
// > 'hello_world'
```
<a name="module_stringMutilator/charCase..camelCase"></a>

### stringMutilator/charCase~camelCase(string) ⇒ <code>string</code>
Change the case of the given string to "Camel Case".

**Kind**: inner method of [<code>stringMutilator/charCase</code>](#module_stringMutilator/charCase)  

| Param | Type |
| --- | --- |
| string | <code>string</code> | 

**Example**  
```js
stringMutilator.charCase.camelCase('Hello World');
// > 'helloWorld'
```
<a name="module_stringMutilator/charCase..kebabCase"></a>

### stringMutilator/charCase~kebabCase(string) ⇒ <code>string</code>
Change the case of the given string to "Kebap Case".

**Kind**: inner method of [<code>stringMutilator/charCase</code>](#module_stringMutilator/charCase)  

| Param | Type |
| --- | --- |
| string | <code>string</code> | 

**Example**  
```js
stringMutilator.charCase.kebabCase('Hello World');
// > 'hello-world'
```
<a name="module_stringMutilator/charCase..dotCase"></a>

### stringMutilator/charCase~dotCase(string) ⇒ <code>string</code>
Change the case of the given string to "Dot Case".

**Kind**: inner method of [<code>stringMutilator/charCase</code>](#module_stringMutilator/charCase)  

| Param | Type |
| --- | --- |
| string | <code>string</code> | 

**Example**  
```js
stringMutilator.charCase.dotCase('Hello World');
// > 'hello.world'
```
<a name="module_stringMutilator/charCase..pascalCase"></a>

### stringMutilator/charCase~pascalCase(string) ⇒ <code>string</code>
Change the case of the given string to "Pascal Case".

**Kind**: inner method of [<code>stringMutilator/charCase</code>](#module_stringMutilator/charCase)  

| Param | Type |
| --- | --- |
| string | <code>string</code> | 

**Example**  
```js
stringMutilator.charCase.pascalCase('Hello World');
// > 'HelloWorld'
```
<a name="module_stringMutilator/charCase..capitalize"></a>

### stringMutilator/charCase~capitalize(string) ⇒ <code>string</code>
Change the case of the given string to "Capitalized".

**Kind**: inner method of [<code>stringMutilator/charCase</code>](#module_stringMutilator/charCase)  

| Param | Type |
| --- | --- |
| string | <code>string</code> | 

**Example**  
```js
stringMutilator.charCase.capitalize('hello world');
// > 'Hello World'
```
<a name="module_stringMutilator/compressor"></a>

## stringMutilator/compressor
Functions for compressing (pack/unpack etc.) strings.


* [stringMutilator/compressor](#module_stringMutilator/compressor)
    * [~pack(string)](#module_stringMutilator/compressor..pack) ⇒ <code>string</code>
    * [~unpack(string)](#module_stringMutilator/compressor..unpack) ⇒ <code>string</code>
    * [~signature(string, [withEval])](#module_stringMutilator/compressor..signature) ⇒ <code>string</code>

<a name="module_stringMutilator/compressor..pack"></a>

### stringMutilator/compressor~pack(string) ⇒ <code>string</code>
Pack all characters of a 8-bit string.

**Kind**: inner method of [<code>stringMutilator/compressor</code>](#module_stringMutilator/compressor)  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | A 8-bit string to pack. |

**Example**  
```js
stringMutilator.compressor.pack('Hello World!');
// > '䡥汬漠坯牬搡'
```
<a name="module_stringMutilator/compressor..unpack"></a>

### stringMutilator/compressor~unpack(string) ⇒ <code>string</code>
Unpack a packed string.

**Kind**: inner method of [<code>stringMutilator/compressor</code>](#module_stringMutilator/compressor)  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The packed string to unpack. |

**Example**  
```js
stringMutilator.compressor.unpack('䡥汬漠坯牬搡');
// > 'Hello World!'
```
<a name="module_stringMutilator/compressor..signature"></a>

### stringMutilator/compressor~signature(string, [withEval]) ⇒ <code>string</code>
Return the given, packed string with the unpack signature.

**Kind**: inner method of [<code>stringMutilator/compressor</code>](#module_stringMutilator/compressor)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | The packed string to signature. |
| [withEval] | <code>boolean</code> | <code>false</code> | Determine if the result includes                  a `eval` command for executing code. |

**Example**  
```js
stringMutilator.compressor.signature('䡥汬漠坯牬搡');
// > 'unescape(escape("䡥汬漠坯牬搡").replace(/u(..)/g, "$1%");'
```
<a name="module_stringMutilator"></a>

## stringMutilator
Functions for mutilating strings.

<a name="module_stringMutilator/unicode"></a>

## stringMutilator/unicode
Functions for handle unicode stuff.


* [stringMutilator/unicode](#module_stringMutilator/unicode)
    * [~fixSurrogates(string)](#module_stringMutilator/unicode..fixSurrogates) ⇒ <code>string</code>
    * [~unfixSurrogates(string)](#module_stringMutilator/unicode..unfixSurrogates) ⇒ <code>string</code>

<a name="module_stringMutilator/unicode..fixSurrogates"></a>

### stringMutilator/unicode~fixSurrogates(string) ⇒ <code>string</code>
Fix unpaired high/low surrogates by adding a blank high/low surrogate
(`U+D800` or `U+DC00`) to the designated location. An unpaired surrogate can
lead to problems, for example by copying it to the clipboard could result in
a Replacement Character � (`U+FFFD`). For example if the string is
`'\uD801'` it will be altered to `'\uD801\uDC00'` (`'𐐀'`) or `'\uDE80'` to
`'\uD800\uDE80'` (`'𐊀'`).

**Kind**: inner method of [<code>stringMutilator/unicode</code>](#module_stringMutilator/unicode)  
**See**: https://en.wikipedia.org/wiki/UTF-16#U+D800_to_U+DFFF  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string |

**Example**  
```js
stringMutilator.unicode.fixSurrogates('Test: \uD801 \uDE80');
// > 'Test: 𐐀 𐊀'
```
<a name="module_stringMutilator/unicode..unfixSurrogates"></a>

### stringMutilator/unicode~unfixSurrogates(string) ⇒ <code>string</code>
Remove the by `fixSurrogates` added blank high/low surrogates.

**Kind**: inner method of [<code>stringMutilator/unicode</code>](#module_stringMutilator/unicode)  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string |

**Example**  
```js
stringMutilator.unfixSurrogates('Test: 𐐀 𐊀');
// > 'Test: \uD801 \uDE80'
```
<a name="flipBits"></a>

## flipBits(string) ⇒ <code>string</code>
Flip the character bits of a string. The 16 character bits of `'A'` are
`00000000 01000001` - if we flip the bits (so every 0 becomes 1 and vice
versa) they look like this `11111111 10111110`. This means that `'A'`
(`U+0041`) becomes `'ﾾ'` (`U+FFBE`).

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string. |

**Example**  
```js
stringMutilator.flipBits('Hello World!');
// > 'ﾷﾚﾓﾓﾐ￟ﾨﾐﾍﾓﾛ￞'
```
<a name="gobbledygook"></a>

## gobbledygook(string, [exclude]) ⇒ <code>string</code>
Applies `toMANS` to all characters with a random `type`.
For example `'Hello World'` turns into `'𝐇𝖾𝓵𝗹𝘰 𝔚𝗈𝒓𝔩𝔡'`.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | The input string |
| [exclude] | <code>array</code> | <code>[ 1, 2 ]</code> | Exclude specific `type` of `toMANS` |

**Example**  
```js
stringMutilator.gobbledygook('Hello World');
// > 𝐇𝖾𝓵𝗹𝘰 𝔚𝗈𝒓𝔩𝔡
```
<a name="jumble"></a>

## jumble(string, [runs]) ⇒ <code>string</code>
Jumble the letters of all words in a string,
except the first and last one, to keep it readable.

**Kind**: global function  
**See**: https://www.mnn.com/lifestyle/arts-culture/stories/why-your-brain-can-read-jumbled-letters  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | The input string. |
| [runs] | <code>number</code> | <code>3</code> | The number of attempts to get a real randomized                        word string. |

**Example**  
```js
stringMutilator.jumble('Hello World!');
// > 'Hlelo Wrlod!'
```
<a name="reverseBits"></a>

## reverseBits(string) ⇒ <code>string</code>
Reverse the character bits of a string. The 16 character bits of `'A'` are
`00000000 01000001` - if we reverse the bits they look like this
`10000010 00000000`. This means that `'A'` (`U+0041`) becomes `'舀'`
(`U+8200`).

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string. |

**Example**  
```js
stringMutilator.reverseBits('Hello World!');
// > 'ሀꘀ㘀㘀Ѐ一㘀☀萀'
```
<a name="reverse"></a>

## reverse(string) ⇒ <code>string</code>
Reverse a string.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string. |

**Example**  
```js
stringMutilator.reverse('Hello World!');
// > '!dlroW olleH'
```
<a name="rockdotize"></a>

## rockdotize(string, [regexp]) ⇒ <code>string</code>
Create a heavy metal like rockdot string.

**Kind**: global function  
**See**

- https://en.wikipedia.org/wiki/Metal_umlaut
- https://github.com/bullgit/rockdotizer


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | The string to rockdotize. |
| [regexp] | <code>RegExp</code> | <code>&lt;RegExp /\w/gi&gt;</code> | A RegExp to select every character that should get rockdotized. |

**Example**  
```js
stringMutilator.rockdotize('Hello World!');
// > 'Ḧël̈l̈ö Ẅör̈l̈d̈!'
```
<a name="rot13"></a>

## rot13(string) ⇒ <code>string</code>
Rotate the character indexes of a string by 13 digits.

**Kind**: global function  
**See**: https://en.wikipedia.org/wiki/ROT13  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string. |

**Example**  
```js
stringMutilator.rot13('Hello World!');
// > 'Uryyb Jbeyq!'
```
<a name="scramble"></a>

## scramble(string) ⇒ <code>string</code>
Randomize the order of the characters in a string.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The string to scramble. |

**Example**  
```js
stringMutilator.scramble('Hello World!');
// > 'WorH!llo led'
```
<a name="shiftBits"></a>

## shiftBits(string, [n]) ⇒ <code>string</code>
Rotate the character bits of a string. The 16 character bits of `'A'` are
`00000000 01000001` - if we shift the bits by -4 `n` digits they look like
this `00010000 00000100`. This means that `'A'` (`U+0041`) becomes `'င'`
(`U+1004`).

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | The input string. |
| [n] | <code>number</code> | <code>1</code> | Number of digits to rotate the character bit.                     Positive for right rotation,                     negative for left rotation. |

<a name="shift"></a>

## shift(string, [n]) ⇒ <code>string</code>
Shift the characters of a string by `n` digits.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | The string to shift. |
| [n] | <code>number</code> | <code>1</code> | Number of digits to rotate the characters.                     Positive for right rotation,                     negative for left rotation. |

**Example**  
```js
stringMutilator.shift('Hello World!', 3);
// > 'lo World!Hel'
```
<a name="toMANS"></a>

## toMANS(string, [type]) ⇒ <code>string</code>
Convert A-Z to **M**athematical **A**lpha**n**umeric **S**ymbols.

List of `type` values:

| `type` | Unicode name |
| --- | --- |
| 0 | Mathematical Bold * |
| 1 | Mathematical Italic * |
| 2 | Mathematical Bold Italic * |
| 3 | Mathematical Script Capital * |
| 4 | Mathematical Bold Script * |
| 5 | Mathematical Fraktur * |
| 6 | Mathematical Double-Struck * |
| 7 | Mathematical Bold Fraktur * |
| 8 | Mathematical Sans-Serif * |
| 9 | Mathematical Sans-Serif Bold * |
| 10 | Mathematical Sans-Serif Italic * |
| 11 | Mathematical Sans-Serif Bold Italic * |
| 12 | Mathematical Monospace * |

**Kind**: global function  
**See**: https://unicode-table.com/en/blocks/mathematical-alphanumeric-symbols  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | The input string. |
| [type] | <code>number</code> | <code>0</code> | A number between 0 and 12. |

**Example**  
```js
stringMutilator.toMANS('Hello World!', 1);
// > '𝐻𝑒𝑙𝑙𝑜 𝑊𝑜𝑟𝑙𝑑.'
```


## Involutory functions

> An [involutory function][involution], is a function f that is its own inverse.

### List of involutory functions

* [`flipBits`](#flipBits)
* [`reverse`](#reverse)
* [`reverseBits`](#reverseBits)
* [`rot13`](#rot13)

**Example**

```js
import { rot13 } from '@0x04/string-mutilator';

rot13(rot13('Hello World!')) === 'Hello World!';
// > true
```

### List of involutory functions with negated arguments

* [`charCase.invert`](#module_stringMutilator/charCase..invert)
* [`shift`](#shift)
* [`shiftBits`](#shiftBits)

**Example**

```js
import { shift } from '@0x04/string-mutilator';

shift(shift('Hello World!', 5), -5) === 'Hello World!';
// > true
```

### List of involutory functions with counter function

* [`compressor.pack`](#module_stringMutilator/compressor..pack) / [`compressor.unpack`](#module_stringMutilator/compressor..unpack)
* [`unicode.fixSurrogates`](#module_stringMutilator/unicode..fixSurrogates) / [`unicode.unfixSurrogates`](#module_stringMutilator/unicode..unfixSurrogates)

**Examples**

```js
import { compressor } from '@0x04/string-mutilator';

compressor.unpack(compressor.pack('Hello World!')) === 'Hello World!';
// > true
```

### List of non involutory functions

* [`compressor.signature`](#module_stringMutilator/compressor..signature)
* [`gobbledygook`](#gobbledygook)
* [`jumble`](#jumble)
* [`rockdotize`](#rockdotize)
* [`scramble`](#scramble)
* [`toMANS`](#toMANS)

```js
import { jumble } from '@0x04/string-mutilator';

jumble(jumble('Hello World!')) === 'Hello World!';
// > false
```


## Using the CLI

### Install

**To use it in your project**

```bash
$ npm install --save @0x04/string-mutilator
```

**To use it globally**

```bash
$ npm install --global @0x04/string-mutilator
```

### General usage

```plain
$ string-mutilator --help

  Functions for mutilating strings.

  Usage
  $ string-mutilator <function> <string> [argument]...

    Functions
      charCase.invert
      compressor.pack
      compressor.unpack
      compressor.signature
      charCase.snakeCase
      charCase.camelCase
      charCase.kebabCase
      charCase.dotCase
      charCase.pascalCase
      charCase.capitalize
      flipBits
      gobbledygook
      jumble
      reverse
      reverseBits
      rockdotize
      rot13
      scramble
      shift
      shiftBits
      toMANS
      unicode.fixSurrogates
      unicode.unfixSurrogates

    Examples
      $ string-mutilator shift "Hello World!" 6
      $ string-mutilator charCase.invert "Hello World!"
      $ string-mutilator toMANS "Hello World!" 4
```


## License

&copy; 2019 by [Oliver Kühn][0x04]. Released under the [MIT license][license].


<!-- Badges -->
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge
[license]: ./license


<!-- Links -->
[0x04]: mailto:ok@0x04.de
[pseudo-cipherer-demo]: https://0x04.github.io/pseudo-cipherer
[pseudo-cipherer-repo]: https://github.com/0x04/pseudo-cipherer

<!-- Appendix -->
[involution]: https://en.wikipedia.org/wiki/Involution_(mathematics)
[mutilator]: https://en.wiktionary.org/wiki/mutilator
