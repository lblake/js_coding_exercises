export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error('ingredients is required');
  // Your code here!
  return sandwich.fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error('person is required');
  // Your code here!
  let location = person.city === 'Manchester' ? true : false;
  return location;
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error('people is required');
  // Your code here!
  return Math.ceil(people / 40);
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error('arr is required');
  // Your code here!
  let sheepCount = arr.filter((animal) => animal === 'sheep');
  return sheepCount.length;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error('person is required');
  // Your code here!
}
