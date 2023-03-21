function findFirstUnique(arr: number[]) {
  const setArray = new Set(arr); // O(1)
  const arrayWithoutDuplication = Array.from(setArray); // O(n)
  return arrayWithoutDuplication[0]; // O(1)
}
const arr = [9, 2, 3, 2, 6, 6];
console.log(findFirstUnique(arr)); // O(n)
