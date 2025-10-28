let arr = [10, 20, 30, 40, 50];
console.log(`Original array, arr = ${arr}`);

arr.splice(0, 1);
console.log(`After removing one element from the beginning of the array, arr = ${arr}`);

arr.splice(arr.length-1, 1);
console.log(`After removing one element from the end of the array, arr = ${arr}`);

arr.splice(1, 1);
console.log(`After removing one element from the first index of array, arr = ${arr}`);

