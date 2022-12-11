export function findSmallNums(nums) {
  if (!nums) throw new Error('nums is required');

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
  
  const nameFirstCharacter = names.filter((names) => names.charAt(0) === char);
  return nameFirstCharacter;
}

export function findVerbs(words) {
  if (!words) throw new Error('words is required');
  
  let verbs = words.filter((word) => word.startsWith('to '));
  return verbs;
}

export function getIntegers(nums) {
  if (!nums) throw new Error('nums is required');
  
  let numsArray = nums.filter((num) => num % 1 == 0);
  return numsArray;
}

export function getCities(users) {
  if (!users) throw new Error('users is required');
  
  return users.map((user) => user.data.city.displayName);
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error('nums is required');
  
  let squaredNumbers = nums.map((num) => Math.sqrt(num));
  let squaredRoundedNumbers = squaredNumbers.map(
    (num) => Math.round(num * 100) / 100
  );
  return squaredRoundedNumbers;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error('sentences is required');
  if (!str) throw new Error('str is required');
  
  return sentences.filter((sentence) => sentence.toLowerCase().includes(str));
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error('triangles is required');
  
  return triangles.map((triangle) => Math.max(...triangle));
}
