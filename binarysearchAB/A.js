function binarySearchIterative(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      // Calculate the middle index (avoiding overflow for large arrays)
      const mid = Math.floor(left + (right - left) / 2); 
  
      if (arr[mid] === target) {
        return mid; // Target found!
      } else if (arr[mid] < target) {
        left = mid + 1; // Search the right half
      } else {
        right = mid - 1; // Search the left half
      }
    }
  
    return -1; // Target not found
}

function binarySearchRecursive(arr, target, left, right) {
    if (left > right) {
      return -1; // Target not found
    }
  
    // Calculate the middle index
    const mid = Math.floor(left + (right - left) / 2); 
  
    if (arr[mid] === target) {
      return mid; // Target found!
    } else if (arr[mid] < target) {
      return binarySearchRecursive(arr, target, mid + 1, right); // Search the right half
    } else {
      return binarySearchRecursive(arr, target, left, mid - 1); // Search the left half
    }
}

const sortedArray = [2, 4, 7, 10, 15, 20];
const targetToFind = 10;

const iterativeResult = binarySearchIterative(sortedArray, targetToFind);
const recursiveResult = binarySearchRecursive(sortedArray, targetToFind, 0, sortedArray.length - 1);

console.log("Iterative result:", iterativeResult);  // Output: 3
console.log("Recursive result:", recursiveResult); // Output: 3