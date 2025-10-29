let arr = [10, 20, 30, 40, 50];
console.log(`Original Array, arr = ${arr}`);

arr[0] = 100;
console.log(`Array after updating the first array element with value: 100, arr = ${arr}`);

arr[arr.length-1] = 500;
console.log(`Array after updating the last array element with value: 500, arr = ${arr}`);

arr[2] = 300;
console.log(`Array after updating the array element at index: 2 with value: 300, arr = ${arr}`);
