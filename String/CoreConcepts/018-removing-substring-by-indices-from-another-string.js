const str = "We can watch a movie, or we can go out for dinner";
console.log(`Original String = ${str}`)

const removeFromIndex = 12;
const removeToIndex = 21;

const strOnRemoval = str.substring(0, removeFromIndex) + str.substring(removeToIndex, str.length);
console.log(`On removing substring from index: ${removeFromIndex} to index: ${removeToIndex}, string = ${strOnRemoval}`);