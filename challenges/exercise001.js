// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error('word is required');
  // Add your code here!
  return word[0].toUpperCase() + word.substring(1);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error('firstName is required');
  if (lastName === undefined) throw new Error('lastName is required');
  // Add your code here!
  return firstName[0] + '.' + lastName[0];
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error('originalPrice is requied');
  if (vatRate === undefined) throw new Error('vatRate is required');
  // Add your code here!
  return originalPrice + vatRate;
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error('originalPrice is required');
  if (reduction === undefined) throw new Error('reduction is required');
  // Add your code here!
  return originalPrice - reduction;
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error('str is required');
  // Add your code here!
  const i = Math.floor(str.length / 2);
  let result = str[i];
  if (str.length % 2 === 0 && i > 0) {
    result = str[i - 1] + result;
  }
  return result;
}

export function reverseWord(word) {
  if (word === undefined) throw new Error('word is required');
  // Add your code here!
  return word.split('').reverse().join('');
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error('words is required');
  // Add your code here!
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error('users is required');
  // Add your code here!
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error('scores is required');
  // Add your code here!
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error('n is required');
  // Add your code here!
}
