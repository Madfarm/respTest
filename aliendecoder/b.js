let alienMessage = [
    72, 101, 108, 108, 111, 32,
    [true, 119, false, 111, 114, 108, 100, 33],
    [91, 65, 108, 105, 101, 110, 115, 32, 97, 114, 101, 32, [114, 101, 97, 108]],
    false 
];

let decodedChars = alienMessage.map(element => {    if (typeof element === 'number') {        return String.fromCharCode(element);    } else {        return element;    }});

decodedChars = decodedChars.map(element => {    if (typeof element === 'boolean') {        return element ? 'yes' : 'no';     } else {        return element;    }});

decodedChars = decodedChars.flat(Infinity); 

let finalMessage = decodedChars.join('');

console.log(finalMessage);
