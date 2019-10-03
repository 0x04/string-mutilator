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
</dl>

## Functions

<dl>
<dt><a href="#flipBits">flipBits(string)</a> ⇒ <code>string</code></dt>
<dd><p>Flip the character bits of a string. The 16 character bits of &#39;A&#39; are
<code>00000000 01000001</code> - if we flip the bits (so every 0 becomes 1 and vice
versa) they look like this <code>11111111 10111110</code>. This means that &#39;A&#39; (0x41)
becomes &#39;ﾾ&#39; (0xFFBE).</p>
</dd>
<dt><a href="#jumble">jumble(string, [runs])</a> ⇒ <code>string</code></dt>
<dd><p>Jumble the letters of all words in a string,
except the first and last one, to keep it readable.</p>
</dd>
<dt><a href="#reverseBits">reverseBits(string)</a> ⇒ <code>string</code></dt>
<dd><p>Reverse the character bits of a string. The 16 character bits of &#39;A&#39; are
<code>00000000 01000001</code> - if we reverse the bits they look like this
<code>10000010 00000000</code>. This means that &#39;A&#39; (0x41) becomes &#39;舀&#39; (0x8200).</p>
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
<dd><p>Rotate the character bits of a string. The 16 character bits of &#39;A&#39; are
<code>00000000 01000001</code> - if we shift the bits by -4 <code>n</code> digits they look like
this <code>00010000 00000100</code>. This means that &#39;A&#39; (0x41) becomes &#39;င&#39; (0x1004).</p>
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

<a name="module_stringMutilator/charCase.invert"></a>

### stringMutilator/charCase.invert ⇒ <code>string</code>
Invert the case of letters in a string.

**Kind**: static constant of [<code>stringMutilator/charCase</code>](#module_stringMutilator/charCase)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | The string to be case inverted. |
| [every] | <code>number</code> | <code>0</code> | Only invert every `n` letter. |

**Example**  
```js
stringMutilator.charCase.invert('Hello World!');// > 'hELLO wORLD!'
```
<a name="module_stringMutilator/compressor"></a>

## stringMutilator/compressor
Functions for compressing (pack/unpack etc.) strings.


* [stringMutilator/compressor](#module_stringMutilator/compressor)
    * [.pack](#module_stringMutilator/compressor.pack) ⇒ <code>string</code>
    * [.unpack](#module_stringMutilator/compressor.unpack) ⇒ <code>string</code>
    * [.signature](#module_stringMutilator/compressor.signature) ⇒ <code>string</code>

<a name="module_stringMutilator/compressor.pack"></a>

### stringMutilator/compressor.pack ⇒ <code>string</code>
Pack all characters of a 8-bit string.

**Kind**: static constant of [<code>stringMutilator/compressor</code>](#module_stringMutilator/compressor)  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | A 8-bit string to pack. |

**Example**  
```js
stringMutilator.compressor.pack('Hello World!');// > '䡥汬漠坯牬搡'
```
<a name="module_stringMutilator/compressor.unpack"></a>

### stringMutilator/compressor.unpack ⇒ <code>string</code>
Unpack a packed string.

**Kind**: static constant of [<code>stringMutilator/compressor</code>](#module_stringMutilator/compressor)  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The packed string to unpack. |

**Example**  
```js
stringMutilator.compressor.unpack('䡥汬漠坯牬搡');// > 'Hello World!'
```
<a name="module_stringMutilator/compressor.signature"></a>

### stringMutilator/compressor.signature ⇒ <code>string</code>
Return the given, packed string with the unpack signature.

**Kind**: static constant of [<code>stringMutilator/compressor</code>](#module_stringMutilator/compressor)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | The packed string to signature. |
| [withEval] | <code>boolean</code> | <code>false</code> | Determine if the result includes                  a `eval` command for executing code. |

**Example**  
```js
stringMutilator.compressor.signature('䡥汬漠坯牬搡');// > 'unescape(escape("䡥汬漠坯牬搡").replace(/u(..)/g, "$1%");'
```
<a name="module_stringMutilator"></a>

## stringMutilator
Functions for mutilating strings.

<a name="flipBits"></a>

## flipBits(string) ⇒ <code>string</code>
Flip the character bits of a string. The 16 character bits of 'A' are`00000000 01000001` - if we flip the bits (so every 0 becomes 1 and viceversa) they look like this `11111111 10111110`. This means that 'A' (0x41)becomes 'ﾾ' (0xFFBE).

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string. |

**Example**  
```js
stringMutilator.flipBits('Hello World!');// > 'ﾷﾚﾓﾓﾐ￟ﾨﾐﾍﾓﾛ￞'
```
<a name="jumble"></a>

## jumble(string, [runs]) ⇒ <code>string</code>
Jumble the letters of all words in a string,except the first and last one, to keep it readable.

**Kind**: global function  
**See**: https://www.mnn.com/lifestyle/arts-culture/stories/why-your-brain-can-read-jumbled-letters  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | The input string. |
| [runs] | <code>number</code> | <code>3</code> | The number of attempts to get a real randomized                        word string. |

**Example**  
```js
stringMutilator.jumble('Hello World!');// > 'Hlelo Wrlod!'
```
<a name="reverseBits"></a>

## reverseBits(string) ⇒ <code>string</code>
Reverse the character bits of a string. The 16 character bits of 'A' are`00000000 01000001` - if we reverse the bits they look like this`10000010 00000000`. This means that 'A' (0x41) becomes '舀' (0x8200).

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string. |

**Example**  
```js
stringMutilator.reverseBits('Hello World!');// > 'ሀꘀ㘀㘀Ѐ一㘀☀萀'
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
stringMutilator.reverse('Hello World!');// > '!dlroW olleH'
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
stringMutilator.rockdotize('Hello World!');// > 'Ḧël̈l̈ö Ẅör̈l̈d̈!'
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
stringMutilator.rot13('Hello World!');// > 'Uryyb Jbeyq!'
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
stringMutilator.scramble('Hello World!');// > 'WorH!llo led'
```
<a name="shiftBits"></a>

## shiftBits(string, [n]) ⇒ <code>string</code>
Rotate the character bits of a string. The 16 character bits of 'A' are`00000000 01000001` - if we shift the bits by -4 `n` digits they look likethis `00010000 00000100`. This means that 'A' (0x41) becomes 'င' (0x1004).

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
stringMutilator.shift('Hello World!', 3);// > 'lo World!Hel'
```
<a name="toMANS"></a>

## toMANS(string, [type]) ⇒ <code>string</code>
Convert A-Z to **M**athematical **A**lpha**n**umeric **S**ymbols.List of `type` values:| `type` | Unicode name || --- | --- || 0 | Mathematical Bold * || 1 | Mathematical Italic * || 2 | Mathematical Bold Italic * || 3 | Mathematical Script Capital * || 4 | Mathematical Bold Script * || 5 | Mathematical Fraktur * || 6 | Mathematical Double-Struck * || 7 | Mathematical Bold Fraktur * || 8 | Mathematical Sans-Serif * || 9 | Mathematical Sans-Serif Bold * || 10 | Mathematical Sans-Serif Italic * || 11 | Mathematical Sans-Serif Bold Italic * || 12 | Mathematical Monospace * |

**Kind**: global function  
**See**: https://unicode-table.com/en/blocks/mathematical-alphanumeric-symbols  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | The input string. |
| [type] | <code>number</code> | <code>0</code> | A number between 0 and 12. |

**Example**  
```js
stringMutilator.toMANS('Hello World!', 1);// > '𝐻𝑒𝑙𝑙𝑜 𝑊𝑜𝑟𝑙𝑑.'
```


## Involutory functions

> An [involutory function][involution], is a function f that is its own inverse.

### List of involutory functions

**Example**

```js
import { rot13 } from 'string-mutilator';

rot13(rot13('Hello World!')) === 'Hello World!';
// > true
```

* [`charCase.invert`](#module_stringMutilator/charCase.invert)
* [`flipBits`](#flipBits)
* [`reverse`](#reverse)
* [`reverseBits`](#reverseBits)
* [`rot13`](#rot13)

### List of involutory functions with negated arguments

**Example**

```
import { shift } from 'string-mutilator';

shift(shift('Hello World!', 5), -5) === 'Hello World!';
// > true
```

* [`shift`](#shift)
* [`shiftBits`](#shiftBits)


## Using the CLI

### Install

**To use it in your project**

```bash
npm install --save string-mutilator
```

**To us it globally**

```bash
npm install --global string-mutilator
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
```



## License

&copy; 2019 by [Oliver Kühn][0x04]. Released under the [MIT license][license].


<!-- Badges -->
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge
[license]: ./license


<!-- Links -->
[0x04]: mailto:ok@0x04.de


<!-- Appendix -->
[involution]: https://en.wikipedia.org/wiki/Involution_(mathematics)
[mutilator]: https://en.wiktionary.org/wiki/mutilator