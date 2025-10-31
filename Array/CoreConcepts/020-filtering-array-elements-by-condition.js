let arr = [10, 20, 30, 40, 50];
console.log(`Original array, arr = ${arr}`);

let filteredArr = arr.filter(function(element, index, arr) {
    return 100%element==0;
});

console.log(`After filtering those elements of arr that are divisors of 100, new filtered array, filteredArr  = ${filteredArr}`);
