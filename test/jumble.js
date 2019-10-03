import test from 'ava';
import jumble from '../src/jumble';

const testFn = (input, output) => {
  const wordRegExp = /\w{4,}/gi;
  const inputWords = input.match(wordRegExp);
  const outputWords = output.match(wordRegExp);

  return (outputWords.length === inputWords.length
    && outputWords.reduce((a, w, i) =>
      (w.length === inputWords[i].length
        && w.slice(0, 1) === inputWords[i].slice(0, 1)
        && w.slice(-1) === inputWords[i].slice(-1)
        && ((new RegExp(`^${w.slice(1, 2)}+$`).test(w.slice(1, -1)))
          || w.slice(1, -1) !== inputWords[i].slice(1, -1))
        && a),
    true)
  );
}

test('check short words/text', t =>
{
  const input = 'How much wood would a wood chuck '
    + 'if a wood chuck could chuck wood.';
  const output = jumble(input, 5);

  t.true(testFn(input, output));
});

test('check long words/text', t =>
{
  const input = 'Far far away, behind the word mountains, far from '
    + 'the countries Vokalia and Consonantia, there live the blind texts. '
    + 'Separated they live in Bookmarksgrove right at the coast of the '
    + 'Semantics, a large language ocean. A small river named Duden flows '
    + 'by their place and supplies it with the necessary regelialia. It is '
    + 'a paradisematic country, in which roasted parts of sentences fly into '
    + 'your mouth. Even the all-powerful Pointing has no control about the '
    + 'blind texts it is an almost unorthographic life One day however a small '
    + 'line of blind text by the name of Lorem Ipsum decided.'

  const output = jumble(input, 10);

  t.true(testFn(input, output));
});
