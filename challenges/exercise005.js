export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error('nums is required');
  if (n === undefined) throw new Error('n is required');
  // Your code here!
  const indexNumber = nums.indexOf(n);
  if (indexNumber + 1 == nums.length || indexNumber == -1) {
    return null;
  }
  return nums[indexNumber + 1];
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error('str is required');
  // Your code here!
  let countForOne = 0;
  let countForZero = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 0) {
      countForZero++;
    }
    if (str[i] == 1) {
      countForOne++;
    }
  }
  return {
    1: countForOne,
    0: countForZero,
  };
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error('n is required');
  // Your code here!
  const r = n.toString().split('').reverse().join('');
  return Math.sign(n) * parseInt(r);
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error('arrs is required');
  // Your code here!
  const initialValue = 0;
  const sumWithInitial = arrs
    .flat()
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
  return sumWithInitial;
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error('arr is required');
  // Your code here!
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error('haystack is required');
  if (searchTerm === undefined) throw new Error('searchTerm is required');
  // Your code here!
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error('str is required');
  // Your code here!
};
