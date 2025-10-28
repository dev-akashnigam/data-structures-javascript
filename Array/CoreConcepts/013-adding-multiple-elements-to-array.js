let arr = [10, 20, 30, 40, 50]
console.log(`Original array, arr = ${arr}`);

arr.splice(0, 0, 3, 6, 9);
console.log(`After inserting elements: 3, 6 and 9 at the beginning of the array, arr = ${arr}`);

arr.splice(arr.length, 0, 300, 600, 900);
console.log(`After inserting elements: 300, 600 and 900 at the end of the array, arr = ${arr}`);

arr.splice(6, 0, 33, 36, 39);
console.log(`After inserting elements: 33, 36 and 39 at the sixth index of the array, arr = ${arr}`);