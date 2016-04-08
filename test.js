import test from 'ava';
import linkExtractor from './index';

test('linkExtractor function exists', t => {
  t.is(typeof linkExtractor, 'function');
});

test('linkExtractor takes 1 arguments', t => {
  t.is(linkExtractor.length, 1);
});

test('linkExtractor can parse the test file and return 13 links', async t => {
  const results = await linkExtractor('./test-data.csv');
  t.is(results.length, 13);
});
