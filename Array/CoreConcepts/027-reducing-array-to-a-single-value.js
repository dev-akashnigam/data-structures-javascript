let arr = [10, 20, 30, 40, 50];
console.log(`Original array, arr = ${arr}`);

const sumOfAllElements = arr.reduce(function(sum, element, index, arr) {
    return sum + element;
}, 0);

console.log(`Sum of all array elements = ${sumOfAllElements}`);

const productOfAllElements = arr.reduce(function(product, element, index, arr) {
    return product * element;
}, 1);

console.log(`Product of all array elements = ${productOfAllElements}`);

const maxOfAllElements = arr.reduce(function(max, element, index, arr) {
    if(element > max) {
        return element;
    }
    else {
        return max;
    }
}, arr[0]);

console.log(`Max of all array elements = ${maxOfAllElements}`);