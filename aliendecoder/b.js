function decodeAlienMessage(array) {
    function processElement(element) {
        if (typeof element === "number") {
            if (element >= 32 && element <= 126) {
              return String.fromCharCode(element);
            } else {
              // Handle out-of-range numbers
              return "[?]";
            }
          } else if (typeof element === "boolean") {
            return element ? "yes" : "no";
          } else if (typeof element === "string") {
            return element;
          } else if (Array.isArray(element)) {
            // Incorrect line was:
            // return element.flatMap(processElement).join("");
            // Corrected line:
            return element.map(processElement).join(""); // Use map instead of flatMap
          } else {
            return ""; // Ignore non-array elements
          }
    }
  
    function flattenArray(arr) {
      const result = [];
      for (let element of arr) {
        if (Array.isArray(element)) {
          result.push(...flattenArray(element));
        } else {
          result.push(element);
        }
      }
      return result;
    }
  
    const flattened = flattenArray(array); // Replace flatMap with custom function
    return flattened.map(processElement).join("");
  }
  



let alienMessage = [
    72, 101, 108, 108, 111, 32,
    [true, 119, 111, 114, 108, 100, 33],
    [91, 65, 108, 105, 101, 110, 115, 32, 97, 114, 101, 32, [114, 101, 97, 108, 93]],
    false 
];

console.log(decodeAlienMessage(alienMessage));
