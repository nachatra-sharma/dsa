// print name n times

function printName(i, n) {
  if (i > n) return;
  console.log("Name");
  printName(i + 1, n);
}

printName(1, 5);
