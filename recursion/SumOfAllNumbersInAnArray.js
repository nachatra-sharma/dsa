class ArraySum {
  sum(array, i) {
    if (i === array.length) {
      return 0;
    }
    return array[i] + this.sum(array, i + 1);
  }
}

let callSum = new ArraySum();

console.log(callSum.sum([4, 3, 6, 7], 0));
