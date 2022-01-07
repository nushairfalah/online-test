function sortNumber(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        let a = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = a;
      }
    }
  }
  // console.log(arr);

  return arr;
}

console.log(sortNumber([2, 5, 3, 1, 100, 5, 6, 9, 8, 50]));
