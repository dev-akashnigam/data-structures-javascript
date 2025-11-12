const ch = 'R';
console.log(`Original Character = ${ch}`);

if(/[A-Z]/.test(ch)) {
    console.log(`Character: ${ch} is an uppercase character.`);
} else if(/[a-z]/.test(ch)) {
    console.log(`Character: ${ch} is a lowercase character.`);
} else {
    console.log(`Case of Character: ${ch} could not be determined.`);
}
