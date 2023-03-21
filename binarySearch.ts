function binarySearch(arr: number[], target: number) {
  let first = 0;
  let midIndex = 0;
  let last = arr.length - 1;
  let found = false;

  while (first <= last && !found) {
    midIndex = Math.floor((first + last) / 2);
    if (arr[midIndex] === target) {
      found = true;
    } else if (arr[midIndex] > target) {
      last = midIndex - 1;
    } else {
      // arr[midIndex] < target
      first = midIndex + 1;
    }
  }

  if (found) return midIndex;
}

function findSum(arr: number[], value: number) {
  arr.sort((a, b) => a - b); // O(nlogn)

  // O(n)
  for (let j = 0; j < arr.length; j++) {
    const restNum = value - arr[j];
    const index = binarySearch(arr, restNum); // O(logn)

    const isNotDuplicatedMidIndex = index !== j;
    /* NOTE
      if findSum([1, 2, 3, 4, 5], 10) is executed
      and isNotDuplicatedMidIndex is removed,
      result of a function outputs [5,5].
      But [5,5] is incorrect because original array dose'nt include two elements of 5.
    */
    if (index !== undefined && isNotDuplicatedMidIndex) {
      return [arr[j], restNum];
    }
  }
  return false;
}

console.log(findSum([1, 2, 3, 4, 5], 10)); // O(nlogn)
