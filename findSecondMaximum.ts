function findSecondMaximum(arr: number[]) {
  const setArr = new Set(arr); // O(1)
  const maxNum = Math.max(...setArr); // O(n)
  setArr.delete(maxNum); // O(1)
  const secondMaxNum = Math.max(...setArr); // O(n)
  return secondMaxNum; // O(1)
}

console.log(findSecondMaximum([9, 2, 3, 6])); // O(n)
