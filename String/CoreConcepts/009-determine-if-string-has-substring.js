const str = "Hey boys, I am singing a song. Soup song. Flop song. Why this kolaveri kolaveri kolaveri d";
console.log(`Original String = ${str}`);

const subs = "Flop";

const hasCheck = str.includes(subs);

console.log(`String: "${str}" has substring: "${subs}" is = ${hasCheck}`);
