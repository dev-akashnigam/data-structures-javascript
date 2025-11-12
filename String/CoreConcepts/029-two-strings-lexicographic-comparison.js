/*
Lexicographic comparison is how strings (or sequences of characters) are compared based on dictionary order — i.e., 
the same way words are ordered in a dictionary.

So when strings like "apple" and "banana" are compared lexicographically,
the characters of both strings are compared one by one, using their Unicode (ASCII) values to decide which comes first.
*/

const str1 = "apple";
console.log(`First String = ${str1}`);

const str2 = "banana";
console.log(`Second String = ${str2}`);

const result = str1 < str2;

if(result) {
    console.log(`${str1} < ${str2}`);
} else {
    console.log(`${str1} >= ${str2}`);
}
