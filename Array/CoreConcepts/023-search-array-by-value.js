let arr = [10, 50, 30, 20, 40];
console.log(`Original Array, arr = ${arr}`);

const searchElement = 20;

if(arr.includes(searchElement)) {
    console.log(`Element: ${searchElement} is present in the array.`);

    const firstIndex = arr.indexOf(searchElement);
    console.log(`First index of search element: ${searchElement} = ${firstIndex}`);

    const lastIndex = arr.lastIndexOf(searchElement);
    console.log(`Last index of search element: ${searchElement} = ${lastIndex}`);
} else {
    console.log(`Element: ${searchElement} is NOT present in the array.`);
}
