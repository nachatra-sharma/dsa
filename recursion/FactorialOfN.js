function factorialOfN(i, fact) {
  if (i < 1) {
    console.log(fact);
    return;
  }
  fact *= i;
  factorialOfN(i - 1, fact);
}

factorialOfN(5, 1);
