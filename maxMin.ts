function maxMin(arr: number[]) {
  const maxMinArr: number[] = []; // O(1)
  arr.sort((item1, item2) => item1 - item2); // O(n)
  // O(n)
  arr.forEach((_, index, self) => {
    const indexFromLast = self.length - 1 - index; // O(1)
    if (index >= indexFromLast) return; // O(1)
    maxMinArr.push(self[indexFromLast]); // O(1)
    maxMinArr.push(self[index]); // O(1)
  });

  return maxMinArr; // O(1)
}

console.log(maxMin([10, -1, 20, 4, 5, -9, -6])); // O(n)
