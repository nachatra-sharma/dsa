const array = [3, -1, 9, 0, 12, 43];
const target = 0;

function linearSearch(array, target) {
  let index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      index = i;
      return index;
    }
  }
  return index;
}

console.log(linearSearch(array, target));
