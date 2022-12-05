export function capitalize(word) {
  if (word === undefined) throw new Error('word is required');
  return word[0].toUpperCase() + word.substring(1);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error('firstName is required');
  if (lastName === undefined) throw new Error('lastName is required');

  return `${firstName.substring(0, 1).toUpperCase()}.${lastName
    .substring(0, 1)
    .toUpperCase()}`;
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error('originalPrice is requied');
  if (vatRate === undefined) throw new Error('vatRate is required');

  return vatRate > 0
    ? Math.round(originalPrice * (vatRate / 100 + 1) * 100) / 100
    : originalPrice;
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error('originalPrice is required');
  if (reduction === undefined) throw new Error('reduction is required');

  let salePrice =
    reduction > 0
      ? originalPrice - (reduction / 100) * originalPrice
      : originalPrice;
  return Math.round(salePrice * 100) / 100;
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error('str is required');

  const i = Math.floor(str.length / 2);
  let result = str[i];
  if (str.length % 2 === 0 && i > 0) {
    result = str[i - 1] + result;
  }
  return result;
}

export function reverseWord(word) {
  if (word === undefined) throw new Error('word is required');

  return word.split('').reverse().join('');
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error('words is required');

  let reverseWords = words.map((word) => word.split('').reverse().join(''));
  return reverseWords;
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error('users is required');

  return users.filter((user) => user.type === 'Linux').length;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error('scores is required');

  const arr = scores;
  const average = arr.reduce((a, b) => a + b, 0) / arr.length;
  return Math.round(average * 100) / 100;
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error('n is required');

  for (let i = 1; i <= 15; i++) {
    if (n % 3 === 0 && n % 5 === 0) {
      return 'fizzbuzz';
    } else if (n % 3 === 0) {
      return 'fizz';
    } else if (n % 5 === 0) {
      return 'buzz';
    } else {
      return n;
    }
  }
}
