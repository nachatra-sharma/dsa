// Print 1 - N
function printN(i, n) {
  if (i > n) {
    return;
  }
  console.log(i);
  printN(i + 1, n);
}

printN(1, 10);
