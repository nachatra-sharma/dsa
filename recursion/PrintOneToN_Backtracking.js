// print 1 to N without using i + 1;
function BacktrackCode(i) {
  // we can use i - 1 as i am passing value of n as i
  if (i < 1) {
    return;
  }
  BacktrackCode(i - 1);
  console.log(i);
}

BacktrackCode(5);
