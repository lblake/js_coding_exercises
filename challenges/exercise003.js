export function getSquares(nums) {
  if (nums === undefined) throw new Error('nums is required');

  return nums.map((number) => number * number);
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error('words is required');

  let camelCase = '';
  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      camelCase += words[i];
    } else {
      let upperCase = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
      camelCase += upperCase;
    }
  }
  return camelCase;
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error('people is required');

  let arraySubjects = people.map((person) => person.subjects);
  return arraySubjects.flat().length;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error('menu is required');
  if (!ingredient) throw new Error('ingredient is required');

  for (let menuItem of menu) {
    if (menuItem.ingredients.includes(ingredient)) {
      return true;
    }
  }
  return false;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error('arr1 is required');
  if (arr2 === undefined) throw new Error('arr2 is required');

  const sameNumbers = arr1.filter((num) => arr2.includes(num));
  return [...new Set(sameNumbers)].sort((a, b) => a - b);
}
