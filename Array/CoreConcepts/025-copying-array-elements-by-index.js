let arr = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(`Original Array, arr = ${arr}`);

let arrCopyFromBeginningTo5thIndex = arr.slice(0, 6);
console.log(`Copied array from beginning to 5th index, arrCopyFromBeginningTo5thIndex = ${arrCopyFromBeginningTo5thIndex}`);

let arrCopyFrom5thIndexToEnd = arr.slice(5, arr.length);
console.log(`Copied array from 5th index to end, arrCopyFrom5thIndexToEnd = ${arrCopyFrom5thIndexToEnd}`);

let arrCopyFrom3rdIndexTo8thIndex = arr.slice(3, 9);
console.log(`Copied array from 3rd index to 8th index, arrCopyFrom3rdIndexTo8thIndex = ${arrCopyFrom3rdIndexTo8thIndex}`);

let fullCopyArr = arr.slice(0, arr.length);
console.log(`Full Copy of Array, fullCopyArr = ${fullCopyArr}`);
