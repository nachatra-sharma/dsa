let arr = [15, 1, 6, 3, -1, 2, 10];

function swap(arr, min_index, i) {
  let temp = arr[min_index];
  arr[min_index] = arr[i];
  arr[i] = temp;
}

function getMinIndex(arr, i) {
  let min_index = i;
  for (let j = i + 1; j <= arr.length - 1; j++) {
    if (arr[j] < arr[min_index]) {
      min_index = j;
    }
  }
  return min_index;
}

function selectionSort(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    let min_index = getMinIndex(arr, i);
    if (min_index !== i) {
      swap(arr, min_index, i);
    }
  }
  return arr;
}

console.log(selectionSort(arr));
