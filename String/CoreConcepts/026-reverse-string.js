let str = "Please review documents";
console.log(`Original String = ${str}`);

let reversedString = str.split("").reverse().join("");
// the above concept won't work with Java, since Java does not have any built-in method to reverse an array like JS.
console.log(`Reversed String = ${reversedString}`);