let arr = [10, 20, 30, 40, 50];
console.log(`Original array, arr = ${arr}`);

arr.splice(0, 0, 5);
console.log(`After inserting element: 5 at the beginning of the array, arr = ${arr}`);

arr.splice(arr.length, 0, 100);
console.log(`After inserting element: 100 at the end of the array, arr = ${arr}`);

arr.splice(4, 0, 35);
console.log(`After inserting element: 35 at forth index of the array, arr = ${arr}`);

