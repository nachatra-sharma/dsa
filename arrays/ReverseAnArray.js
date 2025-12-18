let array = [1, 2, 3, 4, 5, 6];
let low = 0;
let high = array.length - 1;

while (low !== high && low < high) {
  let x = array[low];
  array[low] = array[high];
  array[high] = x;
  low++;
  high--;
}

console.log(array);
