const str = "They laughed and laughed until they cried";
console.log(`Original String = ${str}`);

const subs = "laughed";

const hasCheck = str.includes(subs);
console.log(`String: "${str}" has substring: "${subs}" is = ${hasCheck}`);

if(hasCheck) {
    const firstIndex = str.indexOf(subs);
    const lastIndex = str.lastIndexOf(subs);

    console.log(`First index of substring: "${subs}" = ${firstIndex}`);
    console.log(`Last index of substring: "${subs}" = ${lastIndex}`);
}