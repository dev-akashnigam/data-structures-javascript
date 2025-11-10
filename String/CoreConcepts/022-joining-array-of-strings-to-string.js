// In JS, there is no difference between a character and a string.
// Infact, characters are strings of length = 1.
// Therefore, joining a list of strings or list of characters is one and the same thing in JS.

const stringArr = ["You", "look", "nice"];
console.log(`Original string array = ${stringArr}`);

const joinedStr = stringArr.join(" ");
console.log(`Joined String = ${joinedStr}`);