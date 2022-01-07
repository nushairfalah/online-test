function isPrime(num) {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      // console.log('composite');
      return "Composite";
    } else {
      // console.log('prime');
      return "Prime";
    }
  return num > 1;
}

console.log(isPrime(3));
