import {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} from '../challenges/exercise007';

describe('sumDigits', () => {
  test('returns the total of the numbers in Number', () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(123123123123)).toBe(24);
    expect(sumDigits(100582)).toBe(16);
  });
});

describe('createRange', () => {
  test('it should create range between two numbers with step', () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    expect(createRange(3, 11)).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 11]);
    expect(createRange(4, 16, 4)).toEqual([4, 8, 12, 16]);
  });
});
