let arr = [10, 20, 30, 40, 50];
console.log(`Original Array, arr = ${arr}`);

arr = arr.map(function(element, index, arr) {
    return element*element;
});
console.log(`After mapping/transforming, arr = ${arr}`);