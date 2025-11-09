const str = "When the rain stopped, the city lights looked brighter than ever";
console.log(`Original String = ${str}`);

const subs = "brighter";

const hasCheck = str.includes(subs);

console.log(`String: "${str}" has substring: "${subs}" is = ${hasCheck}`);
