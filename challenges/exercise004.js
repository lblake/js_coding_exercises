export function findSmallNums(nums) {
  if (!nums) throw new Error('nums is required');
  // Your code here
  var obj = {
    key: nums,
  };

  let output = obj['key'].reduce((acc, curr) => {
    if (curr < 1) acc.push(curr);
    return acc;
  }, []);
  return output;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error('names is required');
  if (!char) throw new Error('char is required');
  // Your code here
  const nameFirstCharacter = names.filter((names) => names.charAt(0) === char);
  return nameFirstCharacter;
}

export function findVerbs(words) {
  if (!words) throw new Error('words is required');
  // Your code here
  let verbs = words.filter((word) => word.startsWith('to '));
  return verbs;
}

export function getIntegers(nums) {
  if (!nums) throw new Error('nums is required');
  // Your code here
  let numsArray = nums.filter((num) => num % 1 == 0);
  return numsArray;
}

export function getCities(users) {
  if (!users) throw new Error('users is required');
  // Your code here
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error('nums is required');
  // Your code here
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error('sentences is required');
  if (!str) throw new Error('str is required');
  // Your code here
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error('triangles is required');
  // Your code here
}
