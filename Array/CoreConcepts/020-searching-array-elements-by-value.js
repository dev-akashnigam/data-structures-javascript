let arr = [10, 20, 30, 40, 50, 10, 20, 30, 40, 50, 10, 20, 30, 40, 50];

const searchElement = 20;

if(arr.includes(searchElement)) {
    console.log(`Element: ${searchElement} is PRESENT in the array.`);

    const firstIndexOfSearchElement = arr.indexOf(searchElement);
    console.log(`First index matching element: ${searchElement} = ${firstIndexOfSearchElement}`);

    const lastIndexOfSearchElement = arr.lastIndexOf(searchElement);
    console.log(`Last index matching element: ${searchElement} = ${lastIndexOfSearchElement}`);
}
else {
    console.log(`Element: ${searchElement} is NOT PRESENT in the array.`);
}