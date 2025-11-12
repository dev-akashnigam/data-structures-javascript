const str1 = "Life moves fast";
console.log(`First String = ${str1}`);

const str2 = "LIFE MOVES FAST";
console.log(`Second String = ${str2}`);

const areTextSame = str1.toLowerCase() === str2.toLowerCase();

if(areTextSame) {
    console.log(`Both the strings have same text.`);
} else {
    console.log(`Both the strings have different text.`);
}