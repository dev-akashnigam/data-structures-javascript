let arr = [10, 20, 30, 40, 50];
console.log(`Original array, arr = ${arr}`);

let searchResult = arr.some(function(element, index, arr) {
    return element%4==0;
});

if(searchResult) {
    console.log(`There exists atleast one element in the array which is divisible by 4`);

    const first_index = arr.findIndex(function(element, index, arr) {
        return element%4==0;;
    });
    console.log(`First index in array satisfying the condition, element divisibility by 4 = ${first_index}`);

    const last_index = arr.findLastIndex(function(element, index, arr) {
        return element%4==0;;
    });
    console.log(`Last index in array satisfying the condition, element divisibility by 4 = ${last_index}`);
} else {
    console.log(`There DOES NOT exist any element in the array which is divisible by 4`);
}