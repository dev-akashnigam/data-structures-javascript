let arr = [40, 30, 50, 60, 20, 10, 70, 90, 80];
console.log(`Original array, arr = ${arr}`);

const maxElement = Math.max(...arr);  // use of spread syntax
const minElement = Math.min(...arr);  // use of spread syntax

console.log(`Max element = ${maxElement}, Min element = ${minElement}`);