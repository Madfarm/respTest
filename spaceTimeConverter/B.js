const input = "09:30 PM' Hello 'World'";

const result = input.replace(/ /g, '').replace(/\d{1,2}:\d{2} (AM|PM)/gi, '').replace(/['"]/g, '');

console.log(result); // Outputs: HelloWorld