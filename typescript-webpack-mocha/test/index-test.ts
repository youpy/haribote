import * as assert from 'power-assert';
import { hello } from '../src/';

describe('hello', () => {
  it('returns a string', async () => {
    const result = await hello('world');

    assert(result === 'hello world!');
  });
});
