function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (array[mid] === target) {
        return mid;  // Target value found, return its index
      } else if (array[mid] < target) {
        left = mid + 1;  // Target value lies to the right of the mid
      } else {
        right = mid - 1;  // Target value lies to the left of the mid
      }
    }
  
    return -1;  // Target value not found in the array
}

const sortedArray = [1, 3, 5, 6, 7, 9, 11, 13, 15, 17, 19];
console.log(binarySearch(sortedArray, 7));   // Should print: 3 (because 7 is at index 3)
console.log(binarySearch(sortedArray, 20));  // Should print: -1 (because 20 is not in the array)