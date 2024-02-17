type MyObjectB = {
    [key: string]: any[];
  };

  const findValueWithMaxArrayLengthB = <T extends MyObjectB>(object: T): any[] | undefined =>
  Object.values(object).find(value => value.length === Math.max(...Object.values(object).map(value => value.length)));

  const objectB: MyObjectB = {
    key1: [1, 2, 3],
    key2: [4, 5, 6, 7],
    key3: [8, 9, 10],
  };
  
  const valueWithMaxArrayLengthB = findValueWithMaxArrayLengthB(objectB);
  
  console.log(valueWithMaxArrayLengthB); // [4, 5, 6, 7]