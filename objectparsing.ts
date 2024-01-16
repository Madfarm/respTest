type MyObject = {
  [key: string]: any[];
};

function findValueWithMaxArrayLength<T extends MyObject>(object: T) {
  // Get an array of all the object's values.
  const values = Object.values(object);

  // Iterate over the array of values and get the length of each value.
  const valueLengths = values.map(value => value.length);

  // Find the maximum length of all the values.
  const maxArrayLength = Math.max(...valueLengths);

  // Return the value whose length is equal to the maximum length.
  return values.find(value => value.length === maxArrayLength);
}

// Example usage:
const object: MyObject = {
  key1: [1, 2, 3],
  key2: [4, 5, 6, 7],
  key3: [8, 9, 10],
};

const valueWithMaxArrayLength = findValueWithMaxArrayLength(object);

console.log(valueWithMaxArrayLength); // [4, 5, 6, 7]