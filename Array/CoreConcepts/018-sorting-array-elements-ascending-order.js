let arr = [30, 50, 40, 10, 20];
console.log(`Original array, arr = ${arr}`);

arr.sort(function(element1, element2) {
    return element1 - element2;
});
console.log(`Sorted array in Ascending Order, arr = ${arr}`);

