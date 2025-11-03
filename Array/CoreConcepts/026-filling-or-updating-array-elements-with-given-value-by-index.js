let arr = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(`Original Array, arr = ${arr}`);

let valueToUpdate = 0;

arr.fill(valueToUpdate, 0, 6);
console.log(`After filling or updating all array elements from beginning to the 5th index by value: ${valueToUpdate} , arr = ${arr}`);

valueToUpdate = 1;

arr.fill(valueToUpdate, 6, arr.length);
console.log(`After filling or updating all array elements from 6th index to the end by value: ${valueToUpdate} , arr = ${arr}`);

valueToUpdate = 2;

arr.fill(valueToUpdate, 3, 9);
console.log(`After filling or updating all array elements from 3rd index to the 8th index by value: ${valueToUpdate} , arr = ${arr}`);

valueToUpdate = 3;

arr.fill(valueToUpdate, 0, arr.length);
console.log(`After filling or updating all array elements from the beginning to end by value: ${valueToUpdate} , arr = ${arr}`);