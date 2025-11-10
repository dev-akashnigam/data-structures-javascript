// In JS, there is no difference between a character and a string.
// Infact, characters are strings of length = 1.
// Therefore, splitting a string into array of strings or array of characters is one and the same thing in JS.

const str = "The sun is bright";
console.log(`Original String = ${str}`);

const charOrStringArray = str.split("");
console.log(`Char or String Array = ${charOrStringArray}`);