import test from 'ava';
import linkExtractor from './index';

test('linkExtractor function exists', t => {
  t.is(typeof linkExtractor, 'function');
});

test('linkExtractor takes 1 arguments', t => {
  t.is(linkExtractor.length, 1);
});
