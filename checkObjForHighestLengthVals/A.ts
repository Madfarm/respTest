type MyObject = {
    [key: string]: any[];
  };

const findValueWithMaxArrayLength = <T extends MyObject>(object: T): any =>
  Object.values(object).find(value => value.length === Math.max(...Object.values(object).map(value => value.length)));

  const object: MyObject = {
    key1: [1, 2, 3],
    key2: [4, 5, 6, 7],
    key3: [8, 9, 10],
  };
  
  const valueWithMaxArrayLength = findValueWithMaxArrayLength(object);
  
  console.log(valueWithMaxArrayLength); // [4, 5, 6, 7]