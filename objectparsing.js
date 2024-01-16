function findKeyWithMaxArrayLength(object) {
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
  const object = {
    key1: [1, 2, 3],
    key2: [4, 5, 6, 7],
    key3: [8, 9, 10],
    key4: [11, 12, 13, 14,15],
  };
  
  const keyWithMaxArrayLength = findKeyWithMaxArrayLength(object);
  
  console.log(keyWithMaxArrayLength); // key2