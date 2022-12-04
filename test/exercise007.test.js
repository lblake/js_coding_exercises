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

describe('getScreentimeAlertList', () => {
  const users = [
    {
      username: 'beth_1234',
      name: 'Beth Smith',
      screenTime: [
        {
          date: '2019-05-01',
          usage: { twitter: 30, instagram: 30, facebook: 40 },
        },
        {
          date: '2019-05-02',
          usage: { twitter: 56, instagram: 40, facebook: 31 },
        },
        {
          date: '2019-05-03',
          usage: { twitter: 12, instagram: 15, facebook: 19 },
        },
        {
          date: '2019-05-04',
          usage: { twitter: 10, instagram: 56, facebook: 61 },
        },
      ],
    },
    {
      username: 'sam_j_1989',
      name: 'Sam Jones',
      screenTime: [
        {
          date: '2019-06-11',
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
        },
        {
          date: '2019-06-13',
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
        },
        {
          date: '2019-06-14',
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
        },
      ],
    },
    {
      username: 'jim_j_1989',
      name: 'jim Jones',
      screenTime: [
        {
          date: '2019-05-01',
          usage: { mapMyRun: 50, whatsApp: 0, facebook: 0, safari: 50 },
        },
        {
          date: '2019-05-02',
          usage: { mapMyRun: 0, whatsApp: 20, facebook: 40, safari: 50 },
        },
        {
          date: '2019-05-14',
          usage: { mapMyRun: 12, whatsApp: 20, facebook: 0, safari: 31 },
        },
      ],
    },
    {
      username: 'sally_j_1989',
      name: 'Sally Jones',
      screenTime: [
        {
          date: '2019-06-11',
          usage: { mapMyRun: 12, whatsApp: 0, facebook: 100, safari: 10 },
        },
        {
          date: '2019-06-13',
          usage: { mapMyRun: 0, whatsApp: 34, facebook: 0, safari: 16 },
        },
        {
          date: '2019-05-14',
          usage: { mapMyRun: 0, whatsApp: 40, facebook: 0, safari: 31 },
        },
      ],
    },
  ];
  test('basic test, single and multiple users with uage > 100', () => {
    expect(getScreentimeAlertList(users, '2019-06-11')).toEqual([
      'sally_j_1989',
    ]);
    expect(getScreentimeAlertList(users, '2019-05-02')).toEqual([
      'beth_1234',
      'jim_j_1989',
    ]);
  });
  test('usage time is 100 minutes, should not be included', () => {
    expect(getScreentimeAlertList(users, '2019-05-01')).toEqual([]);
  });
  test('date with no usage above 100', () => {
    expect(getScreentimeAlertList(users, '2019-06-14')).toEqual([]);
  });
});
