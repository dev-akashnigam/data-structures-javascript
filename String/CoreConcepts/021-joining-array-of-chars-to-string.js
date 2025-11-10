// In JS, there is no difference between a character and a string.
// Infact, characters are strings of length = 1.
// Therefore, joining a list of strings or list of characters is one and the same thing in JS.

const charArr = ['H', 'E', 'L', 'L', 'O', ' ', 'W', 'O', 'R', 'L', 'D'];
console.log(`Original character array = ${charArr}`);

const joinedStr = charArr.join("");
console.log(`Joined String = ${joinedStr}`);