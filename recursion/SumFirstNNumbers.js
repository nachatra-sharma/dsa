// Sum of first N natural numbers.

function sumOfFirstNNumbers(i) {
  if (i < 1) return 0;
  return i + sumOfFirstNNumbers(i - 1);
}

console.log(sumOfFirstNNumbers(5));
