function findProduct(arr: number[]) {
  let temp = 1;
  const product: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    product[i] = temp;
    temp = temp * arr[i];
  }

  temp = 1;

  for (let i = arr.length - 1; i > -1; i--) {
    product[i] = product[i] * temp;
    temp = temp * arr[i];
  }

  return product;
}

console.log(findProduct([4, 7]));
