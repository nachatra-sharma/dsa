let array = [-1, 0, 3, 5, 9, 12];
let target = 9;
let left = 0;
let right = array.length - 1;

function binarySearch() {
  while (right >= left) {
    let midElem = Math.floor((left + right) / 2);
    if (target === array[midElem]) {
      return midElem;
    } else if (target > array[midElem]) {
      left = midElem + 1;
    } else if (target < array[midElem]) {
      right = midElem - 1;
    }
  }
  return -1;
}

console.log(binarySearch());
