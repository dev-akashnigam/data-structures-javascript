let arr = [10, 20, 30, 40, 50];
console.log(`Original array, arr = ${arr}`);

arr.splice(0, 2);
console.log(`After removing 2 elements from the beginning of the array, arr = ${arr}`);

arr.splice(-2, 2);
console.log(`After removing 2 elements from the end of the array, arr = ${arr}`);

arr.splice(0, 1);
console.log(`After removing 1 element from the only index(0) of the array, arr = ${arr}`);
