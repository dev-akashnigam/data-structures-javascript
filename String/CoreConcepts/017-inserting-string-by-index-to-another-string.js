// There is no built-in method in JS that can insert by index.

let str = "Although it was raining, they continued the game";
console.log(`Original string = ${str}`);

let insertionText = "paining and ";
let insertionIndex = 16;

let finalTextOnInsertion = str.substring(0, 16) + insertionText + str.substring(16, str.length);
console.log(`After insertion string: "${insertionText}" at index: ${insertionIndex}, string = "${finalTextOnInsertion}"`);
