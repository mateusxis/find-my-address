import hashifyKey from './hashifyKey';

describe('hashifyKey()', () => {
  it('should hashify Key', () => {
    const hash = hashifyKey('20755-010_1');
    const expected = -6409811571;

    expect(hash).toEqual(expected);
  });
});
