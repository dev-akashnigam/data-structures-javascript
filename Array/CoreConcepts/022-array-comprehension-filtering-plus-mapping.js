// Array Comprehension = Filtering array elements by condition and then transforming/mapping every filtered element.

let arr = [10, 20, 30, 40, 50];
console.log(`Original Array, arr = ${arr}`);

arr = arr.filter(function(element, index, arr) {
    return 100%element==0;
}).map(function(element, index, arr) {
    return element*element;
});
console.log(`Comprehensed Array, arr = ${arr}`);

