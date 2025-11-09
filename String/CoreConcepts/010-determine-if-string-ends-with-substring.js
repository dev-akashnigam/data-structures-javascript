const str = "A cup of coffee can turn an ordinary morning into something special";
console.log(`Original String = ${str}`);

const subs = "special";

const checkEnd = str.endsWith(subs);

console.log(`String: "${str}" ends with substring: "${subs}" is = ${checkEnd}`);