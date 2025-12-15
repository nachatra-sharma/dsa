// print N to 1 without using i - 1

function BacktrackNToOne(i, n) {
  if (i > n) {
    return;
  }
  BacktrackNToOne(i + 1, n);
  console.log(i);
}

BacktrackNToOne(1, 5);
