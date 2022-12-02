const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} = require('../challenges/exercise006');

describe('sumMultiples', () => {
  test('It throws an error when nothing is passed to function', () => {
    expect(() => {
      sumMultiples();
    }).toThrow('arr is required');

    expect(() => {
      sumMultiples('array');
    }).toThrow('parameter must be an array');
  });
  test('returns the sum of numbers which are multiple of 3 and 5', () => {
    const result = sumMultiples([1, 3, 5]);
    const expected = 8;
    expect(result).toBe(expected);
  });
  test('should work with decimal numbers', () => {
    const result = sumMultiples([1.0, 3.0, 5.0]);
    const expected = 8;
    expect(result).toBe(expected);
  });
  test('should returns o if there is no multiples of 3 or 5', () => {
    const result = sumMultiples([1, 7, 2, 4]);
    const expected = 0;
    expect(result).toBe(expected);
  });
});

describe('isItPrime', () => {
  test('it should return true if number is prime integer', () => {
    expect(isItPrime(4)).toBe(false);
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(19)).toBe(true);
    expect(isItPrime(19.01)).toBe(false);
    expect(isItPrime(41)).toBe(true);
    expect(isItPrime(0)).toBe(false);
    expect(isItPrime(42)).toBe(false);
  });
});
