const str = "113411";

function palindrom(array, low, high) {
  if (array[low] !== array[high]) {
    return false;
  } else if (low >= high) {
    return true;
  }

  return palindrom(array, ++low, --high);
}

console.log(palindrom(str.split(""), 0, str.split("").length - 1));
