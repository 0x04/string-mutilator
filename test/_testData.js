export const string8bit = Array(255)
  .fill(0)
  .map((_, i) => String.fromCharCode(i))
  .join('');

export const string16bit = Array(255)
  .fill(0)
  .map((_, i) => String.fromCharCode(256 + i))
  .join('');

export const stringLower = 'hello world!';

export const stringUpper = 'HELLO WORLD!';

export const stringShort = 'How much wood would a wood chuck '
  + 'if a wood chuck could chuck wood.';

export const stringLong = 'Far far away, behind the word mountains, far '
  + 'from the countries Vokalia and Consonantia, there live the blind texts. '
  + 'Separated they live in Bookmarksgrove right at the coast of the '
  + 'Semantics, a large language ocean. A small river named Duden flows '
  + 'by their place and supplies it with the necessary regelialia. It is '
  + 'a paradisematic country, in which roasted parts of sentences fly into '
  + 'your mouth. Even the all-powerful Pointing has no control about the '
  + 'blind texts it is an almost unorthographic life One day however a small '
  + 'line of blind text by the name of Lorem Ipsum decided.';
