function rightRotate(arr: number[], first: number) {
  const targeIndex = arr.findIndex((num) => num === first); // O(n)
  const leftArrFromIndex = arr.slice(0, targeIndex); // O(n)
  const rightArrFromIndex = arr.slice(targeIndex, arr.length); // O(n)
  const rotatedArr = rightArrFromIndex.concat(leftArrFromIndex); // should be O(n)
  return rotatedArr; // O(1);
}

rightRotate([1, 2, 3, 4, 5], 3); // O(n)
