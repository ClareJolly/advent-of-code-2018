import part1 from '.';

describe('part1', () => {
  const testData = [
    'abcdef',
    'bababc',
    'abbcde',
    'abcccd',
    'aabcdd',
    'abcdee',
    'ababab',
  ];

  it('returns the expected value', () => {
    const result = part1(testData);

    expect(result).toEqual(12);
  });
});
