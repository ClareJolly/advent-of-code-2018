import part1 from '.';

describe('part1', () => {
  it('returns the correct result for +1, -2, +3, +1', () => {
    const input = ['+1', '-2', '+3', '+1'];
    const result = part1(input);

    expect(result).toEqual(3);
  });

  it('returns the correct result for +1, +1, +1', () => {
    const input = ['+1', '+1', '+1'];
    const result = part1(input);

    expect(result).toEqual(3);
  });

  it('returns the correct result for +1, +1, -2', () => {
    const input = ['+1', '+1', '-2'];
    const result = part1(input);

    expect(result).toEqual(0);
  });

  it('returns the correct result for -1, -2, -3', () => {
    const input = ['-1', '-2', '-3'];
    const result = part1(input);

    expect(result).toEqual(-6);
  });
});
